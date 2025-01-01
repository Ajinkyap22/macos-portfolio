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
        alert: "#f6f6f6f2",
        popover: "#E5E5E5",
        close: "#FF5F57",
        minimize: "#FEBC2E",
        maximize: "#28C840",
        background: "#fff",
        sidebar: "#e6e6e6",
        tooltip: "#c5c5c5",
        textPrimary: "#222",
        dock: "#f6f6f65c",
        "dock-dark": "#4a4a4a63",
        selected: "#ffffff33",
        ghost: "#D8D8D8",
        stroke: "#00000033",
        tertiary: "#00000040",
        focused: "#2962D9",
        toolbar: "#f1f2f3cc",
        active: "#63626212",
        secondary: "#000000a6",
      },
      boxShadow: {
        "all-around":
          "0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.12)",
        "all-around-primary":
          "0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.12), 0 0 0 0.5px #007AFF",
        "all-around-top": "0 1px 2px 0 rgba(0, 0, 0, 0.12)",
      },
      width: {
        4.5: "18px",
      },
      height: {
        4.5: "18px",
      },
      padding: {
        4.5: "18px",
      },
      fontSize: {
        regular: ["13px", "16px"],
        mini: ["11px", "14px"],
        emphasized: ["15px", "20px"],
      },
      gap: {
        4.5: "18px",
      },
      borderRadius: {
        regular: "10px",
      },
      fontFamily: {
        menlo: ["var(--font-mono)"],
      },
    },
  },
} satisfies Config;
