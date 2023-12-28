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
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        ".file-input-button": {
          "::hover": {
            "background-color": "#1aa3",
          },
          "::file-selector-button": {
            "background-color": "#1aaca2",
            color: "#ffffff",
            padding: "10px",
            "border-radius": "12px",
            border: "none",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
