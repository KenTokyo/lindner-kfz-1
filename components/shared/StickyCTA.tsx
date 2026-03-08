import React from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useState } from 'react';

interface StickyCTAProps {
  onClick: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Show after scrolling past the hero section (~600px)
    setIsVisible(latest > 600);
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-[90] md:hidden"
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button
          onClick={onClick}
          aria-label="Terminanfrage starten"
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-semibold rounded-xl hover:bg-neutral-800 transition-all cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          Terminanfrage
        </button>
      </div>
    </motion.div>
  );
};
