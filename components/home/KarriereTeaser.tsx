import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';

export const KarriereTeaser: React.FC = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Diagonal gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #171717 0%, #1c1c1c 40%, #262626 100%)',
        }}
      />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Large watermark wrench icon on the right */}
      <div className="absolute -right-12 md:right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <Wrench
          size={280}
          strokeWidth={0.6}
          className="text-white/[0.04] md:text-white/[0.035]"
          style={{ transform: 'rotate(-15deg)' }}
        />
      </div>

      {/* Secondary smaller wrench, offset */}
      <div className="absolute -right-4 md:right-24 top-1/2 -translate-y-[30%] pointer-events-none select-none hidden md:block">
        <Wrench
          size={140}
          strokeWidth={0.8}
          className="text-white/[0.025]"
          style={{ transform: 'rotate(15deg)' }}
        />
      </div>

      {/* Decorative gradient glow on the left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-16">
          {/* Left content block */}
          <div className="flex-1 max-w-2xl">
            {/* Accent line + label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-white/40" />
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium">
                Werde Teil des Teams
              </span>
              {/* Pulsing dot */}
              <motion.span
                className="inline-block w-2 h-2 rounded-full bg-green-400/80"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Icon + Heading row */}
            <div className="flex items-start gap-5 mb-4">
              <div className="w-14 h-14 bg-white/[0.07] border border-white/[0.08] rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm">
                <Wrench size={26} className="text-white/90" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Karriere bei Lindner
                </h2>
              </div>
            </div>

            {/* Description text */}
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed ml-0 md:ml-[76px]">
              Kurze Bewerbung, auch initiativ – wir suchen Verstärkung in
              Karosserie, Lack und Autoservice.
            </p>
          </div>

          {/* CTA button */}
          <div className="shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Link
                to="/karriere"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-neutral-900 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:bg-neutral-50"
              >
                Zur Karriereseite
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
