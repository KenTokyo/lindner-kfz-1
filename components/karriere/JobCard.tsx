import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Send } from 'lucide-react';
import type { Job } from '../../data/jobs';

interface JobCardProps {
  job: Job;
  index: number;
  onBewerbenClick: (jobTitle: string) => void;
}

const typeIcon = {
  vollzeit: Briefcase,
  ausbildung: GraduationCap,
  initiativ: Send,
} as const;

const typeLabel = {
  vollzeit: 'Vollzeit',
  ausbildung: 'Ausbildung',
  initiativ: 'Initiativ',
} as const;

export const JobCard: React.FC<JobCardProps> = ({ job, index, onBewerbenClick }) => {
  const Icon = typeIcon[job.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-neutral-50 rounded-3xl p-8 flex flex-col h-full border border-neutral-100 hover:border-neutral-300 hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black shadow-sm">
          <Icon size={24} />
        </div>
        <span className="text-xs font-bold uppercase tracking-wide text-neutral-500 bg-white px-3 py-1 rounded-full">
          {typeLabel[job.type]}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-neutral-900 mb-3">{job.title}</h3>
      <p className="text-neutral-600 mb-6 flex-grow">{job.description}</p>

      {job.tasks.length > 0 && (
        <div className="mb-4">
          <h4 className="text-neutral-900 text-sm font-bold uppercase tracking-wide mb-2">
            {job.type === 'ausbildung' ? 'Ausbildungsberufe' : 'Aufgaben'}
          </h4>
          <ul className="list-disc list-inside text-sm text-neutral-500 space-y-1">
            {job.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      )}

      {job.requirements.length > 0 && (
        <div className="mb-8">
          <h4 className="text-neutral-900 text-sm font-bold uppercase tracking-wide mb-2">
            Anforderungen
          </h4>
          <ul className="list-disc list-inside text-sm text-neutral-500 space-y-1">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => onBewerbenClick(job.title)}
        className="mt-auto flex items-center justify-between w-full p-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white transition-all group cursor-pointer"
      >
        <span className="font-medium">Jetzt bewerben</span>
        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};
