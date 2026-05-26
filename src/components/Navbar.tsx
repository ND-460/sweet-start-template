import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/agent-vista-logo.svg";
import DemoRequestForm from "./DemoRequestForm";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Contact Us", href: "#contact" },
];

const resourcesLinks = [
  { label: "Installation Guide", href: "https://resources.surveyvista.com/knowledge-base/agentvista/agentvista-installation-and-setup-guide" },
  { label: "Survey or Form Generation using AI", href: "https://resources.surveyvista.com/knowledge-base/agentvista/survey-generation-using-ai" },
  { label: "Assign Surveys and Take Actions on Results", href: "https://resources.surveyvista.com/knowledge-base/agentvista/search-and-assign-survey-with-agentforce" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  // Timeout refs for dropdown hover delays
  const openTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isHome) {
        const sections = navLinks.map((l) => l.href.replace("#", ""));
        let current = "home";
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120) current = id;
          }
        }
        setActiveSection(current);
      }
    };
    
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      // Cleanup timeouts
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const handleResourcesMouseEnter = () => {
    // Clear close timeout if user hovers back
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    // Delay opening by 150ms
    openTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(true);
    }, 150);
  };

  const handleResourcesMouseLeave = () => {
    // Clear open timeout if user leaves during delay
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    // Delay closing by 200ms
    closeTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 200);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6 lg:px-8"
        style={{ 
          paddingTop: scrolled ? '10px' : '0px',
          paddingBottom: scrolled ? '10px' : '0px',
          transition: 'padding 0.4s ease' 
        }}
      >
        <div
          className="flex items-center justify-between w-full transition-all duration-500 ease-out"
          style={{
            maxWidth: '80rem',
            padding: scrolled ? (isMobile ? '16px 16px' : '14px 24px') : '20px 4px',
            borderRadius: scrolled ? '16px' : '0',
            background: scrolled ? 'rgba(255,255,255,0.7)' : 'transparent',
            backdropFilter: scrolled ? 'blur(40px) saturate(180%)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(40px) saturate(180%)' : 'none',
            border: scrolled ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.06)' : 'none',
          }}
        >
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="AgentVista" className="h-6 md:h-7" loading="lazy" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = isHome && activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[15px] font-medium transition-colors whitespace-nowrap"
                  style={{
                    color: isActive ? 'hsl(199 76% 52%)' : 'hsl(215 25% 35%)',
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            
            {/* Resources Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="text-[15px] font-medium transition-colors whitespace-nowrap flex items-center gap-1"
                style={{
                  color: 'hsl(215 25% 35%)',
                }}
              >
                Resources
                <ChevronDown size={16} className={`transition-transform ${ resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl overflow-hidden z-50"
                    style={{
                      background: 'rgba(255,255,255,0.99)',
                      backdropFilter: 'blur(40px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                      border: '1px solid rgba(200,200,200,0.3)',
                    }}
                  >
                    {resourcesLinks.map((resource) => (
                      <a
                        key={resource.label}
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-brand-blue transition-colors first:border-b last:border-t-0 border-gray-100"
                      >
                        {resource.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setDemoOpen(true)}
              className="px-6 py-2.5 text-sm font-semibold rounded-lg bg-brand-blue text-white hover:opacity-85 transition-opacity whitespace-nowrap"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground/80"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-72 bg-background border-r border-border shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
                  <img src={logo} alt="AgentVista" className="h-8" />
                </a>
                <button onClick={() => setMobileOpen(false)} className="text-foreground">
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = isHome && activeSection === sectionId;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`text-sm font-medium rounded-lg px-4 py-3 transition-colors ${
                        isActive
                          ? "text-brand-blue bg-brand-blue/5"
                          : "text-muted-foreground hover:text-brand-blue hover:bg-accent"
                      }`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  );
                })}
                
                {/* Mobile Resources Dropdown */}
                <div className="px-4 py-3">
                  <button
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                    className="text-sm font-medium rounded-lg w-full text-left text-muted-foreground hover:text-brand-blue flex items-center justify-between"
                  >
                    Resources
                    <ChevronDown size={16} className={`transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {resourcesOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {resourcesLinks.map((resource) => (
                        <a
                          key={resource.label}
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-brand-blue transition-colors"
                        >
                          {resource.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setDemoOpen(true);
                  }}
                  className="mt-3 px-4 py-3 text-sm font-semibold rounded-lg bg-brand-blue text-white text-center"
                >
                  Book a Demo
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <DemoRequestForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default Navbar;
