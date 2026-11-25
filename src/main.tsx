import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '@fontsource-variable/inter';
import '@fontsource-variable/sora';
import App, { pageFor } from './App.tsx';
import './index.css';

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

const root = document.getElementById('root')!;

// Load this page's code first, so React can attach to the pre-rendered HTML without a loading flash.
pageFor(location.pathname)
  .preload()
  .finally(() => {
    if (root.firstElementChild) hydrateRoot(root, app);
    else createRoot(root).render(app); // dev server: no pre-rendered HTML
  });

// Fetch a page's code as soon as the visitor shows intent (hover, focus or touch on a link).
const prefetch = (e: Event) => {
  const a = (e.target as Element | null)?.closest?.('a[href^="/"]');
  if (a) pageFor(new URL((a as HTMLAnchorElement).href).pathname).preload();
};
['mouseover', 'focusin', 'touchstart'].forEach((t) => document.addEventListener(t, prefetch, { passive: true }));
