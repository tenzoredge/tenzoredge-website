import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsentBanner from './components/CookieConsentBanner';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
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
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms-conditions" element={<TermsConditions />} />
              <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
              <Route path="/legal/refund-cancellation" element={<RefundCancellation />} />
              <Route path="/legal/shipping-delivery" element={<ShippingDelivery />} />
              <Route path="/legal/subscription-policy" element={<SubscriptionPolicy />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieConsentBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
