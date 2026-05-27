import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLayoutContext } from '../components/shared/Layout';
import { Hero } from '../components/home/Hero';
import { QuickChoice } from '../components/home/QuickChoice';
import { LeistungenPreview } from '../components/home/LeistungenPreview';
import { ProcessSteps } from '../components/home/ProcessSteps';
import { WhyLindner } from '../components/home/WhyLindner';
import { ReviewCards } from '../components/home/ReviewCards';
import { KarriereTeaser } from '../components/home/KarriereTeaser';
import { ContactSection } from '../components/home/ContactSection';
import { FadeBlur } from '../components/shared/FadeBlur';
import { setPageSeo, webPageSchema } from '../utils/seo';

export const HomePage: React.FC = () => {
  const location = useLocation();
  const { openTerminanfrage } = useLayoutContext();

  useEffect(() => {
    const title = 'KFZ Lindner Berlin-Blankenfelde | Karosserie, Lack & Autoservice';
    const description = 'KFZ Lindner in Berlin-Blankenfelde: Karosserie, Lackierung, Unfallinstandsetzung, Inspektion und Reparaturen für alle Marken an einem Standort.';

    setPageSeo({
      title,
      description,
      path: '/',
      structuredData: webPageSchema('/', title, description),
    });
  }, []);

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const timer = setTimeout(() => {
        const elem = document.getElementById(state.scrollTo!);
        if (elem) {
          const offset = 120;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      window.history.replaceState({}, document.title);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <>
      <Hero onTerminanfrageClick={() => openTerminanfrage()} />
      <FadeBlur amount={0.62} y={72}><QuickChoice onSelect={(category) => openTerminanfrage(category)} /></FadeBlur>
      <FadeBlur><LeistungenPreview /></FadeBlur>
      <ProcessSteps />
      <FadeBlur><WhyLindner /></FadeBlur>
      <FadeBlur><ReviewCards /></FadeBlur>
      <FadeBlur><KarriereTeaser /></FadeBlur>
      <FadeBlur><ContactSection /></FadeBlur>
    </>
  );
};
