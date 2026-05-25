import { motion } from "framer-motion";
import {
  Rocket, Users, LineChart, RefreshCw, Globe, Paintbrush, ShieldCheck, Settings, MessageCircle,
} from "lucide-react";

const benefits = [
  { icon: Rocket, title: "Accelerate survey creation and deployment", desc: "Go from idea to live survey in minutes using AI prompts or uploaded content" },
  { icon: Users, title: "Empower every team", desc: "Enable non-technical users to build, assign, and analyze surveys using natural language" },
  { icon: LineChart, title: "Drive deeper insights", desc: "Uncover trends and sentiment across responses, cases, and conversations with built-in AI analytics" },
  { icon: RefreshCw, title: "Close Feedback Loops Faster", desc: "Let AgentVista detect urgency and trigger follow-ups or CRM actions in real time" },
  { icon: MessageCircle, title: "Boost response quality and relevance", desc: "Dynamically follow up with AI-generated clarifying questions" },
  { icon: ShieldCheck, title: "Stay secure and compliant", desc: "100% native to Salesforce and designed to meet HIPAA, ISO, SOC, and GDPR standards." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="pt-24 pb-9 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/5 text-brand-blue text-xs font-semibold mb-4 tracking-widest uppercase">
            Why AgentVista ?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Built for Enterprise. Designed for Everyone.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Not just a survey builder. A feedback intelligence layer that turns every response into action inside Salesforce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group relative rounded-xl bg-background border border-border/80 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top line - brand color */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon with brand color highlight */}
              <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors duration-300 border border-brand-blue/20 group-hover:border-brand-blue">
                <b.icon size={22} className="text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-[15px]">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
