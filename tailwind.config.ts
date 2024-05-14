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

        my_bg_image: "url('/image/background.webp')",
        my_bg_image2: "url('/image/background2.webp')",
        my_bg_image3: "url('/image/background3.webp')",
        my_bg_image4: "url('/image/background4.webp')",
        my_bg_dewan: "url('/image/foto-dewan.webp')",
        my_bg_kiki: "url('/image/foto-kiki.webp')",
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
