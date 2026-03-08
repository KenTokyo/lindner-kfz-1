import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            So läuft's ab
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Von der Anfrage bis zur Abholung – in 5 klaren Schritten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="text-6xl font-black text-neutral-100 mb-4">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  <Icon size={26} />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (not on last item, hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 w-8 border-t-2 border-dashed border-neutral-200" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
