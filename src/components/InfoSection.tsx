import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Info } from "lucide-react";
import { INFO_CARDS } from "../data";
import LucideIcon from "./LucideIcon";

export default function InfoSection() {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section 
      id="informations" 
      className="py-24 sm:py-32 bg-navy-950 text-white overflow-hidden relative"
      ref={containerRef}
    >
      {/* Decorative dark background details */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-blue/10 rounded-full filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute left-10 bottom-0 w-96 h-96 bg-navy-800/20 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="info-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Info size={12} className="text-brand-blue" />
            <span>GARANTIES & INFORMATIONS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            Un accompagnement rigoureux <br />
            <span className="text-brand-blue">à chaque étape réglementaire</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-light mt-4 text-base"
          >
            La sérénité d'un projet de construction s'appuie sur la parfaite maîtrise des lois d'urbanisme locales et de la réactivité technique.
          </motion.p>
        </div>

        {/* Info Grid (Bento Style) */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8" 
          id="info-bento-grid"
        >
          {INFO_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl backdrop-blur-md flex flex-col sm:flex-row gap-6 items-start hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Dynamic Icon Wrapper */}
              <div className="w-14 h-14 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 border border-brand-blue/20">
                <LucideIcon name={card.icon} size={24} />
              </div>

              {/* Text Layout */}
              <div className="flex-grow flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>
                
                {/* Accent Highlight Banner */}
                <div className="inline-flex self-start px-3 py-1 rounded bg-brand-blue/15 border border-brand-blue/25 text-brand-blue text-xs font-mono font-medium tracking-wide">
                  {card.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
