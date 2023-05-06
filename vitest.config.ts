/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true
  },
  test: {
    environment: 'node',
    globals: true,
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['html', 'lcov']
    }
  },
})
