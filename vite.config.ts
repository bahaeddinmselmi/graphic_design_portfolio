import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/graphic_design_portfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
