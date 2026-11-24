import { Link } from 'react-router-dom';
import { Server, Cloud, FileSpreadsheet, Layers, GitBranch, Cpu, Rocket, Repeat, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { Reveal } from '../components/illustrations/kit';
import { serviceByKey, ServiceKey } from '../data/services';

interface Scenario {
  icon: LucideIcon;
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  service: ServiceKey;
}

const scenarios: Scenario[] = [
  {
    icon: Server,
    title: 'IT infrastructure assessment & improvement',
    problem: 'Years of servers, switches and backups with no documented architecture — and a worry that one failure could stop the business.',
    approach: 'Audit hardware, virtualization, network and backups; remove single points of failure.',
    outcome: 'A documented, resilient environment with tested recovery.',
    service: 'infrastructure',
  },
  {
    icon: Cloud,
    title: 'Hybrid cloud & on-premises optimisation',
    problem: 'Cloud bills rising with idle resources, or on-premises systems that can’t scale.',
    approach: 'Place each workload where it runs best, connect both sides securely and govern the spend.',
    outcome: 'Lower, predictable running costs with better resilience.',
    service: 'infrastructure',
  },
  {
    icon: FileSpreadsheet,
    title: 'Business process digitization',
    problem: 'Purchase approvals, handovers and sign-offs live on paper and chat messages.',
    approach: 'Map the real workflow and replace it with role-based digital forms and approvals.',
    outcome: 'Faster approvals, an audit trail and a live view of status.',
    service: 'business',
  },
  {
    icon: Layers,
    title: 'Business application solution design',
    problem: 'Custom software that runs over budget because the developers never understood the business.',
    approach: 'Write clear requirements, data models and acceptance criteria before development starts.',
    outcome: 'Software that fits the business, delivered with less rework.',
    service: 'consulting',
  },
  {
    icon: GitBranch,
    title: 'System integration & APIs',
    problem: 'Accounting, inventory, payments and e-commerce that don’t talk to each other.',
    approach: 'Design integrations that move data reliably between systems, with error handling.',
    outcome: 'Data entered once and kept in sync everywhere.',
    service: 'business',
  },
  {
    icon: Repeat,
    title: 'Workflow automation',
    problem: 'Reconciliation, reminders and matching done by hand every day.',
    approach: 'Turn repeatable steps into rules, and send only the exceptions to people.',
    outcome: 'Capacity to grow volume without growing admin headcount.',
    service: 'business',
  },
  {
    icon: Cpu,
    title: 'AI-enabled development workflows',
    problem: 'AI tools in use, but disconnected from the codebase, standards and review process.',
    approach: 'Build project-specific agents and skills, integrated into review and testing with governance.',
    outcome: 'Faster, more consistent engineering without lowering the bar.',
    service: 'ai',
  },
  {
    icon: Rocket,
    title: 'New product architecture & launch',
    problem: 'A product idea and a development partner, but no one senior owning scope and architecture.',
    approach: 'Lead discovery, define requirements and architecture, and coordinate delivery to launch.',
    outcome: 'A clear path from concept to a stable first release.',
    service: 'product',
  },
];

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions | Tenzor Edge"
        description="Practical technology solutions for real operational problems: infrastructure improvement, hybrid cloud optimisation, digitization, application design, integration, automation, AI-enabled development and product launch."
        canonicalPath="/solutions"
      />

      <PageHeader
        badge="Solutions"
        title="Real problems, solved practically."
        subtitle="These are the situations we’re brought in for most often. Each starts with a business problem — not a product to sell."
        breadcrumbs={[{ label: 'Solutions' }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-site">
          {/* Column headings (desktop) */}
          <div className="hidden grid-cols-12 gap-8 border-b border-brand-night pb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-slate lg:grid">
            <div className="col-span-4">The situation</div>
            <div className="col-span-4">What we do</div>
            <div className="col-span-4">The result</div>
          </div>

          <Reveal as="ol" className="reveal">
            {scenarios.map((s) => {
              const Icon = s.icon;
              const svc = serviceByKey(s.service);
              return (
                <li key={s.title} className="grid gap-5 border-b border-brand-night/10 py-10 lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-night text-brand-edge-red">
                        <Icon size={18} aria-hidden />
                      </span>
                      <h2 className="font-heading text-xl font-semibold text-brand-night">{s.title}</h2>
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-brand-slate">{s.problem}</p>
                  </div>
                  <div className="relative lg:col-span-4">
                    <div className="mb-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-slate lg:hidden">What we do</div>
                    <p className="text-[15px] leading-relaxed text-brand-night lg:pt-[52px]">{s.approach}</p>
                    <Link to={svc.path} className="link-arrow mt-3">
                      {svc.shortTitle} <ArrowRight size={14} aria-hidden />
                    </Link>
                  </div>
                  <div className="lg:col-span-4 lg:pt-[52px]">
                    <div className="mb-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-slate lg:hidden">The result</div>
                    <p className="border-l-2 border-brand-edge-red pl-4 font-heading text-lg font-semibold leading-snug text-brand-night">
                      {s.outcome}
                    </p>
                  </div>
                </li>
              );
            })}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Recognise your situation?"
        subtitle="Tell us what’s happening. We’ll tell you honestly whether and how we can help."
      />
    </>
  );
}
