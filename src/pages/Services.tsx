import { Server, Workflow, Box, Zap, AlertCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Tenzor - Services | Operational Excellence Solutions</title>
        <meta name="description" content="Explore Tenzor's comprehensive services: Infrastructure Management, Automation & Integration, Business Platforms, and Application Modernization for SMBs." />
        <meta name="keywords" content="services, infrastructure management, automation, integration, business platforms, application modernization, operational excellence" />
        <link rel="canonical" href="https://tenzor.vercel.app/services" />
        <meta property="og:title" content="Tenzor Services - Operational Excellence Solutions" />
        <meta property="og:description" content="Discover our comprehensive suite of services designed to drive operational excellence and business transformation." />
        <meta property="og:url" content="https://tenzor.vercel.app/services" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
      <PageHeader
        title="Our Services"
        subtitle="Complete operational solutions designed for small and medium businesses"
      />

      <section id="infrastructure" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceSection
            icon={<Server size={48} />}
            title="Infrastructure & System Management"
            problem="SMBs often deal with unstable systems, recurring downtime, inconsistent setups, and poor visibility — all of which slow down business."
            whatWeDo={[
              'Server and VM provisioning (Windows Server, Ubuntu, Hyper-V, AWS)',
              'Network monitoring and uptime management',
              'Backup, recovery, and failover planning',
              'Security hardening and log audits',
              'Standardization and documentation'
            ]}
            outcomes={[
              'Reliable systems',
              'Reduced downtime',
              'Predictable performance',
              'Clear infrastructure visibility'
            ]}
          />
        </div>
      </section>

      <section id="automation" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceSection
            icon={<Workflow size={48} />}
            title="Automation & Integration"
            problem="Teams waste hours on repetitive tasks: data entry, reporting, reconciliation, customer follow-ups, file processing, and manual workflows."
            whatWeDo={[
              'RPA automation (Robocorp, Playwright, custom bots)',
              'Workflow automation across tools and platforms',
              'Intelligent data extraction and clean-up',
              'System-to-system integrations'
            ]}
            outcomes={[
              'Less manual work',
              'Fewer errors',
              'Faster execution',
              'Teams free to focus on real work'
            ]}
          />
        </div>
      </section>

      <section id="platforms" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceSection
            icon={<Box size={48} />}
            title="Business Platforms & Tools"
            problem="SMBs often rely on spreadsheets, outdated software, or a mix of tools that don't talk to each other."
            whatWeBuild={[
              'Asset management',
              'Client onboarding systems',
              'AMC & service contract management',
              'Ticketing and service desk systems',
              'Operational dashboards',
              'Audit & monitoring tools'
            ]}
            outcomes={[
              'Lightweight, cost-effective systems',
              'Built around your exact workflow',
              'No unnecessary features',
              'Easy to adopt across teams'
            ]}
          />
        </div>
      </section>

      <section id="modernization" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceSection
            icon={<Zap size={48} />}
            title="Application Modernization"
            problem="Legacy applications slow down operations, block integrations, and create daily friction."
            whatWeDo={[
              'Migrate old systems to modern stacks',
              'Rebuild or refactor legacy applications',
              'Improve performance, stability, and UX',
              'Implement best practices without disrupting business'
            ]}
            outcomes={[
              'Faster applications',
              'Reduced maintenance cost',
              'Future-ready systems'
            ]}
          />
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to fix your operational challenges?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Let's discuss how we can help your business run smoothly.
          </p>
          <Link to="/contact">
            <Button variant="secondary">Book a Clarity Call</Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}

interface ServiceSectionProps {
  icon: React.ReactNode;
  title: string;
  problem: string;
  whatWeDo?: string[];
  whatWeBuild?: string[];
  outcomes: string[];
}

function ServiceSection({ icon, title, problem, whatWeDo, whatWeBuild, outcomes }: ServiceSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="text-blue-600 mb-6">{icon}</div>
        <h2 className="text-3xl font-bold mb-6 text-gray-900">{title}</h2>

        <div className="mb-8">
          <div className="flex items-start mb-4">
            <AlertCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The Problem</h3>
              <p className="text-gray-700 leading-relaxed">{problem}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-start">
            <ArrowRight className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {whatWeDo ? 'What We Do' : 'What We Build'}
              </h3>
              <ul className="space-y-3">
                {(whatWeDo || whatWeBuild)?.map((item, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white p-8 lg:p-10">
        <div className="flex items-start mb-6">
          <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={24} />
          <h3 className="text-2xl font-bold">Outcome</h3>
        </div>
        <ul className="space-y-4">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start text-lg">
              <span className="text-green-400 mr-3">✓</span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
