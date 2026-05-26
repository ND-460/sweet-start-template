import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CalendlyWindow extends Window {
  Calendly?: {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement | null;
    }) => void;
  };
}

interface DemoRequestFormProps {
  open: boolean;
  onClose: () => void;
}

const DemoRequestForm = ({ open, onClose }: DemoRequestFormProps) => {
  const scriptLoadedRef = useRef(false);
  const calendlyReadyRef = useRef(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load script on component mount (preload)
  useEffect(() => {
    if (!scriptLoadedRef.current) {
      scriptLoadedRef.current = true;

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      scriptRef.current = script;

      script.onload = () => {
        // Mark Calendly as ready when script loads
        calendlyReadyRef.current = true;
      };

      document.body.appendChild(script);
    }
  }, []);

  // Initialize Calendly when modal opens
  useEffect(() => {
    if (open) {
      // Check if Calendly is already loaded
      if (calendlyReadyRef.current) {
        // Already loaded, show immediately without loading spinner
        setIsLoading(false);
        
        const container = document.getElementById("calendly-container");
        if (container) {
          container.innerHTML = "";
          const Calendly = (window as CalendlyWindow).Calendly;
          if (Calendly && Calendly.initInlineWidget) {
            Calendly.initInlineWidget({
              url: "https://calendly.com/d/zzy-699-f8v/book-a-demo?embed_domain=agentsvista.com&embed_type=Inline",
              parentElement: container,
            });
          }
        }
      } else {
        // Not loaded yet, show loading spinner and wait
        setIsLoading(true);
        
        const initializeCalendly = () => {
          const Calendly = (window as CalendlyWindow).Calendly;
          if (Calendly && Calendly.initInlineWidget) {
            calendlyReadyRef.current = true;
            const container = document.getElementById("calendly-container");
            if (container) {
              container.innerHTML = "";
              Calendly.initInlineWidget({
                url: "https://calendly.com/d/zzy-699-f8v/book-a-demo?embed_domain=agentsvista.com&embed_type=Inline",
                parentElement: container,
              });
            }
            setIsLoading(false);
          } else {
            // Calendly not yet available, retry after short delay
            setTimeout(initializeCalendly, 100);
          }
        };

        initializeCalendly();
      }
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm overflow-hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative inset-0 w-full h-full overflow-hidden bg-transparent flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white transition-colors z-50 p-2 sm:p-2.5 bg-black/80 hover:bg-black rounded-full"
              aria-label="Close modal"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-transparent z-20">
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-brand-blue"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 rounded-full bg-brand-blue"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 rounded-full bg-brand-blue"
                  />
                </div>
              </div>
            )}

            {/* Calendly container - only renders when modal is open */}
            <div
              id="calendly-container"
              className="w-full flex-1 overflow-hidden"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoRequestForm;
