import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';

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

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white px-4 md:px-6 pb-4 md:pb-6">
      <div className="relative max-w-[1400px] mx-auto bg-[#0a0a0a] text-white rounded-[2.5rem] md:rounded-[3rem] px-8 md:px-12 flex flex-col min-h-[60vh] justify-between selection:bg-white selection:text-black shadow-2xl">
        
        {/* Four corner holes for the "sign" look */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white shadow-inner" />
        <div className="absolute top-6 right-6 md:top-8 md:right-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white shadow-inner" />
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white shadow-inner" />
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white shadow-inner" />

        {/* Top: Partners / Trust */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/10 pt-16 md:pt-20 pb-10 gap-8">
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
        </div>

        {/* Middle: Huge CTA */}
        <div className="flex-1 flex flex-col justify-center py-20 md:py-32">
          <p className="text-neutral-500 uppercase tracking-widest text-xs md:text-sm font-medium mb-6">
            Kontakt
          </p>
          <a 
            href="mailto:info@autoservice-lindner.de" 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter hover:opacity-70 transition-opacity duration-300 leading-none break-all"
          >
            info@autoservice-lindner.de
          </a>
        </div>

        {/* Bottom: Brand, Legal, Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 pt-10 border-t border-white/10">
          <div className="w-full lg:w-auto">
             <img
              src="/Lindner Logo_weiss.png"
              alt="Lindner KFZ Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />
            <p className="text-xs text-neutral-500 mt-4 max-w-xs">
              Karosserie & Lack und Autoservice – unter einem Dach in Berlin-Blankenfelde.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm font-medium text-neutral-400 w-full lg:w-auto">
            <Link to="/impressum" className="hover:text-white transition-colors duration-300">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors duration-300">
              Datenschutz
            </Link>
          </nav>

          <div className="w-full lg:w-auto text-xs md:text-sm text-neutral-500 flex flex-col lg:items-end gap-1">
            <p>&copy; {new Date().getFullYear()} KFZ-Meisterbetrieb Lindner.</p>
            <p>Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
