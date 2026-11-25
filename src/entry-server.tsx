/**
 * Build-time renderer used by scripts/prerender.mjs. Not shipped to the browser.
 * Renders one URL to HTML and returns the <head> tags react-helmet-async collected.
 */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App, { preloadAllPages } from './App';

export { siteRoutes, SITE_URL } from './routes';
export { preloadAllPages };

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
  const h = helmetContext.helmet!;
  const head = [h.title, h.meta, h.link, h.script].map((t) => t.toString()).filter(Boolean).join('\n    ');
  return { html, head };
}
