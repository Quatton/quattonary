import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), svelte(), mdx(), vue(), icon()],
  site: "https://quattonary.com",
  output: "server",
  adapter: vercel(),
});
