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
      className="relative group rounded-[2rem] overflow-hidden min-h-[480px] shadow-sm hover:shadow-2xl bg-neutral-200 transition-all duration-300 flex flex-col"
    >
      {/* Background Image */}
      {job.image && (
        <img
          src={job.image}
          alt={job.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}
      
      {/* Overlay to ensure text pops */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

      {/* Content Box (Liquid Glass) */}
      <div className="absolute inset-3 sm:inset-4 bg-white/10 backdrop-blur-xl rounded-[1.5rem] p-6 sm:p-8 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-white/20 transition-all duration-300 group-hover:bg-white/20">
        
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center text-white shadow-md border border-white/20">
            <Icon size={24} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wide text-white bg-white/20 border border-white/30 backdrop-blur-md px-3 py-1 rounded-full">
            {typeLabel[job.type]}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">{job.title}</h3>
        <p className="text-neutral-100 mb-6 flex-grow drop-shadow-sm">{job.description}</p>

        {job.tasks.length > 0 && (
          <div className="mb-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-2 drop-shadow-sm">
              {job.type === 'ausbildung' ? 'Ausbildungsberufe' : 'Aufgaben'}
            </h4>
            <ul className="list-disc list-inside text-sm text-neutral-200 space-y-1">
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        )}

        {job.requirements.length > 0 && (
          <div className="mb-8">
            <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-2 drop-shadow-sm">
              Anforderungen
            </h4>
            <ul className="list-disc list-inside text-sm text-neutral-200 space-y-1">
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => onBewerbenClick(job.title)}
          className="mt-auto flex items-center justify-between w-full p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white text-white hover:text-neutral-900 transition-all group/btn cursor-pointer shadow-sm"
        >
          <span className="font-bold">Jetzt bewerben</span>
          <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
