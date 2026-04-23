import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#24304A",
        surface: "#2F3A50",
        border: "#3A4560",
        "text-primary": "#FFFFFF",
        "text-secondary": "#E5E5E5",
        "text-muted": "#B0B8C4",
        "accent-blue": "#4F6EB6",
        "accent-orange": "#FF7D14",
        profit: "#00C853",
        loss: "#FF3D3D"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;

