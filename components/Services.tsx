import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Car, PenTool, Disc, Cog, ClipboardCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { title: 'Werkstattservice', icon: Wrench, description: 'Kompletter Service für alle Marken.' },
  { title: 'Karosserie- & Unfallservice', icon: Car, description: 'Fachgerechte Instandsetzung nach Herstellervorgaben.' },
  { title: 'Lackiererei', icon: PenTool, description: 'Professionelle Lackierungen für Fahrzeug und Teile.' },
  { title: 'Reifenservice', icon: Disc, description: 'Wechsel, Einlagerung und Wuchten.' },
  { title: 'Oldtimer Restauration', icon: Cog, description: 'Liebevolle Aufarbeitung klassischer Fahrzeuge.' },
  { title: 'Werkstattersatzwagen', icon: ClipboardCheck, description: 'Bleiben Sie mobil, während wir arbeiten.' },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">Unsere Leistungen</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Von der Inspektion über HU/AU bis hin zur Unfallinstandsetzung – alles aus einer Hand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 bg-white border border-neutral-100 rounded-3xl hover:shadow-xl transition-all cursor-default"
            >
              <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-500 group-hover:text-neutral-600 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};