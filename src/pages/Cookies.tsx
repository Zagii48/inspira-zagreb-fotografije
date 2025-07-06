
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    setCookieConsent(consent);
  }, []);

  const handleConsentChange = (consent: boolean) => {
    const consentValue = consent ? 'accepted' : 'rejected';
    localStorage.setItem('cookie-consent', consentValue);
    setCookieConsent(consentValue);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero sekcija */}
      <motion.section 
        className="bg-gradient-to-br from-surface to-background py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Politika kolačića
            </motion.h1>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Informacije o tome kako koristimo kolačiće na našoj web stranici i kako možete upravljati svojom privatnošću.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Sadržaj stranice */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            
            {/* Trenutne postavke */}
            <motion.div variants={itemVariants}>
              <Card className="shadow-lg bg-surface border-[#2c2c2c]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Vaše trenutne postavke
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white">Analitički kolačići:</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      cookieConsent === 'accepted' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-red-600 text-white'
                    }`}>
                      {cookieConsent === 'accepted' ? 'Prihvaćeni' : 'Odbačeni'}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      onClick={() => handleConsentChange(true)}
                      className="bg-accent hover:bg-accentHover"
                      disabled={cookieConsent === 'accepted'}
                    >
                      Prihvati kolačiće
                    </Button>
                    <Button
                      onClick={() => handleConsentChange(false)}
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-white"
                      disabled={cookieConsent === 'rejected'}
                    >
                      Odbij kolačiće
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Što su kolačići */}
            <motion.div variants={itemVariants}>
              <Card className="shadow-lg bg-surface border-[#2c2c2c]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Što su kolačići?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-subtext leading-relaxed">
                    Kolačići su male datoteke koje se pohranjuju na vašem uređaju kada posjećujete web stranicu. 
                    Omogućavaju web stranici da zapamti vaše radnje i postavke (kao što su prijava, jezik, 
                    veličina fonta i druge postavke prikaza) kroz određeno vrijeme, tako da ih ne morate 
                    ponovno unositi svaki put kada se vratite na stranicu ili pregledavate s jedne stranice na drugu.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vrste kolačića */}
            <motion.div variants={itemVariants}>
              <Card className="shadow-lg bg-surface border-[#2c2c2c]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Vrste kolačića koje koristimo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">Nužni kolačići</h3>
                    <p className="text-subtext">
                      Ovi kolačići su neophodni za funkcioniranje naše web stranice. Bez njih, web stranica 
                      neće raditi kako treba. Uključuju kolačiće za pamćenje vaših postavki privatnosti.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">Analitički kolačići (Google Analytics)</h3>
                    <p className="text-subtext mb-2">
                      Koristimo Google Analytics 4 za razumijevanje kako posjetitelji koriste našu web stranicu. 
                      Ovi kolačići prikupljaju informacije anonimno i pomažu nam poboljšati korisničko iskustvo.
                    </p>
                    <ul className="list-disc list-inside text-subtext text-sm space-y-1">
                      <li>Broj posjeta stranici</li>
                      <li>Najposjećenije stranice</li>
                      <li>Vrijeme provedeno na stranici</li>
                      <li>Izvore prometa (kako ste došli do nas)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upravljanje kolačićima */}
            <motion.div variants={itemVariants}>
              <Card className="shadow-lg bg-surface border-[#2c2c2c]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Upravljanje kolačićima
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-subtext mb-4">
                    Možete upravljati kolačićima na nekoliko načina:
                  </p>
                  <ul className="list-disc list-inside text-subtext space-y-2">
                    <li>Koristite postavke iznad za promjenu svojih preferencija na ovoj stranici</li>
                    <li>Postavke vašeg web preglednika - većina preglednika omogućava blokiranje kolačića</li>
                    <li>Koristite dodatke za privatnost u vašem pregledniku</li>
                  </ul>
                  <p className="text-subtext mt-4 text-sm">
                    Napomena: Onemogućavanje određenih kolačića može utjecati na funkcionalnost naše web stranice.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Kontakt */}
            <motion.div variants={itemVariants}>
              <Card className="shadow-lg bg-surface border-[#2c2c2c]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Pitanja o privatnosti?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-subtext mb-4">
                    Ako imate pitanja o našoj politici kolačića ili želite više informacija o tome 
                    kako štitimo vašu privatnost, molimo kontaktirajte nas.
                  </p>
                  <Button 
                    asChild 
                    className="bg-accent hover:bg-accentHover"
                  >
                    <a href="/kontakt">Kontaktirajte nas</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;
