import { Users, Network, AppWindow, Database, Archive, Layers, HardDrive, Activity } from 'lucide-react';
import { C, Diagram, Node, Wire, Kicker, Pulse, Responsive, Band, delayStyle } from './kit';

const TITLE = 'Hybrid infrastructure topology';
const DESC =
  'Users and branch offices connect through a firewall and VPN gateway to two environments: a cloud environment running applications, a managed database and backup storage, and an on-premises environment with a hypervisor hosting virtual machines on servers and storage. A site-to-site VPN links both, with monitoring, backup and disaster recovery across everything.';

function Desktop() {
  return (
    <Diagram viewBox="0 0 600 470" title={TITLE} desc={DESC}>
      <Node x={150} y={0} w={300} h={44} title="Users & branch offices" icon={Users} tone="muted" delay={0} />
      <Wire d="M300 44 V74" delay={200} />
      <Node x={170} y={74} w={260} h={50} title="Firewall & VPN gateway" sub="Segmented · secured" icon={Network} tone="accent" delay={150} />
      <Wire d="M300 124 V142 H140 V160" accent delay={400} />
      <Wire d="M300 142 H460 V160" accent delay={400} />

      {/* Cloud */}
      <Band x={0} y={160} w={280} h={236} delay={300} />
      <Kicker x={18} y={186} accent>Cloud · AWS</Kicker>
      <Node x={16} y={200} w={248} h={50} title="Applications" sub="Web · APIs · portals" icon={AppWindow} delay={450} />
      <Node x={16} y={262} w={248} h={50} title="Managed database" sub="Replicated" icon={Database} delay={500} />
      <Node x={16} y={324} w={248} h={50} title="Backup storage" sub="Off-site copies" icon={Archive} delay={550} />

      {/* On-premises */}
      <Band x={320} y={160} w={280} h={236} delay={300} />
      <Kicker x={338} y={186} accent>On-premises</Kicker>
      <Node x={336} y={200} w={248} h={50} title="Hypervisor" sub="VMware ESXi · Hyper-V" icon={Layers} delay={450} />
      <Node x={336} y={262} w={120} h={50} title="VM · ERP" align="center" delay={520} />
      <Node x={464} y={262} w={120} h={50} title="VM · Files" align="center" delay={560} />
      <Node x={336} y={324} w={248} h={50} title="Servers & storage" sub="Compute · RAID · NAS" icon={HardDrive} delay={600} />

      {/* Site-to-site link */}
      <Wire d="M280 287 H320" dashed delay={800} />
      <g className="dg-node" style={delayStyle(850)}>
        <circle cx={300} cy={287} r={4.5} fill={C.night} stroke={C.red} strokeWidth={1.5} />
        <text x={300} y={276} textAnchor="middle" className="dg-k">
          VPN
        </text>
      </g>

      <Wire d="M140 396 V420" delay={900} />
      <Wire d="M460 396 V420" delay={900} />
      <Node
        x={0}
        y={420}
        w={600}
        h={48}
        title="Monitoring · backup · disaster recovery"
        icon={Activity}
        tone="muted"
        delay={850}
      />
      <Pulse path="M300 44 V142 H140 V200" dur={4.5} />
      <Pulse path="M300 142 H460 V200" dur={4.5} begin={2.2} />
    </Diagram>
  );
}

function Mobile() {
  return (
    <Diagram viewBox="0 0 340 356" title={TITLE} desc={DESC}>
      <Node x={40} y={0} w={260} h={40} title="Users & branches" align="center" tone="muted" />
      <Wire d="M170 40 V60" delay={200} />
      <Node x={40} y={60} w={260} h={44} title="Firewall & VPN" tone="accent" align="center" delay={150} />
      <Wire d="M170 104 V118 H80 V132" accent delay={350} />
      <Wire d="M170 118 H260 V132" accent delay={350} />
      <Band x={0} y={132} w={160} h={168} delay={300} />
      <Band x={180} y={132} w={160} h={168} delay={300} />
      <Kicker x={80} y={154} anchor="middle" accent>Cloud</Kicker>
      <Kicker x={260} y={154} anchor="middle" accent>On-premises</Kicker>
      <Node x={10} y={166} w={140} h={36} title="Applications" align="center" delay={400} />
      <Node x={10} y={210} w={140} h={36} title="Database" align="center" delay={450} />
      <Node x={10} y={254} w={140} h={36} title="Backups" align="center" delay={500} />
      <Node x={190} y={166} w={140} h={36} title="Hypervisor" align="center" delay={400} />
      <Node x={190} y={210} w={140} h={36} title="Virtual machines" align="center" delay={450} />
      <Node x={190} y={254} w={140} h={36} title="Servers" align="center" delay={500} />
      <Wire d="M160 228 H180" dashed delay={700} />
      <Wire d="M80 300 V316" delay={800} />
      <Wire d="M260 300 V316" delay={800} />
      <Node x={0} y={316} w={340} h={40} title="Monitoring · backup · DR" tone="muted" align="center" delay={750} />
    </Diagram>
  );
}

export function InfraTopology() {
  return <Responsive desktop={<Desktop />} mobile={<Mobile />} />;
}
