import { Target, Gauge, Boxes, Compass, Network, ListChecks, Map } from 'lucide-react';
import { C, Diagram, Node, Wire, Kicker, Pulse, Responsive, Arrowhead, delayStyle } from './kit';

const BP_TITLE = 'Solution architecture blueprint';
const BP_DESC =
  'Business goals, constraints and existing systems feed into one solution architecture, which produces a target architecture, technology choices and a roadmap that lead to implementation and operational outcomes.';

function BlueprintDesktop() {
  const ins = [
    { y: 60, t: 'Business goals', s: 'Growth · cost · risk', i: Target },
    { y: 170, t: 'Constraints', s: 'Budget · compliance · time', i: Gauge },
    { y: 280, t: 'Existing systems', s: 'Apps · infra · data', i: Boxes },
  ];
  const outs = [
    { y: 60, t: 'Target architecture', s: 'Blueprint · standards', i: Network },
    { y: 170, t: 'Technology choices', s: 'Vendor-neutral', i: ListChecks },
    { y: 280, t: 'Roadmap', s: 'Phased · risk-managed', i: Map },
  ];
  const inY = [160, 200, 240];
  return (
    <Diagram viewBox="0 0 600 440" title={BP_TITLE} desc={BP_DESC}>
      <Kicker x={0} y={36}>What you bring</Kicker>
      <Kicker x={600} y={36} anchor="end">What you get</Kicker>

      {ins.map((n, i) => (
        <g key={n.t}>
          <Node x={0} y={n.y} w={180} h={58} title={n.t} sub={n.s} icon={n.i} delay={i * 100} />
          <Wire d={`M180 ${n.y + 29} C 200 ${n.y + 29}, 200 ${inY[i]}, 214 ${inY[i]}`} delay={300 + i * 80} />
        </g>
      ))}

      {/* Core */}
      <g className="dg-node" style={delayStyle(250)}>
        <rect x={214} y={108} width={172} height={184} rx={14} fill={C.night} />
        <rect x={214} y={108} width={172} height={184} rx={14} fill={C.redFill} stroke={C.redLine} />
        <Compass x={284} y={126} size={32} color={C.red} strokeWidth={1.5} aria-hidden />
        <text x={300} y={186} textAnchor="middle" className="dg-h">
          Solution
        </text>
        <text x={300} y={206} textAnchor="middle" className="dg-h">
          architecture
        </text>
        {['Boundaries', 'Integrations', 'Trade-offs'].map((t, i) => (
          <text key={t} x={300} y={234 + i * 17} textAnchor="middle" className="dg-s">
            {t}
          </text>
        ))}
      </g>

      {outs.map((n, i) => (
        <g key={n.t}>
          <Wire d={`M386 ${inY[i]} C 400 ${inY[i]}, 400 ${n.y + 29}, 420 ${n.y + 29}`} accent delay={700 + i * 80} />
          <Node x={420} y={n.y} w={180} h={58} title={n.t} sub={n.s} icon={n.i} delay={600 + i * 100} />
        </g>
      ))}

      <Wire d="M300 292 V376" accent delay={1000} />
      <Arrowhead x={300} y={376} dir="down" accent delay={1200} />
      <Node
        x={0}
        y={382}
        w={600}
        h={52}
        title="Implementation  →  Operational outcomes"
        tone="muted"
        align="center"
        delay={1100}
      />
      <Pulse path="M180 229 C 200 229, 200 200, 214 200 H386 C 400 200, 400 199, 420 199" dur={4} />
    </Diagram>
  );
}

function BlueprintMobile() {
  return (
    <Diagram viewBox="0 0 340 300" title={BP_TITLE} desc={BP_DESC}>
      {['Goals', 'Constraints', 'Systems'].map((t, i) => (
        <g key={t}>
          <Node x={i * 117} y={0} w={106} h={40} title={t} align="center" delay={i * 80} />
          <Wire d={`M${53 + i * 117} 40 V64`} delay={300} />
        </g>
      ))}
      <Node x={0} y={64} w={340} h={64} title="Solution architecture" sub="Boundaries · integrations · trade-offs" tone="accent" align="center" titleClass="dg-h" delay={250} />
      {['Blueprint', 'Tech choices', 'Roadmap'].map((t, i) => (
        <g key={t}>
          <Wire d={`M${53 + i * 117} 128 V152`} accent delay={600} />
          <Node x={i * 117} y={152} w={106} h={40} title={t} align="center" delay={500 + i * 80} />
        </g>
      ))}
      <Wire d="M170 192 V236" accent delay={900} />
      <Arrowhead x={170} y={236} dir="down" accent delay={1000} />
      <Node x={0} y={242} w={340} h={48} title="Implementation → Outcomes" tone="muted" align="center" delay={900} />
    </Diagram>
  );
}

