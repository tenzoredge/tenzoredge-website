import { FolderGit2, Wrench, ShieldCheck, ClipboardList, Code2, GitPullRequest, TestTube2 } from 'lucide-react';
import { C, Diagram, Node, Wire, Kicker, Pulse, Responsive, Arrowhead, delayStyle } from './kit';

const TITLE = 'Project-specific AI agents around your codebase';
const DESC =
  'Your existing codebase and project context sit at the centre. A requirements agent, coding agent, review agent and test agent all work from that context, using a shared library of reusable engineering skills. Engineering governance controls what they do, and everything plugs into your existing lifecycle: plan, build, review, test and release.';

function Desktop() {
  const agents = [
    { x: 0, y: 120, t: 'Requirements agent', s: 'User stories · criteria', i: ClipboardList },
    { x: 410, y: 120, t: 'Coding agent', s: 'Follows your patterns', i: Code2 },
    { x: 0, y: 270, t: 'Review agent', s: 'Standards · security', i: GitPullRequest },
    { x: 410, y: 270, t: 'Test agent', s: 'Writes & runs tests', i: TestTube2 },
  ];
  const sdlc = ['Plan', 'Build', 'Review', 'Test', 'Release'];
  return (
    <Diagram viewBox="0 0 600 480" title={TITLE} desc={DESC}>
      <Node x={200} y={20} w={200} h={52} title="Engineering skills" sub="Reusable · versioned" icon={Wrench} delay={0} />
      <Wire d="M200 46 H95 V120" dashed delay={500} />
      <Wire d="M400 46 H505 V120" dashed delay={500} />
      <Wire d="M300 72 V150" accent delay={400} />

      {agents.map((a, i) => (
        <Node key={a.t} x={a.x} y={a.y} w={190} h={60} title={a.t} sub={a.s} icon={a.i} delay={200 + i * 100} />
      ))}
      <Wire d="M190 150 C 205 150, 205 190, 220 190" accent delay={700} />
      <Wire d="M410 150 C 395 150, 395 190, 380 190" accent delay={700} />
      <Wire d="M190 300 C 205 300, 205 260, 220 260" accent delay={750} />
      <Wire d="M410 300 C 395 300, 395 260, 380 260" accent delay={750} />

      {/* Codebase core */}
      <g className="dg-node" style={delayStyle(150)}>
        <rect x={220} y={150} width={160} height={150} rx={14} fill={C.night} />
        <rect x={220} y={150} width={160} height={150} rx={14} fill={C.redFill} stroke={C.redLine} />
        <FolderGit2 x={286} y={166} size={28} color={C.red} strokeWidth={1.5} aria-hidden />
        <text x={300} y={218} textAnchor="middle" className="dg-h">
          Your codebase
        </text>
        <text x={300} y={238} textAnchor="middle" className="dg-s">
          &amp; project context
        </text>
        <text x={300} y={268} textAnchor="middle" className="dg-s">
          Code · docs · conventions
        </text>
      </g>

      <Wire d="M300 300 V334" accent delay={900} />
      <Node x={180} y={334} w={240} h={50} title="Engineering governance" sub="Approvals · audit · limits" icon={ShieldCheck} delay={850} />
      <Wire d="M300 384 V420" delay={1050} />
      <Arrowhead x={300} y={420} dir="down" delay={1150} />
      <Kicker x={0} y={414}>Your lifecycle</Kicker>
      {sdlc.map((t, i) => (
        <g key={t}>
          <Node x={i * 124} y={426} w={104} h={40} title={t} align="center" tone={i === 2 ? 'accent' : 'default'} delay={1000 + i * 70} />
          {i < sdlc.length - 1 && <Arrowhead x={i * 124 + 116} y={446} delay={1100 + i * 70} />}
        </g>
      ))}
      <Pulse path="M300 72 V150" dur={2.5} />
      <Pulse path="M190 150 C 205 150, 205 190, 220 190" dur={3} begin={1} />
    </Diagram>
  );
}

function Mobile() {
  const agents = ['Requirements', 'Coding', 'Review', 'Test'];
  const sdlc = ['Plan', 'Build', 'Review', 'Test', 'Release'];
  return (
    <Diagram viewBox="0 0 340 372" title={TITLE} desc={DESC}>
      <Node x={60} y={0} w={220} h={40} title="Engineering skills" align="center" />
      <Wire d="M170 40 V60" accent delay={300} />
      <Node x={0} y={60} w={340} h={56} title="Your codebase & context" sub="Code · docs · conventions" tone="accent" align="center" titleClass="dg-h" delay={150} />
      {agents.map((t, i) => {
        const x = (i % 2) * 177;
        const y = 136 + Math.floor(i / 2) * 52;
        return <Node key={t} x={x} y={y} w={163} h={40} title={`${t} agent`} align="center" delay={300 + i * 80} />;
      })}
      <Wire d="M82 116 V136 M258 116 V136" accent delay={500} />
      <Wire d="M170 228 V248" delay={800} />
      <Node x={40} y={248} w={260} h={40} title="Engineering governance" tone="muted" align="center" delay={750} />
      <Wire d="M170 288 V312" delay={900} />
      {sdlc.map((t, i) => (
        <Node key={t} x={i * 69} y={318} w={64} h={36} title={t} align="center" tone={i === 2 ? 'accent' : 'default'} titleClass="dg-s" delay={900 + i * 60} />
      ))}
    </Diagram>
  );
}

export function AiAgentsDiagram() {
  return <Responsive desktop={<Desktop />} mobile={<Mobile />} />;
}
