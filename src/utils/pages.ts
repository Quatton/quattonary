import { z } from "astro/zod";

export const pageSchema = z.object({
  id: z.number(),
  ids: z.array(z.number()).optional(),
  cover: z.string().optional(),
  path: z.string(),
  name: z.string(),
  color: z.string().optional(),
  status: z.enum(["discontinued", "active"]).optional(),
  github: z.string().optional(),
  month: z.string().optional(),
});

export const pages: z.infer<typeof pageSchema>[] = Array.from(
  { length: 21 },
  (_, i) => ({
    id: i + 1,
    path: "notyet",
    name: (i + 1).toString(),
  })
);
