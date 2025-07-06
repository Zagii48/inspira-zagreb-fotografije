
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
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <Card className="bg-surface border-[#2c2c2c] shadow-2xl">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-white mb-2">
                    Koristimo kolačiće za analizu prometa i unapređenje korisničkog iskustva na našoj web stranici.
                  </p>
                  <p className="text-subtext text-sm">
                    Vaša privatnost je važna za nas. Možete odabrati koje kolačiće želite prihvatiti.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
                  <Button
                    onClick={handleAccept}
                    className="bg-accent hover:bg-accentHover text-white"
                  >
                    Prihvati
                  </Button>
                  <Button
                    onClick={handleReject}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
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
