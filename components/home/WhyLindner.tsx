import React from 'react';
import { Building2, Users, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: Building2,
    title: 'Unter einem Dach',
    description: 'Karosserie & Lack und Autoservice – klar zugeordnet, ein Standort.',
  },
  {
    icon: Users,
    title: 'Familienbetrieb',
    description: 'Verlässlich, unkompliziert, direkt – seit Jahren in Berlin.',
    accented: true,
  },
  {
    icon: MessageCircle,
    title: 'Klare Kommunikation',
    description: 'Keine Textwüste – dafür klare Schritte und transparente Abläufe.',
  },
];

export const WhyLindner: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN - Text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-3">
              Über uns
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
              Warum Kunden zu Lindner kommen
            </h2>

            <div className="space-y-8">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="flex items-start gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-white">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-1">
                        {reason.title}
                      </h3>
                      {'accented' in reason && reason.accented ? (
                        <p className="text-neutral-500 leading-relaxed border-l-4 border-neutral-900 pl-4">
                          {reason.description}
                        </p>
                      ) : (
                        <p className="text-neutral-500 leading-relaxed">
                          {reason.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN - Modern Photo Collage */}
          <div className="relative grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-[500px] md:h-[650px]">
            {/* Top Left - Large (Spans 2 rows) */}
            <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
                alt="Werkstatt Übersicht"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Top Right */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop"
                alt="Mechaniker bei der Arbeit"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Middle Right */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1632823462991-68b375b4dbf4?q=80&w=800&auto=format&fit=crop"
                alt="Detailansicht Werkstatt"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Bottom Left */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop"
                alt="Karosserie Reparatur"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Bottom Right */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
                alt="Kundenservice"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 z-10 bg-neutral-900 text-white px-6 py-4 rounded-2xl shadow-xl">
              <span className="block text-2xl font-bold leading-tight">
                Seit 2011
              </span>
              <span className="block text-sm text-neutral-400">
                Meisterbetrieb in Berlin
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
