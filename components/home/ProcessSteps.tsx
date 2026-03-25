import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MousePointerClick, Send, PhoneCall, CalendarCheck, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Bereich wählen',
    description: 'Autoservice oder Karosserie & Lack – direkt zum richtigen Anliegen.',
  },
  {
    icon: Send,
    title: 'Anfrage senden',
    description: 'Name, Kontakt und kurze Beschreibung – fertig in unter einer Minute.',
  },
  {
    icon: PhoneCall,
    title: 'Wir melden uns',
    description: 'Rückruf oder E-Mail mit einem passenden Terminvorschlag.',
  },
  {
    icon: CalendarCheck,
    title: 'Termin vor Ort',
    description: 'Fahrzeugannahme – der nächste Schritt wird direkt erklärt.',
  },
  {
    icon: PackageCheck,
    title: 'Abholung',
    description: 'Klar kommuniziert – ohne Überraschungen.',
  },
];

export const ProcessSteps: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #ffffff 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-3">
            Ablauf
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            In 5 Schritten zum Ziel
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Von der Anfrage bis zur Abholung – einfach und transparent.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline track (background) */}
            <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-neutral-200 z-0" />

            {/* Animated progress line */}
            <motion.div
              className="absolute top-[28px] left-0 h-[2px] bg-neutral-900 z-[1] origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Steps */}
            <div className="grid grid-cols-5 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const delay = 0.15 + index * 0.2;

                return (
                  <motion.div
                    key={step.title}
                    className="flex flex-col items-center text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {/* Node on timeline */}
                    <motion.div
                      className="relative mb-6"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                        delay: delay + 0.1,
                      }}
                    >
                      {/* Outer ring pulse */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-neutral-900/10"
                        initial={{ scale: 1, opacity: 0 }}
                        animate={isInView ? { scale: [1, 1.8, 1.8], opacity: [0, 0.3, 0] } : {}}
                        transition={{
                          duration: 0.8,
                          delay: delay + 0.2,
                          ease: 'easeOut',
                        }}
                      />
                      <div
                        className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center text-white
                          shadow-[0_2px_16px_rgba(0,0,0,0.15)]
                          group-hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)]
                          group-hover:scale-110 transition-all duration-300 relative"
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </motion.div>

                    {/* Step number */}
                    <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-300 mb-2
                      group-hover:text-neutral-400 transition-colors duration-300">
                      Schritt {index + 1}
                    </span>

                    {/* Title */}
                    <h3 className="text-[15px] font-semibold text-neutral-900 mb-1.5 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] text-neutral-400 leading-relaxed max-w-[180px]
                      group-hover:text-neutral-500 transition-colors duration-300">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tablet: Compact horizontal */}
        <div className="hidden md:block lg:hidden">
          <div className="relative">
            <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-neutral-200 z-0" />
            <motion.div
              className="absolute top-[28px] left-0 h-[2px] bg-neutral-900 z-[1] origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* First row: 3 steps */}
            <div className="grid grid-cols-3 gap-4 relative z-10 mb-10">
              {steps.slice(0, 3).map((step, index) => {
                const Icon = step.icon;
                const delay = 0.15 + index * 0.2;
                return (
                  <motion.div
                    key={step.title}
                    className="flex flex-col items-center text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <motion.div
                      className="relative mb-5"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: delay + 0.1 }}
                    >
                      <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center text-white shadow-[0_2px_16px_rgba(0,0,0,0.15)] group-hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-all duration-300">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </motion.div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-300 mb-1.5">
                      Schritt {index + 1}
                    </span>
                    <h3 className="text-[15px] font-semibold text-neutral-900 mb-1">{step.title}</h3>
                    <p className="text-[13px] text-neutral-400 leading-relaxed max-w-[200px]">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Second row: 2 steps centered */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto relative z-10">
              {steps.slice(3).map((step, index) => {
                const Icon = step.icon;
                const realIndex = index + 3;
                const delay = 0.15 + realIndex * 0.2;
                return (
                  <motion.div
                    key={step.title}
                    className="flex flex-col items-center text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <motion.div
                      className="relative mb-5"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: delay + 0.1 }}
                    >
                      <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center text-white shadow-[0_2px_16px_rgba(0,0,0,0.15)] group-hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-all duration-300">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </motion.div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-300 mb-1.5">
                      Schritt {realIndex + 1}
                    </span>
                    <h3 className="text-[15px] font-semibold text-neutral-900 mb-1">{step.title}</h3>
                    <p className="text-[13px] text-neutral-400 leading-relaxed max-w-[200px]">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical animated timeline */}
        <div className="md:hidden relative">
          {/* Track */}
          <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-neutral-200 z-0" />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-0 left-[27px] w-[2px] bg-neutral-900 z-[1] origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <div className="space-y-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const delay = 0.1 + index * 0.15;

              return (
                <motion.div
                  key={step.title}
                  className="flex items-start gap-5 group"
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Node */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: delay + 0.05 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center text-white shadow-[0_2px_16px_rgba(0,0,0,0.15)]">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="pt-2.5">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-300 block mb-1">
                      Schritt {index + 1}
                    </span>
                    <h3 className="text-base font-semibold text-neutral-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
