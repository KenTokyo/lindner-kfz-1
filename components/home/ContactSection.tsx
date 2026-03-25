import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
            Kontakt & Standort
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl max-w-2xl">
            Besuchen Sie uns in Berlin-Blankenfelde – Karosserie & Lack und
            Autoservice, alles an einem Standort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* "Unter einem Dach" hint */}
            <div className="flex items-center gap-4 mb-10 p-5 bg-white rounded-xl border border-neutral-100 border-l-4 border-l-neutral-900 shadow-sm">
              <div className="p-2.5 bg-neutral-900 rounded-lg shrink-0">
                <Building2 size={22} className="text-white" />
              </div>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                <span className="font-bold text-neutral-900">Unter einem Dach:</span>{' '}
                KFZ Lindner (Karosserie & Lack) und Autoservice Lindner (Service & Mechanik) am selben Standort.
              </p>
            </div>

            <div className="space-y-7">
              <div className="flex items-start gap-5 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3.5 bg-neutral-900 rounded-xl text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold text-lg mb-1">Adresse</h3>
                  <p className="text-neutral-600">
                    Hauptstraße 43<br />
                    13159 Berlin-Blankenfelde
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3.5 bg-neutral-900 rounded-xl text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold text-lg mb-1">Telefon</h3>
                  <p className="text-neutral-600">
                    <a href="tel:0309131252" className="hover:text-black transition-colors">
                      030 / 913 12 52
                    </a>
                    <br />
                    <a href="tel:0309131253" className="hover:text-black transition-colors">
                      030 / 913 12 53
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3.5 bg-neutral-900 rounded-xl text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold text-lg mb-1">E-Mail</h3>
                  <a
                    href="mailto:info@autoservice-lindner.de"
                    className="text-neutral-600 hover:text-black transition-colors"
                  >
                    info@autoservice-lindner.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3.5 bg-neutral-900 rounded-xl text-white shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold text-lg mb-1">Öffnungszeiten</h3>
                  <p className="text-neutral-600">
                    Montag – Freitag: 7:00 – 18:00 Uhr
                    <br />
                    und nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-full min-h-[450px] w-full rounded-2xl overflow-hidden relative shadow-2xl"
          >
            {/* Background aerial image */}
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
              alt="Aerial city view - Standort Berlin-Blankenfelde"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Bouncing pin marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-neutral-900 p-4 rounded-full shadow-xl">
                    <MapPin className="text-white w-8 h-8" />
                  </div>
                  {/* Pin shadow that scales with bounce */}
                </motion.div>
                <div className="w-4 h-1.5 bg-black/30 rounded-full mt-2 blur-[2px]" />
              </div>
            </div>

            {/* Address overlay card at bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-900 rounded-lg shrink-0">
                  <MapPin className="text-white w-4 h-4" />
                </div>
                <div>
                  <p className="text-neutral-900 font-bold text-sm">Hauptstraße 43</p>
                  <p className="text-neutral-500 text-xs">13159 Berlin-Blankenfelde</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
