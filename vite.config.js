import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Mengaktifkan polyfill untuk modul-modul crypto & stream
      globals: {
        Buffer: true, 
        global: true,
        process: true,
      },
      protocolImports: true,
    }),
  ],
  resolve: {
    alias: {
      // Tambahan alias untuk memastikan crypto mengarah ke polyfill
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
    },
  },
  optimizeDeps: {
    include: ['buffer', 'process'],
  },
});