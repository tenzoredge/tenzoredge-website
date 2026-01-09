import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import Button from './Button';

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
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleReject = () => {
    const consent: CookieConsent = {
      accepted: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cookie Preferences
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Essential cookies are required for the website to function properly. You can accept all cookies or reject non-essential ones.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 ml-4">
            <Button
              onClick={handleReject}
              variant="secondary"
              className="text-sm px-4 py-2"
            >
              Reject Non-Essential
            </Button>
            <Button
              onClick={handleAccept}
              className="text-sm px-4 py-2"
            >
              Accept All Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}