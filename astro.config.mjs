import { defineConfig } from "astro/config";
import aws from "astro-sst/lambda";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import rome from "astro-rome";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  site: 'https://baselime.github.io',
  base: '/changelog',
  adapter: aws(),
  integrations: [mdx({
    extendMarkdownConfig: true,
  }), tailwind(), rome(), vue()]
});