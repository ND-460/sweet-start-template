import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  Headphones, UserCheck, TrendingUp, Globe2, Brain, Settings2, Building2, Megaphone,
  Zap, MessageCircle, BarChart3, CheckCircle2, Search, Clipboard, Filter, ChevronLeft, ChevronRight
} from "lucide-react";

import salesRevenueImg from "../assets/agentvista-sales-revenue-use-case.webp";
import marketingImg from "../assets/agentvista-marketing-use-case.webp";
import customerExperienceImg from "../assets/agentvista-customer-experience-use-case.svg";
import employeeExperienceImg from "../assets/agentvista-employee-experience-use-case.webp";
import partnerVendorImg from "../assets/agentvista-partner-vendor-use-case.webp";
import knowledgeInsightsImg from "../assets/agentvista-knowledge-insights-use-case.webp";
import adminOpsImg from "../assets/agentvista-platform-admin-ops-use-case.webp";
import crossIndustryImg from "../assets/agentvista-cross-industry-use-case.webp";

const useCases = [
  {
    id: "sales", icon: TrendingUp, label: "Sales & Revenue", image: salesRevenueImg,
    bgClass: "bg-blue-500/15",
    imageBg: "from-blue-500/10 to-transparent",
    accentColor: "text-blue-600 dark:text-blue-400",
    items: [
      { icon: Zap, text: "Auto-generate surveys using meeting summaries from Zoom or call logs" },
      { icon: CheckCircle2, text: "Trigger feedback workflows on closed-lost opportunities" },
      { icon: BarChart3, text: "Summarize seller comments to detect pipeline risk or urgency" },
      { icon: Search, text: "Query: 'Which accounts have the most negative feedback in 60 days?'" },
    ],
  },
  {
    id: "marketing", icon: Megaphone, label: "Marketing & Campaign", image: marketingImg,
    bgClass: "bg-violet-500/15",
    imageBg: "from-violet-500/10 to-transparent",
    accentColor: "text-violet-600 dark:text-violet-400",
    items: [
      { icon: Zap, text: "Send post-webinar feedback surveys automatically" },
      { icon: BarChart3, text: "Measure campaign effectiveness through targeted response forms" },
      { icon: TrendingUp, text: "Track event satisfaction with lifecycle-triggered surveys" },
      { icon: Brain, text: "Auto-analyze marketing sentiment across channels" },
    ],
  },
  {
    id: "cx", icon: Headphones, label: "Customer Experience", image: customerExperienceImg,
    bgClass: "bg-emerald-500/15",
    imageBg: "from-emerald-500/10 to-transparent",
    accentColor: "text-emerald-600 dark:text-emerald-400",
    items: [
      { icon: Zap, text: "Auto-send CSAT surveys post-case closure" },
      { icon: MessageCircle, text: "AI-driven follow-up based on customer sentiment" },
      { icon: TrendingUp, text: "Real-time feedback loop for support quality improvement" },
      { icon: CheckCircle2, text: "Trigger NPS surveys at key customer lifecycle moments" },
    ],
  },
  {
    id: "employee", icon: UserCheck, label: "Employee Experience", image: employeeExperienceImg,
    bgClass: "bg-amber-500/15",
    imageBg: "from-amber-500/10 to-transparent",
    accentColor: "text-amber-600 dark:text-amber-400",
    items: [
      { icon: Zap, text: "Automate onboarding & exit surveys at lifecycle stages" },
      { icon: CheckCircle2, text: "Trigger manager effectiveness feedback based on team structure" },
      { icon: Clipboard, text: "Quick pulse surveys from HR cases with sentiment analysis" },
      { icon: BarChart3, text: "Aggregate employee engagement trends across departments" },
    ],
  },
  {
    id: "partner", icon: Globe2, label: "Partner & Vendor", image: partnerVendorImg,
    bgClass: "bg-cyan-500/15",
    imageBg: "from-cyan-500/10 to-transparent",
    accentColor: "text-cyan-600 dark:text-cyan-400",
    items: [
      { icon: Zap, text: "Automate feedback during partner enablement journeys" },
      { icon: Search, text: "Query: 'Which partners reported friction in the last quarter?'" },
      { icon: MessageCircle, text: "Analyze support interactions from Experience Cloud" },
      { icon: TrendingUp, text: "Track channel satisfaction across partner programs" },
    ],
  },
  {
    id: "insights", icon: Brain, label: "Knowledge & Insights", image: knowledgeInsightsImg,
    bgClass: "bg-indigo-500/15",
    imageBg: "from-indigo-500/10 to-transparent",
    accentColor: "text-indigo-600 dark:text-indigo-400",
    items: [
      { icon: BarChart3, text: "AI-generated summary dashboards for executives" },
      { icon: TrendingUp, text: "Auto-surface top drivers of low satisfaction" },
      { icon: CheckCircle2, text: "Suggest CRM tasks based on negative feedback sentiment" },
      { icon: Brain, text: "Pattern detection across lifecycle stages" },
    ],
  },
  {
    id: "admin", icon: Settings2, label: "Platform Admin & Ops", image: adminOpsImg,
    bgClass: "bg-sky-500/15",
    imageBg: "from-sky-500/10 to-transparent",
    accentColor: "text-sky-600 dark:text-sky-400",
    items: [
      { icon: Zap, text: "'Clone onboarding survey, change theme to green, translate to French'" },
      { icon: Search, text: "Detect duplicate feedback and flag unstructured responses" },
      { icon: Filter, text: "'Show me open records with negative feedback and no follow-up task'" },
      { icon: CheckCircle2, text: "Proactive issue detection across the platform" },
    ],
  },
  {
    id: "industry", icon: Building2, label: "Cross-Industry", image: crossIndustryImg,
    bgClass: "bg-orange-500/15",
    imageBg: "from-orange-500/10 to-transparent",
    accentColor: "text-orange-600 dark:text-orange-400",
    items: [
      { icon: Clipboard, text: "Public sector: feedback on service requests at key checkpoints" },
      { icon: MessageCircle, text: "Healthcare: post-appointment follow-up surveys" },
      { icon: Zap, text: "Education: course feedback on enrollment completion" },
      { icon: TrendingUp, text: "Any industry with Salesforce CRM workflows" },
    ],
  },
];

const UseCasesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    duration: 45,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleScrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const activeCase = useCases[selectedIndex];

  return (
    <section id="use-cases" className="relative pt-16 md:pt-24 pb-9 overflow-hidden bg-background">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-brand-blue/[0.03] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/5 text-brand-blue text-xs font-semibold mb-4 tracking-widest uppercase">
            Use Cases
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Built for Every Team</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            AgentVista adapts to every feedback program across industries
          </p>
        </motion.div>
      </div>

      <div
        className="container mx-auto max-w-6xl px-4 lg:px-8 relative z-10"
      >
        {/* Fading edges strictly contained within the layout block to not bleed out */}
        <div className="absolute left-0 top-0 bottom-0 w-4 md:w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-4 md:w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* ─── Infinite Strip ─── */}
        <div className="relative w-full">
          {/* Mobile Navigation Arrows */}
          <button 
            className="lg:hidden absolute left-0 top-[45px] -translate-y-1/2 z-20 p-2 text-muted-foreground hover:text-foreground active:scale-90 transition-all"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>
          
          <button 
            className="lg:hidden absolute right-0 top-[45px] -translate-y-1/2 z-20 p-2 text-muted-foreground hover:text-foreground active:scale-90 transition-all"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>

          <div className="w-full overflow-hidden select-none cursor-grab active:cursor-grabbing pb-4 md:pb-8" ref={emblaRef}>
            <div className="flex">
              {useCases.map((uc, index) => {
                const isActive = index === selectedIndex;
                return (
                  <div
                    key={`${uc.id}-${index}`}
                    className="flex-[0_0_100%] lg:flex-[0_0_auto] lg:min-w-[220px]"
                    onClick={() => handleScrollTo(index)}
                  >
                  <div
                    className={`group transition-colors duration-300 flex flex-col items-center gap-3 py-4 ${isActive
                        ? 'opacity-100 cursor-default'
                        : 'opacity-50 hover:opacity-80 cursor-pointer'
                      }`}
                  >
                    <div className={`p-4 rounded-xl transition-colors duration-300 ${uc.bgClass}`}>
                      <uc.icon size={26} strokeWidth={2} className={`transition-colors duration-300 ${isActive ? uc.accentColor : 'text-foreground/70'}`} />
                    </div>
                    <span className={`text-sm tracking-wide transition-colors duration-300 ${isActive ? 'font-bold text-foreground' : 'font-medium text-muted-foreground'}`}>
                      {uc.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>

        {/* ─── Active Content Area (Transparent Wrapper, Fixed Min Height) ─── */}
        <div className="relative w-full min-h-[750px] sm:min-h-[550px] md:min-h-[500px] lg:min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col-reverse lg:flex-row items-center justify-between gap-0 md:gap-0 w-full"
            >
              {/* Text Area */}
              <div className="w-full lg:flex-1 flex flex-col items-start pt-2">
                <motion.div 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className={`p-2.5 rounded-xl ${activeCase.bgClass} flex items-center justify-center`}>
                    <activeCase.icon size={28} strokeWidth={2.5} className={activeCase.accentColor} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {activeCase.label}
                  </h3>
                </motion.div>

                <ul className="space-y-4 md:space-y-6">
                  {activeCase.items.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 + i * 0.05, ease: "easeInOut" }}
                        className="flex items-start gap-4 group"
                      >
                        <span className={`flex-shrink-0 mt-1`}>
                          <ItemIcon className={`w-5 h-5 ${activeCase.accentColor}`} strokeWidth={2.5} />
                        </span>
                        <span className="text-muted-foreground text-[15px] md:text-[17px] leading-relaxed font-medium group-hover:text-foreground transition-colors">
                          {item.text}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Image Area */}
              <div className="w-full lg:flex-1 relative flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className={`absolute inset-0 bg-gradient-to-br ${activeCase.imageBg} rounded-full blur-3xl opacity-60 z-0`}
                />

                <div className="relative w-full flex items-center justify-center z-10 min-h-[220px] md:min-h-[300px]">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    src={activeCase.image}
                    alt={`AgentVista ${activeCase.label} use case`}
                    className="w-full max-w-[280px] md:max-w-[400px] object-contain drop-shadow-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
