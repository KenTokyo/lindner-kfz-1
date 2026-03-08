import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onTerminanfrageClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTerminanfrageClick }) => {
  const handleTerminanfrage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onTerminanfrageClick) {
      onTerminanfrageClick();
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
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2600&auto=format&fit=crop"
          alt="Karosserie- und Lackierwerkstatt – KFZ Lindner Berlin"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-white font-bold tracking-widest uppercase mb-4 drop-shadow-lg">
            Berlin Blankenfelde
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 drop-shadow-xl">
            KFZ Lindner{' '}
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-2 text-neutral-200">
              Karosserie, Lack & Autoservice
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-50 max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-md">
            Unkomplizierte Terminanfrage. Klare Abläufe. Saubere Arbeit –
            alles unter einem Dach.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleTerminanfrage}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all hover:scale-[1.02] shadow-lg cursor-pointer"
            >
              Terminanfrage starten
            </button>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm shadow-lg"
            >
              Dienstleistungen ansehen
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 drop-shadow-md hidden sm:flex"
      >
        <span className="text-xs uppercase tracking-widest text-white font-bold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 stroke-[3]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
