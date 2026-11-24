import { ReactNode } from 'react';

interface SectionIntroProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
  as?: 'h2' | 'h1';
}

/** Consistent heading block for page sections. */
export default function SectionIntro({
  eyebrow,
  title,
  intro,
  tone = 'light',
  align = 'left',
  className = '',
  as: H = 'h2',
}: SectionIntroProps) {
  const dark = tone === 'dark';
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <div className={`${dark ? 'eyebrow-dark' : 'eyebrow-light'} mb-5`}>{eyebrow}</div>}
      <H className={`type-h2 ${dark ? 'text-white' : 'text-brand-night'}`}>{title}</H>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-brand-silver' : 'text-brand-slate'}`}>{intro}</p>
      )}
    </div>
  );
}
