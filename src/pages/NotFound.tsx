import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { services } from '../data/services';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The page you were looking for does not exist or has moved."
        canonicalPath="/404"
        noindex
      />
      <section className="bg-brand-mist/30">
        <div className="container-site max-w-3xl py-24 md:py-32">
          <div className="font-mono text-sm font-semibold tracking-wider text-brand-edge-red">404</div>
          <h1 className="type-h1 mt-4 text-brand-night">This page doesn’t exist</h1>
          <p className="type-lead mt-5 text-brand-slate">
            The link may be old or mistyped. These are good places to continue:
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/" className="btn-primary">
              Go to the homepage <ArrowRight size={18} aria-hidden />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-lg border border-brand-night/20 bg-white px-6 py-3 text-sm font-semibold text-brand-night hover:border-brand-night/40">
              Contact us
            </Link>
          </div>
          <ul className="mt-12 grid gap-2 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.key}>
                <Link to={s.path} className="flex items-center justify-between rounded-xl border border-brand-night/10 bg-white px-4 py-3 text-sm font-medium text-brand-night hover:border-brand-edge-red/40">
                  {s.shortTitle} <ArrowRight size={16} className="text-brand-edge-red" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
