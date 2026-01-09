import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';

export default function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Tenzor Edge</title>
        <meta name="description" content="Cookie Policy for Tenzor Edge - Learn how we use cookies and similar technologies on our website." />
        <link rel="canonical" href="https://tenzor.vercel.app/legal/cookie-policy" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Cookie Policy"
          subtitle="How we use cookies on our website"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 10, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow certain features to work properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly, such as maintaining your session and security features.</li>
              <li><strong>Functional Cookies:</strong> Help us remember your preferences and settings.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (only if you consent).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookie Consent</h2>
            <p className="text-gray-700 mb-4">
              When you first visit our website, we will ask for your consent to use non-essential cookies. You can accept or reject cookies through our cookie consent banner. You can withdraw your consent at any time by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Cookies</h2>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, disabling essential cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              We may use third-party services that set their own cookies. These include analytics services and payment processors. We do not control these third-party cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about our use of cookies, please contact us at support@tenzoredge.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}