import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    target: 'es2020',
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@db-ux-inner-source": path.resolve("./node_modules/@db-ux-inner-source"),
    },
  },
});
