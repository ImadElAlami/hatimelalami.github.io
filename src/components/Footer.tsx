import React from "react";
import { motion } from "motion/react";
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Layout } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = 2026; // Set as requested in prompt

  const navigationLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Processus", href: "#processus" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "Informations", href: "#informations" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden pt-16 pb-12 border-t border-white/5" id="main-footer">
      
      {/* Subtle architectural blueprint vector design line inside background */}
      <div className="absolute inset-x-0 bottom-0 h-44 opacity-5 pointer-events-none z-0" id="footer-blueprint-bg">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20" x2="100%" y2="20" stroke="white" strokeWidth="1" />
          <line x1="0" y1="80" x2="100%" y2="80" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
          <line x1="0" y1="140" x2="100%" y2="140" stroke="white" strokeWidth="1" />
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="white" strokeWidth="0.5" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="white" strokeWidth="0.5" />
          <circle cx="50%" cy="80" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="10,5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16" id="footer-top-deck">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-widest uppercase text-white">
                Hatim El Alami
              </span>
              <span className="text-[10px] tracking-[0.4em] font-mono uppercase text-brand-blue -mt-0.5 font-semibold">
                Cabinet d'Architecture
              </span>
            </div>
            
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm">
              Conception de villas de prestige, résidences collectives et espaces commerciaux au Maroc. Diplômé DPLG et inscrit à l'Ordre National des Architectes.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-blue text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-blue text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/5"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-blue text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/5"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-4 md:pl-10">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-brand-blue mb-5">
              PLAN DU SITE
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-400">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Address & Contact Col */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-brand-blue mb-5">
              COORDONNÉES
            </h3>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                <address className="not-italic leading-tight">
                  Av. Lalla Asmae Rési. Naima Imm. E Appt. 13 <br />
                  Salé, Maroc
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-blue flex-shrink-0" />
                <a href="tel:+212664051817" className="hover:text-white transition-colors">
                  +212 (0) 6 64 05 18 17
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-blue flex-shrink-0" />
                <a href="mailto:hatim100000@gmail.com" className="hover:text-white transition-colors">
                  hatim100000@gmail.com 
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Deck Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono" id="footer-bottom-deck">
          <div>
            © {currentYear} Cabinet Hatim El Alami. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <span>Inscrit au Conseil de l'Ordre National</span>
            
            {/* Back to top physics-bounce button */}
            <motion.button
              whileHover={{ y: -4, backgroundColor: "rgba(93, 173, 226, 0.25)" }}
              onClick={handleScrollTop}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-brand-blue flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Remonter en haut de page"
              id="back-to-top-btn"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
