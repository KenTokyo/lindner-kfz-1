import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          style={{ willChange: 'auto' }}
        >
          <source src="/Lindner-Bilder/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay Strategy:
            1. Left-to-right gradient to darken text area without dimming the whole image
            2. Bottom-to-top gradient for general depth
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Added drop-shadow-lg, font-bold and text-white for maximum contrast */}
          <h2 className="text-white font-bold tracking-widest uppercase mb-4 drop-shadow-lg">
            Berlin Blankenfelde
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 drop-shadow-xl">
            KFZ-Meisterbetrieb <br />
            <span className="text-white">
              Lindner
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-50 max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-md">
            Wir sind Ihr typenoffener KFZ-Fachbetrieb mit einem Komplettangebot aus einer Hand. 
            Qualität, Kompetenz und Service seit über einem Jahrzehnt.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all hover:scale-105 shadow-lg"
            >
              Termin vereinbaren
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm shadow-lg"
            >
              Unsere Leistungen
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 drop-shadow-md"
      >
        <span className="text-xs uppercase tracking-widest text-white font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 stroke-[3]" />
        </motion.div>
      </motion.div>
    </section>
  );
};