import { Boxes, Users, AppWindow, Zap, BarChart3, Cloud, Server, ShieldCheck } from 'lucide-react';
import { C, Diagram, Node, Wire, Kicker, Pulse, Responsive, delayStyle } from './kit';

const TITLE = 'Connected technology ecosystem';
const DESC =
  'Business operations run on business applications, which connect through an integration and API layer to automation, data and analytics, and to hybrid cloud and on-premises infrastructure on a secure network. Security and monitoring span every layer.';

function Desktop() {
  const opsX = [116, 239, 362, 485];
  const appX = [116, 280, 444];
  return (
    <Diagram viewBox="0 0 640 536" title={TITLE} desc={DESC}>
      {/* Layer labels (gutter) */}
      <Kicker x={0} y={34}>Business</Kicker>
      <Kicker x={0} y={48}>operations</Kicker>
      <Kicker x={0} y={132}>Applications</Kicker>
      <Kicker x={0} y={224} accent>Integration</Kicker>
      <Kicker x={0} y={308}>Automation</Kicker>
      <Kicker x={0} y={322}>&amp; data</Kicker>
      <Kicker x={0} y={409}>Cloud &amp;</Kicker>
      <Kicker x={0} y={423}>on-premises</Kicker>
      <Kicker x={0} y={502}>Network</Kicker>

      {/* L1 — business operations */}
      {['Orders', 'Finance', 'Inventory', 'Customers'].map((t, i) => (
        <Node key={t} x={opsX[i]} y={16} w={111} h={44} title={t} tone="muted" align="center" delay={i * 60} />
      ))}
      {/* Operations bus */}
      {opsX.map((x, i) => (
        <Wire key={`ob${i}`} d={`M${x + 55.5} 60 V80`} delay={250} />
      ))}
      <Wire d="M171.5 80 H540.5" delay={350} />
      {appX.map((x, i) => (
        <Wire key={`ab${i}`} d={`M${x + 76} 80 V100`} delay={450} />
      ))}

      {/* L2 — business applications */}
      <Node x={appX[0]} y={100} w={152} h={56} title="ERP & finance" sub="Accounts · stock" icon={Boxes} delay={300} />
      <Node x={appX[1]} y={100} w={152} h={56} title="CRM & portals" sub="Sales · service" icon={Users} delay={360} />
      <Node x={appX[2]} y={100} w={152} h={56} title="Custom apps" sub="Workflows · ops" icon={AppWindow} delay={420} />
      {appX.map((x, i) => (
        <Wire key={`ai${i}`} d={`M${x + 76} 156 V196`} accent delay={600} />
      ))}

      {/* L3 — integration fabric */}
      <Node
        x={116}
        y={196}
        w={480}
        h={48}
        title="Integration & API layer"
        sub="APIs · events · data sync"
        tone="accent"
        align="center"
        delay={500}
      />

      {/* L4 — automation & data */}
      <Wire d="M233 244 V284" accent delay={800} />
      <Wire d="M479 244 V284" accent delay={800} />
      <Node x={116} y={284} w={234} h={56} title="Automation & AI" sub="Rules · agents · workflows" icon={Zap} delay={650} />
      <Node x={362} y={284} w={234} h={56} title="Data & analytics" sub="Reporting · dashboards" icon={BarChart3} delay={700} />

      {/* Trunk to infrastructure */}
      <Wire d="M356 244 V412" accent delay={900} />

      {/* L5 — hybrid infrastructure */}
      <Node x={116} y={380} w={200} h={64} title="Cloud" sub="AWS · managed services" icon={Cloud} delay={800} />
      <Node x={396} y={380} w={200} h={64} title="On-premises" sub="Servers · virtualization" icon={Server} delay={850} />
      <Wire d="M316 412 H396" dashed delay={1000} />
      <g className="dg-node" style={delayStyle(1100)}>
        <circle cx={356} cy={412} r={5} fill={C.night} stroke={C.red} strokeWidth={1.5} />
        <text x={356} y={436} textAnchor="middle" className="dg-k">
          HYBRID
        </text>
      </g>

      {/* L6 — network */}
      <Wire d="M216 444 V476" delay={1100} />
      <Wire d="M496 444 V476" delay={1100} />
      <Node
        x={116}
        y={476}
        w={480}
        h={44}
        title="Network & connectivity"
        sub="LAN · WAN · VPN · firewalls"
        tone="muted"
        align="center"
        delay={950}
      />

      {/* Security & monitoring rail across every layer */}
      <g className="dg-node" style={delayStyle(1200)}>
        <rect x={612} y={16} width={28} height={504} rx={8} fill="rgba(255,255,255,0.02)" stroke={C.line} />
        <ShieldCheck x={617} y={24} size={18} color={C.red} strokeWidth={1.75} aria-hidden />
        <text x={626} y={268} textAnchor="middle" className="dg-k" transform="rotate(90 626 268)">
          SECURITY · MONITORING · GOVERNANCE
        </text>
      </g>
      {[38, 128, 220, 312, 412, 498].map((y) => (
        <Wire key={`r${y}`} d={`M596 ${y} H612`} dashed delay={1250} />
      ))}

      {/* Data in motion */}
      <Pulse path="M192 156 V220 H356 V412" dur={6} />
      <Pulse path="M520 156 V220 H479 V284" dur={5} begin={2.5} />
    </Diagram>
  );
}

