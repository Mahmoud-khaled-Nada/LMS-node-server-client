import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
      "@c": "/src/components",
    },
  },
  server: {
    port: 3000,
  },
});