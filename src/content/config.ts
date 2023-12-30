import { defineCollection, z } from "astro:content";
import { pageSchema } from "src/lib/pages";

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

export const blogMetaSchema = z.object({
  title: z.string(),
  date: z.date(),
  cover: z.string().optional(),
  color: z.string().optional(),
  maxPages: z.number(),
});

export type BlogMeta = z.infer<typeof blogMetaSchema>;

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
