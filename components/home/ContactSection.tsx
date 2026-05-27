import React from 'react';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Kontakt & Standort
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Besuchen Sie uns in Berlin-Blankenfelde &ndash; Karosserie & Lack und
            Autoservice, alles an einem Standort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-10 p-5 bg-white rounded-xl border border-neutral-100 border-l-4 border-l-neutral-900 shadow-sm">
              <div className="p-2.5 bg-white border border-neutral-100 rounded-lg shrink-0">
                <Building2 size={22} className="text-secondary" />
              </div>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                <span className="font-bold text-neutral-900">Unter einem Dach:</span>{' '}
                KFZ Lindner (Karosserie & Lack) und Autoservice Lindner (Service & Mechanik) am selben Standort.
              </p>
            </div>

            <div className="space-y-7">
              <div className="flex items-start gap-5 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3.5 bg-white border border-neutral-100 rounded-xl text-secondary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold text-lg mb-1">Adresse</h3>
                  <p className="text-neutral-600">
                    Hauptstra&szlig;e 43<br />
                    13159 Berlin-Blankenfelde
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3.5 bg-white border border-neutral-100 rounded-xl text-secondary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold text-lg mb-1">Telefon</h3>
                  <p className="text-neutral-600">
                    <a href="tel:0309131252" className="hover:text-black transition-colors">
                      030 / 913 12 52
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3.5 bg-white border border-neutral-100 rounded-xl text-secondary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold text-lg mb-1">E-Mail</h3>
                  <a
                    href="mailto:info@kfz-lindner.de"
                    className="text-neutral-600 hover:text-black transition-colors"
                  >
                    info@kfz-lindner.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3.5 bg-white border border-neutral-100 rounded-xl text-secondary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-bold text-lg mb-1">&Ouml;ffnungszeiten</h3>
                  <p className="text-neutral-600">
                    Montag - Freitag: 07:00 - 18:00 Uhr
                    <br />
                    und nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[450px] w-full rounded-2xl overflow-hidden relative shadow-2xl">
            <iframe
              title="Google Maps Standort KFZ Lindner"
              src="https://www.google.com/maps?q=Hauptstra%C3%9Fe%2043%2C%2013159%20Berlin-Blankenfelde&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
