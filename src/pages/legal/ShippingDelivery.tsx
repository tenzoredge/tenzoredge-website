import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

export default function ShippingDelivery() {
  return (
    <>
      <SEO title="Shipping & Delivery Policy | Tenzor Edge" description={"Shipping & Delivery Policy for Tenzor Edge - Learn about how our digital services are delivered."} canonicalPath="/legal/shipping-delivery" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Shipping & Delivery Policy"
          subtitle="How our services are delivered to you"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 10, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Digital Delivery</h2>
            <p className="text-gray-700 mb-4">
              Tenzor Edge provides consulting and professional services that are delivered digitally. All deliverables are provided electronically unless otherwise agreed upon with the client.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Delivery Methods</h2>
            <p className="text-gray-700 mb-4">Our services are delivered through:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Email communications</li>
              <li>Scheduled video calls and meetings</li>
              <li>Secure file sharing platforms</li>
              <li>Access to online collaboration tools</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Delivery Timelines</h2>
            <p className="text-gray-700 mb-4">
              Delivery timelines are communicated individually for each project or service engagement. Timelines depend on the scope of work, client requirements, and project complexity. We strive to meet agreed-upon deadlines and will communicate any delays promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Access Instructions</h2>
            <p className="text-gray-700 mb-4">
              Upon completion of services, clients will receive access instructions via email. This may include login credentials for collaboration platforms, download links for deliverables, or scheduling information for follow-up sessions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Delivery Confirmation</h2>
            <p className="text-gray-700 mb-4">
              Clients will receive a delivery confirmation email once all deliverables have been provided. This email serves as proof of delivery and marks the completion of the service engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Support for Delivery Issues</h2>
            <p className="text-gray-700">
              If you experience any issues accessing delivered services or have questions about delivery, please contact our support team at support@tenzoredge.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}