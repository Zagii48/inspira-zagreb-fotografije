
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
  hasConsent: boolean;
}

const GoogleAnalytics = ({ measurementId, hasConsent }: GoogleAnalyticsProps) => {
  useEffect(() => {
    if (!hasConsent || !measurementId) return;

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize GA
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId, hasConsent]);

  return null;
};

export default GoogleAnalytics;
