import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface IndexProps {
  section?: string;
}

const Index = ({ section }: IndexProps) => {
  const location = useLocation();

  // Handle hash-based scrolling when URL changes
  useEffect(() => {
    if (location.hash) {
      // Wait a bit for the page to render
      const timer = setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash, section]);

  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <FeaturesSection />
      <BenefitsSection />
      <UseCasesSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
