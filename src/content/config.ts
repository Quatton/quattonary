import { defineCollection, z } from "astro:content";
import { pageSchema } from "src/utils/pages";

const frontPages = defineCollection({
  type: "content",
  schema: pageSchema,
});

const people = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    linkedin: z.string().url(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  front: frontPages,
  people,
  blog,
};
