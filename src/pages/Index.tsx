import React, { useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageSeo from "@/components/seo/PageSeo";

const UseCasesSection = React.lazy(() => import("@/components/UseCasesSection"));
const FAQSection = React.lazy(() => import("@/components/FAQSection"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));

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
      <PageSeo
        title="AI-Powered Surveys, Forms & Assessments"
        description="AgentVista is the intelligent AI-powered assistant for creating, distributing, and analyzing surveys, forms, and assessments inside Salesforce."
        breadcrumbs={[{ name: "Home", path: "/" }]}
      />
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <FeaturesSection />
      <BenefitsSection />
      <Suspense fallback={<div className="min-h-[400px] bg-background" />}>
        <UseCasesSection />
      </Suspense>
      <CTASection />
      <Suspense fallback={<div className="min-h-[400px] bg-background" />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px] bg-background" />}>
        <ContactSection />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
