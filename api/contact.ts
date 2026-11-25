/**
 * POST /api/contact — Vercel Function that emails contact-form enquiries to Tenzor Edge.
 *
 * Email is sent through Resend (https://resend.com, free tier: 3,000 emails/month, 100/day).
 * Environment variables (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY      required in production
 *   CONTACT_TO_EMAIL    optional, default support@tenzoredge.com
 *   CONTACT_FROM_EMAIL  optional, default "Tenzor Edge Website <website@tenzoredge.com>"
 *                       (the domain must be verified in Resend)
 *
 * Nothing is stored here: the enquiry exists only in the email that is sent.
 * Locally, without RESEND_API_KEY, the email is printed to the terminal instead of sent.
 */
import { validateContact, type ContactPayload } from '../src/lib/contactSchema.js';

const TO = process.env.CONTACT_TO_EMAIL || 'support@tenzoredge.com';
const FROM = process.env.CONTACT_FROM_EMAIL || 'Tenzor Edge Website <website@tenzoredge.com>';
const MAX_BODY_BYTES = 20_000;
const MIN_FILL_MS = 3_000;

/* ---------- abuse protection ---------- */

const ALLOWED_ORIGINS = new Set(['https://tenzoredge.com', 'https://www.tenzoredge.com']);

function originAllowed(origin: string | null): boolean {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.has(origin)) return true;
  // Vercel preview deployments of this project, and local development.
  if (process.env.VERCEL_URL && origin === `https://${process.env.VERCEL_URL}`) return true;
  if (process.env.VERCEL_BRANCH_URL && origin === `https://${process.env.VERCEL_BRANCH_URL}`) return true;
  if (process.env.VERCEL_ENV !== 'production' && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) return true;
  return false;
}

// Best-effort per-IP limit. Instances are reused between requests, so this stops casual floods;
// it is not a guarantee across instances.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
}

/* ---------- helpers ---------- */

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const str = (v: unknown, max = 5000) => (typeof v === 'string' ? v.slice(0, max) : '');
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function parse(raw: Record<string, unknown>): ContactPayload {
  return {
    name: oneLine(str(raw.name, 100)),
    email: oneLine(str(raw.email, 254)),
    company: oneLine(str(raw.company, 150)),
    phone: oneLine(str(raw.phone, 40)),
    service: str(raw.service, 100),
    preferred_contact: str(raw.preferred_contact, 40),
    message: str(raw.message, 5000).trim(),
    consent_enquiry: raw.consent_enquiry === true,
    consent_updates: raw.consent_updates === true,
    consent_notice_version: oneLine(str(raw.consent_notice_version, 40)),
    consent_given_at: oneLine(str(raw.consent_given_at, 40)),
    website: str(raw.website, 200),
    elapsed_ms: typeof raw.elapsed_ms === 'number' ? raw.elapsed_ms : 0,
  };
}

function buildEmail(p: ContactPayload, receivedAt: string) {
  const rows: [string, string][] = [
    ['Name', p.name],
    ['Email', p.email],
    ['Company', p.company],
    ['Phone', p.phone || '—'],
    ['Service', p.service],
    ['Preferred contact', p.preferred_contact],
  ];
  const consent: [string, string][] = [
    ['Enquiry consent', `Yes — notice version ${p.consent_notice_version || 'unknown'}, ticked ${p.consent_given_at || 'unknown'}`],
    ['Marketing emails', p.consent_updates ? 'Yes, opted in' : 'No — do not add to any mailing list'],
    ['Received', receivedAt],
  ];

  const subject = `Website enquiry: ${p.service} — ${p.name} (${p.company})`.slice(0, 200);

  const table = (r: [string, string][]) =>
    r
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 14px 6px 0;color:#5B6472;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;color:#0B0D12">${esc(v)}</td></tr>`
      )
      .join('');

  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;font-size:14px;line-height:1.5;max-width:640px">
  <h2 style="margin:0 0 12px;font-size:18px;color:#0B0D12">New enquiry from tenzoredge.com</h2>
  <table style="border-collapse:collapse">${table(rows)}</table>
  <h3 style="margin:20px 0 6px;font-size:14px;color:#0B0D12">Message</h3>
  <div style="white-space:pre-wrap;padding:12px 14px;background:#F4F6F8;border-radius:8px;color:#0B0D12">${esc(p.message)}</div>
  <h3 style="margin:20px 0 6px;font-size:14px;color:#0B0D12">Consent record (DPDP Act)</h3>
  <table style="border-collapse:collapse;font-size:13px">${table(consent)}</table>
  <p style="margin-top:20px;font-size:12px;color:#5B6472">Reply to this email to answer ${esc(p.name)} directly.</p>
</div>`;

  const text = [
    'New enquiry from tenzoredge.com',
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Message:',
    p.message,
    '',
    'Consent record (DPDP Act):',
    ...consent.map(([k, v]) => `${k}: ${v}`),
  ].join('\n');

  return { subject, html, text };
}

/* ---------- handler ---------- */

export async function POST(request: Request): Promise<Response> {
  if (!originAllowed(request.headers.get('origin'))) return json(403, { ok: false, error: 'Forbidden' });

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return json(429, { ok: false, error: 'Too many enquiries from this connection. Please try again later or email support@tenzoredge.com.' });
  }

  const body = await request.text();
  if (body.length > MAX_BODY_BYTES) return json(413, { ok: false, error: 'Your message is too long.' });

  let raw: Record<string, unknown>;
  try {
    raw = JSON.parse(body);
  } catch {
    return json(400, { ok: false, error: 'Invalid request.' });
  }
  const p = parse(raw);

  // Bots: pretend success so they don't retry, but send nothing.
  if (p.website || p.elapsed_ms < MIN_FILL_MS) return json(200, { ok: true });

  const errors = validateContact(p);
  if (Object.keys(errors).length) return json(422, { ok: false, errors });

  const receivedAt = new Date().toISOString();
  const { subject, html, text } = buildEmail(p, receivedAt);
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    if (process.env.VERCEL_ENV) {
      console.error('[contact] RESEND_API_KEY is not set; enquiry could not be delivered.');
      return json(500, { ok: false, error: 'The form is temporarily unavailable. Please email support@tenzoredge.com.' });
    }
    console.log(`\n[contact] DEV — RESEND_API_KEY not set, email not sent.\nTo: ${TO}\nReply-To: ${p.email}\nSubject: ${subject}\n\n${text}\n`);
    return json(200, { ok: true, dev: true });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [TO], reply_to: p.email, subject, html, text }),
  });

  if (!res.ok) {
    // Log status only — never the enquiry content.
    console.error(`[contact] Resend error ${res.status}: ${(await res.text()).slice(0, 300)}`);
    return json(502, { ok: false, error: 'We could not send your enquiry just now. Please try again, or email support@tenzoredge.com.' });
  }

  return json(200, { ok: true });
}

export function GET(): Response {
  return json(405, { ok: false, error: 'Method not allowed' });
}
