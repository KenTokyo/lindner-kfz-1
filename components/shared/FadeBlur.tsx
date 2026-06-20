import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FadeBlurProps {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  y?: number;
  disableOnMobile?: boolean;
}

const mobileAnimationQuery = '(max-width: 767px), (hover: none), (pointer: coarse)';

export const FadeBlur: React.FC<FadeBlurProps> = ({
  children,
  delay = 0,
  amount = 0.15,
  y = 40,
  disableOnMobile = false,
}) => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(mobileAnimationQuery).matches : false,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(mobileAnimationQuery);
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateViewport);
      return () => mediaQuery.removeEventListener('change', updateViewport);
    }

    mediaQuery.addListener(updateViewport);
    return () => mediaQuery.removeListener(updateViewport);
  }, []);

  if (disableOnMobile && isMobile) {
    return <div>{children}</div>;
  }

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
