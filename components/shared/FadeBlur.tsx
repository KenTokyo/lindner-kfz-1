import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FadeBlurProps {
  children: React.ReactNode;
}

export const FadeBlur: React.FC<FadeBlurProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.3'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <div ref={ref}>
      <motion.div style={{ opacity, filter, y, willChange: 'transform, opacity, filter' }}>
        {children}
      </motion.div>
    </div>
  );
};
