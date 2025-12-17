import { Link } from 'react-router-dom';
import { Server, Workflow, Box, Zap, Target, Shield, Clock, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tenzor - Home | Operational Excellence & Business Transformation</title>
        <meta name="description" content="Welcome to Tenzor. Discover how we drive operational excellence and transform businesses through innovative consulting solutions. Precision. Performance. Progress." />
        <meta name="keywords" content="operational excellence, business consulting, process optimization, digital transformation, automation, strategic growth, home" />
        <link rel="canonical" href="https://tenzor.vercel.app/" />
        <meta property="og:title" content="Tenzor - Operational Excellence & Business Transformation" />
        <meta property="og:description" content="Transform your business operations with expert consulting. We specialize in process optimization, digital transformation, and strategic growth." />
        <meta property="og:url" content="https://tenzor.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white w-full relative overflow-hidden" style={{ height: '90vh' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-6 text-indigo-200 text-sm md:text-base font-semibold tracking-widest uppercase opacity-80">
              Operational Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6 text-white">
              We Make Your Business Run Smoothly
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed font-light">
              Eliminate operational chaos, automate workflows, and build reliable systems that scale — without enterprise complexity.
            </p>
            <div className="animate-slide-in-right">
              <Link to="/contact">
                <Button className="text-base px-8 py-3 shadow-xl">Book a Clarity Call</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => document.getElementById('promise-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/60 hover:text-white/90 transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </section>

      <section id="promise-section" className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up">
            The Tenzor Promise
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-700 mb-16 gradient-text animate-slide-in-left">
            Precision. Performance. Progress.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
            We deliver clarity, stability, and optimization across your operations through practical engineering and automation — designed specifically for SMBs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <ServiceCard
                icon={<Server size={32} />}
                title="Infrastructure & System Management"
                description="Keep your systems reliable, secure, and predictable."
                link="/services#infrastructure"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ServiceCard
                icon={<Workflow size={32} />}
                title="Automation & Integration"
                description="Eliminate repetitive work and connect the tools your team uses every day."
                link="/services#automation"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <ServiceCard
                icon={<Box size={32} />}
                title="Business Platforms"
                description="Lightweight custom systems built around your workflows."
                link="/services#platforms"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <ServiceCard
                icon={<Zap size={32} />}
                title="Application Modernization"
                description="Upgrade outdated technology without disrupting business."
                link="/services#modernization"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
            Why SMBs Choose Tenzor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <ReasonCard
                icon={<Target size={28} />}
                title="End-to-End Ownership"
                description="We don't hand off problems. We fix them entirely."
              />
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <ReasonCard
                icon={<Clock size={28} />}
                title="Practical, Fast Execution"
                description="Weeks, not months. Always usable. Always realistic."
              />
            </div>
            <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <ReasonCard
                icon={<Shield size={28} />}
                title="Built for Real-World Chaos"
                description="We design solutions for imperfect data, non-technical teams, and everyday business pressure."
              />
            </div>
            <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <ReasonCard
                icon={<Zap size={28} />}
                title="Founder-Led Expertise"
                description="You work directly with a builder, not a sales team."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Results We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResultCard
              stat="40–70%"
              description="Reduction in manual workload"
            />
            <ResultCard
              stat="Dramatic"
              description="Decrease in operational errors"
            />
            <ResultCard
              stat="Better"
              description="Visibility into business operations"
            />
            <ResultCard
              stat="More"
              description="Stability and fewer crises"
            />
            <ResultCard
              stat="Faster"
              description="Workflows and reduced dependency"
            />
            <ResultCard
              stat="Complete"
              description="Control over your operations"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse-gentle"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Simplify Your Operations?
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Join the growing number of SMBs that have transformed their operations with Tenzor. Let's discuss your challenges and build a solution that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  Book a Free Consultation
                </Button>
              </Link>
              <div className="text-indigo-200">
                <p className="text-sm">No sales pitch • Honest assessment • Clear next steps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <Link
      to={link}
      className="bg-white p-8 border-2 border-gray-200 hover:border-indigo-500 transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-2 rounded-lg block"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">{description}</p>
      </div>
    </Link>
  );
}

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <div className="text-center group hover:scale-105 transition-transform duration-300">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 mb-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">{description}</p>
    </div>
  );
}

interface ResultCardProps {
  stat: string;
  description: string;
}

function ResultCard({ stat, description }: ResultCardProps) {
  return (
    <div className="text-center p-6 border border-gray-700 hover:border-indigo-500 transition-colors duration-300 hover:shadow-lg hover:shadow-indigo-500/20 rounded-lg">
      <div className="text-4xl font-bold text-indigo-400 mb-3 hover:text-indigo-300 transition-colors">{stat}</div>
      <p className="text-gray-300 hover:text-gray-200 transition-colors">{description}</p>
    </div>
  );
}
