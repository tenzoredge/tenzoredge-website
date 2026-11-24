import { Cloud, Server, Network, DatabaseBackup, AppWindow, Layers, HardDrive, ShieldCheck, Activity } from 'lucide-react';
import ServiceTemplate, { ServicePageContent } from '../../components/ServiceTemplate';
import { InfraTopology } from '../../components/illustrations/InfrastructureDiagrams';
import { Reveal } from '../../components/illustrations/kit';

/* A layered view of the environment we engineer — top (closest to users) to bottom. */
const layers = [
  { icon: AppWindow, name: 'Applications', text: 'Business apps and services hosted where they run best — cloud, on-premises or both.' },
  { icon: Layers, name: 'Virtualization & compute', text: 'VMware ESXi and Hyper-V clusters, cloud instances, right-sized capacity.' },
  { icon: Network, name: 'Network & connectivity', text: 'LAN, WAN, site-to-site VPN, segmentation and firewall policy.' },
  { icon: HardDrive, name: 'Servers & storage', text: 'Reliable hardware, storage and redundancy without single points of failure.' },
];

function LayerStack() {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
      <Reveal as="ol" className="reveal space-y-3 lg:col-span-8">
        {layers.map((l, i) => {
          const Icon = l.icon;
          return (
            <li
              key={l.name}
              className="grid grid-cols-[44px_1fr] items-center gap-4 rounded-xl border border-white/10 bg-brand-panel p-4 sm:grid-cols-[44px_220px_1fr] sm:p-5"
              style={{ marginLeft: `${i * 2}%`, marginRight: `${(layers.length - 1 - i) * 2}%` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-night text-brand-edge-red">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="font-heading text-lg font-semibold text-white">{l.name}</h3>
              <p className="col-span-2 text-[15px] leading-relaxed text-brand-silver sm:col-span-1">{l.text}</p>
            </li>
          );
        })}
      </Reveal>
      <div className="space-y-4 lg:col-span-4">
        {[
          { icon: ShieldCheck, t: 'Security across every layer', s: 'Access control, patching and hardening.' },
          { icon: Activity, t: 'Monitoring across every layer', s: 'Know about problems before users do.' },
          { icon: DatabaseBackup, t: 'Backup & recovery for every layer', s: 'Restores that are tested, not assumed.' },
        ].map((x) => {
          const Icon = x.icon;
          return (
            <div key={x.t} className="flex gap-4 rounded-xl border border-brand-edge-red/40 bg-brand-edge-red/10 p-5">
              <Icon size={22} className="mt-0.5 shrink-0 text-brand-edge-red" aria-hidden />
              <div>
                <div className="font-heading font-semibold text-white">{x.t}</div>
                <div className="mt-1 text-[15px] text-brand-silver">{x.s}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const content: ServicePageContent = {
  key: 'infrastructure',
  seo: {
    title: 'Infrastructure & Cloud Engineering | Tenzor Edge',
    description:
      'Design, implementation and optimisation of cloud, on-premises and hybrid infrastructure: AWS, VMware ESXi and Hyper-V virtualization, networking, security, backup and disaster recovery.',
  },
  headline: (
    <>
      Infrastructure that stays up, stays secure and stays <span className="text-brand-edge-red">within budget</span>.
    </>
  ),
  intro:
    'We design and run cloud, on-premises and hybrid environments — from servers and networks to virtualization, backup and cloud cost control.',
  heroVisual: <InfraTopology />,
  problem: {
    heading: 'When infrastructure becomes the bottleneck',
    text: 'Infrastructure is invisible when it works. When it doesn’t, the whole business stops.',
    points: [
      { title: 'Downtime at the worst moment', text: 'Servers and networks that fail during month-end, peak season or a client demo.' },
      { title: 'Backups no one has tested', text: 'Recovery plans that exist on paper but have never been tried.' },
      { title: 'Cloud bills that only go up', text: 'Idle resources and over-sized instances with no one watching the spend.' },
    ],
  },
  solution: {
    heading: 'Every layer engineered to work together',
    intro: 'We look at the whole environment — not one server or one cloud account at a time.',
    visual: <LayerStack />,
  },
  capabilities: {
    heading: 'What we deliver',
    groups: [
      { icon: Cloud, title: 'Cloud & hybrid', items: ['AWS architecture & migration', 'Hybrid cloud connectivity', 'Cloud cost governance'] },
      { icon: Server, title: 'On-premises & virtualization', items: ['VMware ESXi & Hyper-V', 'Server consolidation', 'Capacity planning'] },
      { icon: Network, title: 'Networking & security', items: ['LAN, WAN & VPN design', 'Segmentation & firewalls', 'Access control'] },
      { icon: DatabaseBackup, title: 'Resilience', items: ['Backup strategy', 'Disaster recovery planning', 'Recovery testing & runbooks'] },
    ],
  },
  approach: [
    { title: 'Audit', text: 'Map what you have, how it’s connected and where the risks are.' },
    { title: 'Design', text: 'A target topology for cloud, on-premises or hybrid — sized for real usage.' },
    { title: 'Implement & harden', text: 'Migrate, configure and secure with minimal disruption.' },
    { title: 'Monitor & rehearse', text: 'Set up monitoring and test recovery so it works when needed.' },
  ],
  outcomes: [
    'Fewer outages and faster recovery when something does fail.',
    'Predictable cloud spend with no unexplained line items.',
    'A network and security setup you understand and control.',
    'Documented environments your team can run.',
  ],
  related: ['consulting', 'business'],
  cta: {
    title: 'Is your infrastructure ready for the next stage?',
    text: 'Start with a conversation about your current environment. We’ll point out the risks and the quickest improvements.',
  },
};

export default function InfrastructureCloudEngineering() {
  return <ServiceTemplate c={content} />;
}
