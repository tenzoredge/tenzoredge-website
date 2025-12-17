import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-gray-50/30 via-blue-50/10 to-indigo-50/20 py-8 md:py-10 border-b border-gray-100/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <div className="mb-2 text-indigo-400 text-xs font-semibold tracking-widest uppercase opacity-60">
          {title.split(' ')[0]}
        </div> */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-900 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}