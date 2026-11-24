import { ScanSearch, Network, Scale, Map } from 'lucide-react';
import ServiceTemplate, { ServicePageContent } from '../../components/ServiceTemplate';
import { ConsultingBlueprint, ConsultingPath } from '../../components/illustrations/ConsultingDiagrams';

const content: ServicePageContent = {
  key: 'consulting',
  seo: {
    title: 'Technology Consulting & Solution Architecture | Tenzor Edge',
    description:
      'Independent technology assessment, solution architecture, vendor-neutral technology selection and implementation roadmaps that connect business requirements with sound technical decisions.',
  },
  headline: (
    <>
      Make the right technology decisions <span className="text-brand-edge-red">before</span> you commit the budget.
    </>
  ),
  intro:
    'We connect what your business needs with what gets built — assessing where you are, designing where you should be, and mapping a practical route between the two.',
  heroVisual: <ConsultingBlueprint />,
  problem: {
    heading: 'Most technology problems start as decisions',
    text: 'Projects rarely fail because of the code. They fail because the wrong system was chosen, or the right one was designed without the business in mind.',
    points: [
      { title: 'Software bought before requirements are clear', text: 'Packages that don’t fit how the business works, followed by expensive customisation.' },
      { title: 'Vendor proposals no one can challenge', text: 'Without independent technical judgement, the vendor sets the scope, the stack and the price.' },
      { title: 'Systems that don’t fit together', text: 'Each tool solves one problem and creates a new integration problem.' },
    ],
  },
  solution: {
    heading: 'Business decisions and technical decisions, connected',
    intro:
      'Every engagement moves between the business and the technology — so each technical choice can be traced back to a business reason, and forward to an outcome.',
    visual: <ConsultingPath />,
  },
  capabilities: {
    heading: 'What we help you with',
    groups: [
      {
        icon: ScanSearch,
        title: 'Assessment',
        items: ['Current-state technology review', 'Architecture health & risk', 'Cost and capability gaps'],
      },
      {
        icon: Network,
        title: 'Solution architecture',
        items: ['Target-state architecture', 'Integration & data design', 'Security & scalability'],
      },
      {
        icon: Scale,
        title: 'Technology selection',
        items: ['Vendor-neutral evaluation', 'ERP, platform & cloud choices', 'Proposal review'],
      },
      {
        icon: Map,
        title: 'Roadmap & leadership',
        items: ['Phased implementation plan', 'Requirements & specifications', 'Architecture oversight in delivery'],
      },
    ],
  },
  approach: [
    { title: 'Understand the business', text: 'Goals, processes, constraints and what success should look like.' },
    { title: 'Assess what exists', text: 'Systems, infrastructure, data flows, costs and risks.' },
    { title: 'Design the target', text: 'An architecture and technology choices, with trade-offs made explicit.' },
    { title: 'Plan the route', text: 'A phased roadmap your team and vendors can execute.' },
  ],
  outcomes: [
    'Confidence in technology investments before money is spent.',
    'Fewer overlapping tools and fewer disconnected data stores.',
    'An architecture that supports the next stage of growth.',
    'A roadmap the business and its vendors can follow.',
  ],
  related: ['product', 'business'],
  cta: {
    title: 'Facing a technology decision?',
    text: 'Talk it through with our Principal Solution Architect before you commit. We’ll help you see the options and the trade-offs clearly.',
  },
};

export default function TechnologyConsulting() {
  return <ServiceTemplate c={content} />;
}
