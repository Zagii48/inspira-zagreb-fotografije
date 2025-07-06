import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryModal from '@/components/GalleryModal';

const Boudoir = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const portfolioImages = [
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop',
      alt: 'Elegantna boudoir fotografija Zagreb, intimno fotografiranje'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop',
      alt: 'Intimna boudoir fotografija s prirodnim osvjetljenjem, Zagreb studio'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=550&fit=crop&crop=faces',
      alt: 'Umjetnička boudoir fotografija žena, profesionalni Zagreb fotograf'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=450&fit=crop&crop=faces',
      alt: 'Senzualna boudoir fotografija, diskretno fotografiranje Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=650&fit=crop&crop=entropy',
      alt: 'Diskretna boudoir fotografija u studiju, Zagreb boudoir'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=entropy',
      alt: 'Profesionalna boudoir fotografija ženstvenost, Zagreb usluge'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=center',
      alt: 'Kreativna boudoir fotografija s mekim svjetlom, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop&crop=center',
      alt: 'Boudoir portret elegancija i stil, profesionalno Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=450&fit=crop&crop=top',
      alt: 'Intimna boudoir sesija samopouzdanje, Zagreb fotografije'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=550&fit=crop&crop=top',
      alt: 'Boudoir fotografija ženstvena ljepota, Zagreb studio'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=650&fit=crop&crop=top',
      alt: 'Klasična boudoir fotografija elegancija, privatno Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=bottom',
      alt: 'Moderna boudoir fotografija stil, Zagreb fotografski servisi'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=bottom',
      alt: 'Boudoir fotografija prirodno svjetlo, profesionalni Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop&crop=bottom',
      alt: 'Personalizirana boudoir fotografija žena, Zagreb fotograf'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=550&fit=crop&crop=left',
      alt: 'Boudoir fotografija povjerljivost diskrecija, Zagreb usluge'
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
              Boudoir fotografija
            </motion.h1>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Intimno i elegantno fotografiranje koje slavi ženstvenost i samopouzdanje. 
              Potpuna diskrecija i profesionalnost garantovana.
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

      {/* Diskrecija sekcija */}
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
              className="text-3xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Vaša privatnost je naša prioriteta
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="text-center" variants={itemVariants}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Potpuna diskrecija</h3>
                <p className="text-subtext">Sve fotografije ostaju striktno povjerljive i neće biti javno objavljene bez vašeg pristanka.</p>
              </motion.div>
              
              <motion.div className="text-center" variants={itemVariants}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Ugovor o privatnosti</h3>
                <p className="text-subtext">Potpisujemo pravno obvezujući ugovor koji štiti vašu privatnost i prava na fotografije.</p>
              </motion.div>
              
              <motion.div className="text-center" variants={itemVariants}>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Ugodno okruženje</h3>
                <p className="text-subtext">Stvaramo opuštenu i sigurnu atmosferu gdje se možete potpuno opustiti i biti sebe.</p>
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
              Otkrijte svoju ljepotu
            </motion.h2>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Boudoir fotografiranje koje slavi vašu ženstvenost uz potpunu diskreciju. 
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

export default Boudoir;
