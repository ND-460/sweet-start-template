import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const cacheControlPlugin = (): Plugin => ({
  name: "cache-control-plugin",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url?.split("?")[0] || "";
      if (url.match(/\.(woff2?|ttf|webp|png|jpg|jpeg|svg|gif|ico)$/)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url?.split("?")[0] || "";
      if (url.match(/\.(woff2?|ttf|webp|png|jpg|jpeg|svg|gif|ico)$/)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), cacheControlPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — changes rarely, cache long-term
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],
          // Routing — separate from app code for better caching
          "vendor-router": ["react-router-dom"],
          // Animation library — largest vendor dep, isolate for caching
          "vendor-motion": ["framer-motion"],
          // Icon library
          "vendor-icons": ["lucide-react"],
        },
      },
    },
  },
});
