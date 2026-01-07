import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Start', href: '#home' },
  { label: 'Über uns', href: '#about' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Eurogarant', href: '#eurogarant' },
  { label: 'Karriere', href: '#career' },
  { label: 'Kontakt', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Animations-Logik
  const width = useTransform(scrollY, [0, 150], ['100%', '92%']); // Slightly wider than 90% for better mobile look
  const top = useTransform(scrollY, [0, 150], ['0px', '40px']); // Increased top spacing and enabled via 'relative' class
  const borderRadius = useTransform(scrollY, [0, 150], ['0px', '24px']); // Slightly more subtle border radius
  const paddingX = useTransform(scrollY, [0, 150], ['3rem', '2rem']);
  
  // Farben & Styles
  const backgroundColor = useTransform(
    scrollY,
    [0, 150],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  
  const backdropFilter = useTransform(scrollY, [0, 150], ['blur(0px)', 'blur(12px)']);
  
  const shadow = useTransform(
    scrollY,
    [0, 150],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 10px 30px rgba(0,0,0,0.1)']
  );

  const [dynamicTextColor, setDynamicTextColor] = useState('white');
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setDynamicTextColor('black');
      setIsScrolled(true);
    } else {
      setDynamicTextColor('white');
      setIsScrolled(false);
    }
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 120;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.nav
          style={{
            width,
            top,
            borderRadius,
            backgroundColor,
            backdropFilter,
            boxShadow: shadow,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            height: '5rem' // Slightly taller for better touch targets
          }}
          className="relative pointer-events-auto flex items-center justify-between transition-all duration-300 max-w-[1400px] mx-auto"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, '#home')}
              className="text-2xl font-bold tracking-tighter" 
              style={{ color: isScrolled ? 'black' : 'white' }}
            >
              LINDNER <span className={`font-light ${isScrolled ? 'text-neutral-500' : 'text-neutral-300'}`}>KFZ</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm font-medium transition-colors uppercase tracking-wide relative group"
                style={{ color: isScrolled ? '#333' : '#eee' }}
              >
                {item.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full" 
                  style={{ backgroundColor: isScrolled ? 'black' : 'white' }}
                />
              </a>
            ))}
            <a
              href="tel:0309131252"
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${
                isScrolled 
                  ? 'bg-black text-white hover:bg-neutral-800' 
                  : 'bg-white text-black hover:bg-neutral-200'
              }`}
            >
              <Phone size={16} />
              <span>030 / 913 12 52</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            style={{ color: isScrolled ? 'black' : 'white' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-2xl font-light text-neutral-900 border-b border-neutral-100 pb-4"
              >
                {item.label}
              </a>
            ))}
             <a
              href="tel:0309131252"
              className="mt-4 flex justify-center items-center gap-2 px-6 py-4 text-lg font-bold text-white bg-black rounded-lg"
            >
              <Phone size={20} />
              Jetzt anrufen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};