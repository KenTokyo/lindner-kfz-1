import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { serviceCategories } from '../../data/services';

export const LeistungenPreview: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Dienstleistungen
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Kurz erklärt – Details finden Sie auf der Leistungsseite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-8 bg-neutral-900 rounded-full" />
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.title}
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="group p-6 bg-white border border-neutral-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-default"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center shrink-0 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(23,23,23,0.2)]"
                          style={{ transition: 'background-color 0.35s cubic-bezier(0.25,0.1,0.25,1) 0.1s, color 0.35s cubic-bezier(0.25,0.1,0.25,1) 0.1s, box-shadow 0.35s cubic-bezier(0.25,0.1,0.25,1) 0.1s' }}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="text-lg font-bold text-neutral-900">
                              {service.title}
                            </h4>
                            {service.note && (
                              <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                                {service.note}
                              </span>
                            )}
                          </div>
                          <p className="text-neutral-500 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="inline-block"
          >
            <Link
              to="/dienstleistungen"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-colors"
            >
              Alle Dienstleistungen ansehen
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
