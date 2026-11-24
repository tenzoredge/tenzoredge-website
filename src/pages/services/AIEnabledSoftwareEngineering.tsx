import { Bot, Wrench, GitPullRequest, ShieldCheck } from 'lucide-react';
import ServiceTemplate, { ServicePageContent } from '../../components/ServiceTemplate';
import { AiAgentsDiagram } from '../../components/illustrations/AiDiagrams';
import { Reveal } from '../../components/illustrations/kit';

/* Where agents and skills plug into an existing lifecycle. */
const lanes = [
  { stage: 'Plan', agent: 'Requirements agent', skills: ['Story drafting', 'Acceptance criteria'] },
  { stage: 'Build', agent: 'Coding agent', skills: ['Project conventions', 'Scaffolding'] },
  { stage: 'Review', agent: 'Review agent', skills: ['Coding standards', 'Security checks'] },
  { stage: 'Test', agent: 'Test agent', skills: ['Test generation', 'Regression runs'] },
  { stage: 'Release', agent: 'Release checks', skills: ['Change notes', 'Readiness checks'] },
];

function SdlcLanes() {
  return (
    <div>
      <Reveal as="ol" className="reveal grid gap-3 md:grid-cols-5">
        {lanes.map((l, i) => (
          <li key={l.stage} className="flex flex-col rounded-xl border border-white/10 bg-brand-panel">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="font-heading text-lg font-semibold text-white">{l.stage}</span>
              <span className="text-xs font-semibold text-brand-silver">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="flex-1 space-y-3 p-4">
              <div className="flex items-center gap-2 rounded-lg border border-brand-edge-red/50 bg-brand-edge-red/10 px-3 py-2 text-sm font-medium text-white">
                <Bot size={15} className="shrink-0 text-brand-edge-red" aria-hidden />
                {l.agent}
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {l.skills.map((s) => (
                  <li key={s} className="rounded-md border border-white/15 px-2 py-1 text-[13px] text-brand-silver">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </Reveal>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[15px] text-white">
          <span className="font-heading font-semibold">Shared context:</span>
          <span className="text-brand-silver">your codebase, docs and conventions</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[15px] text-white">
          <ShieldCheck size={18} className="shrink-0 text-brand-edge-red" aria-hidden />
          <span className="font-heading font-semibold">Governance:</span>
          <span className="text-brand-silver">human approval, audit, guardrails</span>
        </div>
      </div>
    </div>
  );
}

const content: ServicePageContent = {
  key: 'ai',
  seo: {
    title: 'AI-Enabled Software Engineering | Tenzor Edge',
    description:
      'Project-specific AI agents and reusable engineering skills that understand your existing codebase and plug into your software development lifecycle — with engineering governance built in.',
  },
  headline: (
    <>
      AI that understands <span className="text-brand-edge-red">your</span> codebase and the way your team ships.
    </>
  ),
  intro:
    'We build project-specific AI agents and reusable engineering skills that work inside your existing development lifecycle — not generic chat tools on the side.',
  heroVisual: <AiAgentsDiagram />,
  problem: {
    heading: 'Generic AI tools don’t know your system',
    text: 'Most teams already use AI assistants. Few get consistent value, because the tools know nothing about their architecture, conventions or process.',
    points: [
      { title: 'Suggestions that ignore your architecture', text: 'Code that compiles but breaks patterns, boundaries and standards.' },
      { title: 'Every developer prompting differently', text: 'No shared context, no reusable practice, uneven results.' },
      { title: 'Adoption without guardrails', text: 'Unclear rules on what AI may change, review or ship.' },
    ],
  },
  solution: {
    heading: 'Agents and skills, placed where they help',
    intro:
      'Each stage of your lifecycle gets the right agent, equipped with reusable skills and your project’s context — and governed by your engineering rules.',
    visual: <SdlcLanes />,
  },
  capabilities: {
    heading: 'What we deliver',
    groups: [
      { icon: Bot, title: 'Project-specific agents', items: ['Agents grounded in your codebase', 'Project context & instruction files', 'Domain and architecture awareness'] },
      { icon: Wrench, title: 'Reusable engineering skills', items: ['Custom skills & tool integrations', 'MCP-based tooling', 'Shared across the team'] },
      { icon: GitPullRequest, title: 'Lifecycle integration', items: ['Requirements & planning support', 'AI-assisted review', 'Test generation & validation'] },
      { icon: ShieldCheck, title: 'Engineering governance', items: ['Approval & audit rules', 'Safe tool permissions', 'Team enablement'] },
    ],
  },
  approach: [
    { title: 'Assess your lifecycle', text: 'Review the repository, workflow and where AI could help — or hurt.' },
    { title: 'Model the context', text: 'Capture architecture, conventions and domain knowledge for agents to use.' },
    { title: 'Build agents & skills', text: 'Develop, test and integrate them into your tools and pipelines.' },
    { title: 'Govern & enable', text: 'Roll out with clear rules, and train the team to use them well.' },
  ],
  outcomes: [
    'AI output that follows your architecture and standards.',
    'Consistent, repeatable practice across the team.',
    'Faster review and testing without lowering the bar.',
    'Clear control over what AI can and cannot do.',
  ],
  related: ['product', 'consulting'],
  cta: {
    title: 'Ready to make AI part of how you engineer?',
    text: 'Tell us about your codebase and delivery process. We’ll identify where project-specific agents and skills would make the biggest difference.',
  },
};

export default function AIEnabledSoftwareEngineering() {
  return <ServiceTemplate c={content} />;
}
