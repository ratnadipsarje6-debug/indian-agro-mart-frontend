import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Indian Agro Mart project.
// The React plugin enables JSX support and fast refresh during development.
export default defineConfig({
  plugins: [react()],
});