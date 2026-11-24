import { Link } from 'react-router-dom';
import { Factory, MonitorSmartphone, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { serviceByKey, ServiceKey } from '../data/services';

interface Segment {
  icon: LucideIcon;
  name: string;
  line: string;
  sectors: string[];
  challenges: string[];
  help: string[];
  services: ServiceKey[];
}

const segments: Segment[] = [
  {
    icon: Factory,
    name: 'Traditional SMEs',
    line: 'Established operating businesses modernising without unnecessary risk.',
    sectors: ['Manufacturing', 'Distribution & trading', 'Logistics', 'Dealerships', 'Professional services'],
    challenges: [
      'Workflows on paper and spreadsheets',
      'Accounting and billing on unprotected desktops',
      'No in-house technology leader to challenge vendors',
    ],
    help: ['Digitize core workflows', 'Secure, consolidated infrastructure', 'Independent advice on ERP and software choices'],
    services: ['business', 'infrastructure'],
  },
  {
    icon: MonitorSmartphone,
    name: 'Technology-driven SMEs',
    line: 'Businesses whose product or platform is the business.',
    sectors: ['B2B SaaS', 'Fintech & payments', 'Multi-tenant platforms', 'Digital commerce'],
    challenges: [
      'Codebases that are harder to extend each release',
      'Cloud costs growing faster than revenue',
      'AI tools in use without structure or governance',
    ],
    help: ['Architecture review and roadmap', 'Hybrid cloud and cost governance', 'Project-specific AI agents and skills'],
    services: ['consulting', 'ai'],
  },
  {
    icon: Rocket,
    name: 'Startups',
    line: 'Founders turning a validated idea into a product.',
    sectors: ['Early-stage startups', 'Domain experts building products', 'Corporate spin-offs'],
    challenges: [
      'Turning a vision into clear requirements',
      'Choosing a stack without following trends',
      'Managing agencies without a technical lead',
    ],
    help: ['Product discovery and MVP scope', 'Architecture and stack decisions', 'Delivery governance to launch'],
    services: ['product', 'consulting'],
  },
  {
    icon: TrendingUp,
    name: 'Growing businesses',
    line: 'Companies scaling volume, locations and teams.',
    sectors: ['Multi-branch retail', 'Expanding logistics', 'Growing service firms'],
    challenges: [
      'Infrastructure straining under new load',
      'Systems bought piecemeal that don’t connect',
      'Manual work growing with every new customer',
    ],
    help: ['Integration across ERP, CRM and finance', 'Automation of repetitive operations', 'Scalable, resilient infrastructure'],
    services: ['business', 'infrastructure'],
  },
];

export default function Industries() {
  return (
    <>
      <SEO
        title="Who We Serve | Tenzor Edge"
        description="Technology consulting and engineering for traditional SMEs, technology-driven SMEs, startups and growing businesses — calibrated to each organisation's size, complexity and stage."
        canonicalPath="/industries"
      />

      <PageHeader
        badge="Who we serve"
        title="Technology fitted to your stage of growth."
        subtitle="A fifty-person distributor and a venture-backed SaaS company need very different things. We design for what your organisation can realistically run and benefit from."
        breadcrumbs={[{ label: 'Who We Serve' }]}
      />

      {segments.map((s, i) => {
        const Icon = s.icon;
        return (
          <section key={s.name} className={`py-16 md:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-mist'}`}>
            <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-night text-brand-edge-red">
                  <Icon size={22} aria-hidden />
                </span>
                <h2 className="type-h2 mt-6 text-brand-night">{s.name}</h2>
                <p className="mt-4 text-lg leading-relaxed text-brand-slate">{s.line}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.sectors.map((x) => (
                    <li key={x} className="rounded-full border border-brand-night/15 bg-white px-3 py-1 text-[13px] text-brand-night">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
                <div>
                  <h3 className="border-b-2 border-brand-night pb-3 font-heading text-lg font-semibold text-brand-night">
                    What usually gets in the way
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {s.challenges.map((c) => (
                      <li key={c} className="text-[15px] leading-relaxed text-brand-slate">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="border-b-2 border-brand-edge-red pb-3 font-heading text-lg font-semibold text-brand-night">
                    How we help
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {s.help.map((h) => (
                      <li key={h} className="text-[15px] font-medium leading-relaxed text-brand-night">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-2">
                    {s.services.map((k) => {
                      const svc = serviceByKey(k);
                      return (
                        <Link key={k} to={svc.path} className="link-arrow">
                          {svc.shortTitle} <ArrowRight size={14} aria-hidden />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Tell us where your business is today."
        subtitle="We’ll suggest the right starting point for your size, sector and stage."
      />
    </>
  );
}
