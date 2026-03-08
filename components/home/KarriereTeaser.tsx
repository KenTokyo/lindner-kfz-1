import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';

export const KarriereTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <Wrench size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Karriere bei Lindner
              </h2>
              <p className="text-neutral-400 text-lg max-w-lg">
                Kurze Bewerbung, auch initiativ – wir suchen Verstärkung in Karosserie, Lack und Autoservice.
              </p>
            </div>
          </div>

          <Link
            to="/karriere"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-bold rounded-full hover:bg-neutral-100 transition-colors shrink-0"
          >
            Zur Karriereseite
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
