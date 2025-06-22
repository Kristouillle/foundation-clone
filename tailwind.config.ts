import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xs": "375px",
        "xs": "475px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
      fontFamily: {
        angelas: ['AngelasHandwriting', 'sans-serif'],
        handprinting: ['HandPrinting', 'sans-serif'],
      },
      backgroundImage: {
        'highlight-blue': "linear-gradient(90deg, rgba(2, 189, 178, 1) 0%, rgba(2, 189, 178, 1) 4%, rgba(0, 255, 240, 1) 13%, rgba(0, 255, 240, 1) 92%, rgba(0, 255, 240, 0.23) 100%)",
        'highlight-green': "linear-gradient(90deg, rgba(2, 201, 35, 1) 0%, rgba(2, 201, 35, 1) 4%, rgba(5, 255, 0, 1) 13%, rgba(5, 255, 0, 1) 92%, rgba(5, 255, 0, 0.23) 100%)",
        'highlight-orange': "linear-gradient(90deg, rgba(201, 118, 14, 1) 0%, rgba(201, 118, 14, 1) 4%, rgba(247, 145, 17, 1) 13%, rgba(247, 145, 17, 1) 92%, rgba(247, 145, 17, 0.23) 100%)",
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(
      function ({ addVariant }) {
        addVariant("glow", ".glow-capture .glow-overlay &")
      },
      {
        theme: {
          extend: {
            colors: {
              // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
              glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
            },
          },
        },
      }
    ),
  ],
} satisfies Config;

export default config;
