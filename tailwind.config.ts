import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        home: colors.indigo,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
