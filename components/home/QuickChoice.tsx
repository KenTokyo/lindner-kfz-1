import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Wrench } from 'lucide-react';

interface QuickChoiceProps {
  onSelect?: (category: 'karosserie' | 'autoservice') => void;
}

export const QuickChoice: React.FC<QuickChoiceProps> = ({ onSelect }) => {
  const handleClick = (category: 'karosserie' | 'autoservice') => {
    if (onSelect) {
      onSelect(category);
    } else {
      // Fallback: scroll to contact
      const elem = document.getElementById('contact');
      if (elem) {
        const offset = 120;
        const pos = elem.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Worum geht es?
          </h2>
          <p className="text-neutral-600 text-lg">
            Wählen Sie Ihren Bereich – wir leiten Ihre Anfrage direkt richtig
            weiter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Karosserie & Lack */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleClick('karosserie')}
            className="group relative bg-white rounded-2xl p-8 md:p-10 text-left shadow-sm hover:shadow-xl transition-shadow cursor-pointer border border-neutral-100"
          >
            <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neutral-800 transition-colors">
              <Paintbrush className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Karosserie & Lack</h3>
            <p className="text-neutral-600 leading-relaxed">
              Unfallinstandsetzung, Karosseriearbeiten, Lackierung – alles rund
              um Karosserie und Lack.
            </p>
            <div className="mt-6 text-sm font-semibold text-neutral-900 group-hover:underline">
              Terminanfrage starten &rarr;
            </div>
          </motion.button>

          {/* Autoservice */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleClick('autoservice')}
            className="group relative bg-white rounded-2xl p-8 md:p-10 text-left shadow-sm hover:shadow-xl transition-shadow cursor-pointer border border-neutral-100"
          >
            <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neutral-800 transition-colors">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Autoservice</h3>
            <p className="text-neutral-600 leading-relaxed">
              Inspektion, Mechanik, Service & Reparaturen – Ihr Anliegen rund um
              Wartung und Technik.
            </p>
            <div className="mt-6 text-sm font-semibold text-neutral-900 group-hover:underline">
              Terminanfrage starten &rarr;
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
