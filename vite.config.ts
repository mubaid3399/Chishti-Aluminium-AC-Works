import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Stable vendor chunks for long-term caching
          "react-vendor": ["react", "react-dom", "wouter"],
          "framer": ["framer-motion"],
          "gsap": ["gsap"],
          "icons": ["lucide-react", "react-icons"],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
