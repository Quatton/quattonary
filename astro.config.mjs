import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx(), vue()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  output: "server",
  adapter: vercel(),
});
