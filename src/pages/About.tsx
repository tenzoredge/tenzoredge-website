import { Target, Eye, Gem, CheckCircle, Rocket, Shield, Users, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Helmet>
        <title>Tenzor - About Us | Our Story & Mission</title>
        <meta name="description" content="Learn about Tenzor's mission to drive operational excellence. Meet our founder and discover how we transform businesses through innovative consulting solutions." />
        <meta name="keywords" content="about tenzor, operational excellence, business consulting, founder, mission, vision, values" />
        <link rel="canonical" href="https://tenzor.vercel.app/about" />
        <meta property="og:title" content="About Tenzor - Our Story & Mission" />
        <meta property="og:description" content="Discover Tenzor's commitment to operational excellence and meet the founder driving business transformation." />
        <meta property="og:url" content="https://tenzor.vercel.app/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
      <PageHeader
        title="Our Story"
        subtitle="Building operational excellence for small and medium businesses"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 text-center">
            <p className="text-xl font-medium text-gray-900 mb-8">
              Most SMBs operate in a state of constant pressure — disconnected systems, manual processes, unreliable infrastructure, and endless fire-fighting.
            </p>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
              <p className="font-bold text-2xl text-indigo-900 mb-4">
                Tenzor was created to change that.
              </p>
              <p className="text-lg text-gray-700">
                We don't sell tools or isolated services.<br />
                <span className="font-semibold text-indigo-700">We build complete operational stability.</span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <p className="text-indigo-600 font-semibold">We bring clarity to complexity</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <p className="text-indigo-600 font-semibold">We automate the repetitive</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <p className="text-indigo-600 font-semibold">We design systems that scale</p>
              </div>
            </div>
            <p className="text-xl font-medium text-gray-900 mt-12">
              Tenzor is what SMBs wish they had all along: a trusted technical partner who handles everything end-to-end.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                  <Target className="text-indigo-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To automate, stabilize, and scale the core operations of small and medium businesses with precision, clarity, and reliability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-xl mr-4">
                  <Eye className="text-purple-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the trusted digital backbone that powers growth for SMBs worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={<Target size={32} />}
              title="Precision"
              description="Every solution is engineered with intention."
            />
            <ValueCard
              icon={<Gem size={32} />}
              title="Integrity"
              description="No shortcuts. No overselling. No unnecessary complexity."
            />
            <ValueCard
              icon={<Rocket size={32} />}
              title="Innovation"
              description="Practical automation, not hype-driven technology."
            />
            <ValueCard
              icon={<CheckCircle size={32} />}
              title="Performance"
              description="Stable, predictable, scalable operations."
            />
            <ValueCard
              icon={<Shield size={32} />}
              title="Sustainability"
              description="Systems that last, processes that evolve, results that compound."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the Founder — Tukee
            </h2>
            <p className="text-xl md:text-2xl text-indigo-100">
              You don't get a vendor. You get a partner.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="space-y-6 text-lg text-gray-100 leading-relaxed">
              <p>
                Tukee is a builder with years of experience solving problems across infrastructure, automation, integrations, and business operations. He's worked inside messy, chaotic technical environments — and knows exactly how to bring order.
              </p>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Users className="mr-3" size={24} />
                  He brings:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="text-indigo-300 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>System-level thinking</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="text-indigo-300 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Deep practicality</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="text-indigo-300 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>The ability to simplify complex problems</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="text-indigo-300 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>A calm, reliable problem-solving approach</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="text-indigo-300 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Full ownership from problem to resolution</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl text-white font-medium bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent">
                  For clients, Tukee acts as a mini CTO — someone who understands both business and technology, and executes both without unnecessary complexity.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Work with Tukee
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl group">
      <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">{description}</p>
    </div>
  );
}
