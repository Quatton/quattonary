import { defineCollection, z } from "astro:content";
import { pageSchema } from "src/utils/pages";

const frontPages = defineCollection({
  type: "content",
  schema: pageSchema,
});

export const collections = {
  front: frontPages,
};
