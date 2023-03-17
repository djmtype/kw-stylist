import { siteMeta } from "./src/site.config";
import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: siteMeta.url,
  // experimental: {
  // 	assets: true
  //  },
  // image: {
  //   service: "astro/assets/services/sharp"
  // },
  integrations: [image({
		serviceEntryPoint: '@astrojs/image/sharp'
	})]
});