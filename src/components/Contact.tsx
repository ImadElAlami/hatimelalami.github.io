import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setStatus("submitting");

  //   // Using user's Formspree target or fallback standard form handler
  //   // Users can easily set their custom Formspree URL. We will provide a clean POST endpoint.
  //   try {
  //     const response = await fetch("https://formspree.io/f/xqevqdzj", { // Standard demo/placeholder Formspree ID or users can swap
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json"
  //       },
  //       body: JSON.stringify({
  //         fullName: formData.fullName,
  //         email: formData.email,
  //         subject: formData.subject,
  //         message: formData.message
  //       })
  //     });

  //     if (response.ok) {
  //       setStatus("success");
  //       setFormData({ fullName: "", email: "", subject: "", message: "" });
  //     } else {
  //       const data = await response.json();
  //       throw new Error(data.error || "Erreur lors de l'envoi. Veuillez réessayer.");
  //     }
  //   } catch (err: any) {
  //     console.error(err);
  //     setStatus("error");
  //     setErrorMessage(err.message || "Une erreur de connexion est survenue. Veuillez réessayer.");
  //   }
  // };

  const [formspreeState, formspreeSubmit] = useForm("xqevqdzj");
  
  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 bg-white overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="contact-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-navy-900 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Mail size={12} className="text-brand-blue" />
            <span>COMMENCER UN PROJET</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight"
          >
            Donnons vie à vos projets
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 font-light mt-4 text-base"
          >
            Vous possédez un terrain au Maroc ou un projet de rénovation ? Remplissez notre formulaire ou contactez-nous directement pour une première consultation d'esquisse.
          </motion.p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE - Clickable Cards & Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isContainerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
            id="contact-info-column"
          >
            {/* Card 1: Email */}
            <a 
              href="mailto:hatim100000@gmail.com "
              className="flex items-center gap-5 p-6 rounded-2xl bg-neutral-subtle border border-gray-100 hover:border-brand-blue/30 hover:shadow-md hover:shadow-navy-900/5 transition-all duration-300 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-brand-blue flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-0.5">E-MAIL DIRECT</span>
                <span className="text-sm sm:text-base font-display font-bold text-navy-900 group-hover:text-brand-blue transition-colors duration-300">
                  hatim100000@gmail.com
                </span>
              </div>
            </a>

            {/* Card 2: Phone */}
            <a 
              href="tel:+212664051817"
              className="flex items-center gap-5 p-6 rounded-2xl bg-neutral-subtle border border-gray-100 hover:border-brand-blue/30 hover:shadow-md hover:shadow-navy-900/5 transition-all duration-300 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-brand-blue flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                <Phone size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-0.5 font-medium">TÉLÉPHONE CABINET</span>
                <span className="text-sm sm:text-base font-display font-bold text-navy-900 group-hover:text-brand-blue transition-colors duration-300">
                  +212 (0) 6 64 05 18 17
                </span>
              </div>
            </a>

            {/* Card 3: Address */}
            <div 
              className="flex items-center gap-5 p-6 rounded-2xl bg-neutral-subtle border border-gray-100 hover:border-brand-blue/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-brand-blue flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-0.5">ADRESSE CABINET</span>
                <address className="text-sm sm:text-base font-display font-bold text-navy-900 not-italic">
                  Av. Lalla Asmae Rési. Naima Imm. E Appt. 13 Tabriquet - Salé
                </address>
              </div>
            </div>

            {/* Embedded Responsive Google Map Container */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[260px] relative group" id="contact-map-container">
              {/* Map embed with simple Salé Tabriquet. 
                  Users can later paste their Google Maps Embed URL from: https://maps.app.goo.gl/3hSzNKmjuhNoWTPU8 
              */}
              <iframe
                title="Google Maps Location - Salé Tabriquet"
                
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.100056641773!2d-6.805923399999999!3d34.0413044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b4a4831fcc5%3A0xca44321216497850!2sArchitecte%20Hatim%20El%20Alami!5e0!3m2!1sen!2sma!4v1782499093040!5m2!1sen!2sma"
                className="w-full h-full border-0 grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                id="google-maps-iframe"
              />
              <div className="absolute top-2 right-2 bg-navy-900/90 text-white font-mono text-[9px] px-2.5 py-1 rounded-md backdrop-blur-sm tracking-wider">
                Salé Tabriquet
              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE - Contact Form (Formspree Compatible) */}

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isContainerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-neutral-subtle border border-gray-100 p-8 sm:p-10 rounded-2xl relative"
            id="contact-form-column"
          >
            <form className="space-y-6" action="https://formspree.io/f/xqevqdzj" method="POST">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-10"
                    key="success-card"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
                      className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-100"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-gray-500 font-light text-sm max-w-sm mb-8 leading-relaxed">
                      Merci pour votre message. Nous l'analyserons attentivement au regard des contraintes d'urbanisme et nous vous recontacterons sous 24 à 48 heures.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="bg-navy-900 hover:bg-brand-blue text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                 <motion.form 
                    onSubmit={async (e) => {
                      await formspreeSubmit(e);

                      if (formspreeState.succeeded) {
                        setStatus("success");
                        setFormData({
                          fullName: "",
                          email: "",
                          subject: "",
                          message: ""
                        });
                      }
                    }}
                    className="space-y-6"
                    key="form-fields"
                  >
                    
                    {/* Status Banner for error handling */}
                    {status === "error" && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-rose-50 text-rose-700 border border-rose-100 text-sm flex items-start gap-3"
                      >
                        <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Nom Complet */}
                      <div>
                        <label 
                          htmlFor="fullName" 
                          className="block text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest mb-2"
                        >
                          NOM COMPLET *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Ex: Amine Alami"
                          disabled={status === "submitting"}
                          className="w-full bg-white border border-gray-100 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none transition-colors duration-300 shadow-inner"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest mb-2"
                        >
                          ADRESSE E-MAIL *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Ex: amine@gmail.com"
                          disabled={status === "submitting"}
                          className="w-full bg-white border border-gray-100 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none transition-colors duration-300 shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Sujet */}
                    <div>
                      <label 
                        htmlFor="subject" 
                        className="block text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest mb-2"
                      >
                        SUJET DU PROJET *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Ex: Projet de conception villa R+1 à Salé"
                        disabled={status === "submitting"}
                        className="w-full bg-white border border-gray-100 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none transition-colors duration-300 shadow-inner"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label 
                        htmlFor="message" 
                        className="block text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest mb-2"
                      >
                        DÉTAIL DU PROJET / MESSAGE *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez brièvement votre projet, la localisation du terrain, s'il s'agit d'une villa ou d'une résidence, et vos contraintes spécifiques."
                        disabled={status === "submitting"}
                        className="w-full bg-white border border-gray-100 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none transition-colors duration-300 resize-none shadow-inner"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-4 rounded-xl font-semibold tracking-wide text-sm shadow-md shadow-brand-blue/10 flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-50 cursor-pointer"
                      id="submit-contact-form"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </motion.button>

                  </motion.form>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
