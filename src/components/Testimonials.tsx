import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.15 });

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  // Auto play testimonials slowly
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  // Variant animations for sliding effect
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <section 
      id="temoignages" 
      className="py-24 sm:py-32 bg-neutral-subtle border-y border-gray-100 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
        
        {/* Quote watermark icon */}
        <div className="absolute top-2 left-6 text-gray-200/50 pointer-events-none -z-10">
          <Quote size={120} className="text-brand-blue/10 stroke-[1]" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16" id="testimonials-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 border border-navy-100/30 text-navy-900 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Star size={12} className="text-brand-blue" />
            <span>TÉMOIGNAGES CLIENTS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight"
          >
            La confiance de nos maîtres d'ouvrage
          </motion.h2>
        </div>

        {/* Slider Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center bg-white p-8 sm:p-12 md:p-16 rounded-2xl border border-gray-100 shadow-sm" id="testimonials-carousel">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="w-full flex flex-col items-center text-center"
            >
              
              {/* Stars Row */}
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(TESTIMONIALS_DATA[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-gray-700 font-display text-base sm:text-lg md:text-xl font-light italic leading-relaxed mb-8 max-w-2xl">
                "{TESTIMONIALS_DATA[activeIndex].text}"
              </p>

              {/* Divider line */}
              <div className="w-10 h-0.5 bg-brand-blue mb-4" />

              {/* Client Info */}
              <h4 className="font-display font-bold text-navy-900 text-base">
                {TESTIMONIALS_DATA[activeIndex].author}
              </h4>
              
              <span className="text-xs font-mono text-gray-400 font-medium tracking-wider uppercase mt-1">
                {TESTIMONIALS_DATA[activeIndex].projectType} — {TESTIMONIALS_DATA[activeIndex].date}
              </span>

            </motion.div>
          </AnimatePresence>

          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-subtle hover:bg-navy-900 hover:text-white text-navy-900 p-2.5 rounded-full border border-gray-100 transition-all duration-300 focus:outline-none hidden sm:flex items-center justify-center cursor-pointer shadow-sm"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-subtle hover:bg-navy-900 hover:text-white text-navy-900 p-2.5 rounded-full border border-gray-100 transition-all duration-300 focus:outline-none hidden sm:flex items-center justify-center cursor-pointer shadow-sm"
            aria-label="Témoignage suivant"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8" id="testimonials-dots">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index 
                  ? "w-8 bg-brand-blue" 
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
