import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RecaptchaProvider } from "@/components/recaptcha/RecaptchaProvider";
import Index from "./pages/Index.tsx";
import TermsOfUse from "./pages/TermsOfUse.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => {
  // Handle reCAPTCHA badge click on mobile
  useEffect(() => {
    const handleRecaptchaClick = () => {
      const badge = document.querySelector(".grecaptcha-badge");
      if (badge) {
        badge.classList.toggle("expanded");
      }
    };

    // Watch for the reCAPTCHA badge element and attach click handler
    const observer = new MutationObserver(() => {
      const badge = document.querySelector(".grecaptcha-badge:not([data-click-handler])");
      if (badge) {
        badge.setAttribute("data-click-handler", "true");
        badge.addEventListener("click", handleRecaptchaClick);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      const badge = document.querySelector(".grecaptcha-badge");
      if (badge) {
        badge.removeEventListener("click", handleRecaptchaClick);
      }
    };
  }, []);

  return (
    <RecaptchaProvider>
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
    </RecaptchaProvider>
  );
};

export default App;
