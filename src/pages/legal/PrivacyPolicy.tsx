import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import PageHeader from '../../components/PageHeader';
import { openConsentPreferences } from '../../lib/consent';

/*
 * Privacy notice under the Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025.
 * Keep this in step with what the site actually does: if a new tool or form is added,
 * update sections 2–4, bump NOTICE_VERSION (and CONSENT_VERSION if a new optional purpose
 * is added) in src/lib/consent.ts, and update the date below.
 */

const UPDATED = '24 November 2026';

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mb-4 mt-12 font-heading text-2xl font-semibold text-brand-night first:mt-0">{children}</h2>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 leading-relaxed text-brand-slate">{children}</p>;
}

const dataUses = [
  {
    when: 'You send an enquiry through the contact form',
    data: 'Name, email, company, phone (optional), service of interest, preferred contact method, message, and the time and version of the notice you agreed to',
    why: 'To review and reply to your enquiry',
    basis: 'Your consent (required tick box on the form)',
  },
  {
    when: 'You tick “send me occasional emails”',
    data: 'Name and email',
    why: 'Occasional emails about our services and insights',
    basis: 'Your separate, optional consent',
  },
  {
    when: 'You allow analytics in Cookie preferences',
    data: 'Pages viewed, referring site, device and browser type, approximate location (city/country), clicks and scrolling. Form fields are masked and never recorded',
    why: 'To understand which pages are useful and improve the website',
    basis: 'Your consent. Off by default',
  },
  {
    when: 'You email us directly',
    data: 'Whatever you include in your email',
    why: 'To reply and to manage any engagement that follows',
    basis: 'Your consent, given by contacting us',
  },
  {
    when: 'Any visit',
    data: 'Your privacy choice (stored in your own browser), and technical request data such as IP address and browser, processed by our hosting provider',
    why: 'To remember your choice and deliver the site securely',
    basis: 'Necessary to provide the website you requested',
  },
];

