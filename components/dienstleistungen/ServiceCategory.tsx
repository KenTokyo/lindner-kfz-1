import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import type { ServiceCategory as ServiceCategoryType } from '../../data/services';

interface ServiceCategoryProps {
  category: ServiceCategoryType;
  onTerminanfrageClick: () => void;
}

export const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category, onTerminanfrageClick }) => {
  return (
    <section className="mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-neutral-900 mb-10 border-b border-neutral-200 pb-4"
      >
        {category.title}
      </motion.h2>

      <div className="space-y-10">
        {category.services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-neutral-100 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center shrink-0 text-white">
                  <Icon size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-neutral-900">
                      {service.title}
                    </h3>
                    {service.note && (
                      <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                        {service.note}
                      </span>
                    )}
                  </div>

                  {service.detailDescription && (
                    <p className="text-neutral-600 leading-relaxed mb-5">
                      {service.detailDescription}
                    </p>
                  )}

                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-neutral-600">
                          <CheckCircle className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    onClick={onTerminanfrageClick}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer"
                  >
                    Terminanfrage stellen
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
