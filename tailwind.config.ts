import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B5CF6",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        accent: {
          DEFAULT: "#EC4899",
          pink: "#EC4899",
          green: "#10B981",
          purple: "#8B5CF6",
          neon: "#22D3EE",
        },
        background: {
          DEFAULT: "#0A0A0F",
          dark: "#050507",
          card: "#111118",
          elevated: "#1A1A24",
        },
        foreground: {
          DEFAULT: "#FFFFFF",
          muted: "#A1A1AA",
          subtle: "#71717A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0A0A0F 0%, #1A1A24 50%, #0A0A0F 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)",
        "glow-purple": "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
        "glow-green": "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
        "glow-pink": "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
