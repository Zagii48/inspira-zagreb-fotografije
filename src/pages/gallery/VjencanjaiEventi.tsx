import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryModal from '@/components/GalleryModal';

const VjencanjaiEventi = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const portfolioImages = [
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop',
      alt: 'Vjenčano fotografiranje u prirodi Zagreb, vjenčanje fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop',
      alt: 'Romantični trenutci vjenčanja Zagreb, wedding fotograf'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=550&fit=crop',
      alt: 'Elegantno fotografiranje proslave Zagreb, event fotografija'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=450&fit=crop',
      alt: 'Profesionalno fotografiranje događaja Zagreb, događaji fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=650&fit=crop&crop=entropy',
      alt: 'Spontani trenutci vjenčanja Zagreb, wedding photography'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=entropy',
      alt: 'Emocije i radost na vjenčanju Zagreb, vjenčani fotograf'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=center',
      alt: 'Vjenčana ceremonija fotografiranje Zagreb, profesionalni wedding'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop&crop=center',
      alt: 'Svatovi i gosti vjenčanje Zagreb, druženje fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=450&fit=crop&crop=faces',
      alt: 'Intimni vjenčani trenutci Zagreb, privatno vjenčanje'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=550&fit=crop&crop=faces',
      alt: 'Par vjenčanje fotografija Zagreb, ljubavna priča'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=650&fit=crop&crop=top',
      alt: 'Korporativni event fotografiranje Zagreb, business eventi'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=top',
      alt: 'Rođendanske proslave fotografiranje Zagreb, party fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop&crop=top',
      alt: 'Obiteljski eventi fotografiranje Zagreb, druženje fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop&crop=bottom',
      alt: 'Vjenčane fotografije priroda Zagreb, outdoor wedding'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=450&fit=crop&crop=bottom',
      alt: 'Posebni događaji fotografiranje Zagreb, memorije fotografije'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
              Vjenčanja i eventi
            </motion.h1>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Uhvaćamo najljepše trenutke vašeg posebnog dana. 
              Od intimnih vjenčanja do velikih proslava - svaki trenutak je vrijedan pamćenja.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Galerija */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {portfolioImages.map((image, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="break-inside-avoid mb-6 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => openModal(index)}
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

      {/* Usluge sekcija */}
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
              className="text-3xl font-bold text-white mb-12 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Što pokrivamo
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="bg-background p-6 rounded-lg shadow-lg border border-[#2c2c2c]">
                <h3 className="text-xl font-semibold mb-4 text-accent">Vjenčanja</h3>
                <ul className="space-y-2 text-subtext">
                  <li>• Priprema i getting ready</li>
                  <li>• Ceremonija vjenčanja</li>
                  <li>• Grupne fotografije</li>
                  <li>• Romantična fotografiranja para</li>
                  <li>• Svečana večera i zabava</li>
                  <li>• Spontani trenutci gostiju</li>
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-background p-6 rounded-lg shadow-lg border border-[#2c2c2c]">
                <h3 className="text-xl font-semibold mb-4 text-accent">Eventi i proslave</h3>
                <ul className="space-y-2 text-subtext">
                  <li>• Rođendanske proslave</li>
                  <li>• Korporativni događaji</li>
                  <li>• Proslave godišnjica</li>
                  <li>• Dječji rođendani</li>
                  <li>• Obiteljska okupljanja</li>
                  <li>• Poslovne konferencije</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA sekcija */}
      <motion.section 
        className="py-16"
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
              Vaš poseban dan zaslužuje savršene fotografije
            </motion.h2>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kontaktirajte nas i dogovorite fotografiranje vašeg vjenčanja ili događaja. 
              Cijena od 250€ po satu.
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

      {/* Gallery Modal */}
      <GalleryModal
        images={portfolioImages}
        isOpen={modalOpen}
        initialIndex={selectedImageIndex}
        onClose={closeModal}
      />
    </div>
  );
};

export default VjencanjaiEventi;
