import { lazy, type ComponentType } from 'react';

type Loader = () => Promise<unknown>;
export type LazyPage = ComponentType & { preload: () => Promise<void> };

/**
 * A page that lives in its own JavaScript file and is downloaded only when needed.
 *
 * Unlike plain React.lazy, it can be loaded ahead of time with `preload()`. Once loaded it renders
 * synchronously, which is what lets us:
 *   - pre-render every page at build time (all pages preloaded first), and
 *   - hydrate the pre-rendered HTML without a loading flash (current page preloaded first).
 * Pages not yet loaded (e.g. on client-side navigation) suspend until their file arrives.
 */
export function lazyPage(load: Loader): LazyPage {
  let Loaded: ComponentType | null = null;
  let pending: Promise<void> | null = null;

  const preload = () =>
    (pending ??= load().then((m) => {
      Loaded = (m as { default: ComponentType }).default;
    }));

  const Suspending = lazy(() => preload().then(() => ({ default: Loaded! })));

  const Page = () => (Loaded ? <Loaded /> : <Suspending />);
  return Object.assign(Page, { preload });
}
