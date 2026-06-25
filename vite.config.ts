import {serwist} from '@serwist/vite';
import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import {tanstackRouter} from '@tanstack/router-plugin/vite';
import type {Plugin} from 'vite';

function preloadEntryChunk(): Plugin {
  return {
    name: 'preload-entry-chunk',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, context) {
        const bundle = context.bundle;
        if (!bundle) {
          return html;
        }
        const entryChunk = Object.values(bundle).find(
          chunk => chunk.type === 'chunk' && chunk.isEntry
        ) as {fileName: string} | undefined;
        if (!entryChunk) {
          return html;
        }
        const preloadTag = `<link rel="modulepreload" crossorigin href="/${entryChunk.fileName}" />`;
        return html.replace(
          /<head[^>]*>/i,
          match => `${match}\n    ${preloadTag}`
        );
      },
    },
  };
}

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    tanstackRouter({target: 'react'}),
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
    preloadEntryChunk(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
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
        // Split large dependencies into separate chunks to keep the entry chunk small
        manualChunks(id: string) {
          // i18n
          if (
            id.includes('node_modules/i18next') ||
            id.includes('node_modules/react-i18next')
          ) {
            return '@i18next';
          }
          // React router
          if (
            id.includes('node_modules/@tanstack/react-router') ||
            id.includes('node_modules/@tanstack/router-core')
          ) {
            return '@react-router';
          }
          // Virtualization
          if (id.includes('node_modules/@tanstack/react-virtual')) {
            return '@react-virtual';
          }
          // Data fetching
          if (
            id.includes('node_modules/@tanstack/react-query') ||
            id.includes('node_modules/@tanstack/query-core')
          ) {
            return '@react-query';
          }
          // React DOM + scheduler
          if (
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/scheduler')
          ) {
            return '@react-dom';
          }
          // React core
          if (id.includes('node_modules/react/')) {
            return '@react';
          }
          // Styling
          if (
            id.includes('node_modules/styled-components') ||
            id.includes('node_modules/@emotion') ||
            id.includes('node_modules/react-is') ||
            id.includes('node_modules/shallowequal') ||
            id.includes('node_modules/tslib')
          ) {
            return '@styled';
          }
          // HTTP client
          if (id.includes('node_modules/axios')) {
            return '@axios';
          }
          // Remaining third-party code
          if (id.includes('node_modules')) {
            return '@vendor';
          }
        },
        comments: {
          legal: false,
        },
      },
    },
    chunkSizeWarningLimit: 250,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.types.*',
        'src/**/*.type.*',
        'src/**/*.d.ts',
        'src/main.tsx',
        'src/pagesTree.gen.ts',
        'src/vite-env.d.ts',
        'src/global.d.ts',
        'src/**/*.styled.*',
        'src/services/service-worker/**',
        'src/pages/**',
        'src/test-setup.ts',
      ],
    },
  },
});
