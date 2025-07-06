import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface CookieConsentProps {
  onConsentChange: (consent: boolean) => void;
}

const CookieConsent = ({ onConsentChange }: CookieConsentProps) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setShowBanner(true);
    } else {
      onConsentChange(consent === 'accepted');
    }
  }, [onConsentChange]);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    onConsentChange(true);
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    onConsentChange(false);
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-1 right-1 z-50 p-0 w-full max-w-xs md:max-w-sm"
        >
          <Card className="bg-surface border-[#2c2c2c] shadow-2xl">
            <CardContent className="p-4">
              <div className="flex flex-col gap-3">
                <div className="flex-1">
                  <p className="text-white mb-2 text-sm">
                    Koristimo kolačiće za analizu prometa i unapređenje korisničkog iskustva na našoj web stranici.
                  </p>
                  <p className="text-subtext text-xs">
                    Vaša privatnost je važna za nas. Možete odabrati koje kolačiće želite prihvatiti.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
                  <Button
                    onClick={handleAccept}
                    className="bg-accent hover:bg-accentHover text-white text-sm px-4 py-2"
                  >
                    Prihvati
                  </Button>
                  <Button
                    onClick={handleReject}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white text-sm px-4 py-2"
                  >
                    Odbij
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-subtext hover:text-white"
                  >
                    <Link to="/cookies">Više informacija</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
