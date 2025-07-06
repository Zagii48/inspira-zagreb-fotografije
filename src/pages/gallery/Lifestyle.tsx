
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Lifestyle = () => {
  const portfolioImages = [
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop',
      alt: 'Lifestyle fotografija žene za laptop Zagreb, profesionalna fotografija'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop',
      alt: 'Opuštena lifestyle fotografija u domu Zagreb, prirodne fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=550&fit=crop',
      alt: 'Prirodna lifestyle fotografija vani Zagreb, outdoor fotografiranje'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=450&fit=crop',
      alt: 'Lifestyle fotografija u prirodi Zagreb, umjetnička fotografija'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=650&fit=crop&crop=entropy',
      alt: 'Autentična lifestyle fotografija Zagreb, profesionalni fotograf'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=entropy',
      alt: 'Spontana lifestyle fotografija Zagreb, kreativne fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop&crop=center',
      alt: 'Lifestyle portret u prirodnom okruženju, Zagreb fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop&crop=center',
      alt: 'Svakodnevni trenutci lifestyle fotografija, Zagreb studio'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=450&fit=crop&crop=faces',
      alt: 'Intimna lifestyle fotografija kod kuće, lifestyle Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=550&fit=crop&crop=faces',
      alt: 'Moderni lifestyle portret žene, Zagreb fotografski servisi'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=650&fit=crop&crop=top',
      alt: 'Vanjska lifestyle sesija Zagreb, prirodno fotografiranje'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop&crop=top',
      alt: 'Elegantna lifestyle fotografija, profesionalne usluge Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop&crop=top',
      alt: 'Casual lifestyle fotografija u uredu, business lifestyle Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=450&fit=crop&crop=top',
      alt: 'Relaxed lifestyle fotografiranje, personalizirane fotografije Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=entropy',
      alt: 'Lifestyle fotografija s prirodnim svjetlom, Zagreb fotograf'
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
              Lifestyle fotografija
            </motion.h1>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Autentične fotografije koje prikazuju vaš svakodnevni život na najljepši način. 
              Prirodno, opušteno i stvarno.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Galerija s masonry layoutom */}
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
              Zabilježite svoje trenutke
            </motion.h2>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lifestyle fotografiranje koje prikazuje pravu vas. 
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
                className="bg-accent hover:bg-accentHover text-white transition-all duration-300 hover:scale-105"
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

export default Lifestyle;
