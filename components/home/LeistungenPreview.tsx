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

        <div className="flex flex-col gap-16 lg:gap-20">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-8 bg-neutral-900 rounded-full" />
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {category.services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link key={service.title} to={`/dienstleistungen#${service.id}`} className="block h-full">
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="relative group rounded-[2rem] overflow-hidden h-[340px] md:h-[380px] lg:h-[420px] shadow-sm hover:shadow-2xl bg-neutral-200 transition-all duration-300"
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
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

                        {/* Content Box */}
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/10 backdrop-blur-xl rounded-[1.5rem] px-4 pb-4 pt-10 sm:px-5 sm:pb-5 sm:pt-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-white/20 transition-all duration-300 group-hover:bg-white/20 flex flex-col items-center">
                          {/* Icon Container */}
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white shadow-md border border-white/20 group-hover:-translate-y-1 transition-transform duration-300">
                            <Icon size={24} strokeWidth={2} />
                          </div>
                          
                          <h4 className="text-[1.05rem] xl:text-[1.2rem] leading-tight font-extrabold text-white mb-2 break-words hyphens-auto w-full drop-shadow-md">
                            {service.title}
                          </h4>
                          <p className="text-xs xl:text-sm text-neutral-100 line-clamp-2 mb-4 leading-relaxed font-medium drop-shadow-sm">
                            {service.description}
                          </p>
                          
                          {/* Button */}
                          <span className="inline-flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/30 group-hover:bg-white group-hover:text-neutral-900 text-white text-xs sm:text-sm font-bold rounded-full transition-all duration-300 shadow-sm mt-auto">
                            Mehr erfahren!
                          </span>
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
