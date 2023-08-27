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
        dark: "#000",
        prime: "#FFB612",
        grey98: "#989898",
        grey33: "#333333",
        greyBC: "#BCBCBC",
        white: "#FFF",
      },
      screens: {
        smDesktop: { max: "1024px" }, // small desktop
        tablet: { max: "768px" },
        mobile: { max: "480px" },
        smMobile: { max: "320px" },
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
