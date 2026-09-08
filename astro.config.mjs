// @ts-check
import { defineConfig } from 'astro/config';

// If you move the site to a project repository (e.g. github.com/<user>/website),
// set `base: '/website'` here as well and rebuild.
export default defineConfig({
  site: 'https://mdnaimulislam.github.io',
  base: '/',
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
