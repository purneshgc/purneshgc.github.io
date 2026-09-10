/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0b0f16",       // deep slate-navy background
          surface: "#121826",  // card / panel surface
          surface2: "#1a2233", // hover / raised surface
          border: "#232d40",
        },
        ink: {
          DEFAULT: "#dbe2ec",
          muted: "#8a97ac",
          faint: "#5c6880",
        },
        accent: {
          DEFAULT: "#22d3ee", // cyan
          dim: "#0e7490",
        },
        warn: {
          DEFAULT: "#f59e0b", // amber, used sparingly (in-progress status)
        },
        light: {
          bg: "#f6f7f9",
          surface: "#ffffff",
          border: "#e2e5eb",
          ink: "#161b26",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