const processors = [
  { name: 'Vercel Inc.', role: 'Website hosting and delivery, and the server function that turns a contact-form submission into an email (the website itself does not store submissions)', where: 'Global network' },
  { name: 'Resend (Plus Five Five, Inc.)', role: 'Delivers contact-form submissions to our inbox by email', where: 'United States' },
  { name: 'Google LLC (Google Analytics 4)', role: 'Website analytics, only with your consent', where: 'United States / global' },
  { name: 'Microsoft Corporation (Clarity)', role: 'Heatmaps and anonymised session replays, only with your consent', where: 'United States / global' },
  { name: 'Our email provider', role: 'Receiving and replying to enquiries', where: 'May be outside India' },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Notice | Tenzor Edge" description={"How Tenzor Edge collects, uses and protects personal data, and your rights under India's Digital Personal Data Protection Act, 2023."} canonicalPath="/legal/privacy-policy" />

      <PageHeader
        title="Privacy Notice"
        subtitle="What personal data we collect, why, who processes it, and your rights under the Digital Personal Data Protection Act, 2023."
        breadcrumbs={[{ label: 'Privacy Notice' }]}
        compact
      />

      <article className="container-site max-w-4xl py-16 md:py-20">
        <p className="mb-10 text-sm text-brand-slate">
          <strong className="text-brand-night">Last updated:</strong> {UPDATED}
        </p>

        <H2>1. Who we are</H2>
        <P>
          Tenzor Edge (“we”, “us”) is a technology consulting and engineering company based in Bengaluru, Karnataka, India.
          For the personal data described here we are the <em>Data Fiduciary</em> under the Digital Personal Data Protection
          Act, 2023 (“DPDP Act”). You can reach us about anything in this notice at{' '}
          <a href="mailto:support@tenzoredge.com" className="font-medium text-brand-edge-red hover:underline">
            support@tenzoredge.com
          </a>
          .
        </P>

        <H2>2. What we collect and why</H2>
        <P>We collect only what each purpose needs. We do not sell personal data or use it for advertising.</P>
        <div className="overflow-x-auto rounded-xl border border-brand-night/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-brand-mist text-brand-night">
              <tr>
                <th className="p-3 font-semibold">When</th>
                <th className="p-3 font-semibold">Personal data</th>
                <th className="p-3 font-semibold">Purpose</th>
                <th className="p-3 font-semibold">Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-night/10 text-brand-slate">
              {dataUses.map((d) => (
                <tr key={d.when} className="align-top">
                  <td className="p-3 font-medium text-brand-night">{d.when}</td>
                  <td className="p-3">{d.data}</td>
                  <td className="p-3">{d.why}</td>
                  <td className="p-3">{d.basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>3. Who processes it for us</H2>
        <P>
          These service providers (<em>Data Processors</em>) process personal data only on our instructions and for the
          purposes above. Some are located outside India; such transfers are made as permitted under the DPDP Act and any
          restrictions notified by the Government of India.
        </P>
        <ul className="mb-4 space-y-2 text-brand-slate">
          {processors.map((p) => (
            <li key={p.name} className="rounded-lg border border-brand-night/10 p-3">
              <span className="font-medium text-brand-night">{p.name}</span> — {p.role}. <span className="text-sm">Location: {p.where}.</span>
            </li>
          ))}
        </ul>

        <H2>4. How long we keep it</H2>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-brand-slate">
          <li>
            <strong className="text-brand-night">Enquiries:</strong> for as long as needed to respond and, if we work
            together, for the engagement; then up to 3 years from our last contact for business records, unless the law
            requires longer. You can ask us to erase an enquiry sooner.
          </li>
          <li>
            <strong className="text-brand-night">Optional email updates:</strong> until you unsubscribe or withdraw consent.
          </li>
          <li>
            <strong className="text-brand-night">Analytics:</strong> Google Analytics data for up to 14 months; Clarity
            recordings for up to 30 days and aggregated heatmaps for up to 13 months.
          </li>
          <li>
            <strong className="text-brand-night">Your privacy choice:</strong> 12 months in your browser, after which we ask
            again.
          </li>
          <li>
            Where the DPDP Rules require us to keep processing logs for a minimum period, we keep those logs for that period
            only.
          </li>
        </ul>

        <H2>5. Consent and how to withdraw it</H2>
        <P>
          Optional purposes are off until you switch them on. You can withdraw consent as easily as you gave it:
        </P>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-brand-slate">
          <li>
            Analytics: open{' '}
            <button type="button" onClick={openConsentPreferences} className="font-medium text-brand-edge-red hover:underline">
              Cookie preferences
            </button>{' '}
            (also linked in every page footer) and switch it off.
          </li>
          <li>Email updates: use the unsubscribe link in any email, or email us.</li>
          <li>
            An enquiry: email{' '}
            <a href="mailto:support@tenzoredge.com?subject=DPDP%20Request" className="font-medium text-brand-edge-red hover:underline">
              support@tenzoredge.com
            </a>{' '}
            with the subject “DPDP Request”.
          </li>
        </ul>
        <P>Withdrawal does not affect processing that took place before it. Once withdrawn, we stop and erase the data unless the law requires us to keep it.</P>

        <H2>6. Your rights</H2>
        <P>Under the DPDP Act you have the right to:</P>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-brand-slate">
          <li>obtain a summary of the personal data we hold about you, how we process it, and who we have shared it with;</li>
          <li>have your personal data corrected, completed, updated or erased;</li>
          <li>have your grievances addressed by us;</li>
          <li>nominate another person to exercise your rights if you die or become incapable.</li>
        </ul>
        <P>
          To exercise any right, email{' '}
          <a href="mailto:support@tenzoredge.com?subject=DPDP%20Request" className="font-medium text-brand-edge-red hover:underline">
            support@tenzoredge.com
          </a>{' '}
          with the subject “DPDP Request”. We may need to verify your identity before acting on a request.
        </P>

        <H2>7. Grievances and complaints</H2>
        <div className="mb-4 rounded-xl bg-brand-mist p-6 text-brand-slate">
          <p className="mb-2">
            <strong className="text-brand-night">Grievance Officer:</strong> Founder &amp; Principal Solution Architect, Tenzor Edge
          </p>
          <p className="mb-2">
            <strong className="text-brand-night">Email:</strong> support@tenzoredge.com (subject “DPDP Grievance”)
          </p>
          <p className="mb-2">
            <strong className="text-brand-night">Address:</strong> Bengaluru, Karnataka, India
          </p>
          <p>
            <strong className="text-brand-night">Response:</strong> we acknowledge grievances within 7 business days and
            resolve them within the period prescribed under the DPDP Rules.
          </p>
        </div>
        <P>
          If you are not satisfied with our response, you may complain to the Data Protection Board of India.
        </P>

        <H2>8. Security and breaches</H2>
        <P>
          We use reasonable security safeguards, including encrypted connections (HTTPS), access controls and reputable
          processors. If a personal data breach affects you, we will inform you and the Data Protection Board of India as
          required by the DPDP Act and Rules.
        </P>

        <H2>9. Children</H2>
        <P>
          This website and our services are intended for businesses and adults. We do not knowingly collect personal data
          from anyone under 18. If you believe a child has sent us personal data, contact us and we will erase it.
        </P>

        <H2>10. Payments</H2>
        <P>
          If we accept online payments in future, they will be handled by payment gateways such as Razorpay or PhonePe under
          their own privacy policies. We do not store card or bank details.
        </P>

        <H2>11. Language</H2>
        <P>
          This notice is in English. If you would like it in another language listed in the Eighth Schedule to the
          Constitution of India, email us and we will provide it.
        </P>

        <H2>12. Changes to this notice</H2>
        <P>
          We will update this notice when our processing changes, and change the date above. If a change affects an
          optional purpose you agreed to, we will ask for your consent again. See also our{' '}
          <Link to="/legal/cookie-policy" className="font-medium text-brand-edge-red hover:underline">
            Cookie Policy
          </Link>
          .
        </P>
      </article>
    </>
  );
}
