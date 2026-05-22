import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Wrench } from 'lucide-react';

interface QuickChoiceProps {
  onSelect?: (category: 'karosserie' | 'autoservice') => void;
}

export const QuickChoice: React.FC<QuickChoiceProps> = ({ onSelect }) => {
  const karosserieVideoRef = useRef<HTMLVideoElement>(null);
  const autoserviceVideoRef = useRef<HTMLVideoElement>(null);

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

  const handleMouseEnter = (ref: React.RefObject<HTMLVideoElement>) => {
    if (ref.current) {
      ref.current.play().catch(() => {
        // Ignore autoplay errors if any
      });
    }
  };

  const handleMouseLeave = (ref: React.RefObject<HTMLVideoElement>) => {
    if (ref.current) {
      ref.current.pause();
      // Optional: reset video to start on mouse leave
      // ref.current.currentTime = 0;
    }
  };

  return (
    <section className="relative pt-20 pb-24 bg-neutral-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-200/30 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neutral-200/20 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-4xl mx-auto">
            Karosserie, Lack oder Autoservice? <br />
            Stellen Sie direkt die passende Terminanfrage.
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Wählen Sie den Bereich, der zu Ihrem Anliegen passt – <br />
            Ihre Anfrage landet ohne Umwege bei uns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
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
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleClick('karosserie')}
            onMouseEnter={() => handleMouseEnter(karosserieVideoRef)}
            onMouseLeave={() => handleMouseLeave(karosserieVideoRef)}
            className="relative group rounded-[2rem] overflow-hidden h-[340px] md:h-[380px] lg:h-[420px] shadow-sm hover:shadow-2xl bg-neutral-200 transition-all duration-300 w-full text-left cursor-pointer block"
          >
            {/* Background Video */}
            <video
              ref={karosserieVideoRef}
              src="/Lindner-Bilder/Service/SUB-HERO Lackieren Video.mp4"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              muted
              loop
              playsInline
              preload="metadata"
            />
            
            {/* Overlay to ensure text box pops */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

            {/* Content Box */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/10 backdrop-blur-xl rounded-[1.5rem] px-4 pb-4 pt-10 sm:px-5 sm:pb-5 sm:pt-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-white/20 transition-all duration-300 group-hover:bg-white/20 flex flex-col items-center">
              {/* Icon Container */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-neutral-900 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                <Paintbrush size={24} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-[1.1rem] xl:text-[1.3rem] leading-tight font-extrabold text-white mb-2 break-words hyphens-auto w-full drop-shadow-md">
                Karosserie & Lack
              </h3>
              <p className="text-sm xl:text-base text-neutral-100 line-clamp-2 mb-4 leading-relaxed font-medium drop-shadow-sm">
                Unfallinstandsetzung, Karosseriearbeiten, Lackierung – alles rund
                um Karosserie und Lack.
              </p>
              
              {/* Button */}
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/30 group-hover:bg-white group-hover:text-neutral-900 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-sm mt-auto">
                Terminanfrage starten
              </span>
            </div>
          </motion.button>

          {/* Autoservice */}
          <motion.button
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleClick('autoservice')}
            onMouseEnter={() => handleMouseEnter(autoserviceVideoRef)}
            onMouseLeave={() => handleMouseLeave(autoserviceVideoRef)}
            className="relative group rounded-[2rem] overflow-hidden h-[340px] md:h-[380px] lg:h-[420px] shadow-sm hover:shadow-2xl bg-neutral-200 transition-all duration-300 w-full text-left cursor-pointer block"
          >
            {/* Background Video */}
            <video
              ref={autoserviceVideoRef}
              src="/Lindner-Bilder/Service/SUB-HERO Autoservice.mp4"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              muted
              loop
              playsInline
              preload="metadata"
            />
            
            {/* Overlay to ensure text box pops */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

            {/* Content Box */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/10 backdrop-blur-xl rounded-[1.5rem] px-4 pb-4 pt-10 sm:px-5 sm:pb-5 sm:pt-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-white/20 transition-all duration-300 group-hover:bg-white/20 flex flex-col items-center">
              {/* Icon Container */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-neutral-900 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                <Wrench size={24} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-[1.1rem] xl:text-[1.3rem] leading-tight font-extrabold text-white mb-2 break-words hyphens-auto w-full drop-shadow-md">
                Autoservice
              </h3>
              <p className="text-sm xl:text-base text-neutral-100 line-clamp-2 mb-4 leading-relaxed font-medium drop-shadow-sm">
                Inspektion, Mechanik, Service & Reparaturen – Ihr Anliegen rund um
                Wartung und Technik.
              </p>
              
              {/* Button */}
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/30 group-hover:bg-white group-hover:text-neutral-900 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-sm mt-auto">
                Terminanfrage starten
              </span>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
