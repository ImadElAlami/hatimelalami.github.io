import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Hammer } from "lucide-react";
import { SERVICES_DATA } from "../data";
import LucideIcon from "./LucideIcon";

export default function Services() {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="services" 
      className="py-24 sm:py-32 bg-neutral-subtle border-y border-gray-100 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="services-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 border border-navy-100/30 text-navy-900 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Hammer size={12} className="text-brand-blue" />
            <span>EXPERTISES & PRESTATIONS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight"
          >
            Des plans rigoureux, <br />
            <span className="text-brand-blue">une architecture d'exception</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 font-light mt-4 text-base"
          >
            Du dépôt d'autorisation jusqu'au plan de détail constructif, découvrez nos prestations adaptées aux exigences techniques et foncières du Maroc.
          </motion.p>
        </div>

        {/* Services Card Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="services-grid"
        >
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group"
            >
              {/* Icon Container with subtle background pattern */}
              <div className="w-14 h-14 rounded-xl bg-navy-50 text-brand-blue flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white shadow-sm">
                <LucideIcon name={service.icon} size={24} className="transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Decorative dividing line */}
              <div className="h-px bg-gray-100 w-full mb-6" />

              {/* Technical Details List */}
              <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                    <span className="leading-tight">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
