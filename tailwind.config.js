/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        "bg-dark": "#1a1c3b",
        "bg-card": "#25284a",
        accent: "#7c3aed",
        "accent-light": "#a78bfa",
      },
    },
  },
  plugins: [],
};
