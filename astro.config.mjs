import { siteMeta } from "./src/site.config";
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: siteMeta.url,

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  integrations: [sitemap()]
});