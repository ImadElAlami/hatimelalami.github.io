import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuItems = [
    { label: "Accueil", href: "#accueil", id: "accueil" },
    { label: "À propos", href: "#apropos", id: "apropos" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Réalisations", href: "#realisations", id: "realisations" },
    { label: "Processus", href: "#processus", id: "processus" },
    { label: "Témoignages", href: "#temoignages", id: "temoignages" },
    { label: "Informations", href: "#informations", id: "informations" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background solid state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active section highlighting
      const scrollPosition = window.scrollY + 120;
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-brand-blue z-[100] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        id="scroll-progress-bar"
      />

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-sm py-4 border-b border-gray-100" 
            : "bg-transparent py-6 text-white"
        }`}
        id="main-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <a 
            href="#accueil" 
            onClick={(e) => handleNavClick(e, "accueil")}
            className="flex flex-col select-none group"
            id="nav-logo"
          >
            <span className={`font-display text-lg lg:text-xl font-bold tracking-widest uppercase transition-colors duration-300 ${
              isScrolled ? "text-navy-900" : "text-white"
            }`}>
              Hatim El Alami
            </span>
            <span className={`text-[9px] tracking-[0.4em] font-mono uppercase transition-colors duration-300 -mt-0.5 ${
              isScrolled ? "text-brand-blue font-semibold" : "text-brand-blue"
            }`}>
              Architecte DPLG
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8" id="desktop-menu-items">
            <ul className="flex items-center gap-7 text-sm font-medium">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`relative py-1 transition-all duration-300 hover:opacity-100 ${
                        isScrolled 
                          ? isActive ? "text-navy-900 font-semibold" : "text-gray-500 hover:text-navy-900" 
                          : isActive ? "text-brand-blue font-semibold" : "text-gray-200 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Special CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContactClick}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide shadow-sm transition-all duration-300 flex items-center justify-center cursor-pointer"
              id="nav-cta-button"
            >
              Contactez-moi
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none transition-colors duration-300 ${
                isScrolled ? "text-navy-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Menu de navigation"
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Flyout Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg absolute top-full left-0 w-full"
              id="mobile-nav-panel"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                <ul className="flex flex-col gap-4">
                  {menuItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.id)}
                          className={`block py-1 text-base font-medium transition-colors duration-300 ${
                            isActive 
                              ? "text-brand-blue font-semibold border-l-2 border-brand-blue pl-2" 
                              : "text-gray-600 hover:text-navy-900 pl-2"
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3 rounded-lg text-center font-semibold text-sm transition-colors duration-300 cursor-pointer"
                  id="mobile-nav-cta"
                >
                  Contactez-moi
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