export function ConsultingBlueprint() {
  return <Responsive desktop={<BlueprintDesktop />} mobile={<BlueprintMobile />} />;
}

/* ------------------------------------------------------------------ */
/* Business ↔ technology decision path                                 */
/* ------------------------------------------------------------------ */

const stages = [
  { t: 'Business requirements', s: 'Goals · processes · limits', lane: 'b' },
  { t: 'Technology assessment', s: 'Systems · risks · gaps', lane: 't' },
  { t: 'Solution architecture', s: 'Design · integration', lane: 'm' },
  { t: 'Technology selection', s: 'Vendor-neutral evaluation', lane: 't' },
  { t: 'Implementation roadmap', s: 'Phases · budget · risk', lane: 'm' },
  { t: 'Operational outcomes', s: 'Measurable results', lane: 'b' },
] as const;

const laneY = { b: 70, m: 160, t: 250 };

function PathDesktop() {
  const xs = [100, 284, 468, 652, 836, 1020];
  const pts = stages.map((s, i) => ({ x: xs[i], y: laneY[s.lane] }));
  let d = `M${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    const mx = (a.x + b.x) / 2;
    d += ` C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
  }
  return (
    <Diagram
      viewBox="0 0 1120 320"
      title="From business requirements to operational outcomes"
      desc="Six connected stages alternate between business and technology: business requirements, technology assessment, solution architecture, technology selection, implementation roadmap and operational outcomes."
    >
      {/* Lanes */}
      <g className="dg-node">
        <rect x={0} y={34} width={1120} height={72} rx={12} fill="rgba(255,255,255,0.02)" stroke={C.line} strokeDasharray="3 5" />
        <rect x={0} y={214} width={1120} height={72} rx={12} fill="rgba(255,255,255,0.02)" stroke={C.line} strokeDasharray="3 5" />
      </g>
      <Kicker x={12} y={24}>Business</Kicker>
      <Kicker x={12} y={306}>Technology</Kicker>

      <Wire d={d} accent width={2} delay={200} />
      {pts.map((p, i) => {
        const s = stages[i];
        return (
          <Node
            key={s.t}
            x={p.x - 88}
            y={p.y - 28}
            w={176}
            h={56}
            title={s.t}
            sub={s.s}
            align="center"
            tone={i === 2 ? 'accent' : 'default'}
            delay={150 + i * 150}
          />
        );
      })}
      <Pulse path={d} dur={9} />
    </Diagram>
  );
}

function PathMobile() {
  return (
    <ol className="relative space-y-3">
      {stages.map((s, i) => (
        <li key={s.t} className="relative flex items-stretch gap-3">
          <span
            className={`w-1 shrink-0 rounded-full ${s.lane === 'b' ? 'bg-white/40' : s.lane === 'm' ? 'bg-brand-edge-red' : 'bg-white/15'}`}
            aria-hidden
          />
          <div
            className={`flex-1 rounded-xl border px-4 py-3 ${
              i === 2 ? 'border-brand-edge-red/60 bg-brand-edge-red/10' : 'border-white/10 bg-brand-panel'
            }`}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-silver">
              {String(i + 1).padStart(2, '0')} · {s.lane === 'b' ? 'Business' : s.lane === 't' ? 'Technology' : 'Bridge'}
            </div>
            <div className="mt-1 font-heading text-base font-semibold text-white">{s.t}</div>
            <div className="text-sm text-brand-silver">{s.s}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ConsultingPath() {
  return <Responsive desktop={<PathDesktop />} mobile={<PathMobile />} />;
}
