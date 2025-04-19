import {serwist} from '@serwist/vite';
import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import {TanStackRouterVite} from '@tanstack/router-plugin/vite';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    tsconfigPaths(),
    react({
      devTarget: 'es2020',
    }),
    serwist({
      swSrc: './src/services/service-worker/sw.ts',
      swDest: 'sw.js',
      globDirectory: 'dist',
      injectionPoint: 'self.__SW_MANIFEST',
      rollupFormat: 'iife',
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        // Creating a separate chunk for some dependencies
        manualChunks(id: string) {
          if (id.includes('i18next') || id.includes('react-i18next')) {
            return '@i18next';
          }
          if (id.includes('@tanstack/react-router')) {
            return '@react-router';
          }
          if (id.includes('@tanstack/react-virtual')) {
            return '@react-virtual';
          }
          if (id.includes('@tanstack/react-query')) {
            return '@react-query';
          }
        },
      },
    },
    chunkSizeWarningLimit: 100,
  },
  esbuild: {
    legalComments: 'none',
  },
  test: {
    environment: 'jsdom',
  },
});
