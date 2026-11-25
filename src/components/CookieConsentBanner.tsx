import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';
import {
  ConsentRecord,
  getConsent,
  onConsentChange,
  onOpenPreferences,
  saveConsent,
} from '../lib/consent';

/**
 * Consent notice + preferences (DPDP Act 2023).
 * - Nothing optional runs before a choice is made.
 * - "Reject" and "Accept" are equally prominent; no pre-ticked boxes.
 * - Preferences can be reopened from the footer at any time to withdraw consent.
 */
export default function CookieConsentBanner() {
  // Read the stored choice after mount: pages are pre-rendered without browser storage,
  // so the first render must match that HTML (no banner) before we know the visitor's choice.
  const [ready, setReady] = useState(false);
  const [record, setRecord] = useState<ConsentRecord | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setRecord(getConsent());
    setReady(true);
    return onConsentChange(setRecord);
  }, []);
  useEffect(() => onOpenPreferences(() => setDialogOpen(true)), []);

  const decide = (analytics: boolean, method: ConsentRecord['method']) => {
    saveConsent({ analytics }, method);
    setDialogOpen(false);
  };

  return (
    <>
      {ready && !record && !dialogOpen && (
        <section
          role="region"
          aria-label="Privacy choices"
          className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5"
        >
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-brand-ink/[0.98] p-5 text-white shadow-2xl backdrop-blur-md sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
              <div className="flex flex-1 gap-4">
                <ShieldCheck size={22} className="mt-0.5 hidden shrink-0 text-brand-edge-red sm:block" aria-hidden />
                <div>
                  <h2 className="font-heading text-base font-semibold text-white">Your privacy choices</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-silver">
                    We only use what this site needs to work. With your permission, we’d also use analytics to see which
                    pages are useful and improve them. It stays off unless you turn it on, and you can change your mind
                    any time from <span className="text-white">Cookie preferences</span> in the footer.{' '}
                    <Link to="/legal/privacy-policy" className="font-medium text-white underline underline-offset-2 hover:text-brand-edge-red">
                      Privacy notice
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setDialogOpen(true)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-brand-silver underline-offset-2 hover:text-white hover:underline"
                >
                  Manage preferences
                </button>
                <button
                  type="button"
                  onClick={() => decide(false, 'reject_all')}
                  className="rounded-lg border border-white/25 bg-white px-5 py-2.5 text-sm font-semibold text-brand-night transition-colors hover:bg-brand-mist"
                >
                  Reject non-essential
                </button>
                <button
                  type="button"
                  onClick={() => decide(true, 'accept_all')}
                  className="rounded-lg border border-brand-edge-red bg-brand-edge-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-neon-red"
                >
                  Accept analytics
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {dialogOpen && (
        <PreferencesDialog
          record={record}
          onSave={(analytics) => decide(analytics, 'custom')}
          onRejectAll={() => decide(false, 'reject_all')}
          onAcceptAll={() => decide(true, 'accept_all')}
          onClose={() => setDialogOpen(false)}
        />
      )}
    </>
  );
}

function PreferencesDialog({
  record,
  onSave,
  onRejectAll,
  onAcceptAll,
  onClose,
}: {
  record: ConsentRecord | null;
  onSave: (analytics: boolean) => void;
  onRejectAll: () => void;
  onAcceptAll: () => void;
  onClose: () => void;
}) {
  const [analytics, setAnalytics] = useState(record?.choices.analytics ?? false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  // Focus the dialog, trap Tab inside it, close on Escape, lock page scroll.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    panelRef.current?.querySelector<HTMLElement>('button, [href], input')?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeRef.current();
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>('button, [href], input');
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus?.();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-brand-night/70 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-title"
        className="flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-t-2xl bg-white text-brand-night shadow-2xl sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-brand-night/10 px-6 py-5">
          <div>
            <h2 id="consent-title" className="font-heading text-xl font-semibold">
              Cookie preferences
            </h2>
            <p className="mt-1 text-sm text-brand-slate">Choose what this website may use. You can change this at any time.</p>
          </div>
          <button type="button" onClick={onClose} className="-mr-2 rounded-lg p-2 text-brand-slate hover:bg-brand-mist hover:text-brand-night" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto px-6 py-5">
          <Purpose
            title="Strictly necessary"
            status={<span className="rounded-full bg-brand-mist px-2.5 py-1 text-xs font-semibold text-brand-slate">Always on</span>}
          >
            Remembers your privacy choice and keeps the site working securely. Stored only in your browser. No personal data
            is shared.
          </Purpose>

          <Purpose
            title="Analytics"
            status={
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  aria-describedby="analytics-desc"
                />
                <span className="sr-only">Allow analytics</span>
                <span
                  className="h-6 w-11 rounded-full bg-brand-slate/30 transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:bg-brand-edge-red peer-checked:after:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-edge-red peer-focus-visible:ring-offset-2"
                  aria-hidden
                />
              </label>
            }
          >
            <span id="analytics-desc">
              Helps us understand which pages are useful so we can improve them. <strong>Google Analytics</strong> records pages
              visited, how you arrived, device and approximate location. <strong>Microsoft Clarity</strong> records clicks and
              scrolling as anonymised heatmaps and replays, with form fields masked. Never used for advertising and never sold.
            </span>
          </Purpose>

          <p className="text-xs leading-relaxed text-brand-slate">
            Details, retention periods and your rights under the Digital Personal Data Protection Act, 2023 are in our{' '}
            <Link to="/legal/privacy-policy" onClick={onClose} className="font-medium text-brand-night underline">
              Privacy notice
            </Link>{' '}
            and{' '}
            <Link to="/legal/cookie-policy" onClick={onClose} className="font-medium text-brand-night underline">
              Cookie policy
            </Link>
            .
            {record && (
              <>
                {' '}
                Consent ID <span className="font-mono">{record.id.slice(0, 8)}</span>, last updated{' '}
                {new Date(record.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}.
              </>
            )}
          </p>
        </div>

        <div className="flex flex-col-reverse gap-2.5 border-t border-brand-night/10 bg-brand-mist/50 px-6 py-4 sm:flex-row sm:justify-between">
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={onRejectAll}
              className="flex-1 rounded-lg border border-brand-night/20 bg-white px-4 py-2.5 text-sm font-semibold hover:border-brand-night/40 sm:flex-none"
            >
              Reject all
            </button>
            <button
              type="button"
              onClick={onAcceptAll}
              className="flex-1 rounded-lg border border-brand-night/20 bg-white px-4 py-2.5 text-sm font-semibold hover:border-brand-night/40 sm:flex-none"
            >
              Accept all
            </button>
          </div>
          <button
            type="button"
            onClick={() => onSave(analytics)}
            className="rounded-lg bg-brand-night px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-edge-red"
          >
            Save my choices
          </button>
        </div>
      </div>
    </div>
  );
}

function Purpose({ title, status, children }: { title: string; status: ReactNode; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-brand-night/10 p-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-heading text-base font-semibold">{title}</h3>
        {status}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-brand-slate">{children}</p>
    </div>
  );
}
