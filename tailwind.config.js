export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-vue/**/*.js",
    "./node_modules/flowbite-vue-datepicker/**/*.js",
    "./node_modules/flowbite-vue-datepicker/**/*.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#3b82f6",
        accent: "#60a5fa",
        dark: "#0f172a",
        darker: "#020617",
        card: "rgba(15, 23, 42, 0.8)",
        textPrimary: "#f8fafc",
        textSecondary: "#cbd5e1",
        textMuted: "#64748b",
        border: "rgba(14, 165, 233, 0.2)",
        shadowBlue: "rgba(14, 165, 233, 0.3)"
      }
    }
  },
  plugins: [],
}
