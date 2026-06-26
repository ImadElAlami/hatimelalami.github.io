import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { ARCHITECT_INFO } from "../data";

interface HeroProps {
  onServicesClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onServicesClick, onContactClick }: HeroProps) {
  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden pt-20"
    >
      {/* Background Hero Image with Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={ARCHITECT_INFO.heroImage}
          alt="Moroccan Contemporary Villa Background"
          className="w-full h-full object-cover object-center filter grayscale-[15%]"
          referrerPolicy="no-referrer"
          id="hero-bg-image"
        />
        {/* Navy Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30 z-10" />
      </div>

      {/* Floating abstract architectural grids/details */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20" id="hero-architectural-lines">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(93, 173, 226, 0.4)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        
        {/* Subtle Moroccan Architectural Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          id="hero-badge"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-brand-blue uppercase font-medium">
            CONCEVOIR L'EXCELLENCE AU MAROC
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          id="hero-headline"
        >
          Concevoir des espaces <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-blue to-white/90">
            qui inspirent
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed font-light mb-12"
          id="hero-subheadline"
        >
          Architecte d'exception basé au Maroc, spécialisé dans la conception et l'étude technique de villas contemporaines haut de gamme, de résidences élégantes (R+1, R+2, R+3) et de projets commerciaux d'envergure.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          id="hero-actions"
        >
          <button
            onClick={onServicesClick}
            className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 rounded-lg font-semibold tracking-wide shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/25 transition-all duration-300 cursor-pointer text-sm"
            id="hero-btn-services"
          >
            Découvrir mes services
          </button>
          
          <button
            onClick={onContactClick}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-lg font-semibold tracking-wide backdrop-blur-sm transition-all duration-300 cursor-pointer text-sm"
            id="hero-btn-contact"
          >
            Me contacter
          </button>
        </motion.div>

        {/* Elegant Animated Stats Peek at the bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50 text-xs font-mono tracking-widest cursor-pointer"
          onClick={onServicesClick}
          id="hero-scroll-indicator"
        >
          <span>DÉFILER VERS LE BAS</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-brand-blue" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
