import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use VITE_BASE_PATH when provided; default to root ('/') which is typical on Vercel
  base: process.env.VITE_BASE_PATH ?? '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
