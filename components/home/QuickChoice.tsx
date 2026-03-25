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
    <section className="relative py-24 bg-neutral-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-200/30 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neutral-200/20 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Worum geht es?
          </h2>
          <p className="text-neutral-600 text-lg">
            Wählen Sie Ihren Bereich – wir leiten Ihre Anfrage direkt richtig
            weiter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Decorative divider between cards (visible on md+) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center gap-2">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
            <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center">
              <span className="text-neutral-400 text-xs font-semibold">
                oder
              </span>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
          </div>

          {/* Karosserie & Lack */}
          <motion.button
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleClick('karosserie')}
            className="group relative bg-white rounded-2xl p-8 md:p-10 text-left cursor-pointer border border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/0 via-neutral-50/0 to-neutral-100/0 group-hover:from-neutral-50/80 group-hover:via-white/40 group-hover:to-neutral-100/60 transition-all duration-500 rounded-2xl" />
            {/* Subtle border glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-neutral-900/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neutral-100/60 to-transparent rounded-bl-[3rem] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 shadow-[0_4px_14px_rgba(23,23,23,0.25)] group-hover:shadow-[0_6px_20px_rgba(23,23,23,0.35),0_0_0_4px_rgba(23,23,23,0.06)] group-hover:bg-neutral-800 transition-all duration-300">
                <Paintbrush className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Karosserie & Lack</h3>
              <p className="text-neutral-600 leading-relaxed">
                Unfallinstandsetzung, Karosseriearbeiten, Lackierung – alles rund
                um Karosserie und Lack.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                <span>Terminanfrage starten</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </div>
            </div>
          </motion.button>

          {/* Autoservice */}
          <motion.button
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleClick('autoservice')}
            className="group relative bg-white rounded-2xl p-8 md:p-10 text-left cursor-pointer border border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/0 via-neutral-50/0 to-neutral-100/0 group-hover:from-neutral-50/80 group-hover:via-white/40 group-hover:to-neutral-100/60 transition-all duration-500 rounded-2xl" />
            {/* Subtle border glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-neutral-900/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neutral-100/60 to-transparent rounded-bl-[3rem] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 shadow-[0_4px_14px_rgba(23,23,23,0.25)] group-hover:shadow-[0_6px_20px_rgba(23,23,23,0.35),0_0_0_4px_rgba(23,23,23,0.06)] group-hover:bg-neutral-800 transition-all duration-300">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Autoservice</h3>
              <p className="text-neutral-600 leading-relaxed">
                Inspektion, Mechanik, Service & Reparaturen – Ihr Anliegen rund um
                Wartung und Technik.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                <span>Terminanfrage starten</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
