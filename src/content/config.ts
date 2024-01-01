import { defineCollection, z } from "astro:content";
import { blogMetaSchema } from "../lib/schema";
import { pageSchema } from "../lib/pages";

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
  schema: z.object({}),
});

const blogMeta = defineCollection({
  type: "data",
  schema: blogMetaSchema,
});

export const collections = {
  front: frontPages,
  people,
  blog,
  blogMeta,
};
