import path from "path"
import react from "@vitejs/plugin-react"
import EnvironmentPlugin from "vite-plugin-environment";
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), EnvironmentPlugin("all"),],
  define: {
    "process.env.VITE_API_AUTHENTICATION": JSON.stringify(
        process.env.VITE_API_AUTHENTICATION
    ),
    "process.env.VITE_API_USER": JSON.stringify(
        process.env.VITE_API_USER
    ),
  },
  envDir: "./env",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
