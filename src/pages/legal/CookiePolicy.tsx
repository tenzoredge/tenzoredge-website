import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import PageHeader from '../../components/PageHeader';
import { openConsentPreferences } from '../../lib/consent';

const UPDATED = '24 November 2026';

/* Keep this list in step with src/lib/analytics.ts and src/lib/consent.ts. */
const items = [
  {
    name: 'tenzoredge_consent',
    type: 'Local storage',
    provider: 'Tenzor Edge',
    category: 'Strictly necessary',
    purpose: 'Remembers your privacy choice so we do not ask on every page',
    duration: '12 months',
  },
  {
    name: '_ga, _ga_<ID>',
    type: 'Cookie',
    provider: 'Google Analytics 4',
    category: 'Analytics (consent)',
    purpose: 'Distinguishes visits to count pages viewed and traffic sources',
    duration: 'Up to 2 years',
  },
  {
    name: '_clck, CLID, MUID',
    type: 'Cookie',
    provider: 'Microsoft Clarity',
    category: 'Analytics (consent)',
    purpose: 'Links page views in one visit for heatmaps and session replays',
    duration: 'Up to 1 year',
  },
  {
    name: '_clsk',
    type: 'Cookie',
    provider: 'Microsoft Clarity',
    category: 'Analytics (consent)',
    purpose: 'Groups page views into a single session',
    duration: '1 day',
  },
];

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mb-4 mt-12 font-heading text-2xl font-semibold text-brand-night first:mt-0">{children}</h2>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 leading-relaxed text-brand-slate">{children}</p>;
}

export default function CookiePolicy() {
  return (
    <>
      <SEO title="Cookie Policy | Tenzor Edge" description={"The cookies and browser storage the Tenzor Edge website uses, why, for how long, and how to change your choice."} canonicalPath="/legal/cookie-policy" />

      <PageHeader
        title="Cookie Policy"
        subtitle="Exactly what this website stores in your browser, why, and how to change your choice."
        breadcrumbs={[{ label: 'Cookie Policy' }]}
        compact
      />

      <article className="container-site max-w-4xl py-16 md:py-20">
        <p className="mb-10 text-sm text-brand-slate">
          <strong className="text-brand-night">Last updated:</strong> {UPDATED}
        </p>

        <H2>1. Our approach</H2>
        <P>
          Only strictly necessary storage is used by default. Analytics cookies are set only after you switch analytics on,
          and never for advertising. You can change your choice at any time:
        </P>
        <button
          type="button"
          onClick={openConsentPreferences}
          className="mb-4 rounded-lg bg-brand-night px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-edge-red"
        >
          Open cookie preferences
        </button>

        <H2>2. What we store</H2>
        <div className="overflow-x-auto rounded-xl border border-brand-night/10">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-brand-mist text-brand-night">
              <tr>
                <th className="p-3 font-semibold">Name</th>
                <th className="p-3 font-semibold">Provider</th>
                <th className="p-3 font-semibold">Category</th>
                <th className="p-3 font-semibold">Purpose</th>
                <th className="p-3 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-night/10 text-brand-slate">
              {items.map((i) => (
                <tr key={i.name} className="align-top">
                  <td className="p-3">
                    <span className="font-mono text-[13px] text-brand-night">{i.name}</span>
                    <span className="block text-xs">{i.type}</span>
                  </td>
                  <td className="p-3">{i.provider}</td>
                  <td className="p-3">{i.category}</td>
                  <td className="p-3">{i.purpose}</td>
                  <td className="p-3">{i.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>3. Withdrawing consent</H2>
        <P>
          Switching analytics off in Cookie preferences stops Google Analytics and Microsoft Clarity and deletes their cookies
          from this site. You can also clear cookies in your browser settings at any time.
        </P>

        <H2>4. Contact</H2>
        <P>
          Questions about cookies or your personal data: support@tenzoredge.com. Full details of how we handle personal data
          are in our{' '}
          <Link to="/legal/privacy-policy" className="font-medium text-brand-edge-red hover:underline">
            Privacy Notice
          </Link>
          .
        </P>
      </article>
    </>
  );
}