function Mobile() {
  return (
    <Diagram viewBox="0 0 340 392" title={TITLE} desc={DESC}>
      <Node x={0} y={0} w={340} h={48} title="Business operations" sub="Orders · finance · inventory · customers" tone="muted" align="center" />
      {[53, 170, 287].map((x) => (
        <Wire key={`a${x}`} d={`M${x} 48 V68`} delay={200} />
      ))}
      <Node x={0} y={68} w={106} h={44} title="ERP" align="center" delay={150} />
      <Node x={117} y={68} w={106} h={44} title="CRM" align="center" delay={200} />
      <Node x={234} y={68} w={106} h={44} title="Custom apps" align="center" delay={250} />
      {[53, 170, 287].map((x) => (
        <Wire key={`b${x}`} d={`M${x} 112 V132`} accent delay={400} />
      ))}
      <Node x={0} y={132} w={340} h={44} title="Integration & API layer" tone="accent" align="center" delay={350} />
      <Wire d="M82 176 V196" accent delay={550} />
      <Wire d="M258 176 V196" accent delay={550} />
      <Wire d="M170 176 V272" accent delay={600} />
      <Node x={0} y={196} w={163} h={44} title="Automation & AI" align="center" delay={500} />
      <Node x={177} y={196} w={163} h={44} title="Data & analytics" align="center" delay={550} />
      <Node x={0} y={250} w={140} h={44} title="Cloud" icon={Cloud} delay={650} />
      <Node x={200} y={250} w={140} h={44} title="On-premises" align="center" delay={700} />
      <Wire d="M140 272 H200" dashed delay={800} />
      <circle cx={170} cy={272} r={4.5} fill={C.night} stroke={C.red} strokeWidth={1.5} />
      <Wire d="M70 294 V312" delay={850} />
      <Wire d="M270 294 V312" delay={850} />
      <Node x={0} y={312} w={340} h={40} title="Network & connectivity" tone="muted" align="center" delay={800} />
      <g className="dg-node" style={delayStyle(950)}>
        <ShieldCheck x={92} y={366} size={16} color={C.red} strokeWidth={1.75} aria-hidden />
        <text x={116} y={379} className="dg-k">
          SECURITY &amp; MONITORING
        </text>
      </g>
    </Diagram>
  );
}

export default function Ecosystem() {
  return <Responsive desktop={<Desktop />} mobile={<Mobile />} />;
}
