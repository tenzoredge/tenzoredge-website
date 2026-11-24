import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-night text-brand-silver border-t border-brand-slate/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-brand-slate/20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/brand/SVG/tenzor-edge-logo-for-dark-bg.svg"
                alt="Tenzor Edge – Precision. Performance. Progress."
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-brand-silver/90 leading-relaxed max-w-sm">
              Technology consulting and engineering company. We partner with growing businesses, traditional enterprises, and startups to design, build, and optimize robust systems without unnecessary complexity.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-edge-red bg-brand-deep/30 border border-brand-crimson/30 px-2.5 py-1 rounded-full">
                Precision • Performance • Progress
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services/technology-consulting"
                  className="hover:text-white transition-colors"
                >
                  Technology Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/infrastructure-cloud-engineering"
                  className="hover:text-white transition-colors"
                >
                  Infrastructure & Cloud
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business-solutions-digital-transformation"
                  className="hover:text-white transition-colors"
                >
                  Business Solutions & Digitization
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-enabled-software-engineering"
                  className="hover:text-white transition-colors"
                >
                  AI-Enabled Software Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/services/product-technology-leadership"
                  className="hover:text-white transition-colors"
                >
                  Product & Tech Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Solutions */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Practical Solutions
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Tenzor Edge
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  Insights & Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Discuss Your Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Governance */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:support@tenzoredge.com"
                className="flex items-center text-brand-silver hover:text-white transition-colors group"
              >
                <Mail size={16} className="mr-2 text-brand-edge-red shrink-0" />
                <span className="truncate">support@tenzoredge.com</span>
              </a>
              <div className="flex items-start text-brand-silver">
                <MapPin size={16} className="mr-2 text-brand-edge-red shrink-0 mt-0.5" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <a
                href="https://www.linkedin.com/in/chandantukee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-silver hover:text-white transition-colors group pt-1"
              >
                <Linkedin size={16} className="mr-2 text-brand-edge-red shrink-0" />
                <span>Founder on LinkedIn</span>
                <ArrowUpRight size={13} className="ml-1 opacity-70 group-hover:opacity-100" />
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-slate/20">
              <Link
                to="/contact"
                className="inline-flex items-center text-xs font-medium text-brand-edge-red hover:text-brand-neon-red transition-colors"
              >
                <span>Request a consultation</span>
                <ArrowUpRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-slate space-y-4 md:space-y-0">
          <div>
            © {currentYear} Tenzor Edge. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              to="/legal/privacy-policy"
              className="hover:text-brand-silver transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal/terms-conditions"
              className="hover:text-brand-silver transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/legal/cookie-policy"
              className="hover:text-brand-silver transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              to="/legal/refund-cancellation"
              className="hover:text-brand-silver transition-colors"
            >
              Refund Policy
            </Link>
            <Link
              to="/legal/shipping-delivery"
              className="hover:text-brand-silver transition-colors"
            >
              Delivery Policy
            </Link>
            <Link
              to="/legal/subscription-policy"
              className="hover:text-brand-silver transition-colors"
            >
              Subscription Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
