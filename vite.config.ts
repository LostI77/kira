import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@animations": path.resolve(__dirname, "./src/ui/animations"),
      "@components": path.resolve(__dirname, "./src/ui/components"),
      "@composites": path.resolve(__dirname, "./src/ui/composites"),
      "@layout": path.resolve(__dirname, "./src/ui/layout"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000", // Aquí va la dirección donde está corriendo FastAPI
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"), // Reescribe el path para que encaje con el de FastAPI
      },
    },
  },
  build: {
    outDir: "client",
    emptyOutDir: true,
  },
});
