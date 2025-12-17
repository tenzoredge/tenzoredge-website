import { Car, ShoppingCart, Truck, Wrench, Building2, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Tenzor - Industries | Sectors We Serve</title>
        <meta name="description" content="Tenzor serves various industries including automotive, retail, logistics, manufacturing, and service companies. Discover how we drive operational excellence across sectors." />
        <meta name="keywords" content="industries, automotive, retail, logistics, manufacturing, service companies, operational excellence" />
        <link rel="canonical" href="https://tenzor.vercel.app/industries" />
        <meta property="og:title" content="Industries We Serve - Tenzor" />
        <meta property="og:description" content="Explore the industries and sectors where Tenzor drives operational excellence and business transformation." />
        <meta property="og:url" content="https://tenzor.vercel.app/industries" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
      <PageHeader
        title="Industries We Serve"
        subtitle="Tenzor works best with SMBs that face operational pressure and lack full in-house technical leadership"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            <IndustryIcon icon={<Car size={32} />} label="Auto Industry" />
            <IndustryIcon icon={<ShoppingCart size={32} />} label="Retail" />
            <IndustryIcon icon={<Truck size={32} />} label="Logistics" />
            <IndustryIcon icon={<Wrench size={32} />} label="Manufacturing" />
            <IndustryIcon icon={<Building2 size={32} />} label="Service Companies" />
            <IndustryIcon icon={<Building2 size={32} />} label="SMEs" />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in serving automobile dealerships and service chains, logistics and distribution companies, retail businesses, manufacturing subcontractors, service companies, and any SMB without a structured tech team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Common Problems We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProblemSolutionCard
              number="1"
              problem="Too Much Manual Work"
              details="Repeating tasks, data duplication, human error."
              solution="We automate it."
            />
            <ProblemSolutionCard
              number="2"
              problem="Disconnected Tools"
              details="Different softwares that don't talk to each other."
              solution="We integrate them."
            />
            <ProblemSolutionCard
              number="3"
              problem="Outdated Systems"
              details="Legacy tools that block growth."
              solution="We modernize them."
            />
            <ProblemSolutionCard
              number="4"
              problem="Unstable Infrastructure"
              details="Servers go down, backups fail, monitoring is absent."
              solution="We stabilize it."
            />
            <ProblemSolutionCard
              number="5"
              problem="Zero Visibility"
              details="No dashboards, no tracking, no insights."
              solution="We give clarity and control."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            The Result
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            A business that operates with less friction, fewer errors, and faster execution — while spending less time on operational pain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResultItem text="Less Friction" />
            <ResultItem text="Fewer Errors" />
            <ResultItem text="Faster Execution" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Does your business face these challenges?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Let's discuss how we can bring stability and clarity to your operations.
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

interface IndustryIconProps {
  icon: React.ReactNode;
  label: string;
}

function IndustryIcon({ icon, label }: IndustryIconProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-blue-100 flex items-center justify-center mb-3 text-blue-600">
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
}

interface ProblemSolutionCardProps {
  number: string;
  problem: string;
  details: string;
  solution: string;
}

function ProblemSolutionCard({ number, problem, details, solution }: ProblemSolutionCardProps) {
  return (
    <div className="bg-white p-8 border-2 border-gray-200 hover:border-blue-600 transition-colors">
      <div className="flex items-start mb-4">
        <div className="text-4xl font-bold text-blue-600 mr-4">{number}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{problem}</h3>
          <p className="text-gray-600 mb-4">{details}</p>
          <div className="flex items-center text-blue-600 font-semibold">
            <ArrowRight size={20} className="mr-2" />
            <span>{solution}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ResultItemProps {
  text: string;
}

function ResultItem({ text }: ResultItemProps) {
  return (
    <div className="bg-gray-50 p-6 border-l-4 border-blue-600">
      <p className="text-lg font-bold text-gray-900">{text}</p>
    </div>
  );
}
