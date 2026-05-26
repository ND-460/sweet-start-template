import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import confusedOwl from "@/assets/confused-owl.webp";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-0">
      {/* Background blobs */}
      <div className="absolute top-10 -left-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center max-w-7xl mx-auto">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center order-1 lg:order-1"
          >
            <img
              src={confusedOwl}
              alt="Confused owl - Page not found"
              className="w-full max-w-sm lg:max-w-xl h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full text-center lg:text-left order-2 lg:order-2 lg:pr-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold mb-4 text-gradient leading-tight">
              404
              <br />
              <span className="text-4xl md:text-5xl lg:text-5xl">Page Not Found</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-8">
              We couldn't find the page you were looking for.
            </p>

            {/* Action Button */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-9 py-4 rounded-lg bg-brand-blue text-white font-semibold hover:opacity-85 transition-opacity cursor-pointer select-none"
              style={{ touchAction: 'manipulation' }}
            >
              Back to Home
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
