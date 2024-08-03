import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  build: {
    sourcemap: true,
  },
  server: {
    proxy: {
      "/api": {
        target: "https://live.devnimble.com",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, "/api/v1");
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
