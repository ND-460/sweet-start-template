import { createContext, ReactNode, useCallback, useEffect } from "react";

interface RecaptchaContextType {
  getToken: (action: string) => Promise<string | null>;
  isReady: boolean;
}

export const RecaptchaContext = createContext<RecaptchaContextType | undefined>(undefined);

interface RecaptchaProviderProps {
  children: ReactNode;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export const RecaptchaProvider = ({ children }: RecaptchaProviderProps) => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!siteKey) {
      console.warn("reCAPTCHA site key not found in environment variables");
      return;
    }

    // Inject reCAPTCHA script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [siteKey]);

  const getToken = useCallback(
    async (action: string): Promise<string | null> => {
      if (!siteKey) {
        console.error("reCAPTCHA site key not configured");
        return null;
      }

      return new Promise((resolve) => {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(siteKey, { action });
            resolve(token);
          } catch (error) {
            console.error("Failed to get reCAPTCHA token:", error);
            resolve(null);
          }
        });
      });
    },
    [siteKey]
  );

  const value: RecaptchaContextType = {
    getToken,
    isReady: Boolean(siteKey),
  };

  return (
    <RecaptchaContext.Provider value={value}>
      {children}
    </RecaptchaContext.Provider>
  );
};
