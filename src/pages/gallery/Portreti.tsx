
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Portreti = () => {
  const portfolioImages = [
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop',
      alt: 'Ženski portret u prirodnom ambijentu, profesionalni fotograf Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop',
      alt: 'Poslovni portret žene u bijeloj košulji, Zagreb fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=450&fit=crop',
      alt: 'Studijski portret s profesionalnim osvjetljenjem, Zagreb studio'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=550&fit=crop',
      alt: 'Portret u vanjskom ambijentu s prirodnim osvjetljenjem, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=650&fit=crop&crop=faces',
      alt: 'Kreativni portret s dramatičnim osvjetljenjem, fotografiranje Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=faces',
      alt: 'Elegantni poslovni portret žene, profesionalne fotografije Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=entropy',
      alt: 'Prirodni portret u studiju, fotografski studio Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=450&fit=crop&crop=entropy',
      alt: 'Vanjski portret s bokeh efektom, outdoor fotografiranje Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop&crop=center',
      alt: 'Portret s prirodnim svjetlom, lifestyle fotografija Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=550&fit=crop&crop=center',
      alt: 'Korporativni portret žene, business fotografije Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=650&fit=crop&crop=center',
      alt: 'Intimni portret u studiju, personalizirane fotografije Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop&crop=center',
      alt: 'Portret s mekim osvjetljenjem, profesionalni portret Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop&crop=top',
      alt: 'Moderni portret žene, Zagreb fotografski servisi'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=450&fit=crop&crop=top',
      alt: 'Artistički portret s kreativnim kompozicijom, Zagreb fotograf'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop&crop=top',
      alt: 'Profesionalni headshot portret, Zagreb fotografska usluga'
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
              Portretna fotografija
            </motion.h1>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Profesionalni portreti koji prenose vašu jedinstvenu osobnost i stil. 
              Studijsko ili vanjsko fotografiranje prilagođeno vašim potrebama.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Galerija */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {portfolioImages.map((image, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="break-inside-avoid mb-2 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA sekcija */}
      <motion.section 
        className="py-16 bg-surface"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Spremni za vaš portret?
            </motion.h2>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kontaktirajte nas i dogovorite termin za profesionalno portretno fotografiranje. 
              Cijena od 200€ po satu.
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
                className="bg-accent hover:bg-accentHover transition-all duration-300 hover:scale-105"
              >
                <Link to="/kontakt">Zatraži termin</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="bg-transparent text-white border border-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Link to="/usluge">Pogledaj cijene</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Portreti;
