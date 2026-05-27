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
      className="relative group rounded-[2rem] overflow-hidden h-[550px] sm:h-[600px] shadow-sm hover:shadow-2xl bg-neutral-200 transition-all duration-300 flex flex-col"
    >
      {/* Background Image */}
      {job.image && (
        <img
          src={job.image}
          alt={job.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}
      
      {/* Overlay: subtle dark at top, darker at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:via-black/50 transition-colors duration-500" />

      {/* Main Content Area */}
      <div className="relative h-full flex flex-col p-6 sm:p-8">
        
        {/* Top Part: Title and Badges */}
        <div className="flex-1 flex flex-col justify-start">
           <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white shadow-md border border-white/20">
              <Icon size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wide text-white bg-white/20 border border-white/30 backdrop-blur-md px-3 py-1 rounded-full">
              {typeLabel[job.type]}
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg leading-tight">
            {job.title}
          </h3>
        </div>

        {/* Lower Third: Scrollable Text Area */}
        <div className="relative mt-auto mb-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden h-[220px] sm:h-[240px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-5" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.3) transparent' }}>
            <p className="text-neutral-100 mb-4 drop-shadow-sm font-medium">{job.description}</p>

            {job.tasks.length > 0 && (
              <div className="mb-4">
                <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-2 drop-shadow-sm">
                  {job.type === 'ausbildung' ? 'Ausbildungsberufe' : 'Aufgaben'}
                </h4>
                <ul className="text-sm text-neutral-200 space-y-2">
                  {job.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="mt-[0.6em] h-1.5 w-1.5 rounded-full bg-neutral-200 shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.requirements.length > 0 && (
              <div className="mb-2">
                <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-2 drop-shadow-sm">
                  Anforderungen
                </h4>
                <ul className="text-sm text-neutral-200 space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="mt-[0.6em] h-1.5 w-1.5 rounded-full bg-neutral-200 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Static Apply Button */}
        <button
          onClick={() => onBewerbenClick(job.title)}
          className="shrink-0 flex items-center justify-between w-full p-4 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white text-white hover:text-neutral-900 transition-all group/btn cursor-pointer shadow-sm"
        >
          <span className="font-bold">Jetzt bewerben</span>
          <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

      </div>
    </motion.div>
  );
};
