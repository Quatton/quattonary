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
  schema: z.object({}),
});

const blogMeta = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string().optional(),
    color: z.string().optional(),
    maxPages: z.number(),
  }),
});

export const collections = {
  front: frontPages,
  people,
  blog,
  blogMeta,
};
