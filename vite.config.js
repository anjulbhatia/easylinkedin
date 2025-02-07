import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from '@crxjs/vite-plugin'
import manifest from './public/manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: {
    port: 3000,
  },
  css: {
    postcss: './postcss.config.js',
  },
});