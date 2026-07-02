import { useEffect } from "react";

export const RobotsManager = () => {
  useEffect(() => {
    const env = import.meta.env.VITE_APP_ENV;
    const isProduction = env === "production";

    // Find any existing robots tag that is NOT managed by react-helmet-async (no data-rh attribute)
    const staticRobots = document.querySelector('meta[name="robots"]:not([data-rh])');

    if (!isProduction) {
      if (staticRobots) {
        staticRobots.setAttribute("content", "noindex, nofollow, noarchive");
      } else {
        const newRobots = document.createElement("meta");
        newRobots.setAttribute("name", "robots");
        newRobots.setAttribute("content", "noindex, nofollow, noarchive");
        document.head.appendChild(newRobots);
      }
      console.log(`[RobotsManager] Non-production environment detected (${env || "undefined"}). Injected noindex, nofollow, noarchive.`);
    } else {
      // In production, remove the static/default robots tag so search engines can index
      if (staticRobots) {
        staticRobots.remove();
        console.log("[RobotsManager] Production environment detected. Removed static robots meta tag to allow indexing.");
      } else {
        console.log("[RobotsManager] Production environment detected. No static robots tag to remove.");
      }
    }
  }, []);

  return null;
};

export default RobotsManager;
