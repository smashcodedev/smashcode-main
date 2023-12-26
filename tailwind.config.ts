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
          "::file-selector-button": {
            "background-color": "#1AACA2",
            color: "#ffffff",
            padding: "10px",
            "border-radius": "5px",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
