# AI Coding Guidelines for TenzorEdge Website

## Architecture Overview
- **Framework**: Vite + React 18 + TypeScript + Tailwind CSS
- **Routing**: React Router DOM with client-side routing (BrowserRouter)
- **Layout**: Fixed navigation header, main content area, footer, floating WhatsApp button, and ScrollToTop component
- **SEO**: React Helmet Async for meta tags on all pages
- **Forms**: Formspree integration (contact form uses ID "mqezzzkq")
- **Icons**: Lucide React for all icons
- **Deployment**: Vercel with SPA rewrites and security headers

## Key Components
- **Button**: Reusable component with primary/secondary variants using gradient backgrounds (see `src/components/Button.tsx`)
- **PageHeader**: Consistent page title/subtitle styling (see `src/components/PageHeader.tsx`)
- **Navigation/Footer**: Site-wide navigation and footer components

## Legal Compliance (DPDP Act 2023)
- **Cookie Consent**: Banner component with localStorage persistence (`tenzoredge_cookie_consent_v1`)
- **Legal Pages**: All policies in `src/pages/legal/` with semantic HTML and accessibility
- **Footer Links**: All legal pages linked in footer navigation
- **Contact Consent**: Mandatory checkbox linking to Terms & Privacy Policy
- **Data Rights**: User rights section in Privacy Policy with email contact process

## Styling Patterns
- **Tailwind Classes**: Extensive use of Tailwind with custom gradients (indigo-purple-pink theme)
- **Animations**: Custom CSS keyframes in `src/index.css` (fadeInUp, slideInLeft, slideInRight, pulse)
- **Responsive Design**: Mobile-first with sm/md/lg breakpoints
- **Color Scheme**: Indigo/purple gradients for CTAs, gray for secondary elements

## Development Workflow
- **Start Dev Server**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (outputs to `dist/`)
- **Type Check**: `npm run typecheck` (uses `tsconfig.app.json`)
- **Lint**: `npm run lint` (ESLint flat config with TypeScript and React rules)
- **Preview**: `npm run preview` (serves built files locally)

## Code Conventions
- **TypeScript**: Strict mode enabled, no unused locals/parameters
- **Component Structure**: Functional components with TypeScript interfaces for props
- **Imports**: Absolute imports from `src/` directory
- **File Organization**: Pages in `src/pages/`, components in `src/components/`
- **SEO Meta Tags**: Every page uses Helmet with title, description, Open Graph tags

## External Integrations
- **Formspree**: Contact form submission (configured in Contact.tsx)
- **Supabase**: Installed but not currently implemented (available for future backend features)

## Deployment Notes
- **Vercel Config**: SPA routing rewrites, security headers (X-Frame-Options, etc.)
- **Static Assets**: Served from `public/` directory (robots.txt, sitemap.xml)
- **Build Output**: `dist/` directory with optimized assets</content>
<parameter name="filePath">e:\CodeBase\tenzoredge-website\.github\copilot-instructions.md