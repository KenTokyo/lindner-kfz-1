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

          {/* RIGHT COLUMN - Image with floating badge */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
                alt="Lindner KFZ Werkstatt Berlin"
                className="w-full h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-neutral-900 text-white px-6 py-4 rounded-2xl shadow-xl">
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
