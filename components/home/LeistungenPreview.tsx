import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-8 bg-neutral-900 rounded-full" />
                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {category.services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link key={service.title} to={`/dienstleistungen#${category.categoryKey}`} className="block">
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="relative group rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-[4/3] shadow-sm hover:shadow-2xl bg-neutral-200 transition-all duration-300"
                      >
                        {/* Background Image */}
                        {service.image && (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        )}
                        
                        {/* Overlay to ensure text box pops */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                        {/* Content Box */}
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-[1.5rem] p-4 sm:p-5 text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40 transition-all duration-300 group-hover:bg-white">
                          {/* Icon Container */}
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-neutral-900 shadow-md border border-neutral-100">
                            <Icon size={24} strokeWidth={2} />
                          </div>
                          
                          <div className="mt-4 flex flex-col h-full justify-between">
                            <div>
                              <h4 className="text-[1.1rem] sm:text-[1.25rem] leading-tight font-extrabold text-neutral-900 mb-1.5 sm:mb-2">
                                {service.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 mb-3 sm:mb-4 leading-relaxed font-medium">
                                {service.description}
                              </p>
                            </div>
                            
                            {/* Button */}
                            <div>
                              <span className="inline-flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2 bg-white border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 shadow-sm">
                                Mehr erfahren!
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
