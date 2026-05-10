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
    <footer className="bg-neutral-900 text-neutral-400">
      {/* Trustbar Integrated in Footer */}
      <div className="border-b border-neutral-800 bg-neutral-800/50 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {partners.map((partner) => {
              const Icon = partner.icon;
              return (
                <div
                  key={partner.name}
                  className="flex items-center gap-3 text-neutral-300"
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm font-medium tracking-wide uppercase">
                    {partner.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-12 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/Lindner Logo_weiss.png"
              alt="Lindner KFZ Logo"
              className="h-24 w-auto"
            />
            <p className="text-sm text-neutral-500 mt-2 max-w-xs">
              Karosserie & Lack und Autoservice – unter einem Dach in Berlin-Blankenfelde.
            </p>
          </div>

          {/* Legal links */}
          <nav aria-label="Rechtliche Links" className="flex flex-col md:flex-row gap-6 text-sm">
            <Link to="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </nav>
        </div>

        <div className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} KFZ-Meisterbetrieb Lindner. Alle Rechte vorbehalten.</p>
          <p>
            KFZ Lindner (Karosserie & Lack) &middot; Autoservice Lindner (Service & Mechanik)
          </p>
        </div>
      </div>
    </footer>
  );
};
