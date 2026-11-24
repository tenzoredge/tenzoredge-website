import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Check } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import { services, ServiceKey } from '../data/services';
import { ConsultingBlueprint } from '../components/illustrations/ConsultingDiagrams';
import { InfraTopology } from '../components/illustrations/InfrastructureDiagrams';
import { WorkflowTransformation } from '../components/illustrations/BusinessDiagrams';
import { AiAgentsDiagram } from '../components/illustrations/AiDiagrams';
import { ProductLifecycle } from '../components/illustrations/ProductDiagrams';

const visuals: Record<ServiceKey, ReactNode> = {
  consulting: <ConsultingBlueprint />,
  infrastructure: <InfraTopology />,
  business: <WorkflowTransformation />,
  ai: <AiAgentsDiagram />,
  product: <ProductLifecycle />,
};

/* A one-line answer to "why would I need this?" for each capability */
const when: Record<ServiceKey, string> = {
  consulting: 'You’re facing a significant technology decision or investment.',
  infrastructure: 'Your servers, network or cloud are unreliable, insecure or too expensive.',
  business: 'Your team re-keys data and runs the business on spreadsheets and email.',
  ai: 'Your engineering team wants real, governed value from AI.',
  product: 'You have a product to build and no senior owner for it.',
};

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Tenzor Edge"
        description="Five connected capabilities: technology consulting and solution architecture, infrastructure and cloud engineering, business solutions and digital transformation, AI-enabled software engineering, and product and technology leadership."
        canonicalPath="/services"
      />

      <PageHeader
        badge="Our capabilities"
        title={
          <>
            Five capabilities. One connected view of your technology<span className="text-brand-edge-red">.</span>
          </>
        }
        subtitle="Strategy, infrastructure, applications and software delivery are designed together — so a decision in one area doesn’t create a problem in another."
        breadcrumbs={[{ label: 'Services' }]}
        visual={
          <nav aria-label="Services on this page" className="rounded-2xl border border-white/10 bg-brand-ink p-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.key}
                  href={`#${s.key}`}
                  className="group flex items-center gap-4 rounded-xl px-4 py-4 transition-colors hover:bg-white/5"
                >
                  <span className="font-heading text-sm font-semibold text-brand-edge-red">{s.index}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-brand-night text-white group-hover:text-brand-edge-red">
                    <Icon size={18} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="block font-heading text-[15px] font-semibold text-white sm:text-base">{s.title}</span>
                    <span className="block text-sm text-brand-silver">{s.tagline}</span>
                  </span>
                  <ArrowDown size={16} className="shrink-0 text-brand-silver group-hover:text-brand-edge-red" aria-hidden />
                </a>
              );
            })}
          </nav>
        }
      />

      {services.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={s.key}
            id={s.key}
            className={`scroll-mt-20 py-20 md:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-mist'}`}
          >
            <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className={`lg:col-span-5 ${reversed ? 'lg:order-2' : ''}`}>
                <div className="font-heading text-6xl font-semibold leading-none text-brand-night/10 sm:text-7xl">{s.index}</div>
                <h2 className="type-h2 mt-4 text-brand-night">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-brand-slate">{s.summary}</p>
                <p className="mt-6 border-l-2 border-brand-edge-red pl-4 text-[15px] text-brand-night">
                  <span className="font-semibold">Right for you when: </span>
                  {when[s.key]}
                </p>
                <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-[15px] text-brand-slate">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-edge-red" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link to={s.path} className="btn-ghost-light mt-9">
                  Explore {s.shortTitle} <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
              <div className={`lg:col-span-7 ${reversed ? 'lg:order-1' : ''}`}>
                <div className="figure-frame">{visuals[s.key]}</div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Not sure where to start?"
        subtitle="Most engagements begin with a conversation about the problem, not the service. Tell us what’s getting in the way and we’ll suggest the right starting point."
        secondary={{ label: 'How we work', to: '/about' }}
      />
    </>
  );
}
