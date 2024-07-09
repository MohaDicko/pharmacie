import React from "react";
import HeroSection from "./HeroSection";
import PresentationSection from "./PresentationSection";
import SeancesSection from "./SeancesSection";
import ContactSection from "./ContactSection";
import Testimonials from "./Testimonials";
import ResponsiveAppBar from "../layout/header";
import FormationsSection from "./FormationsSection";

function Home() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="presentation-section">
        <PresentationSection  onNavigate={scrollToSection}  />
      </div>
   
      <div id="seances-section">
        <SeancesSection />
      </div>
      <div id="Formations-section">
        <FormationsSection/> 
      </div>
      <div id="testimonials-section">
        <Testimonials />
      </div>
      <div id="contact-section">
        <ContactSection />
      </div>
      
    </>
  );
}

export default Home;
