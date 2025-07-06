
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Usluge = () => {
  const services = [
    {
      title: 'Portreti i lifestyle',
      price: '200 €',
      additionalHour: '100 €',
      description: 'Profesionalno portretno fotografiranje u studiju ili na lokaciji. Uključuje osnovnu obradu fotografija.'
    },
    {
      title: 'Boudoir fotografija',
      price: '250 €',
      additionalHour: '100 €',
      description: 'Intimno i artistično fotografiranje s fokusom na eleganciju i samopouzdanje. Potpuna diskrecija garantovana.'
    },
    {
      title: 'Vjenčanja',
      price: '250 €',
      additionalHour: '100 €',
      description: 'Cjelovito fotografiranje vašeg posebnog dana. Uključuje pripremu, ceremoniju i svečanost.'
    },
    {
      title: 'Događaji i proslave',
      price: '200 €',
      additionalHour: '100 €',
      description: 'Fotografiranje rođendana, korporativnih događaja, proslava i drugih posebnih prilika.'
    },
    {
      title: 'Kućni ljubimci',
      price: '150 €',
      additionalHour: null,
      description: 'Fotografiranje vaših četveronožnih članova obitelji (do sat vremena).'
    },
    {
      title: 'Predmeti/nekretnine',
      price: '200 €',
      additionalHour: '100 €',
      description: 'Komercijalno fotografiranje proizvoda, enterijera ili nekretnina za promotivne svrhe.'
    },
    {
      title: 'Individualna foto poduka',
      price: '30 €',
      additionalHour: null,
      description: 'Naučite osnove fotografije uz iskusnog profesionalca. Idealno za početnike.'
    },
    {
      title: 'Grupni tečajevi',
      price: 'Po dogovoru',
      additionalHour: null,
      description: 'Fotografski tečajevi za grupe. Cijena ovisi o broju sudionika i trajanju.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
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
              Naše fotografske usluge u Zagrebu
            </motion.h1>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Profesionalne fotografske usluge prilagođene vašim potrebama. 
              Transparentno naplaćivanje bez skrivenih troškova.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Usluge */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-surface border-[#2c2c2c] h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-accent mb-2">
                        {service.price}
                      </div>
                      {service.additionalHour && (
                        <div className="text-sm text-subtext">
                          + {service.additionalHour} / sljedeći sat
                        </div>
                      )}
                    </div>
                    <p className="text-subtext mb-6">
                      {service.description}
                    </p>
                    <Button 
                      asChild 
                      className="w-full bg-accent hover:bg-accentHover transition-all duration-300 hover:scale-105"
                    >
                      <Link to="/kontakt">Zatraži termin</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dodatne informacije */}
      <motion.section 
        className="py-16 bg-surface"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-white mb-8 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Dodatne informacije
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Card className="bg-background shadow-lg border-[#2c2c2c]">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">
                      Što je uključeno?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-subtext">
                      <li>• Profesionalno fotografiranje</li>
                      <li>• Osnovna obrada fotografija</li>
                      <li>• Digitalna galerija</li>
                      <li>• Savjetovanje tijekom snimanja</li>
                      <li>• Ugovor o privatnosti (za boudoir)</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-background shadow-lg border-[#2c2c2c]">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">
                      Načini dostave
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-subtext">
                      <li>• USB stick (besplatno)</li>
                      <li>• Online galerija za preuzimanje</li>
                      <li>• WeTransfer ili slični servisi</li>
                      <li>• Osobno preuzimanje u Zagrebu</li>
                      <li>• Ispis fotografija (dodatno)</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div 
              className="text-center mt-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Imate pitanja o našim uslugama?
              </h3>
              <p className="text-subtext mb-8">
                Kontaktirajte nas za personaliziranu ponudu ili dodatne informacije.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent hover:bg-accentHover transition-all duration-300 hover:scale-105"
                >
                  <Link to="/kontakt">Kontaktiraj nas</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-transparent text-white border border-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <a href="https://wa.me/385913238038" target="_blank" rel="noopener noreferrer">
                    WhatsApp: 091 323 8038
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Usluge;
