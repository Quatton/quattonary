import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    mdx(),
    vue(),
    icon({
      include: {
        teenyicons: ["flag-solid"],
        logos: ["astro", "flutter"],
        noto: ["books", "party-popper"],
      },
    }),
  ],
  site: "https://quattonary.com",
  // vite: {
  //   ssr: {
  //     external: ["svgo"],
  //   },
  // },
  // output: "server",
  // adapter: vercel(),
});
