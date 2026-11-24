import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Unlink,
  ServerCrash,
  GitBranch,
  Signpost,
  Linkedin,
  Quote,
} from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import SectionIntro from '../components/SectionIntro';
import ProcessFlow from '../components/ProcessFlow';
import Ecosystem from '../components/illustrations/Ecosystem';
import Motif from '../components/illustrations/Motifs';
import { Reveal } from '../components/illustrations/kit';
import { services, serviceByKey, ServiceKey } from '../data/services';

const challenges: { icon: typeof TrendingUp; title: string; text: string; service: ServiceKey }[] = [
  {
    icon: TrendingUp,
    title: 'Technology that can’t keep up with growth',
    text: 'Systems chosen for ten people start to break at fifty.',
    service: 'consulting',
  },
  {
    icon: Unlink,
    title: 'Disconnected applications and manual workflows',
    text: 'Teams re-key the same data across spreadsheets, email and tools.',
    service: 'business',
  },
  {
    icon: ServerCrash,
    title: 'Infrastructure you can’t rely on',
    text: 'Unplanned downtime, untested backups and cloud bills nobody can explain.',
    service: 'infrastructure',
  },
  {
    icon: GitBranch,
    title: 'Software delivery getting harder, not easier',
    text: 'AI tools are in use, but disconnected from your codebase and process.',
    service: 'ai',
  },
  {
    icon: Signpost,
    title: 'No one owning technology decisions',
    text: 'Vendors set the direction because no one in-house can challenge them.',
    service: 'product',
  },
];

const approach = [
  { title: 'Understand', text: 'How your business runs, where it’s stuck and what success looks like.' },
  { title: 'Assess', text: 'An honest look at your systems, infrastructure, data and risks.' },
  { title: 'Architect', text: 'A clear target design and the decisions needed to get there.' },
  { title: 'Engineer', text: 'Build, integrate and deploy — with specialists where needed.' },
  { title: 'Evolve', text: 'Monitor, refine and scale as the business changes.' },
];

const segments: { name: string; scenario: string; start: string; service: ServiceKey }[] = [
  {
    name: 'Traditional SMEs',
    scenario: 'A distributor running orders, stock and invoicing on spreadsheets and phone calls.',
    start: 'Digitize the order-to-invoice flow',
    service: 'business',
  },
  {
    name: 'Technology-driven SMEs',
    scenario: 'A software business whose cloud bill and release cycle both keep growing.',
    start: 'Review architecture and infrastructure',
    service: 'infrastructure',
  },
  {
    name: 'Startups',
    scenario: 'Founders with a product idea and no one senior to own the technical decisions.',
    start: 'Product discovery and architecture',
    service: 'product',
  },
  {
    name: 'Growing businesses',
    scenario: 'A multi-branch company that has outgrown the tools it started with.',
    start: 'Technology assessment and roadmap',
    service: 'consulting',
  },
];

const stack = [
  'Business strategy & operations',
  'Product & business applications',
  'Integration, data & automation',
  'Cloud & virtualization',
  'Servers & networking',
];

const differentiators = [
  { title: 'Architecture-led', text: 'We fix the structure behind a problem, not just its symptoms.' },
  { title: 'Business-first', text: 'Every recommendation starts with how your business actually works.' },
  { title: 'Infrastructure to application', text: 'From network and servers to APIs and business apps, in one conversation.' },
  { title: 'Practical decisions', text: 'Vendor-neutral advice on what you can run and maintain — not what’s fashionable.' },
  { title: 'Ownership through delivery', text: 'We stay through implementation, testing and handover.' },
];

const engagements = [
  {
    title: 'Consulting & advisory',
    text: 'Assessments, architecture reviews and roadmaps.',
    best: 'Decisions before a major investment',
  },
  {
    title: 'Solution design & implementation',
    text: 'From design through integration, deployment and testing.',
    best: 'A defined project that needs delivering',
  },
  {
    title: 'Product & project leadership',
    text: 'Senior ownership embedded with your team.',
    best: 'Startups and SMEs without a CTO',
  },
  {
    title: 'Ongoing technology partnership',
    text: 'Regular reviews, guidance and scaling support.',
    best: 'Businesses that want a long-term partner',
  },
];

