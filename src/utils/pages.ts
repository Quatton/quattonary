export const pages = Array.from(Array(21).keys()).map((i) => ({
  id: i + 1,
  cover: null,
  slug: "notyet",
  name: (i + 1).toString(),
}));
pages[17] = {
  ...pages[17],
  cover: "logos:astro",
  slug: "astrabout",
  name: "Astrabout",
};
pages[0] = {
  ...pages[0],
  cover: "logos:vue",
  slug: "libravune",
  name: "Libravune",
};
pages[1] = {
  ...pages[0],
  cover: "noto:party-popper",
  slug: "hny",
  name: "HNY",
};
for (const idx of [4, 8, 9, 13, 14, 15, 19]) {
  pages[idx - 1] = {
    ...pages[idx - 1],
    slug: "toosmall",
    name: "",
  };
}
