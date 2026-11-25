import { Suspense } from 'react';
import { Routes, Route, Navigate, matchPath } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsentBanner from './components/CookieConsentBanner';
import AnalyticsTracker from './components/AnalyticsTracker';
import { lazyPage, type LazyPage } from './lib/lazyPage';
import { siteRoutes, NOT_FOUND_PAGE } from './routes';

/*
 * Every page is its own JavaScript file (code splitting), so a visitor downloads only the
 * page they open plus the shared layout. Pages are listed once, in src/routes.ts.
 */
const pageFiles = import.meta.glob(['./pages/**/*.tsx', '!./pages/CaseStudies.tsx']);

const loadPage = (page: string) => {
  const load = pageFiles[`./pages/${page}.tsx`];
  if (!load) throw new Error(`src/routes.ts points to a missing page: src/pages/${page}.tsx`);
  return lazyPage(load);
};

const pages = siteRoutes.map((r) => ({ path: r.path, Page: loadPage(r.page) }));
const NotFound = loadPage(NOT_FOUND_PAGE);

/** The page component for a URL (used to load it before the first render). */
export function pageFor(pathname: string): LazyPage {
  return pages.find((p) => matchPath(p.path, pathname))?.Page ?? NotFound;
}

/** Load every page's code (build-time pre-rendering). */
export function preloadAllPages() {
  return Promise.all([...pages.map((p) => p.Page.preload()), NotFound.preload()]);
}

/**
 * The whole site, without a router or Helmet provider, so it can be wrapped by
 * BrowserRouter in the browser (main.tsx) and StaticRouter at build time (entry-server.tsx).
 */
function App() {
  return (
    <>
      <ScrollToTop />
      <AnalyticsTracker />
      <div className="min-h-screen flex flex-col bg-white text-brand-night selection:bg-brand-edge-red selection:text-white">
        <Navigation />
        <main className="flex-grow">
          {/* Shown only if a page's file is still downloading after a click (normally instant). */}
          <Suspense fallback={<div className="min-h-[70vh]" aria-busy="true" />}>
            <Routes>
              {pages.map(({ path, Page }) => (
                <Route key={path} path={path} element={<Page />} />
              ))}
              <Route path="/case-studies" element={<Navigate to="/solutions" replace />} />
              {/* Unknown URLs: a real "page not found" (served with HTTP 404 by Vercel) */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieConsentBanner />
      </div>
    </>
  );
}

export default App;
