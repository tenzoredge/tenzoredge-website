/**
 * Build step 3 of 3 (see "build" in package.json):
 *   1. vite build                → dist/ (browser bundle + index.html template)
 *   2. vite build --ssr …        → dist-server/entry-server.js
 *   3. node scripts/prerender.mjs → one static HTML file per route, 404.html and sitemap.xml
 *
 * Every page is served as real HTML with its own title, description, canonical URL, Open Graph
 * tags and structured data, so search engines and link previews (LinkedIn, WhatsApp, Slack) see
 * the right content without running JavaScript. React then hydrates the page in the browser.
 *
 * Output uses Vercel "cleanUrls": /services is served from dist/services.html.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const serverDir = join(root, 'dist-server');

const { render, siteRoutes, SITE_URL, preloadAllPages } = await import(pathToFileURL(join(serverDir, 'entry-server.js')).href);
await preloadAllPages();
const template = readFileSync(join(dist, 'index.html'), 'utf-8');

/* ---- Preload hints: the page's own JavaScript and the two main font files start downloading
        with the HTML, instead of after the main script has run. ---- */
const manifestFile = join(dist, '.vite', 'manifest.json');
const manifest = JSON.parse(readFileSync(manifestFile, 'utf-8'));
const entryKey = Object.keys(manifest).find((k) => manifest[k].isEntry);
const entryChunks = new Set([entryKey, ...(manifest[entryKey].imports || [])]);

function chunkFiles(key, seen = new Set()) {
  if (!manifest[key] || seen.has(key) || entryChunks.has(key)) return seen;
  seen.add(key);
  (manifest[key].imports || []).forEach((k) => chunkFiles(k, seen));
  return seen;
}
function pagePreloads(page) {
  const key = `src/pages/${page}.tsx`;
  if (!manifest[key]) throw new Error(`No build output for ${key}`);
  return [...chunkFiles(key)].map((k) => `<link rel="modulepreload" crossorigin href="/${manifest[k].file}">`);
}
const fontPreloads = readdirSync(join(dist, 'assets'))
  .filter((f) => /^(inter|sora)-latin-wght-normal-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" as="font" type="font/woff2" crossorigin href="/assets/${f}">`);
if (fontPreloads.length !== 2) throw new Error('Expected the Inter and Sora latin font files in dist/assets');

if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('index.html is missing the <!--app-head--> or <!--app-html--> placeholder');
}

function page(url, pageFile) {
  const { html, head } = render(url);
  const hints = [...fontPreloads, ...pagePreloads(pageFile)].join('\n    ');
  const out = template.replace('<!--app-head-->', `${head}\n    ${hints}`).replace('<!--app-html-->', html);
  // Count only <head> titles; SVG diagrams in the body carry their own <title> labels.
  const titles = out.slice(0, out.indexOf('</head>')).match(/<title[\s>]/g)?.length ?? 0;
  if (titles !== 1) throw new Error(`${url}: expected exactly one <title>, found ${titles}`);
  return out;
}

function write(file, content) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}

for (const { path, page: pageFile } of siteRoutes) {
  const file = path === '/' ? join(dist, 'index.html') : join(dist, `${path.slice(1)}.html`);
  write(file, page(path, pageFile));
  console.log(`  prerendered ${path}`);
}

// Any URL that matches no route renders the NotFound page; Vercel serves it with HTTP 404.
write(join(dist, '404.html'), page('/__not-found__', 'NotFound'));
console.log('  prerendered 404.html');

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${siteRoutes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
write(join(dist, 'sitemap.xml'), sitemap);
console.log(`  wrote sitemap.xml (${siteRoutes.length} URLs)`);

rmSync(serverDir, { recursive: true, force: true });
rmSync(join(dist, '.vite'), { recursive: true, force: true }); // build manifest is not needed at runtime
