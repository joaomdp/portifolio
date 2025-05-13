import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.cjs",
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "curriculo.pdf") {
            return "curriculo.pdf";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  base: "/",
  assetsInclude: ["**/*.pdf"],
});
