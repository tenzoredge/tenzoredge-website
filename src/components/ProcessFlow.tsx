import { useInView } from './illustrations/kit';

export interface ProcessStep {
  title: string;
  text: string;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
  tone?: 'light' | 'dark';
  /** Index of the step to emphasise. */
  emphasis?: number;
}

const COLS: Record<number, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  7: 'lg:grid-cols-7',
};

/**
 * Connected process: horizontal on large screens, vertical timeline on small
 * screens. The connecting line draws in once when the flow enters view.
 */
export default function ProcessFlow({ steps, tone = 'dark', emphasis }: ProcessFlowProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const dark = tone === 'dark';
  const track = dark ? 'bg-white/15' : 'bg-brand-night/10';
  const n = steps.length;

  return (
    <div ref={ref} className={`relative ${inView ? 'is-inview' : ''}`}>
      {/* Desktop connector */}
      <div
        className={`pointer-events-none absolute top-6 hidden h-px lg:block ${track}`}
        style={{ left: `calc(100% / ${n} / 2)`, right: `calc(100% / ${n} / 2)` }}
        aria-hidden
      >
        <div className="flow-line h-px w-full bg-brand-edge-red" />
      </div>
      {/* Mobile connector */}
      <div className={`pointer-events-none absolute bottom-10 left-6 top-6 w-px lg:hidden ${track}`} aria-hidden>
        <div className="flow-line-v h-full w-px bg-brand-edge-red" />
      </div>

      <ol className={`relative grid gap-9 lg:gap-6 ${COLS[n] ?? 'lg:grid-cols-5'}`}>
        {steps.map((s, i) => {
          const em = emphasis === i;
          return (
            <li key={s.title} className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
              <span
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-heading text-sm font-semibold ${
                  em
                    ? 'border-brand-edge-red bg-brand-edge-red text-white'
                    : dark
                      ? 'border-white/25 bg-brand-night text-white'
                      : 'border-brand-night/15 bg-white text-brand-night'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="pt-2 lg:px-2 lg:pt-6">
                <h3 className={`font-heading text-xl font-semibold ${dark ? 'text-white' : 'text-brand-night'}`}>{s.title}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${dark ? 'text-brand-silver' : 'text-brand-slate'}`}>{s.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
