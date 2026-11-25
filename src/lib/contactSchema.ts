/**
 * Contact form fields and rules, shared by the form (src/pages/Contact.tsx) and the
 * email function (api/contact.ts) so both validate the same way. No dependencies.
 */
export const CONTACT_SERVICES = [
  'Technology Consulting & Solution Architecture',
  'Infrastructure & Cloud Engineering',
  'Business Solutions & Digital Transformation',
  'AI-Enabled Software Engineering',
  'Product & Technology Leadership',
  'General Technology Inquiry',
] as const;

export const CONTACT_METHODS = ['Email', 'Phone', 'Video Meeting'] as const;

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  preferred_contact: string;
  message: string;
  consent_enquiry: boolean;
  consent_updates: boolean;
  consent_notice_version: string;
  consent_given_at: string;
  /** Spam honeypot: must stay empty. */
  website: string;
  /** Milliseconds between the form appearing and being submitted (bots are instant). */
  elapsed_ms: number;
}

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9+()\-.\s]{6,25}$/;

/** Returns field errors; an empty object means the payload is valid. */
export function validateContact(p: ContactPayload): ContactErrors {
  const e: ContactErrors = {};
  const len = (s: string) => s.trim().length;
  if (len(p.name) < 2 || len(p.name) > 100) e.name = 'Please enter your name.';
  if (!EMAIL_RE.test(p.email.trim()) || p.email.length > 254) e.email = 'Please enter a valid email address.';
  if (len(p.company) < 1 || len(p.company) > 150) e.company = 'Please enter your company or venture name.';
  if (p.phone.trim() && !PHONE_RE.test(p.phone.trim())) e.phone = 'Please enter a valid phone number, or leave it blank.';
  if (!(CONTACT_SERVICES as readonly string[]).includes(p.service)) e.service = 'Please choose a service.';
  if (!(CONTACT_METHODS as readonly string[]).includes(p.preferred_contact)) e.preferred_contact = 'Please choose a contact method.';
  if (len(p.message) < 10) e.message = 'Please tell us a little more (at least 10 characters).';
  if (p.message.length > 5000) e.message = 'Please keep your message under 5,000 characters.';
  if (p.consent_enquiry !== true) e.consent_enquiry = 'Please agree so we can reply to your enquiry.';
  return e;
}
