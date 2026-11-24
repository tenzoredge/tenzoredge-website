import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

interface CookieConsent {
  accepted: boolean;
  timestamp: string;
}

const CONSENT_KEY = 'tenzoredge_cookie_consent_v1';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const consent: CookieConsent = {
      accepted: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleReject = () => {
    const consent: CookieConsent = {
      accepted: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-night/95 backdrop-blur-md border-t border-brand-slate/20 text-white shadow-2xl z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="w-5 h-5 text-brand-edge-red mt-0.5 shrink-0" />
            <div className="text-xs text-brand-silver leading-relaxed">
              <strong className="text-white">Cookie & Privacy Notice:</strong> We use essential cookies to ensure our website functions securely and reliably. Non-essential analytics cookies help us understand how visitors engage with our technical insights. You can manage your preferences at any time.
            </div>
          </div>
          <div className="flex items-center space-x-3 shrink-0 w-full sm:w-auto justify-end">
            <button
              onClick={handleReject}
              className="text-xs px-3.5 py-2 text-brand-silver hover:text-white border border-brand-slate/30 rounded-lg hover:bg-white/5 transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={handleAccept}
              className="text-xs px-4 py-2 font-semibold text-white bg-brand-edge-red hover:bg-brand-neon-red rounded-lg transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
