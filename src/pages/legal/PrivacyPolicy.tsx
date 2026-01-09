import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Tenzor Edge</title>
        <meta name="description" content="Privacy Policy for Tenzor Edge - Learn how we collect, use, and protect your personal information in compliance with DPDP Act 2023." />
        <link rel="canonical" href="https://tenzor.vercel.app/legal/privacy-policy" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 10, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Tenzor Edge ("we," "our," or "us") is committed to protecting your privacy and complying with the Digital Personal Data Protection Act, 2023 (DPDP Act) of India. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Business information (company name, industry, role)</li>
              <li>Usage data (IP address, browser type, pages visited, time spent on site)</li>
              <li>Communication data (messages sent through our contact forms)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Purpose of Data Collection</h2>
            <p className="text-gray-700 mb-4">We collect and process your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>To respond to your inquiries and provide consulting services</li>
              <li>To communicate with you about our services and updates</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Consent Mechanism</h2>
            <p className="text-gray-700 mb-4">
              By using our website and submitting information through our contact forms, you consent to the collection and processing of your personal information as described in this Privacy Policy. You may withdraw your consent at any time by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Contact information from inquiries is typically retained for 3 years for business continuity purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Payment Processors</h2>
            <p className="text-gray-700 mb-4">
              For future payment processing, we may use third-party payment gateways such as Razorpay and PhonePe. These processors have their own privacy policies and are responsible for securing payment information. We do not store sensitive payment data on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights Under DPDP Act</h2>
            <p className="text-gray-700 mb-4">Under the DPDP Act, you have the following rights:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Right to access your personal information</li>
              <li>Right to correction of inaccurate data</li>
              <li>Right to erasure of your personal information</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Users may request access, correction, or deletion of personal data by emailing support@tenzoredge.com with subject 'DPDP Request'.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Grievance Officer</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Title:</strong> Grievance Officer / Compliance Officer</p>
              <p className="text-gray-700 mb-2"><strong>Email:</strong> support@tenzoredge.com</p>
              <p className="text-gray-700"><strong>Response Timeline:</strong> We will respond to your grievance within 7 business days.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at support@tenzoredge.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}