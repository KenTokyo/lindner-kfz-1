import React from 'react';
import { MousePointerClick, Send, PhoneCall, CalendarCheck, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Bereich wählen',
    description: 'Autoservice oder Karosserie & Lack – direkt zum richtigen Anliegen.',
  },
  {
    icon: Send,
    title: 'Kurze Terminanfrage senden',
    description: 'Name, Kontakt und kurze Beschreibung – fertig in unter einer Minute.',
  },
  {
    icon: PhoneCall,
    title: 'Wir melden uns',
    description: 'Rückruf oder E-Mail mit einem passenden Terminvorschlag.',
  },
  {
    icon: CalendarCheck,
    title: 'Termin vor Ort',
    description: 'Fahrzeugannahme – der nächste Schritt wird direkt erklärt.',
  },
  {
    icon: PackageCheck,
    title: 'Fertigstellung & Abholung',
    description: 'Klar kommuniziert – ohne Überraschungen.',
  },
];

export const ProcessSteps: React.FC = () => {
  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)',
      }}
    >
      {/* Subtle decorative background dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #171717 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            So läuft's ab
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Von der Anfrage bis zur Abholung – in 5 klaren Schritten.
          </p>
        </div>

        {/* Desktop layout: horizontal continuous connecting line */}
        <div className="hidden lg:block relative">
          {/* Continuous dashed line spanning across all steps */}
          <div className="absolute top-[88px] left-[10%] right-[10%] border-t-2 border-dashed border-neutral-300 z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.title}
                  className="relative group"
                >
                  <div
                    className={`relative bg-white border border-neutral-100 rounded-2xl p-6 pt-10 text-center
                      shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                      ${isEven ? 'mt-0' : 'mt-8'}`}
                  >
                    {/* Large watermark step number behind the card content */}
                    <span
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-[96px] font-black leading-none
                        text-neutral-900/[0.04] select-none pointer-events-none z-0
                        group-hover:text-neutral-900/[0.07] transition-colors duration-300"
                    >
                      {index + 1}
                    </span>

                    {/* Icon container with glow effect */}
                    <div className="relative z-10 mx-auto mb-5">
                      <div
                        className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center mx-auto text-white
                          shadow-[0_4px_20px_rgba(23,23,23,0.25)]
                          group-hover:shadow-[0_4px_28px_rgba(23,23,23,0.4)]
                          group-hover:scale-110 transition-all duration-300"
                      >
                        <Icon size={26} />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet layout: 3-column grid */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative group"
              >
                <div className="relative bg-white border border-neutral-100 rounded-2xl p-6 pt-10 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Large watermark step number */}
                  <span
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-[96px] font-black leading-none
                      text-neutral-900/[0.04] select-none pointer-events-none z-0
                      group-hover:text-neutral-900/[0.07] transition-colors duration-300"
                  >
                    {index + 1}
                  </span>

                  {/* Icon container */}
                  <div className="relative z-10 mx-auto mb-5">
                    <div
                      className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center mx-auto text-white
                        shadow-[0_4px_20px_rgba(23,23,23,0.25)]
                        group-hover:shadow-[0_4px_28px_rgba(23,23,23,0.4)]
                        group-hover:scale-110 transition-all duration-300"
                    >
                      <Icon size={26} />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector arrow between cards (not on last item in row) */}
                {index < steps.length - 1 && index !== 2 && (
                  <div className="absolute top-1/2 -right-3 translate-x-0 -translate-y-1/2 w-6 border-t-2 border-dashed border-neutral-300 z-20" />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile layout: vertical timeline */}
        <div className="md:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-200 z-0" />

          <div className="space-y-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative flex items-start gap-5 group"
                >
                  {/* Timeline node: step number + icon stacked */}
                  <div className="relative flex-shrink-0 flex flex-col items-center">
                    {/* Step number badge */}
                    <span className="w-16 h-16 flex items-center justify-center rounded-2xl bg-neutral-900 text-white text-lg font-bold shadow-[0_4px_20px_rgba(23,23,23,0.25)] group-hover:shadow-[0_4px_28px_rgba(23,23,23,0.4)] group-hover:scale-110 transition-all duration-300">
                      <Icon size={26} />
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="relative flex-1 bg-white border border-neutral-100 rounded-2xl p-5 shadow-sm group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
                    {/* Watermark number in card */}
                    <span className="absolute top-2 right-4 text-[56px] font-black leading-none text-neutral-900/[0.04] select-none pointer-events-none group-hover:text-neutral-900/[0.07] transition-colors duration-300">
                      {index + 1}
                    </span>

                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-neutral-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
