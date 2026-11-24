import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from './SEO';
import Breadcrumbs from './Breadcrumbs';
import CTASection from './CTASection';
import SectionIntro from './SectionIntro';
import Motif from './illustrations/Motifs';
import { Reveal } from './illustrations/kit';
import { serviceByKey, ServiceKey } from '../data/services';

export interface ServicePageContent {
  key: ServiceKey;
  seo: { title: string; description: string };
  headline: ReactNode;
  intro: string;
  heroVisual: ReactNode;
  problem: { heading: string; text: string; points: { title: string; text: string }[] };
  solution: { heading: string; intro: string; visual: ReactNode; note?: ReactNode };
  capabilities: { heading: string; intro?: string; groups: { icon: LucideIcon; title: string; items: string[] }[] };
  approach: { title: string; text: string }[];
  outcomes: string[];
  related: ServiceKey[];
  cta: { title: string; text: string };
}

export default function ServiceTemplate({ c }: { c: ServicePageContent }) {
  const svc = serviceByKey(c.key);

  return (
    <>
      <SEO title={c.seo.title} description={c.seo.description} canonicalPath={svc.path} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-night text-white">
        <div className="tech-grid-pattern-dark grid-fade pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full opacity-[0.16] blur-[130px]"
          style={{ background: 'radial-gradient(circle, #C40F2E 0%, transparent 70%)' }}
          aria-hidden
        />
        <div className="container-site relative pb-16 pt-8 md:pb-24 md:pt-10">
          <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: svc.title }]} theme="dark" />
          <div className="mt-10 grid items-center gap-14 lg:mt-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <div className="eyebrow-dark mb-6">{svc.title}</div>
              <h1 className="type-h1 text-white">{c.headline}</h1>
              <p className="type-lead mt-6 max-w-xl text-brand-silver">{c.intro}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Discuss Your Project <ArrowRight size={18} aria-hidden />
                </Link>
                <a href="#capabilities" className="btn-ghost-dark">
                  What’s included
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="mx-auto max-w-[620px]">{c.heroVisual}</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro title={c.problem.heading} intro={c.problem.text} />
          </div>
          <Reveal as="ol" className="reveal lg:col-span-7">
            {c.problem.points.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[56px_1fr] gap-4 border-t border-brand-night/10 py-7 last:border-b">
                <span className="font-heading text-3xl font-semibold text-brand-edge-red">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brand-night">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-brand-slate">{p.text}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SOLUTION — visual explanation */}
      <section className="relative overflow-hidden bg-brand-night py-20 text-white md:py-28">
        <div className="tech-grid-pattern-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="container-site relative">
          <SectionIntro tone="dark" title={c.solution.heading} intro={c.solution.intro} />
          <div className="mt-14">{c.solution.visual}</div>
          {c.solution.note && <div className="mt-10 max-w-3xl text-[15px] leading-relaxed text-brand-silver">{c.solution.note}</div>}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="container-site">
          <SectionIntro title={c.capabilities.heading} intro={c.capabilities.intro} />
          <Reveal className={`reveal mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 ${c.capabilities.groups.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
            {c.capabilities.groups.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-night text-brand-edge-red">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-brand-night">{g.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[15px] leading-snug text-brand-slate">
                        <Check size={16} className="mt-0.5 shrink-0 text-brand-edge-red" aria-hidden />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* APPROACH + OUTCOMES */}
      <section className="bg-brand-mist py-20 md:py-28">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="type-h3 text-brand-night">How an engagement runs</h2>
            <ol className="relative mt-8 space-y-7 border-l border-brand-night/15 pl-8">
              {c.approach.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="absolute -left-[45px] flex h-7 w-7 items-center justify-center rounded-full border border-brand-night/15 bg-white font-heading text-xs font-semibold text-brand-night">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-brand-night">{s.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-brand-slate">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-brand-night p-8 text-white sm:p-10">
              <h2 className="type-h3 text-white">What changes for your business</h2>
              <ul className="mt-8 space-y-5">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex gap-4 border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-edge-red" aria-hidden />
                    <span className="text-[17px] leading-relaxed text-white">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-site">
          <h2 className="type-h3 text-brand-night">Often combined with</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {c.related.map((k) => {
              const r = serviceByKey(k);
              return (
                <Link
                  key={k}
                  to={r.path}
                  className="group grid grid-cols-[110px_1fr] items-center gap-6 rounded-2xl border border-brand-night/10 p-6 transition-all hover:border-brand-edge-red/50 hover:shadow-elevated"
                >
                  <div className="rounded-xl bg-brand-night p-3">
                    <Motif kind={k} tone="dark" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brand-night group-hover:text-brand-edge-red">{r.title}</h3>
                    <p className="mt-1 text-[15px] text-brand-slate">{r.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title={c.cta.title} subtitle={c.cta.text} secondary={{ label: 'All services', to: '/services' }} />
    </>
  );
}
