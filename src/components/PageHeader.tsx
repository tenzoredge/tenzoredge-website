import React from 'react';
import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';

interface PageHeaderProps {
  /** Short contextual label shown above the title. */
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  theme?: 'dark' | 'light';
  /** Optional illustration shown beside the title on large screens. */
  visual?: React.ReactNode;
  children?: React.ReactNode;
  /** Compact variant for legal and utility pages. */
  compact?: boolean;
}

/** Page hero for internal pages. Headings are always solid white on dark. */
export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs,
  theme = 'dark',
  visual,
  children,
  compact = false,
}: PageHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? 'bg-brand-night text-white' : 'border-b border-brand-night/5 bg-brand-mist text-brand-night'
      }`}
    >
      <div
        className={`grid-fade pointer-events-none absolute inset-0 ${isDark ? 'tech-grid-pattern-dark' : 'tech-grid-pattern'}`}
        aria-hidden
      />
      {isDark && (
        <div
          className="pointer-events-none absolute -top-48 right-0 h-[560px] w-[560px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #C40F2E 0%, transparent 70%)' }}
          aria-hidden
        />
      )}

      <div className={`container-site relative ${compact ? 'py-14 md:py-16' : 'pb-16 pt-10 md:pb-24 md:pt-12'}`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-10 md:mb-14">
            <Breadcrumbs items={breadcrumbs} theme={theme} />
          </div>
        )}

        <div className={`grid items-center gap-12 ${visual ? 'lg:grid-cols-12' : ''}`}>
          <div className={visual ? 'lg:col-span-6' : 'max-w-4xl'}>
            {badge && <div className={`${isDark ? 'eyebrow-dark' : 'eyebrow-light'} mb-6`}>{badge}</div>}
            <h1 className={`${compact ? 'type-h2' : 'type-h1'} ${isDark ? 'text-white' : 'text-brand-night'}`}>{title}</h1>
            {subtitle && (
              <p className={`type-lead mt-6 max-w-2xl ${isDark ? 'text-brand-silver' : 'text-brand-slate'}`}>{subtitle}</p>
            )}
            {children && <div className="mt-9">{children}</div>}
          </div>
          {visual && <div className="lg:col-span-6">{visual}</div>}
        </div>
      </div>
    </section>
  );
}
