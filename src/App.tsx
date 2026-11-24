import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsentBanner from './components/CookieConsentBanner';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

// Service Pillar Detail Pages
import TechnologyConsulting from './pages/services/TechnologyConsulting';
import InfrastructureCloudEngineering from './pages/services/InfrastructureCloudEngineering';
import BusinessSolutionsDigitalTransformation from './pages/services/BusinessSolutionsDigitalTransformation';
import AIEnabledSoftwareEngineering from './pages/services/AIEnabledSoftwareEngineering';
import ProductTechnologyLeadership from './pages/services/ProductTechnologyLeadership';

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import CookiePolicy from './pages/legal/CookiePolicy';
import RefundCancellation from './pages/legal/RefundCancellation';
import ShippingDelivery from './pages/legal/ShippingDelivery';
import SubscriptionPolicy from './pages/legal/SubscriptionPolicy';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white text-brand-night selection:bg-brand-edge-red selection:text-white">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Services Overview & 5 Core Pillars */}
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/technology-consulting"
                element={<TechnologyConsulting />}
              />
              <Route
                path="/services/infrastructure-cloud-engineering"
                element={<InfrastructureCloudEngineering />}
              />
              <Route
                path="/services/business-solutions-digital-transformation"
                element={<BusinessSolutionsDigitalTransformation />}
              />
              <Route
                path="/services/ai-enabled-software-engineering"
                element={<AIEnabledSoftwareEngineering />}
              />
              <Route
                path="/services/product-technology-leadership"
                element={<ProductTechnologyLeadership />}
              />

              {/* Solutions & Industries */}
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/case-studies" element={<Navigate to="/solutions" replace />} />

              {/* Company & Thought Leadership */}
              <Route path="/about" element={<About />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />

              {/* Legal Pages */}
              <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms-conditions" element={<TermsConditions />} />
              <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
              <Route path="/legal/refund-cancellation" element={<RefundCancellation />} />
              <Route path="/legal/shipping-delivery" element={<ShippingDelivery />} />
              <Route path="/legal/subscription-policy" element={<SubscriptionPolicy />} />

              {/* Catch-all Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsentBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
