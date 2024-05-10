import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        my_bg_image: "url('/images/background.png')",
        my_bg_image2: "url('/images/background2.png')",
        my_bg_image3: "url('/images/background3.png')",
        my_bg_image4: "url('/images/background4.png')",
        my_bg_dewan: "url('/images/foto-dewan.png')",
        my_bg_kiki: "url('/images/foto-kiki.jpg')",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        lobster: ["var(--font-lobster-two)"],
        euphoria: ["var(--font-euphoria_script)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
