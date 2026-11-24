import { C, Diagram, Node, Wire, Kicker, Pulse, Responsive, Arrowhead, delayStyle } from './kit';

const TITLE = 'From disconnected processes to connected operations';
const DESC =
  'Today: inventory on spreadsheets, procurement by email, orders by phone, finance in a separate system and customer records on paper, with data re-keyed between them. After: all five connect to one business platform, which runs automated workflows and feeds live dashboards.';

const before = [
  { x: 6, y: 44, t: 'Inventory', s: 'Spreadsheet', r: -4 },
  { x: 128, y: 92, t: 'Procurement', s: 'Email', r: 3 },
  { x: 14, y: 156, t: 'Orders', s: 'Phone & chat', r: 2 },
  { x: 130, y: 214, t: 'Finance', s: 'Separate system', r: -3 },
  { x: 24, y: 280, t: 'Customers', s: 'Paper forms', r: 4 },
];

function Desktop() {
  const after = [
    { x: 336, y: 40, t: 'Inventory' },
    { x: 472, y: 40, t: 'Procurement' },
    { x: 336, y: 100, t: 'Orders' },
    { x: 472, y: 100, t: 'Finance' },
  ];
  return (
    <Diagram viewBox="0 0 600 400" title={TITLE} desc={DESC}>
      <Kicker x={0} y={16}>Today</Kicker>
      <Kicker x={336} y={16} accent>Connected</Kicker>

      {/* Broken, manual hand-offs */}
      {[
        'M70 88 L150 110',
        'M180 136 L90 160',
        'M80 200 L160 222',
        'M190 258 L100 282',
      ].map((d, i) => (
        <Wire key={d} d={d} dashed delay={300 + i * 60} />
      ))}
      {[
        [110, 99],
        [135, 148],
        [120, 211],
        [145, 270],
      ].map(([x, y], i) => (
        <g key={i} className="dg-node" style={delayStyle(500)}>
          <circle cx={x} cy={y} r={7} fill={C.night} stroke={C.lineStrong} />
          <path d={`M${x - 3} ${y - 3} l6 6 M${x + 3} ${y - 3} l-6 6`} stroke={C.silver} strokeWidth={1.25} />
        </g>
      ))}
      {before.map((n, i) => (
        <g key={n.t} transform={`rotate(${n.r} ${n.x + 56} ${n.y + 24})`}>
          <Node x={n.x} y={n.y} w={112} h={48} title={n.t} sub={n.s} tone="muted" align="center" delay={i * 80} />
        </g>
      ))}
      <Kicker x={0} y={372}>Re-keyed data · no single view</Kicker>

      {/* Transformation arrow */}
      <Wire d="M262 200 H310" accent width={2} delay={600} />
      <Arrowhead x={312} y={200} accent delay={800} />

      {/* Connected side */}
      {after.map((n, i) => (
        <Node key={n.t} x={n.x} y={n.y} w={128} h={44} title={n.t} align="center" delay={700 + i * 70} />
      ))}
      <Node x={404} y={160} w={128} h={44} title="Customers" align="center" delay={980} />
      {/* Bus into the platform */}
      <Wire d="M400 84 V100 M536 84 V100" accent delay={1000} />
      <Wire d="M400 144 V226 M536 144 V226 M468 204 V226" accent delay={1050} />
      <Node x={336} y={226} w={264} h={56} title="Business platform" sub="One source of truth" tone="accent" align="center" delay={1100} />
      <Wire d="M400 282 V306" accent delay={1250} />
      <Wire d="M536 282 V306" accent delay={1250} />
      <Node x={336} y={306} w={128} h={50} title="Automated" sub="Approvals · invoices" align="center" delay={1300} />
      <Node x={472} y={306} w={128} h={50} title="Visible" sub="Live dashboards" align="center" delay={1350} />
      <Kicker x={336} y={380} accent>One connected flow</Kicker>
      <Pulse path="M400 144 V254 H536 V306" dur={5} />
    </Diagram>
  );
}

function Mobile() {
  const chips = ['Inventory', 'Procurement', 'Orders', 'Finance', 'Customers'];
  return (
    <Diagram viewBox="0 0 340 430" title={TITLE} desc={DESC}>
      <Kicker x={0} y={12}>Today</Kicker>
      {chips.map((t, i) => {
        const x = i < 3 ? i * 117 : 58 + (i - 3) * 117;
        const y = i < 3 ? 24 : 80;
        return (
          <g key={t} transform={`rotate(${[-4, 3, -2, 4, -3][i]} ${x + 53} ${y + 20})`}>
            <Node x={x} y={y} w={106} h={40} title={t} tone="muted" align="center" delay={i * 60} />
          </g>
        );
      })}
      <Wire d="M170 136 V168" accent width={2} delay={500} />
      <Arrowhead x={170} y={170} dir="down" accent delay={650} />
      <Kicker x={0} y={194} accent>Connected</Kicker>
      {chips.map((t, i) => {
        const x = i < 3 ? i * 117 : 58 + (i - 3) * 117;
        const y = i < 3 ? 206 : 256;
        return <Node key={`a${t}`} x={x} y={y} w={106} h={40} title={t} align="center" delay={600 + i * 60} />;
      })}
      <Wire d="M53 246 V306 M287 246 V306 M111 296 V306 M228 296 V306" accent delay={900} />
      <Node x={0} y={306} w={340} h={48} title="Business platform" tone="accent" align="center" delay={950} />
      <Wire d="M82 354 V374 M258 354 V374" accent delay={1100} />
      <Node x={0} y={374} w={163} h={44} title="Automated" align="center" delay={1100} />
      <Node x={177} y={374} w={163} h={44} title="Visible" align="center" delay={1150} />
    </Diagram>
  );
}

export function WorkflowTransformation() {
  return <Responsive desktop={<Desktop />} mobile={<Mobile />} />;
}
