import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

export default function RefundCancellation() {
  return (
    <>
      <SEO title="Refund & Cancellation Policy | Tenzor Edge" description={"Refund & Cancellation Policy for Tenzor Edge - Learn about our refund and cancellation procedures."} canonicalPath="/legal/refund-cancellation" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Refund & Cancellation Policy"
          subtitle="Our refund and cancellation procedures"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 10, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Consulting Services</h2>
            <p className="text-gray-700 mb-4">
              Our consulting services are customized and delivered based on specific client requirements. Once a consulting engagement has been delivered or commenced, services are considered non-refundable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Refund Requests</h2>
            <p className="text-gray-700 mb-4">
              Refund requests must be submitted in writing via email to support@tenzoredge.com. All refund requests will be reviewed on a case-by-case basis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Processing Timeline</h2>
            <p className="text-gray-700 mb-4">
              Approved refunds will be processed within 5-7 business days from the date of approval. You will receive a confirmation email once the refund has been initiated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Method</h2>
            <p className="text-gray-700 mb-4">
              Refunds will be issued using the original payment method only. We do not offer cash refunds or refunds to alternative payment methods.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation Policy</h2>
            <p className="text-gray-700 mb-4">
              Clients may cancel consulting engagements up to 48 hours before the scheduled delivery date. Cancellations must be communicated in writing via email to support@tenzoredge.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Subscription Services</h2>
            <p className="text-gray-700 mb-4">
              For subscription-based services (when available), cancellations will take effect at the end of the current billing cycle. No refunds will be provided for partial billing periods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
            <p className="text-gray-700">
              For refund or cancellation requests, please contact us at support@tenzoredge.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}