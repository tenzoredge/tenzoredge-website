import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, Send, MessageSquare } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  const [state, handleSubmit] = useForm("mqezzzkq");

  const [consentChecked, setConsentChecked] = useState(false);

  if (state.succeeded) {
    return (
      <div>
        <PageHeader
          title="Message Sent!"
          subtitle="Thank you for reaching out"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 mb-6 rounded-full">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Thank You!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Your message has been sent successfully. We'll review your inquiry and get back to you within 24-48 hours.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Tenzor - Contact Us | Get In Touch</title>
        <meta name="description" content="Ready to transform your business operations? Contact Tenzor for a free consultation. We specialize in operational excellence, process optimization, and digital transformation." />
        <meta name="keywords" content="contact tenzor, business consulting, operational excellence, free consultation, digital transformation" />
        <link rel="canonical" href="https://tenzor.vercel.app/contact" />
        <meta property="og:title" content="Contact Tenzor - Start Your Business Transformation" />
        <meta property="og:description" content="Get in touch with Tenzor for expert business consulting and operational excellence solutions." />
        <meta property="og:url" content="https://tenzor.vercel.app/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHeader
        title="Get In Touch"
        subtitle="Tell us what operational challenge you want to fix"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <InfoCard
              icon={<Clock size={32} />}
              title="Response Time"
              description="We typically respond within 24-48 hours."
              color="indigo"
            />
            <InfoCard
              icon={<MessageSquare size={32} />}
              title="Direct Communication"
              description="You'll work directly with our founder, not a sales team."
              color="purple"
            />
            <InfoCard
              icon={<CheckCircle size={32} />}
              title="No Pressure"
              description="Free consultation with honest assessment."
              color="green"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-xl rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Transformation</h2>
                <p className="text-gray-600">Share your operational challenges and let's discuss solutions</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-gray-900 rounded-lg transition-colors"
                      placeholder="Your full name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-gray-900 rounded-lg transition-colors"
                      placeholder="your@email.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-gray-900 rounded-lg transition-colors"
                    placeholder="Your company name"
                  />
                  <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    What problem are you trying to solve? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-gray-900 rounded-lg transition-colors resize-none"
                    placeholder="Describe the operational challenge you're facing, current pain points, and what success would look like..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    required
                    className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I agree to the{' '}
                    <Link to="/legal/terms-conditions" className="text-indigo-600 hover:text-indigo-500 underline">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/legal/privacy-policy" className="text-indigo-600 hover:text-indigo-500 underline">
                      Privacy Policy
                    </Link>
                    . I understand that my information will be used to respond to my inquiry.
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex items-center px-12 py-4 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Send className="mr-2" size={20} />
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Happens Next?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Our process is simple, transparent, and focused on delivering real results
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="We Review"
              description="We'll carefully read your message and understand your challenge."
            />
            <StepCard
              number="2"
              title="We Respond"
              description="Within 24-48 hours, we'll reach out with initial thoughts."
            />
            <StepCard
              number="3"
              title="We Clarify"
              description="We'll schedule a call to discuss your needs and how we can help."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function InfoCard({ icon, title, description, color }: InfoCardProps) {
  const colorClasses = {
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
    purple: 'bg-purple-50 border-purple-200 text-purple-600',
    green: 'bg-green-50 border-green-200 text-green-600'
  };

  return (
    <div className={`bg-white p-8 border-2 ${colorClasses[color as keyof typeof colorClasses]} hover:shadow-lg transition-all duration-300 rounded-xl group hover:-translate-y-1`}>
      <div className={`mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-indigo-600 text-2xl font-bold mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110">
        {number}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-100 transition-colors">{title}</h3>
      <p className="text-indigo-100 leading-relaxed">{description}</p>
    </div>
  );
}
