import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rome from "astro-rome";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  base: '/changelog',
  integrations: [mdx({
    extendMarkdownConfig: true,
  }), rome(), vue()],
});