
import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      {/* Hero sekcija */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Naše fotografske usluge u Zagrebu
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Profesionalne fotografske usluge prilagođene vašim potrebama. 
              Transparentno naplaćivanje bez skrivenih troškova.
            </p>
          </div>
        </div>
      </section>

      {/* Usluge */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-inspira mb-2">
                      {service.price}
                    </div>
                    {service.additionalHour && (
                      <div className="text-sm text-gray-600">
                        + {service.additionalHour} / sljedeći sat
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Button asChild className="w-full bg-inspira hover:bg-inspira-600">
                    <Link to="/kontakt">Zatraži termin</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dodatne informacije */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Dodatne informacije
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Što je uključeno?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Profesionalno fotografiranje</li>
                    <li>• Osnovna obrada fotografija</li>
                    <li>• Digitalna galerija</li>
                    <li>• Savjetovanje tijekom snimanja</li>
                    <li>• Ugovor o privatnosti (za boudoir)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Načini dostave
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• USB stick (besplatno)</li>
                    <li>• Online galerija za preuzimanje</li>
                    <li>• WeTransfer ili slični servisi</li>
                    <li>• Osobno preuzimanje u Zagrebu</li>
                    <li>• Ispis fotografija (dodatno)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Imate pitanja o našim uslugama?
              </h3>
              <p className="text-gray-600 mb-8">
                Kontaktirajte nas za personaliziranu ponudu ili dodatne informacije.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-inspira hover:bg-inspira-600">
                  <Link to="/kontakt">Kontaktiraj nas</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/385913238038" target="_blank" rel="noopener noreferrer">
                    WhatsApp: 091 323 8038
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Usluge;
