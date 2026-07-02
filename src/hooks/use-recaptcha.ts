import { useCallback } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || import.meta.env.RECAPTCHA_SITE_KEY || "";

const loadScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!SITE_KEY) {
      console.warn("reCAPTCHA site key not found in environment variables");
      resolve();
      return;
    }

    if (window.grecaptcha) {
      window.grecaptcha.ready(() => resolve());
      return;
    }

    const existingScript = document.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]');
    if (existingScript) {
      const interval = setInterval(() => {
        if (window.grecaptcha) {
          clearInterval(interval);
          window.grecaptcha.ready(() => resolve());
        }
      }, 50);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.grecaptcha.ready(() => resolve());
    };
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA script"));
    document.head.appendChild(script);
  });
};

export const useRecaptcha = () => {
  const executeRecaptcha = useCallback(async (action: string): Promise<string | null> => {
    try {
      await loadScript();
      if (!window.grecaptcha || !SITE_KEY) {
        return null;
      }
      return await window.grecaptcha.execute(SITE_KEY, { action });
    } catch (err) {
      console.error("reCAPTCHA execution error:", err);
      return null;
    }
  }, []);

  // For backwards compatibility with the existing code expecting 'getToken'
  const getToken = useCallback(async (action: string): Promise<string | null> => {
    return executeRecaptcha(action);
  }, [executeRecaptcha]);

  return {
    executeRecaptcha,
    getToken,
    initRecaptcha: loadScript
  };
};
