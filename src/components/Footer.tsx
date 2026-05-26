import logo from "@/assets/agent-vista-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Globe, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact Us", href: "#contact" },
];

const resourcesLink = "https://resources.surveyvista.com/knowledge-base/agentvista/agentvista-installation-and-setup-guide";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    
    if (!isHome) {
      // If not on home page, use window.location to navigate with hash
      window.location.href = "/" + href;
      return;
    }
    
    // On home page, scroll to section smoothly
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-6xl px-4 lg:px-8 py-10 md:py-14">
        {/* Main Footer Content - Flexbox with wrap for side-by-side layout on mobile */}
        <div className="flex flex-wrap justify-between lg:flex-nowrap lg:justify-between gap-8 md:gap-12 lg:gap-0">
          {/* Brand Column - full width, stays on top */}
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="cursor-pointer hover:opacity-80 transition-opacity mb-4 flex items-center"
              aria-label="Go to home"
            >
              <img src={logo} alt="AgentVista" className="h-9" loading="lazy" />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The AI Copilot for Surveys, Forms & Assessments - Natively Powered by Salesforce Agentforce.
            </p>
          </div>

          {/* Quick Links Column - 30% width on mobile, 15% on lg */}
          <div className="w-[30%] lg:w-[15%] flex-shrink-0">
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="relative text-sm text-muted-foreground hover:text-brand-blue transition-colors group inline-block"
                  >
                    {l.label}
                    <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resourcesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm text-muted-foreground hover:text-brand-blue transition-colors group inline-block"
                >
                  Resources
                  <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column - 40% width on mobile, 18% on lg */}
          <div className="w-[55%] md:w-[50%] lg:w-[18%] flex-shrink-0">
            <h4 className="font-bold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Globe size={18} className="text-brand-blue flex-shrink-0" />
                <a href="https://agentsvista.com" target="_blank" rel="noopener noreferrer" className="relative hover:text-brand-blue transition-colors group">
                  www.agentsvista.com
                  <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-brand-blue flex-shrink-0" />
                <a href="mailto:info@ardira.com" className="relative hover:text-brand-blue transition-colors group">
                  info@ardira.com
                  <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-brand-blue flex-shrink-0" />
                <a href="tel:16697776838" className="relative hover:text-brand-blue transition-colors group">
                  1.669.777.6838
                  <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 py-3.5">
          {/* Mobile layout: Links on top, copyright below */}
          <div className="md:hidden flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-4">
              <Link to="/terms-of-use" className="relative text-sm text-muted-foreground hover:text-brand-blue transition-colors group">
                Terms of Use
                <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
              </Link>
              <span className="text-sm text-muted-foreground">|</span>
              <Link to="/privacy-policy" className="relative text-sm text-muted-foreground hover:text-brand-blue transition-colors group">
                Privacy Policy
                <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ardira Corporation. All Rights Reserved.
            </p>
          </div>
          
          {/* Desktop layout: Copyright on left, links on right */}
          <div className="hidden md:flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ardira Corporation. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/terms-of-use" className="relative text-sm text-muted-foreground hover:text-brand-blue transition-colors group">
                Terms of Use
                <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
              </Link>
              <Link to="/privacy-policy" className="relative text-sm text-muted-foreground hover:text-brand-blue transition-colors group">
                Privacy Policy
                <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
