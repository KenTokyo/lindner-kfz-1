import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLayoutContext } from '../components/shared/Layout';
import { serviceCategories, dienstleistungenFAQ } from '../data/services';
import { ServiceCategory } from '../components/dienstleistungen/ServiceCategory';
import { ServiceFAQ } from '../components/dienstleistungen/ServiceFAQ';

export const DienstleistungenPage: React.FC = () => {
  const { openTerminanfrage } = useLayoutContext();

  React.useEffect(() => {
    document.title = 'Dienstleistungen | KFZ Lindner Berlin';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Alle Dienstleistungen von KFZ Lindner: Unfallinstandsetzung, Karosseriearbeiten, Lackierung, Inspektion, Mechanik & Reparaturen in Berlin-Blankenfelde.');
  }, []);

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-5">
            Dienstleistungen
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mb-8">
            Zwei Bereiche – direkt zum passenden Anliegen. Karosserie & Lack oder Autoservice: Hier finden Sie alle Details zu unseren Leistungen.
          </p>
          <button
            onClick={() => openTerminanfrage()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Terminanfrage starten
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {serviceCategories.map((category) => (
          <ServiceCategory
            key={category.title}
            category={category}
            onTerminanfrageClick={() => openTerminanfrage(category.categoryKey)}
          />
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8">
        <ServiceFAQ faqs={dienstleistungenFAQ} />
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Anliegen gefunden?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Stellen Sie eine unverbindliche Terminanfrage – wir melden uns mit einem passenden Termin bei Ihnen.
          </p>
          <button
            onClick={() => openTerminanfrage()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Terminanfrage starten
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
