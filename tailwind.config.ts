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
        brand: {
          500: "#4f46e5",
          600: "#4338ca",
        },
        fontFamily: { vazir: ["Vazirmatn", "sans-serif"] },
      },
    },
  },
  plugins: [],
};

export default config;
