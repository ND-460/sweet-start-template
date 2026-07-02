import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CanonicalManager = () => {
  const location = useLocation();

  useEffect(() => {
    const canonicalLink = document.getElementById("canonical-link") as HTMLLinkElement | null;
    if (canonicalLink) {
      let baseDomain = "https://agentsvista.com";
      try {
        // Dynamically extract base domain from current canonicalLink href in index.html
        const currentUrl = new URL(canonicalLink.href);
        baseDomain = currentUrl.origin;
      } catch (e) {
        console.error("[CanonicalManager] Error parsing base domain from canonical link:", e);
      }

      let pathname = location.pathname;

      // Clean trailing slashes (except for the root route "/")
      if (pathname !== "/" && pathname.endsWith("/")) {
        pathname = pathname.slice(0, -1);
      }

      const finalCanonicalUrl = `${baseDomain}${pathname}`;
      canonicalLink.setAttribute("href", finalCanonicalUrl);
      console.log(`[CanonicalManager] Updated canonical link to: ${finalCanonicalUrl}`);
    } else {
      console.warn("[CanonicalManager] #canonical-link element not found in document head.");
    }
  }, [location.pathname]);

  return null;
};

export default CanonicalManager;
