import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import rome from "astro-rome";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  base: '/changelog',
  integrations: [mdx({
    extendMarkdownConfig: true,
  }), tailwind(), rome(), vue()]
});