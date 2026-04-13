/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        ink: {
          50: "#f4f4f0",
          100: "#e8e8e0",
          200: "#d0d0c2",
          300: "#b0b09e",
          400: "#888878",
          500: "#66665a",
          600: "#4a4a40",
          700: "#333330",
          800: "#1e1e1a",
          900: "#0f0f0d",
          950: "#080807",
        },
        accent: {
          DEFAULT: "#e8ff47",
          dark: "#c8df20",
          muted: "#d4eb3a",
        },
        danger: "#ff4757",
        success: "#2ed573",
      },
    },
  },
  plugins: [],
};
