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
        border: "#6b21a8",
        input: "#9333ea",
        ring: "#7e22ce",
        background: "#faf5ff",
        foreground: "#3b0764",

        primary: {
          DEFAULT: "#6b21a8", // deep purple
          foreground: "#faf5ff",
        },
        secondary: {
          DEFAULT: "#9333ea", // medium purple
          foreground: "#f5f3ff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f3e8ff",
          foreground: "#6b21a8",
        },
        accent: {
          DEFAULT: "#c084fc",
          foreground: "#4c1d95",
        },
        popover: {
          DEFAULT: "#f5f3ff",
          foreground: "#3b0764",
        },
        card: {
          DEFAULT: "#faf5ff",
          foreground: "#3b0764",
        },
        sidebar: {
          DEFAULT: "#4c1d95",
          foreground: "#faf5ff",
          primary: "#6b21a8",
          "primary-foreground": "#faf5ff",
          accent: "#9333ea",
          "accent-foreground": "#ffffff",
          border: "#7e22ce",
          ring: "#9333ea",
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
