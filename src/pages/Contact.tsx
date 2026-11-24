import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  CheckCircle2,
  Send,
  Mail,
  MapPin,
  Linkedin,
  ShieldCheck
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

export default function Contact() {
  const [state, handleSubmit] = useForm('mqezzzkq');
  const [consentChecked, setConsentChecked] = useState(false);
  const [selectedService, setSelectedService] = useState('Technology Consulting & Solution Architecture');

  const services = [
    'Technology Consulting & Solution Architecture',
    'Infrastructure & Cloud Engineering',
    'Business Solutions & Digital Transformation',
    'AI-Enabled Software Engineering',
    'Product & Technology Leadership',
    'General Technology Inquiry'
  ];

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-brand-mist/20 py-20">
        <SEO
          title="Inquiry Received | Tenzor Edge"
          description="Thank you for reaching out to Tenzor Edge. Our Principal Solution Architect will review your requirements and respond within 24 to 48 hours."
          canonicalPath="/contact"
        />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-brand-slate/20 rounded-2xl p-10 sm:p-14 shadow-card">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 mb-6 rounded-2xl">
              <CheckCircle2 size={36} />
            </div>

            <h2 className="text-3xl font-heading font-bold text-brand-night mb-3">
              Project Inquiry Received
            </h2>

            <p className="text-base text-brand-slate mb-6 leading-relaxed">
              Thank you for reaching out to Tenzor Edge. Your message has been routed directly to our Principal Solution Architect. We will review your technical requirements and contact you within <strong>24 to 48 business hours</strong>.
            </p>

            <div className="p-4 rounded-xl bg-brand-mist/40 border border-brand-slate/15 text-xs text-brand-slate text-left mb-8 space-y-1">
              <div><strong>What to expect next:</strong></div>
              <div>• Initial review of your current systems and operational context.</div>
              <div>• Direct email or call to schedule an exploratory technical session.</div>
              <div>• Completely confidential and NDA-ready discussion.</div>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-brand-night hover:bg-brand-edge-red transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Contact Us – Discuss Your Technology Project | Tenzor Edge"
        description="Discuss your technology consulting, cloud infrastructure, business digitization, or AI engineering needs with our Principal Solution Architect."
        canonicalPath="/contact"
      />

      <PageHeader
        badge="Direct Consultation"
        title="Discuss Your Technology Needs"
        subtitle="Schedule an initial technical conversation with our Principal Solution Architect to review your operational challenges, evaluate feasibility, and define a clear roadmap."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 md:py-24 bg-brand-mist/20 text-brand-night">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Context, Direct Contacts & Guarantees */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-night mb-4">
                  Direct Principal Engagement
                </h2>
                <p className="text-sm sm:text-base text-brand-slate leading-relaxed mb-6">
                  At Tenzor Edge, you do not deal with aggressive sales representatives or account managers reciting scripts. Every inquiry is reviewed directly by our Principal Solution Architect with 12+ years of technical foundation.
                </p>
              </div>

              {/* Trust Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-white border border-brand-slate/15 shadow-subtle flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-mist flex items-center justify-center text-brand-edge-red shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-brand-night mb-1">
                      24–48 Hour Response
                    </h3>
                    <p className="text-xs text-brand-slate leading-relaxed">
                      We respond promptly with substantive technical observations, not automated generic marketing emails.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white border border-brand-slate/15 shadow-subtle flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-mist flex items-center justify-center text-brand-edge-red shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-brand-night mb-1">
                      Strict Confidentiality (NDA)
                    </h3>
                    <p className="text-xs text-brand-slate leading-relaxed">
                      All shared business processes, software architectures, and internal metrics remain strictly confidential.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white border border-brand-slate/15 shadow-subtle flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-mist flex items-center justify-center text-brand-edge-red shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-brand-night mb-1">
                      Honest Assessment
                    </h3>
                    <p className="text-xs text-brand-slate leading-relaxed">
                      If your problem does not require custom software or heavy cloud spend, we will tell you directly and recommend simpler alternatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Details Box */}
              <div className="p-6 rounded-2xl bg-brand-night text-white border border-brand-slate/20 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-edge-red font-semibold">
                  Direct Inquiries
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-brand-silver">
                  <a
                    href="mailto:support@tenzoredge.com"
                    className="flex items-center hover:text-white transition-colors"
                  >
                    <Mail size={16} className="text-brand-edge-red mr-3 shrink-0" />
                    <span>support@tenzoredge.com</span>
                  </a>
                  <div className="flex items-start">
                    <MapPin size={16} className="text-brand-edge-red mr-3 shrink-0 mt-0.5" />
                    <span>Bengaluru, Karnataka, India</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/chandantukee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-white transition-colors"
                  >
                    <Linkedin size={16} className="text-brand-edge-red mr-3 shrink-0" />
                    <span>Founder Profile on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Working Formspree Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-brand-slate/20 rounded-2xl p-8 sm:p-10 shadow-card">
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-night mb-2">
                    Project & Consultation Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate">
                    Please describe your current operational challenge or proposed initiative. All fields marked with * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-brand-night mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-brand-slate/25 focus:border-brand-edge-red focus:outline-none text-sm text-brand-night bg-white"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-brand-night mb-2">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-brand-slate/25 focus:border-brand-edge-red focus:outline-none text-sm text-brand-night bg-white"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  {/* Company Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-brand-night mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        placeholder="Company or venture name"
                        className="w-full px-4 py-3 rounded-lg border border-brand-slate/25 focus:border-brand-edge-red focus:outline-none text-sm text-brand-night bg-white"
                      />
                      <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-brand-night mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 / International number"
                        className="w-full px-4 py-3 rounded-lg border border-brand-slate/25 focus:border-brand-edge-red focus:outline-none text-sm text-brand-night bg-white"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-brand-night mb-2">
                      Primary Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-brand-slate/25 focus:border-brand-edge-red focus:outline-none text-sm text-brand-night bg-white"
                    >
                      {services.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-night mb-2">
                      Preferred Communication Method
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <label className="flex items-center space-x-2 text-xs text-brand-slate p-2.5 rounded-lg border border-brand-slate/20 cursor-pointer hover:bg-brand-mist/30">
                        <input
                          type="radio"
                          name="preferred_contact"
                          value="Email"
                          defaultChecked
                          className="text-brand-edge-red focus:ring-brand-edge-red"
                        />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center space-x-2 text-xs text-brand-slate p-2.5 rounded-lg border border-brand-slate/20 cursor-pointer hover:bg-brand-mist/30">
                        <input
                          type="radio"
                          name="preferred_contact"
                          value="Phone"
                          className="text-brand-edge-red focus:ring-brand-edge-red"
                        />
                        <span>Phone</span>
                      </label>
                      <label className="flex items-center space-x-2 text-xs text-brand-slate p-2.5 rounded-lg border border-brand-slate/20 cursor-pointer hover:bg-brand-mist/30">
                        <input
                          type="radio"
                          name="preferred_contact"
                          value="Video Meeting"
                          className="text-brand-edge-red focus:ring-brand-edge-red"
                        />
                        <span>Video Call</span>
                      </label>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-brand-night mb-2">
                      Brief Project Description or Operational Challenge *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Please outline the business problem you want to solve, current technology setup, and any key milestones or constraints..."
                      className="w-full px-4 py-3 rounded-lg border border-brand-slate/25 focus:border-brand-edge-red focus:outline-none text-sm text-brand-night bg-white resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start space-x-3 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      required
                      className="mt-1 h-4 w-4 text-brand-edge-red focus:ring-brand-edge-red border-brand-slate/30 rounded cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-xs text-brand-slate leading-relaxed">
                      I agree to the{' '}
                      <Link to="/legal/privacy-policy" className="text-brand-edge-red hover:underline font-medium">
                        Privacy Policy
                      </Link>{' '}
                      and understand that this information will be used solely by Tenzor Edge to evaluate and respond to this project inquiry.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={state.submitting || !consentChecked}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-brand-edge-red hover:bg-brand-neon-red shadow-lg shadow-brand-crimson/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={16} className="mr-2" />
                      <span>{state.submitting ? 'Submitting Inquiry...' : 'Submit Project Inquiry'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
