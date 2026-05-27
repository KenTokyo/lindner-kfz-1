import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const partners = [
  {
    name: 'Glasurit',
    icon: Award,
    label: 'Glasurit Partner',
  },
  {
    name: 'Eurogarant',
    icon: ShieldCheck,
    label: 'Eurogarant Fachbetrieb',
  },
  {
    name: 'Meisterbetrieb',
    icon: CheckCircle,
    label: 'KFZ-Meisterbetrieb',
  },
];

function useReveal(progress: MotionValue<number>, start: number, end: number, lift = 48) {
  const y = useTransform(progress, [start, end], [lift, 0]);
  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0, 0.65, 1]);
  return { y, opacity };
}

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(720);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!footerRef.current) return;

    const node = footerRef.current;
    let raf = 0;
    const measure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const height = Math.round(node.getBoundingClientRect().height);
        if (height > 0) setFooterHeight((prev) => (prev === height ? prev : height));
      });
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(node);
    window.addEventListener('resize', measure);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ['start end', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.35,
    restDelta: 0.0005,
  });

  const contentY = useTransform(smoothProgress, [0, 1], [92, 0]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.35, 1], [0.25, 0.85, 1]);
  const contentScale = useTransform(smoothProgress, [0, 1], [0.985, 1]);

  const partnersReveal = useReveal(smoothProgress, 0, 0.32, 52);
  const brandReveal = useReveal(smoothProgress, 0.12, 0.46, 48);
  const contactReveal = useReveal(smoothProgress, 0.18, 0.52, 44);
  const hoursReveal = useReveal(smoothProgress, 0.24, 0.58, 40);
  const legalReveal = useReveal(smoothProgress, 0.3, 0.7, 36);

  const reveal = (animation: { y: MotionValue<number>; opacity: MotionValue<number> }) =>
    prefersReducedMotion ? undefined : { y: animation.y, opacity: animation.opacity, willChange: 'transform, opacity' as const };

  return (
    <>
      <div ref={spacerRef} aria-hidden style={{ height: footerHeight }} />

      <motion.footer
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 z-0 text-white rounded-t-[2.5rem] md:rounded-t-[3rem] px-8 md:px-12 lg:px-24 flex flex-col min-h-[42vh] justify-between selection:bg-white selection:text-black shadow-2xl overflow-hidden"
        style={{
          transform: 'translate3d(0,0,0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          backgroundImage: 'url("/global-footer-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute top-6 left-6 md:top-8 md:left-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-neutral-50 shadow-inner" />
        <div className="absolute top-6 right-6 md:top-8 md:right-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-neutral-50 shadow-inner" />

        <motion.div
          style={
            prefersReducedMotion
              ? undefined
              : { y: contentY, opacity: contentOpacity, scale: contentScale, willChange: 'transform, opacity' }
          }
          className="contents"
        >
          <motion.div
            style={reveal(partnersReveal)}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/10 pt-16 md:pt-20 pb-10 gap-8"
          >
            <div className="text-neutral-500 font-medium uppercase tracking-widest text-xs md:text-sm">
              Zertifizierte Partner
            </div>
            <div className="flex flex-wrap items-center gap-6 md:gap-12">
              {partners.map((partner) => {
                const Icon = partner.icon;
                return (
                  <div key={partner.name} className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">{partner.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-10 pb-14 border-t border-white/10">
            <motion.div style={reveal(brandReveal)} className="flex flex-col">
              <img
                src="/Lindner Logo_weiss.png"
                alt="Lindner KFZ Logo"
                className="mb-5 w-full max-w-[150px] md:max-w-[180px] h-auto object-contain opacity-90"
              />
              <h3 className="text-lg font-semibold mb-6">KFZ Lindner</h3>
              <p className="text-sm text-neutral-400 mb-6 max-w-xs">
                Karosserie & Lack und Autoservice - unter einem Dach in Berlin-Blankenfelde. Ihr vertrauensvoller Partner für alle Kfz-Belange.
              </p>
            </motion.div>

            <motion.div style={reveal(contactReveal)} className="flex flex-col">
              <h3 className="text-neutral-500 uppercase tracking-widest text-xs font-semibold mb-6">
                Kontakt
              </h3>
              <ul className="space-y-4 text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neutral-500 shrink-0" />
                  <span>Hauptstraße 43<br />13159 Berlin</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-neutral-500 shrink-0" />
                  <a href="tel:+49309131252" className="hover:text-white transition-colors">030 913 1252</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-neutral-500 shrink-0" />
                  <a href="mailto:info@kfz-lindner.de" className="hover:text-white transition-colors">info@kfz-lindner.de</a>
                </li>
              </ul>
            </motion.div>

            <motion.div style={reveal(hoursReveal)} className="flex flex-col">
              <h3 className="text-neutral-500 uppercase tracking-widest text-xs font-semibold mb-6">
                Öffnungszeiten
              </h3>
              <ul className="space-y-4 text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-neutral-500 shrink-0" />
                  <div className="flex flex-col">
                    <span className="flex justify-between gap-4"><span>Mo - Fr:</span> <span>07:00 - 18:00 Uhr</span></span>
                    <span className="text-neutral-500 mt-1">Sa & So: Geschlossen</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div style={reveal(legalReveal)} className="flex flex-col lg:items-end">
              <h3 className="text-neutral-500 uppercase tracking-widest text-xs font-semibold mb-6">
                Rechtliches
              </h3>
              <nav className="flex flex-col lg:items-end gap-3 text-sm text-neutral-400">
                <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              </nav>
              <div className="mt-8 text-xs text-neutral-600 lg:text-right">
                &copy; {new Date().getFullYear()} KFZ Lindner.<br />Alle Rechte vorbehalten.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.footer>
    </>
  );
};
