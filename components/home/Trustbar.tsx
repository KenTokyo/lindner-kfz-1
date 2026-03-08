import React from 'react';
import { motion } from 'framer-motion';
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

export const Trustbar: React.FC = () => {
  return (
    <section className="py-10 bg-white border-y border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="flex items-center gap-3 text-neutral-400"
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  {partner.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
