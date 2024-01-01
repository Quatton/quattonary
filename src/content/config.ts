import { defineCollection, z } from "astro:content";
import { pageSchema } from "src/lib/pages";
import { blogMetaSchema } from "./schema";

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
