import React from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

interface CookieConsentProps {
  cookieConsent: 'pending' | 'accepted' | 'rejected';
  onCookieConsent: (consent: 'accepted' | 'rejected') => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ cookieConsent, onCookieConsent }) => {
  // Only render if consent is pending
  if (cookieConsent !== 'pending') return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-lg border border-gray-200 p-4 max-w-sm animate-fade-in"
      style={{
        animation: 'fadeIn 0.5s ease-in-out',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <Cookie className="h-5 w-5 text-[#33C3F0] flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-base font-semibold text-[#1A1F2C] mb-1">Cookie Consent</h3>
            <p className="text-gray-600 text-sm">
              We use cookies to enhance your browsing experience and analyze our traffic.
              Please choose whether to accept or reject cookies.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => onCookieConsent('rejected')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm py-1 px-3 h-auto transition-colors duration-200"
            size="sm"
          >
            Reject
          </Button>
          <Button 
            onClick={() => onCookieConsent('accepted')}
            className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white text-sm py-1 px-3 h-auto transition-colors duration-200"
            size="sm"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 