import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import DemoRequestForm from "./DemoRequestForm";
import heroImg from "@/assets/agentvista-ai-survey-hero-mascot.webp";

const APPEXCHANGE_URL = "https://appexchange.salesforce.com/appxListingDetail?listingId=c088b22e-a28b-4d93-bdf7-b950546b6e80&channel=recommended";

const HeroSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-16">
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sm:text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-white/80 backdrop-blur-sm text-brand-blue text-xs md:text-sm font-medium mb-3 tracking-wide shadow-lg shadow-gray-400/20">
              <Sparkles className="w-4.0 h-4.0" />
              Powered by Salesforce Agentforce
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mt-4 mb-4 text-foreground">
              AgentVista -
              <br />
              <span className="relative inline-block pb-4 md:pb-5">
                SurveyVista Copilot
                <svg 
                  className="absolute bottom--3 left-0 w-full"
                  style={{
                    height: '20px',
                  }}
                  viewBox="0 0 100 20" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M0,12 Q50,-6 100,11" 
                    stroke="#3cc14e" 
                    strokeWidth="5" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: '200',
                      strokeDashoffset: '200',
                      animation: 'drawLine 1.4s ease-in-out 0.4s forwards',
                    }}
                  />
                </svg>
              </span>
              <br />
              <span className="text-gradient">for Intelligent Surveys,</span>
              <br />
              <span className="text-gradient">Forms & Assessments</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 mt-6">
              <span className="md:hidden">AI-Powered Automation for <br /> Feedback Management & <br /> Data Collection.</span>
              <span className="hidden md:inline">AI-Powered Automation for Feedback <br /> Management & Data Collection.</span>
            </h2>

            <p className="text-sm md:text-base text-muted-foreground max-w-xl mb-10 leading-relaxed sm:mx-auto lg:mx-0">
              Use natural language and AI to create, distribute, understand, and act on feedback — all inside Salesforce. No code required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center lg:justify-start">
              <button
                onClick={() => setDemoOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-brand-blue text-white font-semibold text-base sm:text-lg hover:opacity-85 active:opacity-75 transition-opacity cursor-pointer select-none"
                style={{ touchAction: 'manipulation' }}
              >
                <span className="pointer-events-none flex items-center gap-2">
                  Book a Demo
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </span>
              </button>
              <button
                onClick={() => window.open(APPEXCHANGE_URL, "_blank", "noopener,noreferrer")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-border text-foreground font-semibold text-base sm:text-lg hover:bg-gray-50 active:bg-muted transition-colors cursor-pointer select-none"
                style={{ touchAction: 'manipulation' }}
              >
                <span className="pointer-events-none">
                  View on AppExchange
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex justify-center items-center mt-12 lg:mt-0"
          >
            <img
              src={heroImg}
              alt="AI-powered survey assistant mascot - AgentVista SurveyVista Copilot for intelligent feedback automation"
              className="w-full max-w-md lg:max-w-lg"
              fetchPriority="high"
            />

            {/* Floating card - AI Survey */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 md:top-4 -right-6 md:right-0 lg:-right-4 bg-background/90 backdrop-blur-sm border border-border rounded-xl px-4 py-2.5 shadow-lg"
            >
              <p className="text-xs font-bold text-foreground">AI Survey Generated</p>
              <p className="text-[11px] text-muted-foreground">12 questions • 3 sec</p>
            </motion.div>

            {/* Floating card - Sentiment */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 md:bottom-12 -left-6 md:left-0 lg:-left-4 bg-background/90 backdrop-blur-sm border border-border rounded-xl px-4 py-2.5 shadow-lg"
            >
              <p className="text-xs font-bold text-secondary">Sentiment: Positive 92%</p>
              <p className="text-[11px] text-muted-foreground">Real-time analysis</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <DemoRequestForm open={demoOpen} onClose={() => setDemoOpen(false)} />

      <style>{`
        @keyframes drawLine {
          0% {
            stroke-dashoffset: 200;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
