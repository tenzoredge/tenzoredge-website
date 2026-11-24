import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondary?: { label: string; to: string } | null;
}

/** Closing call to action used at the end of every page. */
export default function CTASection({
  title = 'Let’s talk about what you’re building.',
  subtitle = 'Tell us where your technology is holding the business back. You’ll speak directly with our Principal Solution Architect.',
  primaryLabel = 'Discuss Your Project',
  secondary = { label: 'Explore Our Capabilities', to: '/services' },
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-night text-white">
      <div className="tech-grid-pattern-dark pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #C40F2E 0%, transparent 70%)' }}
        aria-hidden
      />
      <div className="container-site relative py-20 md:py-28">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="mb-8 block h-1 w-16 rounded-full bg-brand-edge-red" aria-hidden />
            <h2 className="type-h1 text-white">{title}</h2>
            <p className="type-lead mt-6 max-w-2xl text-brand-silver">{subtitle}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
            <Link to="/contact" className="btn-primary">
              {primaryLabel}
              <ArrowRight size={18} aria-hidden />
            </Link>
            {secondary && (
              <Link to={secondary.to} className="btn-ghost-dark">
                {secondary.label}
              </Link>
            )}
            <a
              href="mailto:support@tenzoredge.com"
              className="inline-flex items-center justify-center gap-2 text-sm text-brand-silver transition-colors hover:text-white lg:justify-start"
            >
              <Mail size={16} aria-hidden />
              support@tenzoredge.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
