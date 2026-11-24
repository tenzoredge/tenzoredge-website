import { CSSProperties, ReactNode, useEffect, useId, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';

/* Brand-derived diagram palette */
export const C = {
  night: '#0B0D12',
  ink: '#11141B',
  panel: '#161A23',
  panelHi: '#1C2130',
  line: 'rgba(163,169,184,0.22)',
  lineStrong: 'rgba(163,169,184,0.42)',
  silver: '#A3A9B8',
  mist: '#F2F3F5',
  red: '#FF2D3D',
  neon: '#FF1F3D',
  crimson: '#C40F2E',
  ember: '#FF7A2F',
  slate: '#5B6070',
  redFill: 'rgba(255,45,61,0.10)',
  redLine: 'rgba(255,45,61,0.6)',
};

/** Fires once when the element scrolls into view. */
export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, threshold]);

  return { ref, inView };
}

/** Wrapper that applies the "is-inview" class to children with the reveal helper. */
export function Reveal({
  as: Tag = 'div',
  className = '',
  children,
}: {
  as?: 'div' | 'ol' | 'ul';
  className?: string;
  children: ReactNode;
}) {
  const { ref, inView } = useInView<HTMLElement>(0.01);
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`${className} ${inView ? 'is-inview' : ''}`}>
      {children}
    </Tag>
  );
}

interface DiagramProps {
  viewBox: string;
  title: string;
  desc?: string;
  className?: string;
  children: ReactNode;
}

/** Accessible, responsive SVG canvas with reveal-on-view behaviour. */
export function Diagram({ viewBox, title, desc, className = '', children }: DiagramProps) {
  const id = useId();
  const { ref, inView } = useInView<SVGSVGElement>(0.15);
  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      role="img"
      aria-labelledby={`${id}-t${desc ? ` ${id}-d` : ''}`}
      className={`dg block h-auto w-full ${inView ? 'is-inview' : ''} ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title id={`${id}-t`}>{title}</title>
      {desc && <desc id={`${id}-d`}>{desc}</desc>}
      {children}
    </svg>
  );
}

export const delayStyle = (d: number) => ({ '--d': `${d}ms` }) as CSSProperties;

type Tone = 'default' | 'accent' | 'muted' | 'solid';

interface NodeProps {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  icon?: LucideIcon;
  tone?: Tone;
  align?: 'left' | 'center';
  delay?: number;
  rx?: number;
  titleClass?: string;
}

/** A labelled box in a diagram. */
export function Node({
  x,
  y,
  w,
  h,
  title,
  sub,
  icon: Icon,
  tone = 'default',
  align = 'left',
  delay = 0,
  rx = 10,
  titleClass = 'dg-t',
}: NodeProps) {
  const fill =
    tone === 'accent' ? C.redFill : tone === 'muted' ? 'rgba(255,255,255,0.02)' : tone === 'solid' ? C.red : C.panel;
  const stroke = tone === 'accent' ? C.redLine : tone === 'solid' ? C.red : C.line;
  const iconColor = tone === 'accent' ? C.red : tone === 'solid' ? '#fff' : C.silver;
  const cy = y + h / 2;
  const iconSize = 18;
  const hasIcon = !!Icon && align === 'left';
  const tx = align === 'center' ? x + w / 2 : x + (hasIcon ? 44 : 16);
  const anchor = align === 'center' ? 'middle' : 'start';

  return (
    <g className="dg-node" style={delayStyle(delay)}>
      {tone === 'accent' && <rect x={x} y={y} width={w} height={h} rx={rx} fill={C.night} />}
      {tone === 'muted' && <rect x={x} y={y} width={w} height={h} rx={rx} fill={C.night} />}
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={stroke} strokeWidth={1} />
      {hasIcon && Icon && (
        <Icon x={x + 16} y={cy - iconSize / 2} size={iconSize} color={iconColor} strokeWidth={1.75} aria-hidden />
      )}
      {sub ? (
        <>
          <text x={tx} y={cy - 3} textAnchor={anchor} className={titleClass} style={tone === 'solid' ? { fill: '#fff' } : undefined}>
            {title}
          </text>
          <text x={tx} y={cy + 14} textAnchor={anchor} className="dg-s" style={tone === 'solid' ? { fill: '#fff' } : undefined}>
            {sub}
          </text>
        </>
      ) : (
        <text x={tx} y={cy + 5} textAnchor={anchor} className={titleClass} style={tone === 'solid' ? { fill: '#fff' } : undefined}>
          {title}
        </text>
      )}
    </g>
  );
}

interface WireProps {
  d: string;
  accent?: boolean;
  dashed?: boolean;
  delay?: number;
  width?: number;
}

/** A connector. Solid wires draw in on reveal; dashed wires fade in. */
export function Wire({ d, accent = false, dashed = false, delay = 0, width = 1.5 }: WireProps) {
  const stroke = accent ? C.red : C.lineStrong;
  if (dashed) {
    return (
      <g className="dg-node" style={delayStyle(delay)}>
        <path d={d} fill="none" stroke={stroke} strokeWidth={width} strokeDasharray="4 5" strokeLinecap="round" />
      </g>
    );
  }
  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={1}
      className="dg-draw"
      style={delayStyle(delay)}
    />
  );
}

/** A small drawn arrowhead (avoids SVG marker id collisions). */
export function Arrowhead({
  x,
  y,
  dir = 'right',
  accent = false,
  delay = 0,
}: {
  x: number;
  y: number;
  dir?: 'right' | 'left' | 'down' | 'up';
  accent?: boolean;
  delay?: number;
}) {
  const rot = { right: 0, down: 90, left: 180, up: 270 }[dir];
  return (
    <g className="dg-node" style={delayStyle(delay)}>
      <path
        d="M-6 -4 L0 0 L-6 4"
        transform={`translate(${x} ${y}) rotate(${rot})`}
        fill="none"
        stroke={accent ? C.red : C.lineStrong}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

/** A small dot that travels along a path — used sparingly for "data in motion". */
export function Pulse({ path, dur = 5, begin = 0, r = 3 }: { path: string; dur?: number; begin?: number; r?: number }) {
  return (
    <circle r={r} fill={C.red} className="dg-pulse">
      <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} />
    </circle>
  );
}

/** Upper-case label inside a diagram. */
export function Kicker({
  x,
  y,
  children,
  accent = false,
  anchor = 'start',
  delay = 0,
}: {
  x: number;
  y: number;
  children: string;
  accent?: boolean;
  anchor?: 'start' | 'middle' | 'end';
  delay?: number;
}) {
  return (
    <g className="dg-node" style={delayStyle(delay)}>
      <text x={x} y={y} textAnchor={anchor} className={accent ? 'dg-kr' : 'dg-k'}>
        {children.toUpperCase()}
      </text>
    </g>
  );
}

/** Faint grouping container ("band") for a layer of the architecture. */
export function Band({
  x,
  y,
  w,
  h,
  delay = 0,
  dashed = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  delay?: number;
  dashed?: boolean;
}) {
  return (
    <g className="dg-node" style={delayStyle(delay)}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={14}
        fill="rgba(255,255,255,0.015)"
        stroke={C.line}
        strokeDasharray={dashed ? '3 5' : undefined}
      />
    </g>
  );
}

/** Responsive switch: detailed diagram on md+, simplified one below. */
export function Responsive({ desktop, mobile }: { desktop: ReactNode; mobile: ReactNode }) {
  return (
    <>
      <div className="hidden md:block">{desktop}</div>
      <div className="md:hidden">{mobile}</div>
    </>
  );
}
