import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from the specified directory
      allow: ['..', './node_modules/slick-carousel/slick/fonts'],
    },
  },
});
