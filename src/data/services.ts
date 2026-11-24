import { Compass, Server, Workflow, Cpu, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ServiceKey = 'consulting' | 'infrastructure' | 'business' | 'ai' | 'product';

export interface ServiceSummary {
  key: ServiceKey;
  index: string;
  title: string;
  shortTitle: string;
  path: string;
  icon: LucideIcon;
  /** One line, used in navigation and compact lists. */
  tagline: string;
  /** Two sentences at most, used on the homepage and services overview. */
  summary: string;
  highlights: string[];
}

export const services: ServiceSummary[] = [
  {
    key: 'consulting',
    index: '01',
    title: 'Technology Consulting & Solution Architecture',
    shortTitle: 'Technology Consulting',
    path: '/services/technology-consulting',
    icon: Compass,
    tagline: 'Make the right technology decisions before you commit budget.',
    summary:
      'Independent assessment, architecture and roadmaps that connect what the business needs with what gets built.',
    highlights: ['Technology assessments', 'Solution architecture', 'Vendor-neutral evaluation', 'Implementation roadmaps'],
  },
  {
    key: 'infrastructure',
    index: '02',
    title: 'Infrastructure & Cloud Engineering',
    shortTitle: 'Infrastructure & Cloud',
    path: '/services/infrastructure-cloud-engineering',
    icon: Server,
    tagline: 'Reliable cloud, on-premises and hybrid environments.',
    summary:
      'Servers, virtualization, networks and cloud designed to stay up, stay secure and stay within budget.',
    highlights: ['Hybrid cloud & AWS', 'Virtualization (VMware, Hyper-V)', 'Networking & security', 'Backup & disaster recovery'],
  },
  {
    key: 'business',
    index: '03',
    title: 'Business Solutions & Digital Transformation',
    shortTitle: 'Business Solutions',
    path: '/services/business-solutions-digital-transformation',
    icon: Workflow,
    tagline: 'Turn manual work into connected, automated operations.',
    summary:
      'We digitize workflows, connect the applications you already use and automate the steps that slow your team down.',
    highlights: ['Workflow digitization', 'Business applications', 'System integration & APIs', 'Process automation'],
  },
  {
    key: 'ai',
    index: '04',
    title: 'AI-Enabled Software Engineering',
    shortTitle: 'AI-Enabled Engineering',
    path: '/services/ai-enabled-software-engineering',
    icon: Cpu,
    tagline: 'Project-specific AI agents and skills for your development lifecycle.',
    summary:
      'We build AI agents and reusable skills that understand your codebase and fit the way your team already ships software.',
    highlights: ['Codebase-aware AI agents', 'Reusable engineering skills', 'AI in review & testing', 'Engineering governance'],
  },
  {
    key: 'product',
    index: '05',
    title: 'Product & Technology Leadership',
    shortTitle: 'Product & Tech Leadership',
    path: '/services/product-technology-leadership',
    icon: Layers,
    tagline: 'Senior product and technical ownership, from idea to launch.',
    summary:
      'Experienced leadership that owns the product, guides the architecture and keeps engineering delivery on track.',
    highlights: ['Product discovery', 'Requirement definition', 'Architecture oversight', 'Delivery & launch'],
  },
];

export const serviceByKey = (key: ServiceKey) => services.find((s) => s.key === key)!;
