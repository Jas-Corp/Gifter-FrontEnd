import path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/utils/variables";`,
      },
    },
  },
  resolve: {
    alias: {
      "@/api": `${path.resolve(__dirname, "src/api")}`,
      "@/features": `${path.resolve(__dirname, "src/features")}`,
      "@/ui": `${path.resolve(__dirname, "src/components/ui")}`,
      "@/form": `${path.resolve(__dirname, "src/components/form")}`,
      "@/utils": `${path.resolve(__dirname, "src/utils")}`,
      "@/hooks": `${path.resolve(__dirname, "src/hooks")}`,
    },
  },
});
