/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#07B5A2",
          deep: "#00A890",
          soft: "#EAF8F6"
        },
        secondary: {
          DEFAULT: "#1A8E45",
          soft: "#ECF7EF"
        },
        accent: {
          DEFAULT: "#F0A123",
          soft: "#FFF6E6"
        },
        ink: "#0F172A",
        body: "#475569",
        muted: "#64748B",
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F6FAF9"
        },
        border: {
          DEFAULT: "#DCE8E5",
          strong: "#C8D9D5"
        },
        dark: {
          DEFAULT: "#073B35",
          soft: "#0C4C43"
        }
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 12px 32px rgba(15, 23, 42, 0.08)"
      }
    }
  }
};
