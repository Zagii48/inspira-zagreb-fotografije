
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqItems = [
    {
      question: "Kako mogu naručiti fotografiranje putem vaše web stranice?",
      answer: "Za sve upite koristite web formu, e-mail ili WhatsApp. Odgovorit ćemo vam u najkraćem mogućem roku."
    },
    {
      question: "Koliko traje proces izrade personalizirane umjetničke fotografije?",
      answer: "Fotografiranje traje od 1 sata do više, ovisno o vrsti usluge. Isporuka obrađenih fotografija je u roku od 1-3 tjedna."
    },
    {
      question: "Kako se vrši dostava narudžbi?",
      answer: "Fotografije možete preuzeti putem USB-a, transfer servisa, ili osobno u Zagrebu."
    },
    {
      question: "Rado bih imala boudoir fotografiju, ali ne želim da ju drugi vide. Je li to moguće?",
      answer: "Naravno! Potpisujemo ugovor o privatnosti i poštujemo vašu želju za diskrecijom."
    },
    {
      question: "Gdje ste i u koje vrijeme dostupni?",
      answer: "Nismo klasični studio – radimo po dogovoru, najviše u Zagrebu i okolici. Kontaktirajte nas za termine."
    }
  ];

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
              Često postavljana pitanja
            </motion.h1>
            <motion.p 
              className="text-xl text-subtext mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Pronađite odgovore na najčešća pitanja o našim fotografskim uslugama u Zagrebu.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* FAQ sekcija */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  >
                    <AccordionItem value={`item-${index}`} className="bg-surface rounded-lg px-6 border border-[#2c2c2c]">
                      <AccordionTrigger className="text-left font-semibold text-white hover:text-accent">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-subtext pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
