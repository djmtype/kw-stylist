import { siteMeta } from "./src/site.config";
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: siteMeta.url,
  
});