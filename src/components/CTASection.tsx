import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DemoRequestForm from "./DemoRequestForm";

const CTASection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="pt-16 md:pt-24 pb-9 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: '#005C90',
            padding: '48px 32px',
          }}
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-xs font-semibold mb-4 tracking-widest uppercase">
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span>Ready to Close the Feedback Loop —<br />Automatically ?</span>
            </h2>
            <p className="text-white mb-8 text-lg">
              See AgentVista in action. Automate your entire survey lifecycle with the power of AI,<br />natively inside Salesforce</p>
            <button
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[#005C90] font-semibold text-lg hover:opacity-85 transition-opacity"
              style={{ touchAction: 'manipulation' }}
            >
              Book a Demo
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
      <DemoRequestForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
};

export default CTASection;
