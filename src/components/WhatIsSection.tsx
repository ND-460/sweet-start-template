import { motion } from "framer-motion";
import heroImg from "@/assets/agentvista-what-is-features-hero.webp";

const WhatIsSection = () => {
  return (
    <section className="pt-16 md:pt-24 pb-9 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-end max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src={heroImg}
              alt="AgentVista intelligent feedback copilot interface showcasing AI-powered survey creation and feedback management features"
              className="w-full max-w-sm md:max-w-md h-auto rounded-2xl shadow-xl mb-1"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/5 text-brand-blue text-xs font-semibold mb-4 tracking-widest uppercase">
              What is AgentVista ?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Intelligent Feedback Copilot Built inside Salesforce
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              <strong className="text-foreground">AgentVista</strong>  is an AI-powered assistant built into SurveyVista, powered by Salesforce's Agentforce. No coding. No complexity. Just intelligent feedback automation.
            </p>

            <p className="text-muted-foreground leading-relaxed text-[15px]">
              From creating surveys to analyzing sentiment and triggering follow-up actions, AgentVista connects your entire feedback process to your Salesforce data and workflows in real time. Whether you are managing customer, employee, or partner feedback, AgentVista makes it faster, smarter, and easier to turn responses into action.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
