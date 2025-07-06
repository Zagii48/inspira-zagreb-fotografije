
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Lifestyle = () => {
  const portfolioImages = [
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop',
      alt: 'Lifestyle fotografija žene za laptop, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop',
      alt: 'Opuštena lifestyle fotografija u domu, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop',
      alt: 'Prirodna lifestyle fotografija vani, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop',
      alt: 'Lifestyle fotografija u prirodi, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=entropy',
      alt: 'Autentična lifestyle fotografija, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=entropy',
      alt: 'Spontana lifestyle fotografija, Zagreb'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      {/* Hero sekcija */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Lifestyle fotografija
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Autentične fotografije koje prikazuju vaš svakodnevni život na najljepši način. 
              Prirodno, opušteno i stvarno.
            </p>
          </div>
        </div>
      </section>

      {/* Galerija */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA sekcija */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Zabilježite svoje trenutke
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Lifestyle fotografiranje koje prikazuje pravu vas. 
              Cijena od 200€ po satu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-inspira hover:bg-inspira-600">
                <Link to="/kontakt">Zatraži termin</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/usluge">Pogledaj cijene</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lifestyle;
