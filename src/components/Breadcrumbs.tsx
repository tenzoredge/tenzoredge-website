import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: 'dark' | 'light';
}

export default function Breadcrumbs({ items, theme = 'dark' }: BreadcrumbsProps) {
  const isDark = theme === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-xs tracking-wide py-2"
    >
      <ol className="flex items-center space-x-1.5 flex-wrap">
        <li>
          <Link
            to="/"
            className={`flex items-center transition-colors ${
              isDark
                ? 'text-brand-silver hover:text-white'
                : 'text-brand-slate hover:text-brand-night'
            }`}
          >
            <Home size={13} className="mr-1" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center space-x-1.5">
              <ChevronRight
                size={12}
                className={isDark ? 'text-brand-slate' : 'text-brand-silver'}
              />
              {isLast || !item.path ? (
                <span
                  className={`font-medium ${
                    isDark ? 'text-white' : 'text-brand-night'
                  }`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`transition-colors ${
                    isDark
                      ? 'text-brand-silver hover:text-white'
                      : 'text-brand-slate hover:text-brand-night'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
