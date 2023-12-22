import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray": "#1F1F1F",
        "secondary-gray": "#141414",
        "primary-green": "#1AACA2",
        "light-gray": "#757575",
      },
      transitionProperty: {
        top: "top",
      },
    },
  },
};
export default config;
