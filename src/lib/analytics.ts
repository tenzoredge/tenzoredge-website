/**
 * Consent-gated analytics.
 *
 * Nothing is loaded and nothing is sent unless BOTH:
 *   1. the visitor has opted in to "analytics" (see lib/consent.ts), and
 *   2. the tool's ID is configured in the environment.
 *
 * Tools:
 *   - Google Analytics 4  (VITE_GA_MEASUREMENT_ID, e.g. G-XXXXXXX): traffic, sources, conversions.
 *   - Microsoft Clarity   (VITE_CLARITY_PROJECT_ID): heatmaps and session replays (inputs are masked).
 *
 * Never pass personal data (names, emails, phone numbers, message text) to track().
 */
import { hasConsent } from './consent';

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined;

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    clarity?: (...args: unknown[]) => void;
  }
}

let gaLoaded = false;
let clarityLoaded = false;

function loadScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function startGoogleAnalytics(id: string) {
  if (gaLoaded) return;
  gaLoaded = true;
  window.dataLayer = window.dataLayer || [];
  // gtag must push the `arguments` object itself, as Google's snippet does.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  // Consent Mode v2: advertising is never enabled; analytics only because the visitor opted in.
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
  });
  window.gtag('js', new Date());
  // Page views are sent manually on each route change (single-page app).
  window.gtag('config', id, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`);
}

function startClarity(id: string) {
  if (clarityLoaded) return;
  clarityLoaded = true;
  const w = window as Window & { clarity: { (...a: unknown[]): void; q?: unknown[][] } };
  w.clarity =
    w.clarity ||
    function (...args: unknown[]) {
      (w.clarity.q = w.clarity.q || []).push(args);
    };
  loadScript(`https://www.clarity.ms/tag/${encodeURIComponent(id)}`);
  w.clarity('consent');
}

/** Start the tools the visitor has agreed to. Safe to call repeatedly. */
export function applyConsent() {
  if (!hasConsent('analytics')) return;
  if (GA_ID) startGoogleAnalytics(GA_ID);
  if (CLARITY_ID) startClarity(CLARITY_ID);
}

/** Called when the visitor withdraws analytics consent. */
export function revokeAnalytics() {
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  window.clarity?.('consent', false);
  // Remove first-party cookies set by GA and Clarity on this domain and its parent.
  const host = location.hostname;
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (!/^(_ga|_gid|_gat|_clck|_clsk|CLID|MUID)/.test(name)) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}`;
    });
  });
}

export function trackPageView(path: string, title: string) {
  if (!hasConsent('analytics') || !gaLoaded || !window.gtag) return;
  window.gtag('event', 'page_view', { page_path: path, page_title: title, page_location: location.origin + path });
}

/** Send a named event. Parameters must never contain personal data. */
export function track(event: string, params: Record<string, string | number | boolean> = {}) {
  if (!hasConsent('analytics')) return;
  window.gtag?.('event', event, params);
  if (clarityLoaded) window.clarity?.('event', event);
}

export const analyticsConfigured = Boolean(GA_ID || CLARITY_ID);
