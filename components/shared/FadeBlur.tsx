import React from 'react';
import { motion } from 'framer-motion';

interface FadeBlurProps {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  y?: number;
}

export const FadeBlur: React.FC<FadeBlurProps> = ({ children, delay = 0, amount = 0.15, y = 40 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
