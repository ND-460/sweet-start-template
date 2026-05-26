import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRecaptcha } from "@/hooks/use-recaptcha";

// Zod validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}/,
      "Please enter a valid phone number"
    ),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useRecaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur", // Validate on blur event
  });

  // ---------- DEPLOYMENT CONFIGURATIONS ----------
  // Uncomment the line below for Original Domain (PHP deployment)
  // const CONTACT_API_URL = "http://localhost:8000/contact.php"; 

  // Uncomment the line below for Vercel deployment (Nodemailer)
  const CONTACT_API_URL = "/api/contact";
  // ------------------------------------------------

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError("");
    setIsLoading(true);

    try {
      // Get reCAPTCHA token
      let token = await getToken("contact_form");
      
      if (!token) {
        console.warn("reCAPTCHA token not available (likely missing .env key). Proceeding with placeholder token for testing purposes.");
        token = "dev_placeholder_token"; // Allowing local testing to proceed without a real ReCAPTCHA key
      }

      // Send form data to backend
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message || "",
          pageUrl: window.location.href,
          recaptchaToken: token,
        }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        setSubmitted(true);
        reset();
        setIsLoading(false);
      } else {
        const errorMessage = responseData.message || "Something went wrong. Please try again.";
        console.error("Form submission failed:", errorMessage);
        setSubmitError(errorMessage);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("Unable to send your message. Please try again later. Check browser console for details.");
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-16 md:pt-24 pb-9 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
        
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contact Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or want to learn more? Reach out and we'll get back to you promptly.
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="mx-auto grid md:grid-cols-[32%_55%] lg:grid-cols-[40%_56%] gap-3 md:gap-4 lg:gap-12 mb-8 max-w-6xl px-0 auto-rows-max md:place-content-center lg:place-content-start">
          {/* Left: Quick Contact - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 w-full lg:sticky lg:top-24 h-fit"
          >
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">Quick Contact</h3>
                <p className="text-muted-foreground text-sm mb-6">Get in touch with a representative to see a demo or simply learn more about the product.</p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4 w-full">
                {/* Address */}
                <a href="https://www.google.com/maps?cid=1981104171238256651" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 rounded-xl border border-brand-blue/40 bg-white/50 hover:bg-white/80 transition-all duration-300 cursor-pointer w-full min-w-0 shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm">Address</p>
                    <p className="text-sm font-medium text-muted-foreground leading-relaxed break-words mt-1">
                      <span className="hidden md:inline">2040 Marlin Ave, Santa Clara, CA 95050<br/>United States</span>
                      <span className="md:hidden">2040 Marlin Ave, Santa Clara, CA <br/>95050, United States</span>
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:16697776838" className="flex items-center gap-4 p-5 rounded-xl border border-brand-blue/40 bg-white/50 hover:bg-white/80 transition-all duration-300 cursor-pointer w-full min-w-0 shadow-sm hover:shadow-md hover:border-brand-blue/80 group">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors duration-300">
                    <Phone size={20} className="group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0 py-1">
                    <p className="font-semibold text-foreground text-sm">Phone</p>
                    <p className="text-sm font-medium text-muted-foreground mt-1 group-hover:text-brand-blue transition-colors duration-300 relative inline-block">
                      1.669.777.6838
                      <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:info@ardira.com" className="flex items-center gap-4 p-5 rounded-xl border border-brand-blue/40 bg-white/50 hover:bg-white/80 transition-all duration-300 cursor-pointer w-full min-w-0 shadow-sm hover:shadow-md hover:border-brand-blue/60 group">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors duration-300">
                    <Mail size={20} className="group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0 py-1">
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <p className="text-sm font-medium text-muted-foreground mt-1 group-hover:text-brand-blue transition-colors duration-300 relative inline-block">
                      info@ardira.com
                      <span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>
                    </p>
                  </div>
                </a>
              </div>

              {/* Support Note */}
              <div className="flex items-start gap-4 p-5 rounded-xl border border-secondary/40 bg-secondary/5 w-full min-w-0 shadow-sm group cursor-pointer hover:bg-secondary/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 text-lg font-bold">?</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">
                    <span className="hidden md:inline"><span className="font-semibold text-foreground">For customer support,</span> email us directly at<br /></span>
                    <span className="md:hidden"><span className="font-semibold text-foreground">For customer support, email us</span> <br /> directly at </span>
                    <a href="mailto:support@ardira.com" className="relative font-medium inline-block" style={{ color: '#39B44A' }}>
                      {" "}support@ardira.com
                      <span 
                        className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" 
                        style={{ backgroundColor: '#39B44A' }}
                      ></span>
                    </a>
                  </p>
                </div>
              </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full min-w-0 mt-6 md:mt-0"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center justify-center py-14 md:py-20 bg-card rounded-xl border border-secondary/40 shadow-lg"
              >
                {/* Animated checkmark circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
                  className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6 border-2 border-secondary/30"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                  >
                    <CheckCircle size={40} className="text-secondary" />
                  </motion.div>
                </motion.div>

                {/* Success heading */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="font-bold text-foreground text-xl md:text-2xl mb-2"
                >
                  Message Sent Successfully!
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="text-muted-foreground text-sm md:text-base text-center max-w-md px-6 mb-2"
                >
                  Thank you for reaching out! We've received your message and a confirmation has been sent to your email.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.3 }}
                  className="text-muted-foreground text-xs text-center max-w-sm px-6 mb-8"
                >
                  Our team will get back to you within 24 hours.
                </motion.p>

                {/* Send another message button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.3 }}
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    reset();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-brand-blue/30 text-brand-blue font-semibold text-sm hover:bg-brand-blue/5 transition-colors"
                >
                  Send Another Message
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ boxSizing: 'border-box' }} className="bg-card rounded-xl border border-border p-4 md:p-8 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Fill out the form and we'll be in touch shortly!</h3>
                  <p className="text-xs text-muted-foreground">Note: fields marked with <span className="text-red-500">(*)</span> are mandatory</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name<span className="text-red-500">*</span></label>
                  <input 
                    type="text"
                    disabled={isLoading}
                    placeholder="Enter your name"
                    {...register("name")}
                    className={`w-full px-4 py-2.5 rounded-md border transition-colors text-sm focus:outline-none focus:ring-2 disabled:opacity-50 ${
                      errors.name
                        ? "border-red-500 bg-red-50 focus:ring-red-500/30 focus:border-red-500"
                        : "border-border bg-background focus:ring-brand-blue/30 focus:border-brand-blue"
                    } text-foreground`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email<span className="text-red-500">*</span></label>
                  <input 
                    type="email"
                    disabled={isLoading}
                    placeholder="Enter your email"
                    {...register("email")}
                    className={`w-full px-4 py-2.5 rounded-md border transition-colors text-sm focus:outline-none focus:ring-2 disabled:opacity-50 ${
                      errors.email
                        ? "border-red-500 bg-red-50 focus:ring-red-500/30 focus:border-red-500"
                        : "border-border bg-background focus:ring-brand-blue/30 focus:border-brand-blue"
                    } text-foreground`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone<span className="text-red-500">*</span></label>
                  <input 
                    type="tel"
                    disabled={isLoading}
                    placeholder="Enter your phone number"
                    {...register("phone")}
                    className={`w-full px-4 py-2.5 rounded-md border transition-colors text-sm focus:outline-none focus:ring-2 disabled:opacity-50 ${
                      errors.phone
                        ? "border-red-500 bg-red-50 focus:ring-red-500/30 focus:border-red-500"
                        : "border-border bg-background focus:ring-brand-blue/30 focus:border-brand-blue"
                    } text-foreground`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea 
                    rows={5}
                    disabled={isLoading}
                    placeholder="Lets talk! Tell us about yourself."
                    {...register("message")}
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none disabled:opacity-50" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full py-3 rounded-md bg-brand-blue text-white font-semibold text-sm hover:opacity-85 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>

                {submitError && (
                  <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-md px-4 py-2.5">{submitError}</p>
                )}

                <p className="text-xs text-muted-foreground leading-relaxed">
                  We're committed to your privacy. AgentVista uses the information you provide us to contact you about relevant content, products and services. You may unsubscribe from these communications at any time. For information, check out our <Link to="/privacy-policy" className="relative text-brand-blue font-medium hover:text-brand-blue transition-colors group inline-block">Privacy Policy<span className="absolute bottom-0 h-px transition-all duration-300 w-0 right-0 group-hover:left-0 group-hover:right-auto group-hover:w-full" style={{ backgroundColor: 'hsl(199 76% 52%)' }}></span>.</Link>
                </p>

                {/* Map at bottom of form */}
                <div className="mt-6 rounded-xl overflow-hidden h-[250px] border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.0408705886853!2d-121.96206399999998!3d37.3652098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca3b29bd16bd%3A0x1b7e4bbf55b3700b!2s2040%20Martin%20Ave%2C%20Santa%20Clara%2C%20CA%2095050%2C%20USA!5e0!3m2!1sen!2sin!4v1775555880200!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
