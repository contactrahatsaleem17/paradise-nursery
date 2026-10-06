import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace "paradise-nursery" with your exact GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/paradise-nursery/',
});
