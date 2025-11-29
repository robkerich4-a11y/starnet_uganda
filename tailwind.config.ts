import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#15803d",
        input: "#22c55e",
        ring: "#16a34a",
        background: "#f0fdf4",
        foreground: "#052e16",

        primary: {
          DEFAULT: "#15803d", // deep green
          foreground: "#f0fdf4",
        },
        secondary: {
          DEFAULT: "#22c55e", // light green
          foreground: "#ecfdf5",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#dcfce7",
          foreground: "#065f46",
        },
        accent: {
          DEFAULT: "#4ade80",
          foreground: "#064e3b",
        },
        popover: {
          DEFAULT: "#ecfdf5",
          foreground: "#052e16",
        },
        card: {
          DEFAULT: "#f0fdf4",
          foreground: "#052e16",
        },
        sidebar: {
          DEFAULT: "#064e3b",
          foreground: "#f0fdf4",
          primary: "#15803d",
          "primary-foreground": "#f0fdf4",
          accent: "#22c55e",
          "accent-foreground": "#ffffff",
          border: "#0d9488",
          ring: "#16a34a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
