const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      ...require("tailwindcss/defaultTheme").fontFamily,
      serif: [
        "Merriweather",
        ...require("tailwindcss/defaultTheme").fontFamily.serif,
      ],
      sans: ["Lato", ...require("tailwindcss/defaultTheme").fontFamily.sans],
    },
    extend: {
      colors: {
        sea: {
          DEFAULT: "#65DEF1",
          light: "#A8DCD1",
        },
        sand: "#DCE2C8",
        sun: {
          DEFAULT: "#F96900",
          light: "#F17F29",
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
