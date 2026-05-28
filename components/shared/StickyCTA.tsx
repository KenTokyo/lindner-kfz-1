import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { CalendarDays, Map as MapIcon, MapPinned, PhoneCall, X } from 'lucide-react';

interface StickyCTAProps {
  onClick: () => void;
}

const phoneNumber = '0309131252';
const googleMapsDirectionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Hauptstra%C3%9Fe%2043%2C%2013159%20Berlin-Blankenfelde';
const appleMapsDirectionsUrl =
  'https://maps.apple.com/?daddr=Hauptstra%C3%9Fe%2043%2C%2013159%20Berlin-Blankenfelde&dirflg=d';

export const StickyCTA: React.FC<StickyCTAProps> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRouteSheetOpen, setIsRouteSheetOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 0);
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-[90] md:hidden"
    >
      <AnimatePresence>
        {isRouteSheetOpen && (
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Routenfuehrung auswaehlen"
            className="absolute left-3 right-3 bottom-[calc(100%+0.75rem)] rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-sm font-bold text-neutral-900">Routenf&uuml;hrung</span>
              <button
                type="button"
                onClick={() => setIsRouteSheetOpen(false)}
                aria-label="Auswahl schliessen"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsRouteSheetOpen(false)}
                className="flex min-h-14 items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-3 text-sm font-bold text-white transition-colors hover:bg-secondary/90"
              >
                <MapPinned className="h-4 w-4 shrink-0" />
                <span>Google Maps</span>
              </a>
              <a
                href={appleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsRouteSheetOpen(false)}
                className="flex min-h-14 items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-3 text-sm font-bold text-white transition-colors hover:bg-secondary/90"
              >
                <MapIcon className="h-4 w-4 shrink-0" />
                <span>Apple Karten</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button
          type="button"
          onClick={() => {
            setIsRouteSheetOpen(false);
            onClick();
          }}
          aria-label="Terminanfrage starten"
          className="h-14 min-w-0 flex-1 flex flex-col items-center justify-center gap-1 rounded-lg bg-secondary px-2 py-2 text-[11px] font-bold leading-tight text-white transition-all hover:bg-secondary/90 cursor-pointer"
        >
          <CalendarDays className="h-4 w-4 shrink-0" />
          <span className="max-w-full truncate">Terminanfrage</span>
        </button>
        <a
          href={`tel:${phoneNumber}`}
          onClick={() => setIsRouteSheetOpen(false)}
          aria-label="Jetzt anrufen unter 030 913 12 52"
          className="h-14 min-w-0 flex-1 flex flex-col items-center justify-center gap-1 rounded-lg bg-secondary px-2 py-2 text-[11px] font-bold leading-tight text-white transition-all hover:bg-secondary/90"
        >
          <PhoneCall className="h-4 w-4 shrink-0" />
          <span className="max-w-full truncate">Anrufen</span>
        </a>
        <button
          type="button"
          onClick={() => setIsRouteSheetOpen((isOpen) => !isOpen)}
          aria-label="Routenfuehrung auswaehlen"
          aria-expanded={isRouteSheetOpen}
          className="h-14 min-w-0 flex-1 flex flex-col items-center justify-center gap-1 rounded-lg bg-secondary px-2 py-2 text-[11px] font-bold leading-tight text-white transition-all hover:bg-secondary/90"
        >
          <MapPinned className="h-4 w-4 shrink-0" />
          <span className="max-w-full truncate">Routenf&uuml;hrung</span>
        </button>
      </div>
    </motion.div>
  );
};
