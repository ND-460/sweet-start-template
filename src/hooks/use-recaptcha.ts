import { useContext } from "react";
import { RecaptchaContext } from "@/components/recaptcha/RecaptchaProvider";

export const useRecaptcha = () => {
  const context = useContext(RecaptchaContext);
  
  if (!context) {
    throw new Error("useRecaptcha must be used within RecaptchaProvider");
  }
  
  return context;
};
