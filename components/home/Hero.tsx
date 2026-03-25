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

      {/* Animated radial gradient overlay for depth */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 70%), ' +
            'radial-gradient(ellipse 50% 80% at 80% 80%, rgba(0,0,0,0.3) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Subtitle with decorative accent line */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex items-center gap-3 mb-5"
          >
            <motion.span
              className="block h-px bg-white/70"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            />
            <p className="text-white font-bold tracking-widest uppercase drop-shadow-lg text-sm">
              Berlin Blankenfelde
            </p>
          </motion.div>

          {/* Heading with dramatic sizing and text-shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-white leading-[1.05] mb-8"
            style={{
              textShadow:
                '0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)',
            }}
          >
            KFZ Lindner{' '}
            <motion.span
              className="block text-3xl md:text-4xl lg:text-5xl font-light mt-3 text-neutral-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.55 }}
              style={{
                textShadow: '0 1px 12px rgba(0,0,0,0.4)',
              }}
            >
              Karosserie, Lack & Autoservice
            </motion.span>
          </motion.h1>

          {/* Description paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.65 }}
            className="text-lg md:text-xl text-neutral-50 max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-md"
          >
            Unkomplizierte Terminanfrage. Klare Abläufe. Saubere Arbeit –
            alles unter einem Dach.
          </motion.p>

          {/* Buttons with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.85 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={handleTerminanfrage}
              className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg cursor-pointer transition-colors duration-200"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 40px rgba(255,255,255,0.25)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Terminanfrage starten
            </motion.button>
            <motion.a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full backdrop-blur-sm shadow-lg transition-colors duration-200"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.12)',
                boxShadow: '0 8px 30px rgba(255,255,255,0.1)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Dienstleistungen ansehen
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - elegant redesign */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-3 drop-shadow-md hidden sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-medium">
          Scroll
        </span>
        <div className="relative w-5 h-8 rounded-full border border-white/40 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-1 rounded-full bg-white"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        >
          <ArrowDown className="w-3 h-3 stroke-[2] text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};
