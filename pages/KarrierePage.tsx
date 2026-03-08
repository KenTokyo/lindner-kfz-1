import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, Clock, Users } from 'lucide-react';
import { jobs } from '../data/jobs';
import { JobCard } from '../components/karriere/JobCard';
import { BewerbungsFormular } from '../components/karriere/BewerbungsFormular';

const benefits = [
  { icon: Wrench, text: 'Moderne Werkstattabläufe' },
  { icon: Clock, text: 'Verlässliche Planung' },
  { icon: Shield, text: 'Sauberes Handwerk, klare Kommunikation' },
  { icon: Users, text: 'Familiäres Team, flache Hierarchien' },
];

export const KarrierePage: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Karriere | KFZ Lindner Berlin';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Karriere bei KFZ Lindner in Berlin-Blankenfelde. Offene Stellen f\u00fcr Karosseriebauer, Fahrzeuglackierer, Kfz-Mechatroniker und Ausbildung.');
  }, []);

  const handleBewerbenClick = (jobTitle: string) => {
    setSelectedPosition(jobTitle);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-5">
            Karriere bei Lindner
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl">
            Kurz bewerben – auch initiativ. Wir suchen Verstärkung für unser Team in Berlin-Blankenfelde.
          </p>
        </motion.div>
      </section>

      {/* Was dich erwartet */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            Was dich erwartet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-neutral-50 rounded-2xl border border-neutral-100"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-neutral-900 shadow-sm shrink-0">
                  <benefit.icon size={20} />
                </div>
                <span className="text-neutral-700 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Offene Stellen */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
            Offene Stellen
          </h2>
          <p className="text-neutral-600 mb-8">
            Finde die passende Position – oder bewirb dich initiativ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <JobCard
              key={job.id}
              job={job}
              index={index}
              onBewerbenClick={handleBewerbenClick}
            />
          ))}
        </div>
      </section>

      {/* Bewerbungsformular */}
      <section ref={formRef} className="max-w-3xl mx-auto px-6 md:px-12 scroll-mt-32">
        <BewerbungsFormular preselectedPosition={selectedPosition} />
      </section>

      {/* Kontakt-Hinweis */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-neutral-500">
            Bewerbungen auch per E-Mail an{' '}
            <a
              href="mailto:k.lindner@identica-lindner.de"
              className="text-neutral-900 underline font-medium"
            >
              k.lindner@identica-lindner.de
            </a>{' '}
            oder persönlich in der Hauptstraße 43, 13159 Berlin-Blankenfelde.
          </p>
        </motion.div>
      </section>
    </div>
  );
};
