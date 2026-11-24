import { RefreshCw } from 'lucide-react';
import { C, Diagram, Node, Wire, Responsive, delayStyle } from './kit';

export const lifecycleStages = [
  'Product discovery',
  'Requirement definition',
  'Solution architecture',
  'Engineering coordination',
  'Testing & validation',
  'Product launch',
  'Continuous improvement',
];

/* Short labels for the ring; full names are used in text and the matrix. */
const ringLabels = ['Discovery', 'Requirements', 'Solution design', 'Build coordination', 'Testing & validation', 'Launch', 'Improvement'];

const TITLE = 'Product lifecycle';
const DESC =
  'A seven-stage loop: product discovery, requirement definition, solution architecture, engineering coordination, testing and validation, product launch and continuous improvement, which feeds back into discovery. Product ownership sits at the centre, connected to architecture and engineering.';

function Desktop() {
  const cx = 290;
  const cy = 262;
  const r = 200;
  const pts = lifecycleStages.map((_, i) => {
    const a = ((-90 + (360 / 7) * i) * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });
  // Highlight the improvement → discovery return arc.
  const a6 = ((-90 + (360 / 7) * 6) * Math.PI) / 180;
  const ret = `M${cx + r * Math.cos(a6)} ${cy + r * Math.sin(a6)} A ${r} ${r} 0 0 1 ${cx} ${cy - r}`;

  return (
    <Diagram viewBox="0 0 580 524" title={TITLE} desc={DESC}>
      <g className="dg-node">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.line} strokeWidth={1.5} />
      </g>
      <Wire d={ret} accent width={2.5} delay={1400} />

      {/* Centre: ownership connects architecture and engineering */}
      <g className="dg-node" style={delayStyle(100)}>
        <circle cx={cx} cy={cy} r={112} fill="rgba(255,255,255,0.015)" stroke={C.line} strokeDasharray="3 5" />
      </g>
      <Node x={cx - 95} y={cy - 70} w={190} h={52} title="Product ownership" sub="Vision · priorities" tone="accent" align="center" delay={150} />
      <Wire d={`M${cx - 40} ${cy - 18} V${cy + 22}`} accent delay={500} />
      <Wire d={`M${cx + 40} ${cy - 18} V${cy + 22}`} accent delay={500} />
      <Node x={cx - 92} y={cy + 22} w={88} h={40} title="Architecture" align="center" titleClass="dg-s" delay={300} />
      <Node x={cx + 4} y={cy + 22} w={88} h={40} title="Engineering" align="center" titleClass="dg-s" delay={350} />

      {pts.map((p, i) => (
        <g key={lifecycleStages[i]}>
          <Node
            x={p.x - 75}
            y={p.y - 22}
            w={150}
            h={44}
            title={ringLabels[i]}
            align="center"
            tone={i === 2 ? 'accent' : 'default'}
            delay={400 + i * 120}
          />
          <g className="dg-node" style={delayStyle(400 + i * 120)}>
            <circle cx={p.x - 75} cy={p.y - 22} r={11} fill={C.night} stroke={i === 2 ? C.red : C.lineStrong} />
            <text x={p.x - 75} y={p.y - 18} textAnchor="middle" className="dg-s" style={{ fontSize: 10, fontWeight: 600, fill: '#fff' }}>
              {i + 1}
            </text>
          </g>
        </g>
      ))}
      <g className="dg-node" style={delayStyle(1500)}>
        <RefreshCw x={128} y={48} size={18} color={C.red} strokeWidth={1.75} aria-hidden />
      </g>
    </Diagram>
  );
}

function Mobile() {
  return (
    <div className="relative">
      <ol className="relative space-y-2.5 border-l border-white/15 pl-5">
        {lifecycleStages.map((s, i) => (
          <li key={s} className="relative">
            <span
              className={`absolute -left-[29px] top-1/2 flex h-[18px] w-[18px] -translate-y-1/2 items-center justify-center rounded-full border text-[10px] font-semibold text-white ${
                i === 2 ? 'border-brand-edge-red bg-brand-edge-red' : 'border-white/30 bg-brand-night'
              }`}
            >
              {i + 1}
            </span>
            <div className={`rounded-lg border px-4 py-2.5 text-[15px] font-medium text-white ${i === 2 ? 'border-brand-edge-red/60 bg-brand-edge-red/10' : 'border-white/10 bg-brand-panel'}`}>
              {s}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex items-center gap-2 pl-5 text-sm text-brand-silver">
        <RefreshCw size={15} className="text-brand-edge-red" aria-hidden /> Improvement feeds the next discovery cycle
      </div>
    </div>
  );
}

export function ProductLifecycle() {
  return <Responsive desktop={<Desktop />} mobile={<Mobile />} />;
}
