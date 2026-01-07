import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Eye } from 'lucide-react';

export const Eurogarant: React.FC = () => {
  return (
    <section id="eurogarant" className="py-24 bg-white text-black relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-100 -skew-x-12 translate-x-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Eurogarant</h2>
          <p className="text-xl md:text-2xl text-neutral-600 font-light max-w-3xl">
            Der EUROGARANT-Karosserie-Fachbetrieb — ein Garant für Sicherheit und Werterhaltung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8 text-neutral-700 leading-relaxed">
            <p>
              Ein Unfall ist schnell passiert. Die Angst vor unsachgemäßer Reparatur ist groß. 
              Mängel im Rahmenbereich, abplatzenden Spachtel oder schlechte Lackierung will man vermeiden. 
              Gut reparierten Fahrzeugen sieht man ihre vormalige Beschädigung nicht mehr an.
            </p>
            <p className="font-medium text-black border-l-4 border-neutral-900 pl-4">
              Jedes noch zu reparierende Fahrzeug kann nach dem Stand der Technik wieder in den Zustand 
              versetzt werden, der dem eines vergleichbaren ungeschädigten Fahrzeuges in nichts nachsteht.
            </p>
            <p>
              Um Kunden die Wahl der richtigen Werkstatt zu erleichtern, wurde der "europäisch-geprüfte Karosserie-Fachbetrieb" 
              (Eurogarant) ins Leben gerufen. Diese unterliegen einer ständigen Kontrolle durch DEKRA und TÜV.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-neutral-100 rounded-2xl"
            >
              <ShieldCheck className="w-10 h-10 mb-4 text-neutral-900" />
              <h3 className="text-lg font-bold mb-2">Geprüfte Qualität</h3>
              <p className="text-sm text-neutral-600">Regelmäßige Prüfung durch ZKF, DEKRA und TÜV.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-neutral-100 rounded-2xl"
            >
              <Award className="w-10 h-10 mb-4 text-neutral-900" />
              <h3 className="text-lg font-bold mb-2">Werterhalt</h3>
              <p className="text-sm text-neutral-600">Reparatur nach Herstellervorgaben sichert den Wert Ihres Fahrzeugs.</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-neutral-100 rounded-2xl"
            >
              <Eye className="w-10 h-10 mb-4 text-neutral-900" />
              <h3 className="text-lg font-bold mb-2">Unsichtbare Reparatur</h3>
              <p className="text-sm text-neutral-600">Optik und Sicherheit wie vor dem Unfall.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
