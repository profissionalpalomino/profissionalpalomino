import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PilaresSection from "@/components/PilaresSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { initTracker } from "@/lib/tracker";

const Index = () => {
  useEffect(() => {
    initTracker();

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F7] text-[#1A1714] relative selection:bg-[#FCEDE9] selection:text-[#C42B13]">
      <Navbar />
      <HeroSection />
      <PilaresSection />
      <ServicesSection />
      <HowItWorksSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
