import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useRecaptcha } from "@/hooks/use-recaptcha";
import Index from "./pages/Index.tsx";
import TermsOfUse from "./pages/TermsOfUse.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => {
  const { initRecaptcha } = useRecaptcha();

  // Lazy-load reCAPTCHA script after 5 seconds in the background
  useEffect(() => {
    const timer = setTimeout(() => {
      initRecaptcha().catch((err) => console.error("Error background loading reCAPTCHA:", err));
    }, 5000);

    return () => clearTimeout(timer);
  }, [initRecaptcha]);

  // Mobile toggle click/touch handler
  useEffect(() => {
    const isHoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (isHoverCapable) return;

    const handleToggle = (e: TouchEvent) => {
      const badge = document.querySelector(".grecaptcha-badge");
      if (!badge) return;

      const target = e.target as HTMLElement;

      if (badge.contains(target)) {
        // Toggle the is-open class on badge tap
        badge.classList.toggle("is-open");
      } else {
        // Collapse the badge when tapping outside
        badge.classList.remove("is-open");
      }
    };

    document.addEventListener("touchstart", handleToggle, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleToggle);
    };
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index section="home" />} />
          <Route path="/features" element={<Index section="features" />} />
          <Route path="/benefits" element={<Index section="benefits" />} />
          <Route path="/use-cases" element={<Index section="use-cases" />} />
          <Route path="/contact" element={<Index section="contact" />} />
          <Route path="/faq" element={<Index section="faq" />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
