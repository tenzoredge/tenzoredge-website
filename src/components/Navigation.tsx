import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { services } from '../data/services';

const mainLinks = [
  { path: '/solutions', label: 'Solutions' },
  { path: '/industries', label: 'Who We Serve' },
  { path: '/about', label: 'About' },
  { path: '/insights', label: 'Insights' },
];

export default function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<number>();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  // Escape closes menus; return focus to the trigger for keyboard users.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setMegaOpen((open) => {
        if (open) triggerRef.current?.focus();
        return false;
      });
      setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Click outside the header closes the mega menu.
  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [megaOpen]);

  // Lock page scroll behind the mobile menu.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const openMega = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }, []);
  const closeMegaSoon = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 140);
  }, []);

  const isActive = (path: string) => (path === '/' ? location.pathname === '/' : location.pathname.startsWith(path));
  const servicesActive = isActive('/services');

  const linkCls = (active: boolean) =>
    `relative inline-flex h-10 items-center rounded-full px-4 text-[15px] font-medium transition-colors ${
      active ? 'bg-white/[0.07] text-white' : 'text-brand-silver hover:bg-white/[0.04] hover:text-white'
    }`;

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
          scrolled || megaOpen || mobileOpen
            ? 'border-white/10 bg-brand-night/95 backdrop-blur-md'
            : 'border-transparent bg-brand-night'
        }`}
      >
        <div className="container-site">
          <div className={`flex items-center justify-between transition-[height] duration-300 ${scrolled ? 'h-16' : 'h-[76px]'}`}>
            <Link to="/" className="flex shrink-0 items-center" aria-label="Tenzor Edge home">
              {/* Full logo: min. 180px wide per brand guidelines */}
              <img
                src="/brand/SVG/tenzor-edge-logo-for-dark-bg.svg"
                alt="Tenzor Edge – Precision. Performance. Progress."
                width={182}
                height={45}
                className="h-[45px] w-auto"
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
              <div onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
                <button
                  ref={triggerRef}
                  type="button"
                  className={`${linkCls(servicesActive || megaOpen)} gap-1.5`}
                  aria-expanded={megaOpen}
                  aria-controls="mega-services"
                  onClick={() => setMegaOpen((o) => !o)}
                >
                  Services
                  <ChevronDown
                    size={15}
                    aria-hidden
                    className={`transition-transform duration-200 ${megaOpen ? 'rotate-180 text-brand-edge-red' : ''}`}
                  />
                </button>
              </div>
              {mainLinks.map((l) => (
                <Link key={l.path} to={l.path} className={linkCls(isActive(l.path))} aria-current={isActive(l.path) ? 'page' : undefined}>
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-5 lg:flex">
              <Link
                to="/contact"
                className="group inline-flex h-10 items-center gap-2 rounded-full bg-brand-edge-red pl-5 pr-4 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(255,45,61,0.8)] transition-colors hover:bg-brand-neon-red"
              >
                Discuss Your Project
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/5 lg:hidden"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        {megaOpen && (
          <div
            id="mega-services"
            className="absolute inset-x-0 top-full hidden animate-fadeIn border-b border-white/10 bg-brand-night lg:block"
            onMouseEnter={openMega}
            onMouseLeave={closeMegaSoon}
          >
            <div className="container-site grid grid-cols-12 gap-10 py-10">
              <div className="col-span-8">
                <div className="eyebrow-dark">Services</div>
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {services.map((s) => {
                    const Icon = s.icon;
                    const active = location.pathname === s.path;
                    return (
                      <li key={s.key}>
                        <Link
                          to={s.path}
                          className={`group flex h-full gap-4 rounded-xl border p-4 transition-colors ${
                            active ? 'border-brand-edge-red/50 bg-white/[0.04]' : 'border-transparent hover:border-white/10 hover:bg-white/[0.04]'
                          }`}
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-brand-panel text-brand-edge-red transition-colors group-hover:border-brand-edge-red/50">
                            <Icon size={19} aria-hidden />
                          </span>
                          <span className="min-w-0">
                            <span className="flex items-center gap-2 text-[15px] font-semibold text-white">
                              {s.shortTitle}
                              <ArrowUpRight size={14} className="text-brand-silver opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                            </span>
                            <span className="mt-1 block text-[13px] leading-snug text-brand-silver">{s.tagline}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <Link
                      to="/services"
                      className="group flex h-full items-center justify-between gap-4 rounded-xl border border-dashed border-white/15 p-4 transition-colors hover:border-brand-edge-red/60 hover:bg-white/[0.04]"
                    >
                      <span>
                        <span className="block text-[15px] font-semibold text-white">Services overview</span>
                        <span className="mt-1 block text-[13px] leading-snug text-brand-silver">How the five capabilities fit together.</span>
                      </span>
                      <ArrowRight size={18} className="shrink-0 text-brand-edge-red transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-4">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-brand-ink p-7">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #C40F2E 0%, transparent 70%)' }}
                    aria-hidden
                  />
                  <div className="relative text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-edge-red">Not sure where to start?</div>
                  <p className="relative mt-3 font-heading text-xl font-semibold leading-snug text-white">
                    Talk it through with our Principal Solution Architect.
                  </p>
                  <p className="relative mt-3 text-sm leading-relaxed text-brand-silver">
                    One conversation about where things stand — and a clear view of what to fix first.
                  </p>
                  <Link to="/contact" className="btn-primary relative mt-auto w-full !py-3 text-sm">
                    Discuss Your Project <ArrowRight size={15} aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-50 animate-fadeIn overflow-y-auto border-t border-white/10 bg-brand-night lg:hidden"
          style={{ ['--nav-h' as string]: scrolled ? '64px' : '76px' }}
        >
          <nav className="container-site flex min-h-full flex-col py-6" aria-label="Mobile">
            <Link
              to="/services"
              className="flex items-center justify-between text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-silver"
            >
              Services <span className="normal-case tracking-normal text-brand-edge-red">Overview →</span>
            </Link>
            <ul className="mt-3 divide-y divide-white/[0.06] rounded-2xl border border-white/10 bg-brand-ink">
              {services.map((s) => {
                const Icon = s.icon;
                const active = location.pathname === s.path;
                return (
                  <li key={s.key}>
                    <Link to={s.path} className="flex items-center gap-3.5 px-4 py-3.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-brand-panel text-brand-edge-red">
                        <Icon size={17} aria-hidden />
                      </span>
                      <span className={`flex-1 text-[15px] font-medium ${active ? 'text-brand-edge-red' : 'text-white'}`}>{s.shortTitle}</span>
                      <ArrowRight size={16} className="text-brand-silver" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="mt-6">
              {[{ path: '/', label: 'Home' }, ...mainLinks, { path: '/contact', label: 'Contact' }].map((l) => {
                const active = isActive(l.path);
                return (
                  <li key={l.path} className="border-b border-white/[0.06]">
                    <Link
                      to={l.path}
                      className={`flex items-center justify-between py-4 font-heading text-xl font-semibold ${active ? 'text-brand-edge-red' : 'text-white'}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {l.label}
                      <ArrowRight size={18} className="text-brand-silver" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-8">
              <Link to="/contact" className="btn-primary w-full">
                Discuss Your Project
                <ArrowRight size={17} aria-hidden />
              </Link>
              <a
                href="mailto:support@tenzoredge.com"
                className="mt-4 flex items-center justify-center gap-2 text-sm text-brand-silver hover:text-white"
              >
                <Mail size={15} aria-hidden /> support@tenzoredge.com
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Dim the page behind the mega menu */}
      {megaOpen && (
        <div
          className="fixed inset-0 z-40 hidden animate-fadeIn bg-brand-night/50 backdrop-blur-[2px] lg:block"
          aria-hidden
          onClick={() => setMegaOpen(false)}
        />
      )}
    </>
  );
}
