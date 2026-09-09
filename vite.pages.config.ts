import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const githubPagesRoot = fileURLToPath(new URL('./github-pages/', import.meta.url));
const base = process.env.VITE_BASE_PATH ?? '/';

export default defineConfig({
  root: githubPagesRoot,
  base,
  publicDir: fileURLToPath(new URL('./public/', import.meta.url)),
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: { alias: { '@': projectRoot } },
  build: {
    outDir: fileURLToPath(new URL('./dist-pages/', import.meta.url)),
    emptyOutDir: true,
  },
});
