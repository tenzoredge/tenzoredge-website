import { Helmet } from 'react-helmet-async';
import { SITE_URL, routeLabel } from '../routes';

type JsonLd = Record<string, unknown>;

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  /** Path under /public (e.g. "/og/consulting.png") or absolute URL. 1200×630. */
  ogImage?: string;
  /** Extra structured data for this page (Service, Article, FAQPage…). Breadcrumbs are added automatically. */
  schema?: JsonLd | JsonLd[];
  noindex?: boolean;
}

export const ORG_ID = `${SITE_URL}/#organization`;
const DEFAULT_OG = '/og/default.png';

/** BreadcrumbList for /a/b/c built from the labels in routes.ts. Home only → none. */
function breadcrumbs(path: string): JsonLd | null {
  if (path === '/') return null;
  const parts = path.split('/').filter(Boolean);
  const items = [{ path: '/', name: 'Home' }];
  parts.forEach((_, i) => {
    const p = `/${parts.slice(0, i + 1).join('/')}`;
    const name = routeLabel(p);
    if (name) items.push({ path: p, name });
  });
  if (items.length < 2) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === '/' ? '/' : it.path}`,
    })),
  };
}

export default function SEO({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  ogImage = DEFAULT_OG,
  schema,
  noindex = false,
}: SEOProps) {
  const path = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const fullUrl = `${SITE_URL}${path === '/' ? '/' : path}`;
  const fullTitle = title.includes('Tenzor Edge') ? title : `${title} | Tenzor Edge`;
  const image = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  const ld = [...(schema ? (Array.isArray(schema) ? schema : [schema]) : []), breadcrumbs(path)].filter(Boolean);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph (LinkedIn, WhatsApp, Facebook, Slack) */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Tenzor Edge" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* X / Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
