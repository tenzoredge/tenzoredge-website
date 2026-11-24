import { Telescope, FileText, Users, Rocket } from 'lucide-react';
import ServiceTemplate, { ServicePageContent } from '../../components/ServiceTemplate';
import { ProductLifecycle, lifecycleStages } from '../../components/illustrations/ProductDiagrams';

/* Who leads (L) and who supports (S) at each stage. */
const roles: { name: string; text: string; marks: ('L' | 'S' | '')[] }[] = [
  { name: 'Product ownership', text: 'What to build and why', marks: ['L', 'L', 'S', 'S', 'L', 'L', 'L'] },
  { name: 'Solution architecture', text: 'How it fits together', marks: ['S', 'S', 'L', 'S', 'S', 'S', 'S'] },
  { name: 'Engineering execution', text: 'Building it well', marks: ['', 'S', 'S', 'L', 'L', 'S', 'S'] },
];

function Mark({ m }: { m: 'L' | 'S' | '' }) {
  const label = m === 'L' ? 'Leads' : m === 'S' ? 'Supports' : 'Not involved';
  const cls =
    m === 'L'
      ? 'h-4 w-4 rounded-full bg-brand-edge-red'
      : m === 'S'
        ? 'h-4 w-4 rounded-full border-2 border-white/50'
        : 'h-px w-3 bg-white/20';
  return (
    <>
      <span className={`mx-auto block ${cls}`} aria-hidden />
      <span className="sr-only">{label}</span>
    </>
  );
}

function OwnershipMatrix() {
  return (
    <div>
      {/* Desktop matrix */}
      <div className="hidden overflow-hidden rounded-2xl border border-white/10 md:block">
        <table className="w-full table-fixed text-left">
          <caption className="sr-only">Who leads and supports each stage of the product lifecycle</caption>
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03]">
              <th scope="col" className="w-[24%] p-4 text-sm font-semibold text-brand-silver">
                Role
              </th>
              {lifecycleStages.map((s, i) => (
                <th key={s} scope="col" className="p-3 text-center align-bottom text-[13px] font-semibold leading-snug text-white">
                  <span className="mb-1 block text-xs text-brand-silver">{i + 1}</span>
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((r) => (
              <tr key={r.name} className="border-b border-white/10 last:border-b-0">
                <th scope="row" className="p-4 align-middle">
                  <span className="block font-heading text-base font-semibold text-white">{r.name}</span>
                  <span className="block text-sm font-normal text-brand-silver">{r.text}</span>
                </th>
                {r.marks.map((m, i) => (
                  <td key={i} className="p-3 text-center">
                    <Mark m={m} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: who leads each stage */}
      <ol className="space-y-2.5 md:hidden">
        {lifecycleStages.map((s, i) => {
          const lead = roles.filter((r) => r.marks[i] === 'L').map((r) => r.name);
          return (
            <li key={s} className="rounded-xl border border-white/10 bg-brand-panel px-4 py-3">
              <div className="font-heading font-semibold text-white">
                {i + 1}. {s}
              </div>
              <div className="mt-0.5 text-sm text-brand-silver">Led by: {lead.join(' & ')}</div>
            </li>
          );
        })}
      </ol>

      <div className="mt-5 flex flex-wrap gap-6 text-sm text-brand-silver">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-brand-edge-red" aria-hidden /> Leads
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border-2 border-white/50" aria-hidden /> Supports
        </span>
      </div>
    </div>
  );
}

const content: ServicePageContent = {
  key: 'product',
  seo: {
    title: 'Product & Technology Leadership | Tenzor Edge',
    description:
      'Senior product ownership and technology leadership from discovery and requirements through architecture, engineering coordination, testing, launch and continuous improvement.',
  },
  headline: (
    <>
      Senior product and technology ownership — <span className="text-brand-edge-red">without</span> a full-time hire.
    </>
  ),
  intro:
    'We own the product, guide the architecture and coordinate engineering, taking your initiative from idea to launch and beyond.',
  heroVisual: <ProductLifecycle />,
  problem: {
    heading: 'Products need an owner',
    text: 'Without someone who understands both the business and the technology, scope drifts, decisions stall and delivery slips.',
    points: [
      { title: 'Unclear requirements', text: 'Developers build what was written, not what the business needed.' },
      { title: 'No technical counterweight', text: 'Agencies and contractors make architecture decisions by default.' },
      { title: 'Launches without a plan', text: 'Testing, cutover and support are left until the last week.' },
    ],
  },
  solution: {
    heading: 'Ownership, architecture and engineering — working as one',
    intro: 'We take the product and architecture roles, and coordinate engineering — your team, contractors or an agency — through every stage.',
    visual: <OwnershipMatrix />,
  },
  capabilities: {
    heading: 'What we take on',
    groups: [
      { icon: Telescope, title: 'Discovery', items: ['Problem & user validation', 'Feasibility', 'MVP scope & roadmap'] },
      { icon: FileText, title: 'Definition', items: ['Product & functional requirements', 'User stories', 'Architecture & stack decisions'] },
      { icon: Users, title: 'Delivery coordination', items: ['Backlog & sprint governance', 'Vendor & team coordination', 'Progress reporting'] },
      { icon: Rocket, title: 'Launch & beyond', items: ['Testing & UAT oversight', 'Release & cutover planning', 'Post-launch improvement'] },
    ],
  },
  approach: [
    { title: 'Discover', text: 'Validate the idea against users, the business case and feasibility.' },
    { title: 'Define', text: 'Requirements, architecture and a realistic roadmap.' },
    { title: 'Deliver', text: 'Coordinate engineering with clear priorities and regular reviews.' },
    { title: 'Launch & improve', text: 'Release with confidence, then iterate on real usage.' },
  ],
  outcomes: [
    'A clear path from concept to working product.',
    'Requirements developers can build from.',
    'Accountable delivery with visible progress.',
    'Senior leadership without premature executive hiring.',
  ],
  related: ['consulting', 'ai'],
  cta: {
    title: 'Have a product that needs an owner?',
    text: 'Tell us where it stands today — idea, in development or already live. We’ll suggest how we can help it move forward.',
  },
};

export default function ProductTechnologyLeadership() {
  return <ServiceTemplate c={content} />;
}
