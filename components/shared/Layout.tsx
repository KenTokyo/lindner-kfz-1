import React, { useState, useCallback } from 'react';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from './Footer';
import { TerminanfrageModal } from './TerminanfrageModal';
import { StickyCTA } from './StickyCTA';

type Category = 'karosserie' | 'autoservice';

export interface LayoutContext {
  openTerminanfrage: (category?: Category) => void;
}

export function useLayoutContext() {
  return useOutletContext<LayoutContext>();
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const Layout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<Category | null>(null);

  const openTerminanfrage = useCallback((category?: Category) => {
    setModalCategory(category ?? null);
    setIsModalOpen(true);
  }, []);

  const closeTerminanfrage = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const context: LayoutContext = { openTerminanfrage };

  return (
    <div className="bg-white min-h-screen text-neutral-900 selection:bg-black selection:text-white">
      <ScrollToTop />
      <Navbar onTerminanfrageClick={() => openTerminanfrage()} />
      <main>
        <Outlet context={context} />
      </main>
      <Footer />
      <StickyCTA onClick={() => openTerminanfrage()} />
      <TerminanfrageModal
        isOpen={isModalOpen}
        onClose={closeTerminanfrage}
        initialCategory={modalCategory}
      />
    </div>
  );
};
