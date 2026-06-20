import React, { useState } from 'react';
import { ExternalLink, MapPin, ShieldCheck } from 'lucide-react';

const googleMapsEmbedSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.234975686964!2d13.39240347693226!3d52.61959772885059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8530393b141db%3A0x72e9d109987bb48f!2sAutoservice%20Lindner%20GmbH!5e0!3m2!1sde!2sde!4v1780005440633!5m2!1sde!2sde';

const googleMapsUrl = 'https://maps.app.goo.gl/uNdmgqtXfmsZ8GrAA';

interface GoogleMapConsentProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const GoogleMapConsent: React.FC<GoogleMapConsentProps> = ({
  className = '',
  variant = 'dark',
}) => {
  const [isMapEnabled, setIsMapEnabled] = useState(false);
  const isLight = variant === 'light';

  if (isMapEnabled) {
    return (
      <div className={`relative overflow-hidden bg-neutral-100 ${className}`}>
        <iframe
          title="Google Maps Standort Autoservice Lindner GmbH"
          src={googleMapsEmbedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-neutral-200 ${
        isLight ? 'bg-white text-neutral-950' : 'bg-neutral-950 text-white'
      } ${className}`}
    >
      {!isLight && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_46%)]" />
      )}
      <div className="relative z-10 flex h-full min-h-[390px] flex-col justify-between p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                isLight ? 'bg-neutral-100 text-neutral-950' : 'bg-white text-neutral-950'
              }`}
            >
              <MapPin size={21} />
            </span>
            <div>
              <p
                className={`text-sm uppercase tracking-[0.18em] ${
                  isLight ? 'text-neutral-500' : 'text-white/45'
                }`}
              >
                Standort
              </p>
              <h3 className="mt-1 text-xl font-semibold">Autoservice Lindner GmbH</h3>
            </div>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-sm transition md:flex ${
              isLight
                ? 'border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:text-neutral-950'
                : 'border-white/15 text-white/75 hover:border-white/35 hover:text-white'
            }`}
          >
            Route
            <ExternalLink size={15} />
          </a>
        </div>

        <div className="max-w-xl">
          <div
            className={`mb-5 flex items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed ${
              isLight
                ? 'border-neutral-200 bg-neutral-50 text-neutral-600'
                : 'border-white/10 bg-white/5 text-white/70'
            }`}
          >
            <ShieldCheck
              className={`mt-0.5 h-5 w-5 shrink-0 ${isLight ? 'text-neutral-950' : 'text-white'}`}
            />
            <p>
              Beim Laden der Karte werden Daten an Google übermittelt. Aktivieren Sie Google Maps
              nur, wenn Sie damit einverstanden sind. Details stehen in der Datenschutzerklärung.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsMapEnabled(true)}
              className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                isLight
                  ? 'bg-secondary text-white hover:bg-secondary/90'
                  : 'bg-white text-neutral-950 hover:bg-neutral-200'
              }`}
            >
              Google Maps laden
            </button>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${
                isLight
                  ? 'border-neutral-200 text-neutral-800 hover:border-neutral-400 hover:text-neutral-950'
                  : 'border-white/15 text-white hover:border-white/35'
              }`}
            >
              In Google Maps öffnen
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
