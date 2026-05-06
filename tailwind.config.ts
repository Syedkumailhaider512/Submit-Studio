import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#07070b",
          soft: "#0b0b12",
          card: "#0d0d15",
          border: "#1a1a26",
          hairline: "#22222f"
        },
        accent: {
          DEFAULT: "#a78bfa",
          hover: "#c4b5fd",
          glow: "#7c5cff",
          blue: "#6e8bff"
        },
        muted: {
          DEFAULT: "#8b8ba3",
          soft: "#5b5b73"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.04em"
      },
      boxShadow: {
        hairline: "0 0 0 1px rgba(255,255,255,0.04)",
        glow: "0 0 0 1px rgba(167,139,250,0.25), 0 30px 80px -30px rgba(124,92,255,0.4)"
      },
      backgroundImage: {
        "grad-accent":
          "linear-gradient(135deg, #a78bfa 0%, #6e8bff 100%)",
        "grad-text":
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 100%)",
        "grad-hero":
          "radial-gradient(50% 40% at 50% 0%, rgba(124,92,255,0.18) 0%, rgba(7,7,11,0) 70%)",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
