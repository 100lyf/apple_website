import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-d7q",
      project: "javascript-react",
    }),
  ],
  base: '/apple_website/',   
  build: {
    sourcemap: true,
  },
});