const founderDomains = [
  'IT administration',
  'Cloud & on-premises infrastructure',
  'Networking',
  'Digital transformation',
  'Business applications',
  'System integration',
  'AI-enabled SDLC',
  'Product ownership',
  'Technology consulting',
];

/* Layout + tone for each tile in the capability showcase */
const tiles: { key: ServiceKey; className: string; dark: boolean; big?: boolean; chips?: boolean }[] = [
  { key: 'consulting', className: 'md:col-span-2 lg:col-span-7', dark: true, big: true, chips: true },
  { key: 'infrastructure', className: 'md:col-span-2 lg:col-span-5', dark: false, chips: true },
  { key: 'business', className: 'lg:col-span-4', dark: false },
  { key: 'ai', className: 'lg:col-span-4', dark: true },
  { key: 'product', className: 'md:col-span-2 lg:col-span-4', dark: false },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Tenzor Edge – Precision. Performance. Progress. | Technology Consulting & Engineering"
        description="Tenzor Edge is a technology consulting and engineering company. We help businesses design, integrate, automate, and engineer reliable infrastructure, business systems, and AI-enabled software processes."
        canonicalPath="/"
      />

      {/* 1 — HERO */}
      <section className="relative overflow-hidden bg-brand-night text-white">
        <div className="tech-grid-pattern-dark grid-fade pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -right-32 top-10 h-[620px] w-[620px] rounded-full opacity-[0.18] blur-[130px]"
          style={{ background: 'radial-gradient(circle, #C40F2E 0%, transparent 70%)' }}
          aria-hidden
        />

        <div className="container-site relative pb-14 pt-12 md:pt-16 lg:pb-16 lg:pt-14">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-16">
            <div>
              <div className="eyebrow-dark mb-6">Technology consulting &amp; engineering</div>
              <h1 className="font-heading text-[2.5rem] font-bold leading-[1.06] tracking-[-0.025em] text-white sm:text-[3.4rem] lg:text-[3.1rem] xl:text-[3.6rem]">
                <span className="block">Complex technology.</span>
                <span className="block">
                  Clear business outcomes<span className="text-brand-edge-red">.</span>
                </span>
              </h1>
              <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-brand-silver">
                We design, connect and engineer the systems growing businesses depend on — from infrastructure and
                cloud to business applications and AI-enabled software delivery.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/contact" className="btn-primary">
                  Discuss Your Project
                  <ArrowRight size={18} aria-hidden />
                </Link>
                <Link to="/services" className="btn-ghost-dark">
                  Explore Our Capabilities
                </Link>
              </div>
              <dl className="mt-10 grid max-w-[34rem] grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                  ['12+ yrs', 'Hands-on experience'],
                  ['5', 'Connected capabilities'],
                  ['Full stack', 'Infra to application'],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-heading text-base font-semibold text-white sm:text-xl">{v}</dd>
                    <dd className="mt-0.5 text-[13px] leading-snug text-brand-silver">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
              <Ecosystem />
            </div>
          </div>
        </div>

        {/* Capability index */}
        <div className="relative border-t border-white/10">
          <div className="container-site">
            <ul className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
              {services.map((s) => (
                <li key={s.key}>
                  <Link
                    to={s.path}
                    className="group flex h-full items-center gap-3 py-5 transition-colors sm:px-4 lg:px-5 lg:first:pl-0"
                  >
                    <span className="font-heading text-xs font-semibold text-brand-edge-red">{s.index}</span>
                    <span className="flex-1 text-sm font-medium leading-snug text-white transition-colors group-hover:text-brand-edge-red">
                      {s.shortTitle}
                    </span>
                    <ArrowUpRight size={15} className="shrink-0 text-brand-silver transition-colors group-hover:text-brand-edge-red" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2 — BUSINESS CHALLENGES */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionIntro
                title="Where technology starts holding a business back"
                intro="Most of the businesses we work with recognise at least one of these."
              />
            </div>
          </div>
          <Reveal as="ul" className="reveal border-t border-brand-night/10 lg:col-span-8">
            {challenges.map((c) => {
              const Icon = c.icon;
              const svc = serviceByKey(c.service);
              return (
                <li key={c.title} className="border-b border-brand-night/10">
                  <Link to={svc.path} className="group grid grid-cols-[44px_1fr] items-start gap-5 py-7 sm:grid-cols-[44px_1fr_auto] sm:items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mist text-brand-edge-red transition-colors group-hover:bg-brand-edge-red group-hover:text-white">
                      <Icon size={20} aria-hidden />
                    </span>
                    <span>
                      <span className="block font-heading text-lg font-semibold text-brand-night sm:text-xl">{c.title}</span>
                      <span className="mt-1 block text-[15px] text-brand-slate">{c.text}</span>
                    </span>
                    <span className="col-start-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-slate group-hover:text-brand-edge-red sm:col-start-auto">
                      {svc.shortTitle}
                      <ArrowUpRight size={15} aria-hidden />
                    </span>
                  </Link>
                </li>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* 3 — WHAT WE ENGINEER */}
      <section className="bg-brand-mist py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro
              title="What we engineer"
              intro="Five connected capabilities — so strategy, infrastructure, applications and delivery are designed together."
            />
            <Link to="/services" className="link-arrow shrink-0">
              All services <ArrowRight size={16} aria-hidden />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {tiles.map((t) => {
              const s = serviceByKey(t.key);
              return (
                <Link
                  key={t.key}
                  to={s.path}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${t.className} ${
                    t.dark
                      ? 'border-white/5 bg-brand-night text-white hover:shadow-figure'
                      : 'border-brand-night/[0.07] bg-white text-brand-night hover:border-brand-night/15 hover:shadow-elevated'
                  }`}
                >
                  {/* Illustration band: fixed height so every tile in a row lines up */}
                  <div
                    className={`relative flex h-40 items-center justify-center overflow-hidden border-b px-8 ${
                      t.dark ? 'tech-grid-pattern-dark border-white/[0.06] bg-brand-ink' : 'tech-grid-pattern border-brand-night/[0.06] bg-brand-mist/60'
                    }`}
                  >
                    <div className="w-full max-w-[230px] transition-transform duration-500 group-hover:scale-[1.04]">
                      <Motif kind={t.key} tone={t.dark ? 'dark' : 'light'} />
                    </div>
                    <span
                      className={`absolute left-5 top-4 font-heading text-sm font-semibold ${t.dark ? 'text-brand-edge-red' : 'text-brand-crimson'}`}
                    >
                      {s.index}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className={`font-heading font-semibold leading-snug ${t.big ? 'text-2xl' : 'text-xl'}`}>{s.title}</h3>
                    <p className={`mt-3 text-[15px] leading-relaxed ${t.dark ? 'text-brand-silver' : 'text-brand-slate'}`}>{s.summary}</p>
                    {t.chips && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {s.highlights.map((h) => (
                          <li
                            key={h}
                            className={`rounded-full border px-3 py-1 text-[13px] ${t.dark ? 'border-white/15 text-white' : 'border-brand-night/15 text-brand-night'}`}
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span
                      className={`mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold ${t.dark ? 'text-white' : 'text-brand-night'} group-hover:text-brand-edge-red`}
                    >
                      Explore service
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — OUR APPROACH */}
      <section className="relative overflow-hidden bg-brand-night py-20 text-white md:py-28">
        <div className="tech-grid-pattern-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="container-site relative">
          <SectionIntro
            tone="dark"
            title="One approach, from first conversation to running system"
            intro="Clarity before execution. Every engagement follows the same five stages, scaled to the size of the problem."
          />
          <div className="mt-16">
            <ProcessFlow steps={approach} tone="dark" emphasis={2} />
          </div>
        </div>
      </section>

      {/* 5 — WHO WE WORK WITH */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <SectionIntro
            title="Who we work with"
            intro="We fit the solution to the business — not the other way round."
          />
          <Reveal className="reveal mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((seg) => {
              const svc = serviceByKey(seg.service);
              return (
                <div key={seg.name} className="group flex flex-col border-t-2 border-brand-night pt-6 transition-colors hover:border-brand-edge-red">
                  <h3 className="font-heading text-xl font-semibold text-brand-night">{seg.name}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-brand-slate">“{seg.scenario}”</p>
                  <div className="mt-auto pt-6">
                    <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-slate">Where we usually start</div>
                    <Link to={svc.path} className="mt-2 inline-flex items-start gap-1.5 text-[15px] font-semibold text-brand-night hover:text-brand-edge-red">
                      {seg.start}
                      <ArrowRight size={15} className="mt-1 shrink-0" aria-hidden />
                    </Link>
                  </div>
                </div>
              );
            })}
          </Reveal>
          <Link to="/industries" className="link-arrow mt-12">
            See industries and scenarios <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>

      {/* 6 — WHY TENZOR EDGE */}
      <section className="bg-brand-mist py-20 md:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="figure-frame">
              <div className="flex gap-4 sm:gap-6">
                <ol className="flex-1 space-y-2.5">
                  {stack.map((layer, i) => (
                    <li
                      key={layer}
                      className="rounded-lg border border-white/10 bg-brand-panel px-4 py-3.5 text-sm font-medium text-white sm:text-[15px]"
                      style={{ marginLeft: `${i * 10}px`, marginRight: `${(stack.length - 1 - i) * 10}px` }}
                    >
                      {layer}
                    </li>
                  ))}
                </ol>
                <div className="flex w-8 flex-col items-center" aria-hidden>
                  <span className="h-px w-4 bg-brand-edge-red" />
                  <span className="w-px flex-1 bg-brand-edge-red" />
                  <span className="h-px w-4 bg-brand-edge-red" />
                </div>
              </div>
              <p className="mt-6 text-sm text-brand-silver">
                <span className="font-semibold text-white">One team across the whole stack</span> — so decisions at one
                layer don’t create problems at another.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionIntro title="Why businesses choose Tenzor Edge" />
            <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {differentiators.map((d, i) => (
                <div key={d.title} className={`border-l-2 border-brand-edge-red pl-5 ${i === differentiators.length - 1 ? 'sm:col-span-2' : ''}`}>
                  <dt className="font-heading text-lg font-semibold text-brand-night">{d.title}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-brand-slate">{d.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 7 — FOUNDER */}
      <section className="relative overflow-hidden bg-brand-night py-20 text-white md:py-28">
        <div className="container-site relative grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Quote size={40} className="text-brand-edge-red" aria-hidden />
            <blockquote className="mt-6 font-heading text-2xl font-medium leading-snug text-white sm:text-[2rem] sm:leading-[1.3]">
              The goal isn’t to add more tools or more complexity. It’s to add only the technology a business can
              sustain, operate and measurably benefit from.
            </blockquote>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-brand-ink p-7 sm:p-9">
              <div className="flex items-center gap-5">
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-brand-night font-heading text-xl font-bold text-white"
                  aria-hidden
                >
                  CP
                </div>
                <div>
                  <div className="font-heading text-xl font-semibold text-white">Chandan P</div>
                  <div className="text-[15px] text-brand-silver">Founder &amp; Principal Solution Architect</div>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-brand-silver">
                12+ years across hands-on infrastructure, business platforms and product ownership. Every engagement is
                led personally, supported by specialist delivery partners.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {founderDomains.map((d) => (
                  <li key={d} className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-white">
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
                <Link to="/about" className="link-arrow-dark">
                  About Tenzor Edge <ArrowRight size={15} aria-hidden />
                </Link>
                <a
                  href="https://www.linkedin.com/in/chandantukee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow-dark"
                >
                  <Linkedin size={15} aria-hidden /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — ENGAGEMENT MODELS */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <SectionIntro title="Ways to work with us" intro="Start small with advice, or bring us in to own delivery. Most clients move along this line over time." />

          <div className="relative mt-16">
            <div className="mb-10 hidden items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-slate lg:flex">
              <span>Focused engagement</span>
              <span className="h-1 flex-1 rounded-full bg-gradient-to-r from-brand-night/10 via-brand-crimson/60 to-brand-edge-red" aria-hidden />
              <span>Ongoing partnership</span>
            </div>
            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {engagements.map((e, i) => (
                <li key={e.title} className="relative">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 rounded-full border-2 border-brand-edge-red"
                      style={{ background: i === engagements.length - 1 ? '#FF2D3D' : 'white' }}
                      aria-hidden
                    />
                    <span className="h-px flex-1 bg-brand-night/10 lg:hidden" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-brand-night">{e.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-brand-slate">{e.text}</p>
                  <p className="mt-4 text-sm text-brand-night">
                    <span className="font-semibold">Best for:</span> {e.best}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 9 — CTA */}
      <CTASection
        title="Let’s make your technology work for the business."
        subtitle="Start with a conversation about where things stand today. You’ll get a clear view of options, trade-offs and next steps."
      />
    </>
  );
}
