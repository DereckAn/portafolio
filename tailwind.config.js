/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "cerdo-pattern": "url('/src/assets/cerdo.webp')",
        "cerdo-pattern-2": "url('/src/assets/cerdo2.webp')",
        "cerdo-pattern-3": "url('/src/assets/cerdo3.webp')",
        "cerdo-pattern-4": "url('/src/assets/cerdo4.webp')",
        "cerdo-pattern-5": "url('/src/assets/arbusto.webp')",
      },
    },
  },
  plugins: [],
};
