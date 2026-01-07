import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-neutral-500 font-medium uppercase tracking-widest mb-2">Über Uns</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-8">
              Qualität und Leistungsstärke <br />
              <span className="text-neutral-500">aus einer Hand.</span>
            </h2>
            
            <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
              <p>
                Wir sind ein typenoffener KFZ-Fachbetrieb mit einem Komplettangebot aus einer Hand. 
                Profitieren Sie von unserer Kompetenz und unserem Service. Wir bieten Ihnen Qualität 
                und Leistungsstärke von der Inspektion über HU/AU bis hin zur Unfallinstandsetzung und Lackierung.
              </p>
              <p>
                Durch ständige Mitarbeiterschulungen und Anschaffung neuester Technik sind wir den ständig 
                steigenden Anforderungen in der KFZ-Branche nachgekommen, um eine fachgerechte Reparatur durchzuführen.
              </p>
              
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 mt-8">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-neutral-900 w-5 h-5" />
                    <span className="text-neutral-800">Filiale in Berlin-Rosenthal seit 2011</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-neutral-900 w-5 h-5" />
                    <span className="text-neutral-800">Mitglied der Karosserie & Fahrzeuginnung Berlin</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-neutral-900 w-5 h-5" />
                    <span className="text-neutral-800">Mehrfach gewählt zur WERKSTATT DES VERTRAUENS</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
               <img
                src="https://picsum.photos/id/1070/800/1000" // A subtle background image that works well for about us
                alt="Werkstatt Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-neutral-100">
              <p className="text-4xl font-bold mb-1">Seit 2014</p>
              <p className="font-medium text-neutral-600">Offizieller Eurogarant-Fachbetrieb</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};