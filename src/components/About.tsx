import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, CheckCircle, ShieldCheck, MapPin } from "lucide-react";
import { ARCHITECT_INFO } from "../data";

// Animated counter component for premium look
function AnimatedCounter({ value, suffix, duration = 1.5 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.min(Math.ceil(totalMiliseconds / end), 50);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight block">
      {count}
      <span className="text-brand-blue font-semibold">{suffix}</span>
    </span>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section 
      id="apropos" 
      className="py-24 sm:py-32 bg-white overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 md:mb-20 max-w-3xl" id="about-header">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isContainerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-navy-900 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Award size={12} className="text-brand-blue" />
            <span>PORTRAIT & VISION</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight"
          >
            L'excellence architecturale, <br />
            <span className="text-brand-blue">au service de vos ambitions</span>
          </motion.h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="about-grid">
          
          {/* Left Column - Image with Architectural borders */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isContainerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
            id="about-image-column"
          >
            {/* Geometric architectural framing backgrounds */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-blue/30 rounded-2xl -z-10 translate-x-1.5 translate-y-1.5 hidden sm:block" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-navy-900/10 rounded-tl-2xl -z-10 hidden sm:block" />
            
            <div className="w-full max-w-[380px] sm:max-w-md rounded-2xl overflow-hidden shadow-xl shadow-navy-900/5 aspect-[3/4] bg-neutral-100 relative group">
              <img
                src={ARCHITECT_INFO.profileImage}
                alt="Portrait professionnel de Hatim El Alami, Architecte"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                id="about-portrait-img"
              />
              
              {/* Discrete Hover Details badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-900/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 text-white text-xs flex items-center gap-3 shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <MapPin size={14} className="text-brand-blue" />
                <span className="font-mono tracking-wide">Hatim El Alami — Cabinet d'Architecture Salé</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio and details */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="about-text-column">
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-6"
            >
              Hatim El Alami <span className="text-gray-400 font-normal text-base block sm:inline sm:ml-2">| Architecte DPLG</span>
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 space-y-4 font-light text-base leading-relaxed mb-8"
              id="about-bio-text"
            >
              {ARCHITECT_INFO.bio.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            {/* Certifications and credentials list */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3.5 mb-10"
              id="about-credentials-list"
            >
              <h4 className="font-display text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
                Qualifications & Affiliations
              </h4>
              {ARCHITECT_INFO.certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-brand-blue">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-sm text-gray-700 font-medium leading-tight">{cert}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Bento Stats Row */}
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-16 border-t border-gray-100" 
          id="about-stats-container"
        >
          {ARCHITECT_INFO.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-neutral-subtle p-6 rounded-2xl border border-gray-100 flex flex-col justify-center items-center text-center group hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider font-mono mt-2 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
