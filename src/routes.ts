/**
 * Every public page on the site. This one list drives:
 *   - build-time pre-rendering (scripts/prerender.mjs writes one HTML file per path)
 *   - the generated sitemap.xml
 *   - breadcrumb structured data (labels)
 *   - the page routes in App.tsx (each page is its own JavaScript file, loaded on demand)
 * To add a page: create src/pages/<page>.tsx and add one line here.
 */
export interface SiteRoute {
  path: string;
  /** Component file under src/pages, without .tsx */
  page: string;
  label: string;
  /** sitemap priority, 0.0–1.0 */
  priority: number;
  changefreq: 'weekly' | 'monthly' | 'yearly';
}

export const SITE_URL = 'https://tenzoredge.com';

export const siteRoutes: SiteRoute[] = [
  { path: '/', page: 'Home', label: 'Home', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', page: 'Services', label: 'Services', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/technology-consulting', page: 'services/TechnologyConsulting', label: 'Technology Consulting & Solution Architecture', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/infrastructure-cloud-engineering', page: 'services/InfrastructureCloudEngineering', label: 'Infrastructure & Cloud Engineering', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/business-solutions-digital-transformation', page: 'services/BusinessSolutionsDigitalTransformation', label: 'Business Solutions & Digital Transformation', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/ai-enabled-software-engineering', page: 'services/AIEnabledSoftwareEngineering', label: 'AI-Enabled Software Engineering', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/product-technology-leadership', page: 'services/ProductTechnologyLeadership', label: 'Product & Technology Leadership', priority: 0.9, changefreq: 'monthly' },
  { path: '/solutions', page: 'Solutions', label: 'Solutions', priority: 0.8, changefreq: 'monthly' },
  { path: '/industries', page: 'Industries', label: 'Who We Serve', priority: 0.8, changefreq: 'monthly' },
  { path: '/about', page: 'About', label: 'About', priority: 0.7, changefreq: 'monthly' },
  { path: '/insights', page: 'Insights', label: 'Insights', priority: 0.7, changefreq: 'weekly' },
  { path: '/contact', page: 'Contact', label: 'Contact', priority: 0.8, changefreq: 'yearly' },
  { path: '/legal/privacy-policy', page: 'legal/PrivacyPolicy', label: 'Privacy Notice', priority: 0.3, changefreq: 'yearly' },
  { path: '/legal/cookie-policy', page: 'legal/CookiePolicy', label: 'Cookie Policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/legal/terms-conditions', page: 'legal/TermsConditions', label: 'Terms & Conditions', priority: 0.3, changefreq: 'yearly' },
  { path: '/legal/refund-cancellation', page: 'legal/RefundCancellation', label: 'Refund & Cancellation', priority: 0.2, changefreq: 'yearly' },
  { path: '/legal/shipping-delivery', page: 'legal/ShippingDelivery', label: 'Shipping & Delivery', priority: 0.2, changefreq: 'yearly' },
  { path: '/legal/subscription-policy', page: 'legal/SubscriptionPolicy', label: 'Subscription Policy', priority: 0.2, changefreq: 'yearly' },
];

export const NOT_FOUND_PAGE = 'NotFound';

export const routeLabel = (path: string) => siteRoutes.find((r) => r.path === path)?.label;
