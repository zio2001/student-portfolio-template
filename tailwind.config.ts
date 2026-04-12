import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
      },
      boxShadow: {
        soft: "0 16px 50px -30px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
