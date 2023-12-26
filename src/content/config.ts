import { defineCollection } from "astro:content";

const frontPages = defineCollection({
  type: "content",
});

export const collections = {
  front: frontPages,
};
