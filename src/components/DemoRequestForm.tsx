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
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load script and initialize Calendly only when the modal is opened
  useEffect(() => {
    if (!open) return;

    const initialize = () => {
      const container = document.getElementById("calendly-container");
      if (!container) return;
      container.innerHTML = "";
      
      const Calendly = (window as CalendlyWindow).Calendly;
      if (Calendly && Calendly.initInlineWidget) {
        Calendly.initInlineWidget({
          url: "https://calendly.com/d/zzy-699-f8v/book-a-demo?embed_domain=agentsvista.com&embed_type=Inline",
          parentElement: container,
        });
        setIsLoading(false);
      } else {
        // Fallback in case Calendly wasn't fully initialized
        setTimeout(initialize, 100);
      }
    };

    if (!scriptLoadedRef.current) {
      scriptLoadedRef.current = true;
      setIsLoading(true);

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      scriptRef.current = script;

      script.onload = () => {
        initialize();
      };

      document.body.appendChild(script);
    } else {
      setIsLoading(false);
      initialize();
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
