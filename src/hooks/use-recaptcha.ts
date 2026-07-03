import { useState, useCallback, useRef } from 'react';

// Declare grecaptcha on window type to avoid TypeScript errors
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (elementId: string, options: unknown) => void;
      reset: () => void;
      getResponse: () => string;
    };
  }
}

// Get reCAPTCHA Site Key from environment variable (public key, safe to expose)
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LdpZq4sAAAAACc87ym0oRUjKpiJ5nIsi_LWPxTh";

// Module-level guards so multiple components/instances never race to
// inject the script twice or double-count the same load.
let scriptInjected = false;
let readyPromise: Promise<void> | null = null;

// Wraps grecaptcha's own ready() queue in a Promise. Per Google's docs,
// grecaptcha.execute (and other methods) must not be called until
// ready() has fired — calling too early is the classic source of
// "X is not a function" errors from the library's internals.
function waitForRecaptchaReady(): Promise<void> {
  if (readyPromise) return readyPromise;

  readyPromise = new Promise((resolve, reject) => {
    const start = Date.now();
    const TIMEOUT_MS = 15000;

    const poll = () => {
      if (window.grecaptcha && typeof window.grecaptcha.ready === "function") {
        try {
          window.grecaptcha.ready(() => resolve());
        } catch (e) {
          reject(e);
        }
        return;
      }
      if (Date.now() - start > TIMEOUT_MS) {
        reject(new Error("reCAPTCHA script did not become ready in time"));
        return;
      }
      window.setTimeout(poll, 100);
    };

    poll();
  });

  return readyPromise;
}

export const useRecaptcha = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasStartedRef = useRef(false);

  const loadRecaptcha = useCallback(() => {
    // Script already on the page from a previous mount/instance — just
    // wait for it to become ready instead of re-injecting.
    if (scriptInjected || document.querySelector(`script[src*="recaptcha/api.js"]`)) {
      if (!hasStartedRef.current) {
        hasStartedRef.current = true;
        waitForRecaptchaReady()
          .then(() => setIsLoaded(true))
          .catch((e) => console.warn("reCAPTCHA readiness check failed", e));
      }
      return;
    }

    scriptInjected = true;
    hasStartedRef.current = true;

    try {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        waitForRecaptchaReady()
          .then(() => setIsLoaded(true))
          .catch((e) => console.warn("reCAPTCHA readiness check failed", e));
      };

      script.onerror = () => {
        console.warn("reCAPTCHA script failed to load (network/ad-blocker?)");
        // Allow a future retry instead of leaving the guard stuck.
        scriptInjected = false;
        hasStartedRef.current = false;
        readyPromise = null;
        setIsLoaded(false);
      };

      document.body.appendChild(script);
    } catch (e) {
      console.warn("Unable to inject reCAPTCHA script", e);
      scriptInjected = false;
      hasStartedRef.current = false;
    }
  }, []);

  const executeRecaptcha = async (action: string): Promise<string | null> => {
    try {
      // Make sure grecaptcha has actually finished initializing before
      // touching it — avoids calling into not-yet-defined internals.
      await waitForRecaptchaReady();
    } catch (e) {
      console.warn("reCAPTCHA is not available", e);
      return null;
    }

    if (!window.grecaptcha || typeof window.grecaptcha.execute !== "function") {
      console.warn("reCAPTCHA has not loaded yet");
      return null;
    }

    try {
      return await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
    } catch (e) {
      console.error("reCAPTCHA execution failed", e);
      return null;
    }
  };

  return { loadRecaptcha, executeRecaptcha, isLoaded };
};