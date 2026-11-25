import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applyConsent, revokeAnalytics, track, trackPageView } from '../lib/analytics';
import { hasConsent, onConsentChange } from '../lib/consent';

/**
 * Wires analytics to the router and to consent changes. Renders nothing.
 * All tracking is a no-op until the visitor opts in (see lib/consent.ts).
 */
export default function AnalyticsTracker() {
  const location = useLocation();

  // Start tools on load (returning visitor who already opted in) and whenever consent changes.
  useEffect(() => {
    applyConsent();
    let wasGranted = hasConsent('analytics');
    return onConsentChange((record) => {
      const granted = record?.choices.analytics === true;
      if (granted) {
        applyConsent();
        trackPageView(window.location.pathname, document.title);
      } else if (wasGranted) {
        revokeAnalytics();
        // Reload so already-loaded third-party scripts are fully removed from the page.
        window.location.reload();
      }
      wasGranted = granted;
    });
  }, []);

  // Page view on every route change. Waits a tick so react-helmet has set the new title.
  useEffect(() => {
    const t = window.setTimeout(() => trackPageView(location.pathname, document.title), 50);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  // Conversion-intent clicks, captured once for the whole site.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const label = (a.textContent || '').trim().slice(0, 60);
      const from = window.location.pathname;
      if (href === '/contact') track('cta_click', { cta_label: label, cta_page: from });
      else if (href.startsWith('mailto:')) track('email_click', { cta_page: from });
      else if (href.startsWith('tel:')) track('phone_click', { cta_page: from });
      else if (href.includes('linkedin.com')) track('linkedin_click', { cta_page: from });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
