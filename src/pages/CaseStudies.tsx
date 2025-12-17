import { AlertCircle, Wrench, CheckCircle, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Tenzor - Case Studies | Real Results & Success Stories</title>
        <meta name="description" content="Explore real case studies of businesses transformed by Tenzor. See how we've solved operational challenges and delivered measurable results across various industries." />
        <meta name="keywords" content="case studies, success stories, business transformation, operational excellence, results, testimonials" />
        <link rel="canonical" href="https://tenzor.vercel.app/case-studies" />
        <meta property="og:title" content="Case Studies - Real Business Transformation Results" />
        <meta property="og:description" content="Discover how Tenzor has helped businesses achieve operational excellence through real case studies and success stories." />
        <meta property="og:url" content="https://tenzor.vercel.app/case-studies" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
      <PageHeader
        title="Case Studies"
        subtitle="Real operational challenges solved. Real results delivered"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudyCard
            title="Auto Service Network"
            industry="Automotive"
            problem="Multiple branches, inconsistent processes, manual reporting."
            solution="Built a central onboarding and service management platform with automated reporting."
            execution={[
              'Analyzed existing workflow across all branches',
              'Designed unified platform architecture',
              'Implemented phased rollout across locations',
              'Trained staff on new system',
              'Automated daily and weekly reporting'
            ]}
            outcomes={[
              { metric: '60%', description: 'Reduction in manual labor' },
              { metric: 'Unified', description: 'View of operations' },
              { metric: 'Real-time', description: 'Performance analytics' }
            ]}
            tools="Custom web platform, automated reporting engine, centralized database"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudyCard
            title="Logistics SMB"
            industry="Logistics & Distribution"
            problem="Legacy system, daily outages, operational delays."
            solution="Migrated workload, improved infrastructure, automated reconciliation."
            execution={[
              'Assessed existing infrastructure vulnerabilities',
              'Planned migration with zero-disruption strategy',
              'Rebuilt critical systems on modern stack',
              'Implemented monitoring and alerting',
              'Automated data reconciliation processes'
            ]}
            outcomes={[
              { metric: '90+', description: 'Days of zero downtime' },
              { metric: 'Faster', description: 'Processing speed' },
              { metric: 'Reduced', description: 'Operational dependencies' }
            ]}
            tools="Modern infrastructure stack, monitoring tools, automated reconciliation scripts"
          />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudyCard
            title="Retail Chain"
            industry="Retail"
            problem="Disconnected billing, POS, and CRM systems."
            solution="Integrated systems with automated data sync."
            execution={[
              'Mapped data flow across all systems',
              'Built integration layer between platforms',
              'Implemented real-time data synchronization',
              'Created unified reporting dashboard',
              'Set up automated error detection'
            ]}
            outcomes={[
              { metric: 'Accurate', description: 'Real-time reporting' },
              { metric: 'Eliminated', description: 'Data entry errors' },
              { metric: 'Improved', description: 'Decision-making speed' }
            ]}
            tools="Custom integration platform, API connectors, unified dashboard"
          />
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to solve your operational challenges?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Let's discuss how we can deliver similar results for your business.
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

interface CaseStudyCardProps {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  execution: string[];
  outcomes: { metric: string; description: string }[];
  tools: string;
}

function CaseStudyCard({
  title,
  industry,
  problem,
  solution,
  execution,
  outcomes,
  tools
}: CaseStudyCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 overflow-hidden">
      <div className="bg-gray-900 text-white p-8">
        <div className="text-blue-400 text-sm font-semibold mb-2">{industry}</div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-start mb-4">
            <AlertCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Problem</h3>
              <p className="text-gray-700">{problem}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-start mb-4">
            <Wrench className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-700">{solution}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="text-blue-600 mr-2" size={24} />
            Execution
          </h3>
          <ul className="space-y-2 ml-8">
            {execution.map((step, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="text-green-600 mr-2" size={24} />
            Outcome
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-gray-50 p-6 border-l-4 border-green-600">
                <div className="text-3xl font-bold text-gray-900 mb-2">{outcome.metric}</div>
                <div className="text-gray-700">{outcome.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 border-l-4 border-blue-600">
          <h3 className="text-sm font-bold text-gray-900 mb-2">Tools Used</h3>
          <p className="text-gray-700">{tools}</p>
        </div>
      </div>
    </div>
  );
}
