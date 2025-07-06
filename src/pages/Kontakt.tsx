
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Kontakt = () => {
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
              Kontaktirajte nas
            </motion.h1>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Spremni smo odgovoriti na sva vaša pitanja i pomoći vam rezervirati fotografiranje. 
              Javite nam se putem forme ili direktno.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Kontakt sadržaj */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            
            {/* Prvi red - Kontakt forma i informacije */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              
              {/* Kontakt forma - 3/5 širine */}
              <motion.div variants={itemVariants} className="lg:col-span-3">
                <Card className="shadow-lg bg-surface border-[#2c2c2c] h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">
                      Pošaljite nam poruku
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Ime i prezime *
                        </label>
                        <Input id="name" type="text" required className="bg-background border-[#2c2c2c] text-white" />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          E-mail *
                        </label>
                        <Input id="email" type="email" required className="bg-background border-[#2c2c2c] text-white" />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                          Telefon
                        </label>
                        <Input id="phone" type="tel" className="bg-background border-[#2c2c2c] text-white" />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                          Tip fotografiranja
                        </label>
                        <select 
                          id="service" 
                          className="w-full p-3 border border-[#2c2c2c] rounded-md bg-background text-white focus:ring-2 focus:ring-accent focus:border-transparent"
                        >
                          <option value="">Odaberite uslugu</option>
                          <option value="portreti">Portreti i lifestyle</option>
                          <option value="boudoir">Boudoir fotografija</option>
                          <option value="vjencanja">Vjenčanja</option>
                          <option value="eventi">Događaji i proslave</option>
                          <option value="ljubimci">Kućni ljubimci</option>
                          <option value="predmeti">Predmeti/nekretnine</option>
                          <option value="poduka">Foto poduka</option>
                          <option value="ostalo">Ostalo</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                          Poruka *
                        </label>
                        <Textarea 
                          id="message" 
                          rows={5} 
                          placeholder="Opišite svoju viziju, datum i vrijeme kada biste željeli fotografiranje, lokaciju ili bilo koje dodatne informacije..."
                          required 
                          className="bg-background border-[#2c2c2c] text-white"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-accent hover:bg-accentHover transition-all duration-300 hover:scale-105"
                      >
                        Pošalji poruku
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Drugi stupac s kontakt informacije - 2/5 širine */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Direktni kontakt */}
                <motion.div variants={itemVariants}>
                  <Card className="shadow-lg bg-surface border-[#2c2c2c] h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">
                        Direktni kontakt
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Telefon</p>
                          <p className="text-subtext">091 323 8038</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Lokacija</p>
                          <p className="text-subtext">Zagreb, Hrvatska</p>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button 
                          asChild 
                          className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 hover:scale-105"
                        >
                          <a 
                            href="https://wa.me/385913238038"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center"
                          >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Radno vrijeme */}
                <motion.div variants={itemVariants}>
                  <Card className="shadow-lg bg-surface border-[#2c2c2c] h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">
                        Dostupnost
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-subtext mb-4">
                        Radimo po dogovoru, prilagođavamo se vašem rasporedu. 
                        Najčešće smo dostupni:
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white">Ponedjeljak - Petak</span>
                          <span className="text-subtext">Po dogovoru</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white">Subota - Nedjelja</span>
                          <span className="text-subtext">Po dogovoru</span>
                        </div>
                      </div>
                      <p className="text-sm text-subtext/70 mt-4">
                        * Nismo klasični studio - radimo na različitim lokacijama prema dogovoru
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Lokacija sekcija - puna širina */}
            <motion.div variants={itemVariants}>
              <Card className="shadow-lg bg-surface border-[#2c2c2c]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Lokacija
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-background h-48 rounded-lg flex items-center justify-center border border-[#2c2c2c]">
                    <div className="text-center text-subtext">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-white">Google mapa - Zagreb</p>
                      <p className="text-sm">Radimo na različitim lokacijama</p>
                    </div>
                  </div>
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

export default Kontakt;
