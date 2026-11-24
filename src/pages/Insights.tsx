import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  ArrowRight,
  BookOpen,
  Search
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Technology Architecture',
    'Cloud & Infrastructure',
    'Business Digitization',
    'System Integration',
    'AI-Enabled Engineering'
  ];

  const articles = [
    {
      id: 'why-smes-need-solution-architecture',
      title: 'Why Growing SMEs Need Architecture Leadership Before Software Purchases',
      category: 'Technology Architecture',
      readTime: '6 min read',
      date: 'February 2026',
      summary:
        'Most SME software failures do not stem from bad software; they happen because businesses purchase applications before establishing their data models, integration boundaries, and business requirements.',
      keyTakeaways: [
        'The hidden cost of treating software purchases as isolated decisions.',
        'Why enterprise ERP features often fail in traditional operational workflows.',
        'How an independent architecture assessment saves months of painful developer rework.'
      ]
    },
    {
      id: 'hybrid-cloud-economics-aws-vs-onprem',
      title: 'Hybrid Cloud Economics: Why 100% Public Cloud is Not Always the Best Choice for SMEs',
      category: 'Cloud & Infrastructure',
      readTime: '8 min read',
      date: 'January 2026',
      summary:
        'A practical analysis of how combining local hypervisor virtualization (VMware/Hyper-V) with selective AWS cloud workloads can reduce monthly infrastructure spend by up to 60% without sacrificing disaster recovery.',
      keyTakeaways: [
        'Evaluating compute workload predictability vs elastic bursts.',
        'Real-world math behind Reserved Instances and local hypervisor density.',
        'Designing secure site-to-site VPN tunnels for seamless hybrid data replication.'
      ]
    },
    {
      id: 'practical-ai-in-brownfield-sdlc',
      title: 'Practical AI in Software Engineering: Beyond Autocomplete to Codebase-Aware Agents',
      category: 'AI-Enabled Engineering',
      readTime: '7 min read',
      date: 'January 2026',
      summary:
        'How engineering teams can deploy project-specific AI agents equipped with Model Context Protocol (MCP) skills and repository architectural guidelines to safely refactor and test complex brownfield codebases.',
      keyTakeaways: [
        'Why generic AI chat prompts hallucinate on legacy enterprise code.',
        'Building deterministic tooling and skills for autonomous coding agents.',
        'Automating pull request architectural reviews and regression test generation.'
      ]
    },
    {
      id: 'system-integration-and-api-pipelines',
      title: 'Solving Operational Friction: Integrating Legacy ERPs with Modern Payment Rails',
      category: 'System Integration',
      readTime: '5 min read',
      date: 'December 2025',
      summary:
        'How traditional dealerships and operational businesses can bridge legacy on-premise transactional databases with modern web APIs, automated payment gateways, and real-time reconciliation engines.',
      keyTakeaways: [
        'Safe wrapper patterns for on-premises database synchronization.',
        'Handling webhook idempotency and automated retry queues.',
        'Eliminating manual end-of-day spreadsheet reconciliation.'
      ]
    },
    {
      id: 'business-process-digitization-framework',
      title: 'The Pragmatic Digitization Framework: From Paper Forms to Streamlined Operations',
      category: 'Business Digitization',
      readTime: '6 min read',
      date: 'November 2025',
      summary:
        'A step-by-step roadmap for digitizing physical manufacturing, distribution, and warehouse workflows without disrupting shop-floor productivity or forcing complex enterprise software onto staff.',
      keyTakeaways: [
        'Mapping actual operational handoffs before writing code.',
        'Designing role-based tablet interfaces for front-line workers.',
        'Establishing audit logs and automated management exception alerts.'
      ]
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Insights & Architecture Briefings | Tenzor Edge"
        description="Practical technology architecture insights, cloud infrastructure analyses, business digitization strategies, and AI-enabled software engineering briefings by Tenzor Edge."
        canonicalPath="/insights"
      />

      <PageHeader
        badge="Knowledge & Insights"
        title="Technology Architecture & Engineering Insights"
        subtitle="Practical perspectives on solution architecture, hybrid infrastructure economics, business workflow automation, and AI-enabled software engineering."
        breadcrumbs={[{ label: 'Insights' }]}
      />

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-brand-mist sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-brand-night text-white'
                      : 'bg-brand-mist text-brand-slate hover:bg-brand-slate/15'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-slate"
              />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-brand-slate/20 focus:outline-none focus:border-brand-edge-red text-brand-night"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Feed */}
      <section className="py-16 md:py-20 bg-brand-mist/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-brand-slate/15 p-8 max-w-xl mx-auto">
              <BookOpen size={36} className="mx-auto text-brand-slate/50 mb-3" />
              <h3 className="text-lg font-heading font-bold text-brand-night">
                No matching articles found
              </h3>
              <p className="text-xs text-brand-slate mt-1">
                Try selecting a different category or clearing your search query.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-brand-night text-white text-xs font-semibold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-brand-slate/20 rounded-2xl p-7 shadow-sm hover:shadow-card transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-brand-slate mb-4">
                      <span className="font-semibold uppercase tracking-wider text-brand-edge-red">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-brand-slate">
                        <Clock size={12} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-brand-night mb-3 group-hover:text-brand-crimson transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mb-6">
                      {article.summary}
                    </p>

                    <div className="pt-4 border-t border-brand-mist space-y-1.5 mb-6">
                      <div className="text-[11px] font-semibold text-brand-night uppercase tracking-wider mb-2">
                        Key Discussion Points:
                      </div>
                      {article.keyTakeaways.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start text-xs text-brand-slate"
                        >
                          <span className="text-brand-edge-red mr-1.5">•</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-mist flex items-center justify-between text-xs">
                    <span className="text-brand-slate font-medium">{article.date}</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center font-semibold text-brand-edge-red hover:text-brand-crimson"
                    >
                      <span>Discuss this topic</span>
                      <ArrowRight size={13} className="ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Publishing note */}
          <div className="mt-16 p-8 rounded-2xl bg-white border border-brand-slate/20 max-w-3xl mx-auto text-center">
            <h4 className="text-base font-heading font-bold text-brand-night mb-2">
              Have a Specific Architecture Challenge to Explore?
            </h4>
            <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mb-4">
              We regularly publish technical analyses based on real operational engagements. If you are facing a complex infrastructure migration, payment reconciliation challenge, or SDLC AI integration, reach out directly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-brand-night hover:bg-brand-edge-red transition-colors"
            >
              <span>Connect with our Principal Architect</span>
              <ArrowRight size={14} className="ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Put Architecture Insights into Action"
        subtitle="Schedule a technical conversation to discuss how these principles can be applied directly to resolve your company's technology challenges."
      />
    </>
  );
}
