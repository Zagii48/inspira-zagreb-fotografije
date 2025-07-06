
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioImages = [
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      alt: 'Boudoir portret žene u Zagrebu, profesionalna fotografija'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      alt: 'Lifestyle portret žene u bijeloj košulji, Zagreb fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
      alt: 'Prirodni portret u vanjskom ambijentu, Zagrebu fotograf'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
      alt: 'Umjetnička fotografija prirode, profesionalni Zagreb fotograf'
    }
  ];

  const galleryCategories = [
    {
      title: 'Portreti',
      path: '/galerija/portreti',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
      alt: 'Portretna fotografija primjer Zagreb, profesionalni portreti'
    },
    {
      title: 'Lifestyle',
      path: '/galerija/lifestyle',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      alt: 'Lifestyle fotografija primjer Zagreb, prirodne fotografije'
    },
    {
      title: 'Boudoir',
      path: '/galerija/boudoir',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      alt: 'Boudoir fotografija primjer Zagreb, intimne fotografije'
    },
    {
      title: 'Vjenčanja i eventi',
      path: '/galerija/vjencanja-eventi',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      alt: 'Vjenčana fotografija primjer Zagreb, event fotografije'
    }
  ];

  const testimonials = [
    {
      text: "Iskustvo s Inspira studijem bilo je izuzetno. Gordan je stvarni profesionalac koji zna kako izvući najbolje iz svake fotografije.",
      author: "Ana M."
    },
    {
      text: "Boudoir session mi je dao više samopouzdanja nego što sam ikad imala. Preporučujem svim ženama!",
      author: "Petra S."
    },
    {
      text: "Fotografije s našeg vjenčanja su nevjerojatne! Svaki trenutak je uhvaćen savršeno.",
      author: "Marko i Lea"
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      
      {/* Hero sekcija - Full screen with background */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <motion.div 
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Inspira – Profesionalne fotografske usluge u Zagrebu
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Specijalizirani za portrete, boudoir, vjenčanja i lifestyle fotografiju. 
              Stvaramo umjetnost koja govori vašu priču.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accentHover text-white transition-all duration-300 hover:scale-105"
              >
                <Link to="/galerija/portreti">Pogledaj galeriju</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="bg-transparent text-white border-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Link to="#kontakt">Zatraži termin</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio slider */}
      <motion.section 
        className="py-16 bg-surface"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Naš rad</h2>
            <p className="text-subtext max-w-2xl mx-auto">
              Pogledajte neke od naših najnovijih radova i otkrijte kako možemo uhvatiti vašu jedinstvenu priču.
            </p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {portfolioImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-96 sm:h-[500px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slider indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-accent' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Galerija preview with masonry layout */}
      <motion.section 
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-4">Galerije</h2>
            <p className="text-subtext max-w-2xl mx-auto">
              Istražite naše različite stilove fotografije i pronađite onaj koji najbolje odgovara vašoj viziji.
            </p>
          </motion.div>
          
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="break-inside-avoid mb-6"
              >
                <Card className="group hover:shadow-lg transition-all duration-300 bg-surface border-[#2c2c2c] hover:scale-105">
                  <CardContent className="p-0">
                    <Link to={category.path}>
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={category.image}
                          alt={category.alt}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* O nama */}
      <motion.section 
        className="py-16 bg-surface"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              O nama
            </motion.h2>
            <motion.div 
              className="prose prose-lg mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-subtext leading-relaxed">
                Gordan Kos je nagrađivani fotograf iz Zagreba specijaliziran za portrete, boudoir i lifestyle fotografiju. 
                S više od desetljeća iskustva, stvara jedinstvene umjetničke fotografije koje prikazuju autentičnost i 
                ljepotu svakog trenutka. Naš pristup je personaliziran, diskretan i profesionalan, s fokusom na stvaranje 
                ugodnog okruženja u kojemu se naši klijenti osjećaju opušteno i samopouzdano.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Recenzije with staggered animation */}
      <motion.section 
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-4">Što kažu naši klijenti</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-surface shadow-lg border-[#2c2c2c] h-full">
                  <CardContent className="p-6">
                    <div className="text-accent text-4xl mb-4">"</div>
                    <p className="text-subtext mb-4 italic">
                      {testimonial.text}
                    </p>
                    <div className="font-semibold text-white">
                      – {testimonial.author}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Usluge sekcija */}
      <motion.section 
        id="usluge"
        className="py-16 bg-surface"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Spremni za fotografiranje?
          </motion.h2>
          <motion.p 
            className="text-xl text-subtext mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pogledajte naš cjenik i ponudu te kontaktirajte nas za rezervaciju termina.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accentHover text-white transition-all duration-300 hover:scale-105"
            >
              <Link to="/usluge">Pogledaj cjenik i ponudu</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-transparent text-white border border-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
            >
              <a href="#kontakt">Kontaktiraj nas</a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Kontakt forma */}
      <motion.section 
        id="kontakt"
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Kontaktirajte nas</h2>
              <p className="text-subtext">
                Pošaljite nam poruku i odgovorit ćemo vam u najkraćem mogućem roku.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="shadow-lg bg-surface border-[#2c2c2c]">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Ime i prezime
                      </label>
                      <Input id="name" type="text" required className="bg-background border-[#2c2c2c] text-white" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        E-mail
                      </label>
                      <Input id="email" type="email" required className="bg-background border-[#2c2c2c] text-white" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Poruka
                      </label>
                      <Textarea id="message" rows={5} required className="bg-background border-[#2c2c2c] text-white" />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accentHover text-white transition-all duration-300 hover:scale-105"
                    >
                      Pošalji poruku
                    </Button>
                  </form>
                  
                  <div className="mt-8 pt-8 border-t border-[#2c2c2c] text-center">
                    <p className="text-subtext mb-4">Ili nas kontaktirajte direktno:</p>
                    <motion.a
                      href="https://wa.me/385913238038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp: 091 323 8038
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
