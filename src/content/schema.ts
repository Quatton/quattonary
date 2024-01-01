import { z } from "astro:content";

export const blogMetaSchema = z.object({
  title: z.string(),
  date: z.date(),
  cover: z.string().optional(),
  color: z.string().optional(),
  maxPages: z.number(),
});

export type BlogMeta = z.infer<typeof blogMetaSchema>;
