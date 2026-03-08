import React from 'react';
import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Warum Kunden zu Lindner kommen
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="text-center p-8 bg-white rounded-2xl border border-neutral-100"
              >
                <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-neutral-900">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
