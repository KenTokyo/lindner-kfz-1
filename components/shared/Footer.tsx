import React from 'react';
import { Link } from 'react-router-dom';
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

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50">
      <div className="relative w-full bg-[#0a0a0a] text-white rounded-t-[2.5rem] md:rounded-t-[3rem] px-8 md:px-12 lg:px-24 flex flex-col min-h-[60vh] justify-between selection:bg-white selection:text-black shadow-2xl">
        
        {/* Four corner holes for the "sign" look - only top corners if we are full width flush at bottom */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-neutral-50 shadow-inner" />
        <div className="absolute top-6 right-6 md:top-8 md:right-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-neutral-50 shadow-inner" />

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

        {/* Middle: Huge Logo */}
        <div className="flex-1 flex flex-col items-center justify-center py-20 md:py-32">
          <img
            src="/Lindner Logo_weiss.png"
            alt="Lindner KFZ Logo"
            className="w-full max-w-[600px] lg:max-w-[800px] h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Bottom: Contact, Legal, Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 pb-16 border-t border-white/10">
          
          {/* Brand & Description */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-6">KFZ Lindner</h3>
            <p className="text-sm text-neutral-400 mb-6 max-w-xs">
              Karosserie & Lack und Autoservice – unter einem Dach in Berlin-Blankenfelde. Ihr vertrauensvoller Partner für alle Kfz-Belange.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
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
                <a href="mailto:info@autoservice-lindner.de" className="hover:text-white transition-colors">info@autoservice-lindner.de</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col">
            <h3 className="text-neutral-500 uppercase tracking-widest text-xs font-semibold mb-6">
              Öffnungszeiten
            </h3>
            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-neutral-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="flex justify-between gap-4"><span>Mo - Do:</span> <span>07:00 - 17:00 Uhr</span></span>
                  <span className="flex justify-between gap-4"><span>Fr:</span> <span>07:00 - 16:00 Uhr</span></span>
                  <span className="text-neutral-500 mt-1">Sa & So: Geschlossen</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col lg:items-end">
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
          </div>

        </div>
      </div>
    </footer>
  );
};

