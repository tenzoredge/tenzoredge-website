import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';

export default function SubscriptionPolicy() {
  return (
    <>
      <Helmet>
        <title>Subscription Policy | Tenzor Edge</title>
        <meta name="description" content="Subscription Policy for Tenzor Edge - Learn about our subscription services and billing policies." />
        <link rel="canonical" href="https://tenzoredge.com/legal/subscription-policy" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Subscription Policy"
          subtitle="Terms for our subscription-based services"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 10, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Subscription Services</h2>
            <p className="text-gray-700 mb-4">
              Tenzor Edge offers subscription-based consulting services designed to provide ongoing support and strategic guidance for businesses. These services are available on monthly or yearly billing cycles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Billing Cycles</h2>
            <p className="text-gray-700 mb-4">
              Subscriptions are available in monthly or yearly billing cycles. Monthly subscriptions are billed on the same date each month, while yearly subscriptions are billed annually on the subscription start date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Auto-Renewal</h2>
            <p className="text-gray-700 mb-4">
              Subscriptions automatically renew at the end of each billing cycle unless cancelled. By subscribing to our services, you explicitly opt-in to auto-renewal. You will receive a renewal notice via email before each billing cycle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation Policy</h2>
            <p className="text-gray-700 mb-4">
              You may cancel your subscription at any time. Cancellations must be submitted in writing via email to support@tenzoredge.com. Cancellations will take effect at the end of the current billing cycle, and you will continue to have access to services until that time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Policy</h2>
            <p className="text-gray-700 mb-4">
              No refunds will be provided for partial billing periods. If you cancel mid-cycle, you will retain access to services until the end of the paid period. Refunds for the first billing cycle may be considered on a case-by-case basis within 30 days of subscription start.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Renewal Notices</h2>
            <p className="text-gray-700 mb-4">
              We will send renewal notices via email at least 7 days before each billing cycle. These notices will include the renewal date, amount, and instructions for cancellation if desired.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Methods</h2>
            <p className="text-gray-700 mb-4">
              Subscriptions are paid through secure payment gateways. We accept major credit cards and digital payment methods. Payment information is processed securely and is not stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700">
              For subscription-related inquiries, cancellations, or changes, please contact us at support@tenzoredge.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}