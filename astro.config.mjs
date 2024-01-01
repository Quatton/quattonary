import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
// import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    solidJs({
      include: ["**/solid/*"],
    }),
  ],
  site: "https://quattonary.com",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  output: "server",
  adapter: vercel({
    webAnalytics: true,
    imageService: true,
  }),
});
