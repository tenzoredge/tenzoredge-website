import { Linkedin, MapPin, Code2, Cloud, ShieldCheck, TestTube2, Building2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import SectionIntro from '../components/SectionIntro';
import { Reveal } from '../components/illustrations/kit';

const principles = [
  { title: 'Systems over tools', text: 'New software rarely fixes a disorganised process. Good design and integration do.' },
  { title: 'Only what you can sustain', text: 'The leanest reliable solution that meets the need — not the most impressive one.' },
  { title: 'Decisions over documents', text: 'Our work should help leadership decide and act, not fill a binder.' },
  { title: 'Less dependency over time', text: 'Maintainable systems, clear documentation and teams that can run them.' },
];

const triad = [
  { word: 'Precision', text: 'Clear scope, clean execution and outcomes you can measure.' },
  { word: 'Performance', text: 'Systems that are fast, reliable and ready to grow with the business.' },
  { word: 'Progress', text: 'Moving clients forward with modern technology and continuous improvement.' },
];

const specialists = [
  { icon: Code2, label: 'Software engineering' },
  { icon: Cloud, label: 'Cloud & infrastructure' },
  { icon: ShieldCheck, label: 'Security' },
  { icon: TestTube2, label: 'Quality & testing' },
];

const career = [
  'IT administration',
  'Networking',
  'Cloud & on-premises infrastructure',
  'Business applications',
  'System integration',
  'Digital transformation',
  'Product ownership',
  'AI-enabled SDLC',
  'Technology consulting',
];

/** How an engagement is staffed: one accountable lead, specialists as needed. */
function OperatingModel() {
  return (
    <div className="figure-frame" role="img" aria-label="Operating model: your business works directly with the Founder and Principal Solution Architect, who leads a network of specialist delivery partners in software engineering, cloud and infrastructure, security, and quality and testing.">
      <div className="flex flex-col items-center" aria-hidden>
        <div className="flex w-full max-w-xs items-center justify-center gap-3 rounded-xl border border-white/10 bg-brand-panel px-5 py-4 text-white">
          <Building2 size={18} className="text-brand-silver" />
          <span className="font-heading font-semibold">Your business</span>
        </div>
        <div className="h-8 w-px bg-brand-edge-red" />
        <div className="w-full max-w-sm rounded-xl border border-brand-edge-red/60 bg-brand-edge-red/10 px-5 py-5 text-center">
          <div className="font-heading text-lg font-semibold text-white">Founder &amp; Principal Solution Architect</div>
          <div className="mt-1 text-sm text-brand-silver">One accountable lead for architecture and delivery</div>
        </div>
        <div className="h-8 w-px bg-white/25" />
        <div className="relative w-full">
          <div className="absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-white/25 sm:block" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:pt-6">
            {specialists.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="relative rounded-xl border border-white/10 bg-brand-panel px-3 py-4 text-center">
                  <span className="absolute -top-6 left-1/2 hidden h-6 w-px bg-white/25 sm:block" />
                  <Icon size={18} className="mx-auto text-brand-silver" />
                  <div className="mt-2 text-[13px] font-medium leading-snug text-white">{s.label}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-silver">
            Specialist delivery partners — engaged as needed
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <SEO
        title="About Tenzor Edge – Precision. Performance. Progress."
        description="Tenzor Edge is a founder-led technology consulting and engineering company with a flexible specialist delivery model, based in Bengaluru, India."
        canonicalPath="/about"
      />

      <PageHeader
        badge="About Tenzor Edge"
        title="A founder‑led technology consulting and engineering company."
        subtitle="Senior architectural judgement on every engagement, with specialist engineers brought in for exactly what each project needs."
        breadcrumbs={[{ label: 'About' }]}
        visual={<OperatingModel />}
      />

      {/* What we believe */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-heading text-3xl font-semibold leading-tight text-brand-night sm:text-[2.5rem] sm:leading-[1.2]">
              Most business technology problems are <span className="text-brand-edge-red">architecture</span> problems — not
              a shortage of software.
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-brand-slate">
              Businesses are surrounded by products, platforms and AI promises, yet many still run on fragmented tools and
              manual workarounds. Tenzor Edge bridges business strategy and engineering — as an independent architect and
              delivery partner.
            </p>
          </div>
          <div className="lg:col-span-6">
            <h2 className="type-h3 text-brand-night">How we work</h2>
            <Reveal as="ul" className="reveal mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {principles.map((p) => (
                <li key={p.title} className="border-t-2 border-brand-night pt-5">
                  <h3 className="font-heading text-lg font-semibold text-brand-night">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-brand-slate">{p.text}</p>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand triad */}
      <section className="bg-brand-night py-20 text-white md:py-24">
        <div className="container-site">
          <div className="grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
            {triad.map((t, i) => (
              <div key={t.word} className={i === 0 ? 'md:pr-10' : 'md:px-10'}>
                <div className="font-heading text-sm font-semibold text-brand-edge-red">0{i + 1}</div>
                <h2 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
                  {t.word}
                  <span className="text-brand-edge-red">.</span>
                </h2>
                <p className="mt-4 max-w-xs text-[17px] leading-relaxed text-brand-silver">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-brand-mist py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-brand-night p-8 text-white lg:sticky lg:top-28">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-brand-ink font-heading text-2xl font-bold text-white"
                aria-hidden
              >
                CP
              </div>
              <h2 className="mt-6 font-heading text-2xl font-semibold text-white">Chandan P</h2>
              <div className="mt-1 text-[15px] text-brand-silver">Founder &amp; Principal Solution Architect</div>
              <div className="mt-4 flex items-center gap-2 text-sm text-brand-silver">
                <MapPin size={15} className="text-brand-edge-red" aria-hidden /> Bengaluru, India
              </div>
              <a
                href="https://www.linkedin.com/in/chandantukee"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow-dark mt-6 border-t border-white/10 pt-6"
              >
                <Linkedin size={16} aria-hidden /> Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <SectionIntro title="Infrastructure roots. Business and product perspective." />
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-brand-slate">
              <p>
                Around 12 years of hands-on work, starting in IT infrastructure and systems administration for a multi-branch
                dealership network (Khivraj Motors) — Windows servers, LAN/WAN, VMware ESXi and Hyper-V, and disaster recovery.
              </p>
              <p>
                At Infocruise Solutions, Chandan moved into business analysis and solution architecture, owning the product
                lifecycle of <span className="font-semibold text-brand-night">MCollect</span>, an enterprise payment
                reconciliation platform. Along the way he redesigned test and staging infrastructure into a hybrid AWS and
                on-premises setup, cutting its recurring cost by around 60%.
              </p>
            </div>

            <h3 className="mt-12 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-slate">Experience spans</h3>
            <ol className="mt-5 flex flex-wrap items-center gap-y-3">
              {career.map((c, i) => (
                <li key={c} className="flex items-center">
                  <span
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${
                      i === career.length - 1
                        ? 'border-brand-edge-red bg-brand-edge-red text-white'
                        : 'border-brand-night/15 bg-white text-brand-night'
                    }`}
                  >
                    {c}
                  </span>
                  {i < career.length - 1 && <span className="mx-1.5 h-px w-4 bg-brand-night/25" aria-hidden />}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection
        title="Work directly with the architect."
        subtitle="Every engagement starts with a conversation with our Principal Solution Architect — about your business first, technology second."
      />
    </>
  );
}
