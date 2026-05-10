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
    <section id={category.categoryKey} className="mb-20 scroll-mt-32">
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
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl bg-neutral-200 transition-all duration-300 scroll-mt-32 min-h-[400px] flex flex-col justify-end"
            >
              {/* Background Image */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

              {/* Liquid Glass Content Box */}
              <div className="relative z-10 m-4 sm:m-6 bg-white/90 backdrop-blur-md rounded-[1.5rem] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40 transition-all duration-300 group-hover:bg-white/95">
                <div className="flex flex-col md:flex-row items-start gap-5">
                  <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-md">
                    <Icon size={28} />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                        {service.title}
                      </h3>
                      {service.note && (
                        <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                          {service.note}
                        </span>
                      )}
                    </div>

                    {service.detailDescription && (
                      <p className="text-neutral-700 font-medium leading-relaxed mb-5">
                        {service.detailDescription}
                      </p>
                    )}

                    {service.benefits && service.benefits.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2 text-neutral-700 font-medium">
                            <CheckCircle className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <button
                      onClick={onTerminanfrageClick}
                      className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer group/btn"
                    >
                      Terminanfrage stellen
                      <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
