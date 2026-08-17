import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cod.vision',
  output: 'static',
  build: {
    format: 'directory',
  },
});
