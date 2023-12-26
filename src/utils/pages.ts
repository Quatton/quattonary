import { z } from "astro/zod";

export const pageSchema = z.object({
  id: z.number(),
  cover: z.string().optional(),
  path: z.string(),
  name: z.string(),
  color: z.string().optional(),
});

export const pages: z.infer<typeof pageSchema>[] = Array.from(
  { length: 21 },
  (_, i) => ({
    id: i + 1,
    path: "notyet",
    name: (i + 1).toString(),
  })
);
for (const idx of [4, 8, 9, 13, 14, 15, 19]) {
  pages[idx - 1] = {
    ...pages[idx - 1],
    path: "toosmall",
  };
}
