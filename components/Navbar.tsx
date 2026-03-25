import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  type: 'hash' | 'route';
}

const navItems: NavItem[] = [
  { label: 'Dienstleistungen', href: '/dienstleistungen', type: 'route' },
  { label: 'Karriere', href: '/karriere', type: 'route' },
];

interface NavbarProps {
  onTerminanfrageClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTerminanfrageClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  const isSubpage = location.pathname !== '/';
  const showScrolledStyle = isScrolled || isSubpage;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  const scrollToElement = (targetId: string) => {
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 120;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (item.type === 'route') {
      navigate(item.href);
      return;
    }

    const targetId = item.href.replace('#', '');

    if (location.pathname === '/') {
      scrollToElement(targetId);
    } else {
      navigate('/', { state: { scrollTo: targetId } });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.nav
          aria-label="Hauptnavigation"
          animate={{
            width: showScrolledStyle ? '92%' : '100%',
            marginTop: showScrolledStyle ? '20px' : '0px',
            borderRadius: showScrolledStyle ? '20px' : '0px',
            backgroundColor: showScrolledStyle ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
            backdropFilter: showScrolledStyle ? 'blur(12px)' : 'blur(0px)',
            boxShadow: showScrolledStyle ? '0px 8px 32px rgba(0,0,0,0.12)' : '0px 0px 0px rgba(0,0,0,0)',
            paddingLeft: showScrolledStyle ? '1.5rem' : '3rem',
            paddingRight: showScrolledStyle ? '1.5rem' : '3rem',
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '5rem' }}
          className="relative pointer-events-auto flex items-center justify-between max-w-[1400px]"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="/"
              onClick={handleLogoClick}
            >
              <img
                src="/Lindner Logo_weiss.png"
                alt="Lindner KFZ Logo"
                className="h-8 w-auto transition-all duration-300"
                style={{ filter: showScrolledStyle ? 'invert(1)' : 'none' }}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium transition-colors uppercase tracking-wide relative group"
                style={{ color: showScrolledStyle ? '#333' : '#eee' }}
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"
                  style={{ backgroundColor: showScrolledStyle ? 'black' : 'white' }}
                />
              </a>
            ))}
            <button
              onClick={onTerminanfrageClick}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all cursor-pointer ${
                showScrolledStyle
                  ? 'bg-black text-white hover:bg-neutral-800'
                  : 'bg-white text-black hover:bg-neutral-200'
              }`}
            >
              <Phone size={16} />
              <span>Terminanfrage</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            style={{ color: showScrolledStyle ? 'black' : 'white' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            role="dialog"
            aria-label="Mobilmenü"
            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-2xl font-light text-neutral-900 border-b border-neutral-100 pb-4"
              >
                {item.label}
              </a>
            ))}
            <button
              className="mt-4 flex justify-center items-center gap-2 px-6 py-4 text-lg font-bold text-white bg-black rounded-lg w-full cursor-pointer"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onTerminanfrageClick?.();
              }}
            >
              <Phone size={20} />
              Terminanfrage
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
