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

            <div className="space-y-6 w-full">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="relative group rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full bg-neutral-900 border border-white/10"
                  >
                    {/* Liquid Glass Effect Layer */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
                    
                    <div className="relative p-6 sm:p-7 flex items-start gap-5">
                      {/* White Icon Container */}
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-neutral-900 shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                        <Icon size={24} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                          {reason.title}
                        </h3>
                        <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                          {reason.description}
                        </p>
                      </div>
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
                src="/Lindner-Bilder/collage-werkstatt-aussen.jpg"
                alt="Werkstatt Übersicht"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Top Right */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-md group">
              <img
                src="/Lindner-Bilder/collage-werkstatt-bmw.png"
                alt="Mechaniker bei der Arbeit"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Middle Right */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-md group">
              <img
                src="/Lindner-Bilder/collage-fuhrpark.jpg"
                alt="Detailansicht Werkstatt"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Bottom Left */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-md group">
              <img
                src="/Lindner-Bilder/collage-werkstatt-hebebuehne.png"
                alt="Karosserie Reparatur"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Bottom Right */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-md group">
              <img
                src="/Lindner-Bilder/collage-werkstatt-innen.png"
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
