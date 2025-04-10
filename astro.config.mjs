import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  site: 'https://epaepacluj.github.io',
  base: '/qrmenu-astro'
});
