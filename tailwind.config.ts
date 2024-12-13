import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
        alert: "#f6f6f6",
        popover: "#f1f1f1",
        close: "#FF5F57",
        minimize: "#FEBC2E",
        maximize: "#28C840",
        background: "#fff",
        sidebar: "#e6e6e6",
        textPrimary: "#222",
      },
      boxShadow: {
        "all-around":
          "0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.12)",
        "all-around-primary":
          "0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.12), 0 0 0 0.5px #007AFF",
      },
    },
  },
} satisfies Config;
