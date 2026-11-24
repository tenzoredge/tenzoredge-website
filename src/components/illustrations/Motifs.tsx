import type { ServiceKey } from '../../data/services';

/**
 * Small, decorative line motifs — one per service — used in the homepage
 * capability showcase. Purely decorative (aria-hidden); the adjacent text
 * carries the meaning.
 */
interface MotifProps {
  kind: ServiceKey;
  tone?: 'dark' | 'light';
  className?: string;
}

export default function Motif({ kind, tone = 'dark', className = '' }: MotifProps) {
  const line = tone === 'dark' ? 'rgba(163,169,184,0.45)' : 'rgba(91,96,112,0.45)';
  const faint = tone === 'dark' ? 'rgba(163,169,184,0.18)' : 'rgba(91,96,112,0.18)';
  const fill = tone === 'dark' ? '#161A23' : '#FFFFFF';
  const red = '#FF2D3D';
  const common = {
    viewBox: '0 0 240 140',
    className: `block w-full h-auto ${className}`,
    'aria-hidden': true,
    fill: 'none',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (kind) {
    case 'consulting':
      // Inputs converge into one architecture, which fans out into decisions.
      return (
        <svg {...common}>
          {[30, 70, 110].map((y) => (
            <g key={y}>
              <rect x={14} y={y - 9} width={44} height={18} rx={5} fill={fill} stroke={line} />
              <path d={`M58 ${y} C 85 ${y}, 85 70, 100 70`} stroke={faint} />
            </g>
          ))}
          <rect x={100} y={44} width={52} height={52} rx={10} fill="rgba(255,45,61,0.12)" stroke={red} />
          <path d="M116 70 h20 M126 60 v20" stroke={red} />
          {[30, 70, 110].map((y) => (
            <g key={`o${y}`}>
              <path d={`M152 70 C 167 70, 167 ${y}, 182 ${y}`} stroke={y === 70 ? red : faint} />
              <rect x={182} y={y - 9} width={44} height={18} rx={5} fill={fill} stroke={y === 70 ? red : line} />
            </g>
          ))}
        </svg>
      );
    case 'infrastructure':
      // Cloud and on-premises racks joined by a hybrid link.
      return (
        <svg {...common}>
          <path
            d="M34 62 a18 18 0 0 1 8 -34 a24 24 0 0 1 44 6 a16 16 0 0 1 6 28 z"
            fill={fill}
            stroke={line}
          />
          <path d="M48 48 h30" stroke={faint} />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={150} y={22 + i * 32} width={72} height={24} rx={5} fill={fill} stroke={i === 1 ? red : line} />
              <circle cx={162} cy={34 + i * 32} r={2.5} fill={i === 1 ? red : line} stroke="none" />
              <path d={`M172 ${34 + i * 32} h38`} stroke={faint} />
            </g>
          ))}
          <path d="M92 50 H120 V66 H150" stroke={red} strokeDasharray="4 4" />
          <path d="M20 118 H222" stroke={line} />
          <path d="M62 62 V118 M186 94 V118" stroke={faint} />
          <circle cx={120} cy={118} r={4} fill={fill} stroke={red} />
        </svg>
      );
    case 'business':
      // Scattered tasks on the left become a connected flow on the right.
      return (
        <svg {...common}>
          {[
            [16, 24],
            [52, 58],
            [22, 96],
            [70, 104],
            [66, 18],
          ].map(([x, y], i) => (
            <rect
              key={i}
              x={x}
              y={y}
              width={24}
              height={18}
              rx={4}
              fill={fill}
              stroke={line}
              transform={`rotate(${[-8, 6, -4, 10, 4][i]} ${x + 12} ${y + 9})`}
            />
          ))}
          <path d="M104 70 H128" stroke={red} />
          <path d="M122 64 L128 70 L122 76" stroke={red} />
          {[0, 1, 2].map((i) => (
            <rect key={`f${i}`} x={140 + i * 32} y={58} width={24} height={24} rx={5} fill={fill} stroke={i === 2 ? red : line} />
          ))}
          <path d="M164 70 h8 M196 70 h8" stroke={red} />
          <path d="M152 58 V36 H216 V58" stroke={faint} />
          <path d="M152 82 V104 H216 V82" stroke={faint} />
        </svg>
      );
    case 'ai':
      // A codebase at the centre with specialised agents around it.
      return (
        <svg {...common}>
          <rect x={86} y={38} width={68} height={64} rx={10} fill={fill} stroke={line} />
          <path d="M106 60 l-8 10 l8 10 M134 60 l8 10 l-8 10 M124 56 l-8 28" stroke={red} />
          {[
            [34, 30],
            [34, 110],
            [206, 30],
            [206, 110],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <path d={`M${cx} ${cy} L ${cx < 120 ? 86 : 154} ${cy < 70 ? 50 : 90}`} stroke={i === 0 ? red : faint} />
              <circle cx={cx} cy={cy} r={11} fill={fill} stroke={i === 0 ? red : line} />
              <circle cx={cx} cy={cy} r={3} fill={i === 0 ? red : line} stroke="none" />
            </g>
          ))}
          <ellipse cx={120} cy={70} rx={104} ry={56} stroke={faint} strokeDasharray="3 6" />
        </svg>
      );
    case 'product':
      // A lifecycle loop with the current stage highlighted.
      return (
        <svg {...common}>
          <circle cx={120} cy={70} r={50} stroke={line} />
          <path d="M120 20 A50 50 0 0 1 167.6 54.5" stroke={red} strokeWidth={2.5} />
          {Array.from({ length: 7 }).map((_, i) => {
            const a = (-90 + (360 / 7) * i) * (Math.PI / 180);
            const cx = 120 + 50 * Math.cos(a);
            const cy = 70 + 50 * Math.sin(a);
            return <circle key={i} cx={cx} cy={cy} r={i === 1 ? 6 : 4.5} fill={i <= 1 ? red : fill} stroke={i <= 1 ? red : line} />;
          })}
          <circle cx={120} cy={70} r={16} fill={fill} stroke={line} />
          <path d="M114 70 l4 4 l8 -8" stroke={red} />
        </svg>
      );
  }
}
