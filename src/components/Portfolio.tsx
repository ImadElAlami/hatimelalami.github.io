import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Sparkles, X, MapPin, Calendar, Maximize2, ShieldAlert } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Get unique categories for filters
  const categories = ["Tous", "Villa de Luxe", "Résidence R+1", "Résidence R+2", "Résidence R+3", "Projet Commercial"];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "Tous"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="realisations" 
      className="py-24 sm:py-32 bg-white overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="portfolio-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-navy-900 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Sparkles size={12} className="text-brand-blue" />
            <span>RÉALISATIONS PHARES</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight"
          >
            Le reflet de notre savoir-faire
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 font-light mt-4 text-base"
          >
            Découvrez une sélection de villas haut de gamme et d'ouvrages collectifs conçus et autorisés par notre cabinet au Maroc.
          </motion.p>
        </div>

        {/* Categories Filtering Buttons */}
        <div 
          className="flex flex-wrap gap-2.5 justify-center mb-12 sm:mb-16" 
          id="portfolio-filters"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-navy-900 text-white shadow-md shadow-navy-900/10 scale-102"
                  : "bg-neutral-subtle text-gray-500 hover:text-navy-900 border border-gray-100 hover:border-gray-200"
              }`}
            >
              {category === "Tous" ? "Tous les projets" : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy-900/5 bg-neutral-subtle cursor-pointer border border-gray-100 transition-all duration-300 flex flex-col h-[420px]"
              >
                {/* Image Container with Hover zoom and overlay */}
                <div className="relative w-full h-[280px] overflow-hidden bg-neutral-200 flex-shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <span className="text-white bg-brand-blue px-3.5 py-1.5 rounded-lg text-[10px] font-mono tracking-widest uppercase font-semibold">
                      VOIR LE PROJET
                    </span>
                  </div>
                </div>

                {/* Content description row */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-navy-900 mt-1 line-clamp-1 group-hover:text-brand-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 font-light text-xs mt-1.5 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer metadata */}
                  <div className="flex justify-between items-center text-[11px] text-gray-400 font-mono mt-4 pt-4 border-t border-gray-50 flex-shrink-0">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-brand-blue/70" />
                      {project.location}
                    </span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Elegant Project Detail Overlay Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="portfolio-modal">
              {/* Backing backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
              />

              {/* Modal Card Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[80vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 bg-navy-950/40 hover:bg-navy-950 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none cursor-pointer"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>

                {/* Left side - Dynamic Hero visual */}
                <div className="w-full lg:w-1/2 relative bg-neutral-900 aspect-video lg:aspect-auto">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Left Bottom Floating Label */}
                  <div className="absolute bottom-6 left-6 right-6 text-white hidden sm:block">
                    <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase font-bold">
                      {selectedProject.category}
                    </span>
                    <h4 className="font-display text-xl font-bold tracking-tight mt-1">
                      {selectedProject.title}
                    </h4>
                  </div>
                </div>

                {/* Right side - Technical Brief and specs */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between">
                  <div>
                    {/* Header mobile title */}
                    <div className="block sm:hidden mb-4">
                      <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase font-bold">
                        {selectedProject.category}
                      </span>
                      <h4 className="font-display text-lg font-bold text-navy-900 mt-0.5">
                        {selectedProject.title}
                      </h4>
                    </div>

                    <span className="text-xs font-mono font-semibold tracking-wider text-brand-blue uppercase">
                      FICHE TECHNIQUE
                    </span>
                    
                    <h3 className="font-display text-2xl font-bold text-navy-900 mt-1 mb-4 hidden sm:block">
                      {selectedProject.title}
                    </h3>
                    
                    <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Metadata specs grid */}
                    <div className="grid grid-cols-2 gap-4 bg-neutral-subtle p-4 rounded-xl border border-gray-100 mb-6 font-mono text-xs">
                      <div>
                        <span className="text-gray-400 block uppercase text-[10px]">LOCALISATION</span>
                        <span className="text-navy-900 font-semibold flex items-center gap-1 mt-0.5">
                          <MapPin size={12} className="text-brand-blue" />
                          {selectedProject.location}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 block uppercase text-[10px]">ANNEE DE LIVRAISON</span>
                        <span className="text-navy-900 font-semibold flex items-center gap-1 mt-0.5">
                          <Calendar size={12} className="text-brand-blue" />
                          {selectedProject.year}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 block uppercase text-[10px]">SURFACE CONSTRUITE</span>
                        <span className="text-navy-900 font-semibold flex items-center gap-1 mt-0.5">
                          <Maximize2 size={12} className="text-brand-blue" />
                          {selectedProject.surface}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 block uppercase text-[10px]">PERMIS D'URBANISME</span>
                        <span className="text-navy-900 font-semibold flex items-center gap-1 mt-0.5">
                          <ShieldAlert size={12} className="text-brand-blue" />
                          Approuvé (Rokhas)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full bg-navy-900 hover:bg-brand-blue text-white py-3 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
                    >
                      Fermer le Portfolio
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
