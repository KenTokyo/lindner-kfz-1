import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import { JobOffer } from '../types';

const jobs: JobOffer[] = [
  {
    title: 'Karosseriebauer (m/w/d)',
    description: 'Zur Verstärkung unseres Teams suchen wir eine/n gelernte/n Karosseriebauer.',
    tasks: [
      'Unfallinstandsetzung aller Art',
      'Reparatur von Anhängern und Fahrzeugaufbauten',
      'Richtbankarbeiten',
      'Aluminium- und Kunststoffinstandsetzung'
    ],
    requirements: [
      'Abgeschlossene Berufsausbildung',
      'Selbstständiges Arbeiten',
      'Führerschein Klasse B',
      'Teamfähigkeit'
    ]
  },
  {
    title: 'Fahrzeuglackierer (m/w/d)',
    description: 'Wir suchen einen Experten für perfekte Oberflächen.',
    tasks: [
      'Innen- und Außenlackierung',
      'Vorbereitung (Reinigen, Spachteln, Schleifen)',
      'Spritzlackierungen',
      'Qualitätskontrolle'
    ],
    requirements: [
      'Abgeschlossene Ausbildung als Fahrzeuglackierer',
      'Berufserfahrung wünschenswert',
      'Zuverlässigkeit und Genauigkeit'
    ]
  },
  {
    title: 'Ausbildung (Diverse)',
    description: 'Wir bilden aus! Starte deine Karriere bei uns.',
    tasks: ['KFZ-Mechatroniker/-in', 'KFZ-Lackierer/-in', 'Karosserie- und Fahrzeugbaumechaniker/-in'],
    requirements: ['Realschulabschluss oder guter Hauptschulabschluss', 'Motivation und Lernbereitschaft']
  }
];

export const Careers: React.FC = () => {
  return (
    <section id="career" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h3 className="text-neutral-500 font-medium uppercase tracking-widest mb-2">Karriere</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">Werde Teil des Teams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-50 rounded-3xl p-8 flex flex-col h-full border border-neutral-100 hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-black shadow-sm">
                <Briefcase size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">{job.title}</h3>
              <p className="text-neutral-600 mb-6 flex-grow">{job.description}</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-neutral-900 text-sm font-bold uppercase tracking-wide mb-2">Aufgaben</h4>
                  <ul className="list-disc list-inside text-sm text-neutral-500 space-y-1">
                    {job.tasks.slice(0, 3).map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href="mailto:k.lindner@identica-lindner.de"
                className="mt-auto flex items-center justify-between w-full p-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white transition-all group"
              >
                <span className="font-medium">Jetzt bewerben</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-neutral-500">
                Bewerbungen bitte an <a href="mailto:k.lindner@identica-lindner.de" className="text-neutral-900 underline font-medium">k.lindner@identica-lindner.de</a> oder persönlich in der Hauptstrasse 43, 13159 BERLIN-Blankenfelde
            </p>
        </div>
      </div>
    </section>
  );
};