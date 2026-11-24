import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, unknown>;
}

export default function SEO({
  title,
  description,
  canonicalPath = '',
  keywords,
  ogType = 'website',
  ogImage = 'https://tenzoredge.com/brand/PNG/tenzor-edge-logo-for-dark-bg.png',
  schema,
}: SEOProps) {
  const fullUrl = `https://tenzoredge.com${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  const fullTitle = title.includes('Tenzor Edge') ? title : `${title} | Tenzor Edge`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Tenzor Edge" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
