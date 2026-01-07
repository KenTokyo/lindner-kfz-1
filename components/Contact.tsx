import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-50 pt-24 pb-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">Kontakt & Anfahrt</h2>
            <p className="text-neutral-600 text-lg mb-12">
              Besuchen Sie uns in Berlin-Blankenfelde. Wir freuen uns auf Sie!
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm border border-neutral-100 rounded-lg text-neutral-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold mb-1">Adresse</h3>
                  <p className="text-neutral-600">KFZ Lindner<br/>Hauptstraße 43<br/>13159 Berlin - Blankenfelde</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm border border-neutral-100 rounded-lg text-neutral-900">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold mb-1">Telefon</h3>
                  <p className="text-neutral-600">
                    <a href="tel:0309131252" className="hover:text-black transition-colors">030 / 913 12 52</a><br/>
                    <a href="tel:0309131253" className="hover:text-black transition-colors">030 / 913 12 53</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm border border-neutral-100 rounded-lg text-neutral-900">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold mb-1">E-Mail</h3>
                  <a href="mailto:info@autoservice-lindner.de" className="text-neutral-600 hover:text-black transition-colors">
                    info@autoservice-lindner.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm border border-neutral-100 rounded-lg text-neutral-900">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold mb-1">Öffnungszeiten</h3>
                  <p className="text-neutral-600">
                    Montag - Freitag: 7.00 - 18.00 Uhr<br/>
                    und nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map (Placeholder with styled container) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] w-full bg-white rounded-3xl overflow-hidden relative shadow-lg border border-neutral-200"
          >
            {/* Using an image to simulate a map for aesthetics */}
            <img 
              src="https://picsum.photos/id/128/800/600" // Abstract/Map-like texture
              alt="Map Location" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-neutral-900 p-4 rounded-full shadow-2xl animate-bounce">
                <MapPin className="text-white w-8 h-8" fill="white" />
              </div>
            </div>
             <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl border border-neutral-100 shadow-sm">
                <p className="text-sm text-neutral-600">Hinweis: Dies ist eine Design-Demo. In der Produktion würde hier Google Maps eingebunden werden.</p>
             </div>
          </motion.div>
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} KFZ-Meisterbetrieb Lindner. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Impressum</a>
            <a href="#" className="hover:text-black transition-colors">Datenschutz</a>
          </div>
        </div>

      </div>
    </footer>
  );
};