/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f7fafc", // nền sáng
          primary: "#fbbf24", // amber 400
          primarySoft: "#fef3c7", // amber 100
          accent: "#38bdf8", // sky 400
          accentSoft: "#e0f2fe", // sky 100
          text: "#0f172a", // slate 900
          textSoft: "#64748b", // slate 500
        },
      },
    },
  },
  plugins: [],
};
