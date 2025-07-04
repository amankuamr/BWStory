import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: Replace 'your-repo-name' with the actual name of your GitHub repository
export default defineConfig({
  base: '/BWStories/',
  plugins: [react()],
});
