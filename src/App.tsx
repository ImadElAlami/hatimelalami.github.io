/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import InfoSection from "./components/InfoSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  
  // High-End SEO, OpenGraph and JSON-LD Structured Data dynamic injector
  useEffect(() => {
    // 1. Title
    document.title = "Cabinet Hatim El Alami | Architecte DPLG Salé, Maroc";

    // 2. Head meta helpers
    const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
      const attributeName = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attributeName}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attributeName, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Standard SEO Tags
    updateOrCreateMeta("description", "Cabinet d'architecture d'excellence au Maroc. Conception de villas de luxe contemporaines, plans R+1, R+2, R+3, dossiers d'autorisations d'urbanisme complets sur Rokhas.ma.");
    updateOrCreateMeta("keywords", "architecte maroc, architecte salé, architecte casablanca, villa luxe maroc, plan de villa maroc, plan R+1, plan R+2, plan R+3, cabinet architecture maroc, permis de construire maroc, Rokhas");
    updateOrCreateMeta("author", "Hatim El Alami");

    // OpenGraph Social Media Meta
    updateOrCreateMeta("og:title", "Cabinet Hatim El Alami | Architecte DPLG d'Exception au Maroc", true);
    updateOrCreateMeta("og:description", "Conception de villas contemporaines haut de gamme, projets résidentiels collectifs et espaces commerciaux. Accompagnement clé en main.", true);
    updateOrCreateMeta("og:type", "website", true);
    updateOrCreateMeta("og:url", window.location.href, true);
    updateOrCreateMeta("og:locale", "fr_FR", true);

    // 3. Inject Structured JSON-LD Data for local SEO & voice queries
    const schemaId = "architect-jsonld-schema";
    let script = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const architectSchema = {
      "@context": "https://schema.org",
      "@type": "Architect",
      "name": "Cabinet d'Architecte Hatim El Alami",
      "alternateName": "Cabinet d'architecture Hatim El Alami",
      "description": "Architecte DPLG de renom au Maroc spécialisé dans l'étude technique, la conception de villas de luxe et de résidences collectives.",
      "url": window.location.href,
      "telephone": "+212524431234",
      "email": "expertimad@gmail.com",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenue Mohammed V, Gueliz",
        "addressLocality": "Salé",
        "postalCode": "11000",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "31.6295",
        "longitude": "-8.0125"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:30"
      },
      "knowsAbout": [
        "Architecture de Villas de Luxe",
        "Plans collectifs R+1, R+2, R+3",
        "Urbanisme marocain & plateforme Rokhas.ma",
        "Conception Bioclimatique passive",
        "Réglementation Thermique de Construction au Maroc"
      ]
    };

    script.textContent = JSON.stringify(architectSchema);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById(schemaId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white relative selection:bg-brand-blue selection:text-white" id="root-viewport">
      {/* 1. Header/Navbar */}
      <Navbar onContactClick={() => handleScrollTo("contact")} />

      {/* 2. Hero Section */}
      <Hero 
        onServicesClick={() => handleScrollTo("services")} 
        onContactClick={() => handleScrollTo("contact")} 
      />

      {/* 3. À Propos */}
      <About />

      {/* 4. Services */}
      <Services />

      {/* 5. Réalisations / Portfolio */}
      <Portfolio />

      {/* 6. Processus */}
      <Process />

      {/* 7. Témoignages */}
      <Testimonials />

      {/* 8. Informations Générales */}
      <InfoSection />

      {/* 9. Contact */}
      <Contact />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

