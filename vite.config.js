import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: [join(__dirname, './setupTests.js')],
    environment: 'jsdom',
    globals: true,
  }
})
