
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Boudoir = () => {
  const portfolioImages = [
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop',
      alt: 'Elegantna boudoir fotografija, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop',
      alt: 'Intimna boudoir fotografija s prirodnim osvjetljenjem, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=faces',
      alt: 'Umjetnička boudoir fotografija, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=faces',
      alt: 'Senzualna boudoir fotografija, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=entropy',
      alt: 'Diskretna boudoir fotografija, Zagreb'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=entropy',
      alt: 'Profesionalna boudoir fotografija, Zagreb'
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
              Boudoir fotografija
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Intimno i elegantno fotografiranje koje slavi ženstvenost i samopouzdanje. 
              Potpuna diskrecija i profesionalnost garantovana.
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

      {/* Diskrecija sekcija */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Vaša privatnost je naša prioriteta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-inspira rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Potpuna diskrecija</h3>
                <p className="text-gray-600">Sve fotografije ostaju striktno povjerljive i neće biti javno objavljene bez vašeg pristanka.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-inspira rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ugovor o privatnosti</h3>
                <p className="text-gray-600">Potpisujemo pravno obvezujući ugovor koji štiti vašu privatnost i prava na fotografije.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-inspira rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ugodno okruženje</h3>
                <p className="text-gray-600">Stvaramo opuštenu i sigurnu atmosferu gdje se možete potpuno opustiti i biti sebe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA sekcija */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Otkrijte svoju ljepotu
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Boudoir fotografiranje koje slavi vašu ženstvenost uz potpunu diskreciju. 
              Cijena od 250€ po satu.
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

export default Boudoir;
