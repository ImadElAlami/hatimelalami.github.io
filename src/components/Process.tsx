import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GitCommit } from "lucide-react";
import { PROCESS_STEPS } from "../data";
import LucideIcon from "./LucideIcon";

export default function Process() {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="processus" 
      className="py-24 sm:py-32 bg-white overflow-hidden relative"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="process-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-navy-900 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <GitCommit size={12} className="text-brand-blue" />
            <span>MÉTHODOLOGIE ET CONDUITE</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight"
          >
            Le cheminement vers votre projet
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 font-light mt-4 text-base"
          >
            Découvrez notre processus de conception rigoureux et transparent, assurant la parfaite adéquation de vos plans avec votre budget et la réglementation d'urbanisme.
          </motion.p>
        </div>

        {/* Vertical Connected Timeline Layout */}
        <div className="relative max-w-4xl mx-auto" id="process-timeline-container">
          
          {/* Central Connecting Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-10 bottom-10 w-0.5 bg-gray-100 -z-10" />

          <div className="space-y-12 md:space-y-16">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={isContainerInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  
                  {/* Timeline Badge (Circle icon + step number) */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-[58px] h-[58px] rounded-full bg-white border-2 border-brand-blue flex items-center justify-center shadow-md shadow-brand-blue/5">
                      <LucideIcon name={step.icon} size={20} className="text-navy-900" />
                    </div>
                  </div>

                  {/* Left or Right Spacer for Desktop Alignment */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Timeline Card Content */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-10">
                    <div className={`bg-neutral-subtle p-8 rounded-2xl border border-gray-100 hover:border-brand-blue/30 shadow-sm transition-all duration-300 relative group`}>
                      
                      {/* Step Number water mark */}
                      <span className="absolute top-4 right-6 text-4xl sm:text-5xl font-display font-black text-gray-200/50 group-hover:text-brand-blue/15 select-none transition-colors duration-300">
                        {step.stepNumber}
                      </span>

                      {/* Header title */}
                      <span className="text-[10px] font-mono tracking-widest text-brand-blue font-bold uppercase block mb-1">
                        Étape {step.stepNumber}
                      </span>
                      
                      <h3 className="font-display text-lg sm:text-xl font-bold text-navy-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Descriptions */}
                      <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Custom bullets details */}
                      <div className="border-l-2 border-brand-blue/30 pl-4 py-0.5 text-xs text-gray-600 font-medium italic">
                        {step.details}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
