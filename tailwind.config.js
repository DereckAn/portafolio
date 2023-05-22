/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // css: {
      //   '*': {
      //     margin: 0,
      //     padding: 0,
      //     boxSizing: 'border-box',
          
      //   },
      //   body: {
      //     background: '#1D0027',
      //     overflow: 'hidden',
      //     minHeight: '200vh',
      //   },
      //   '.container': {
      //     position: 'fixed',
      //     height: '100vh',
      //     overflow: 'hidden',
      //   },
      //   '.row': {
      //     display: 'inline-flex',
      //     marginTop: 'calc(var(--v1) * -0.32)',
      //     marginLeft: 'calc(var(--v1) * -0.5)',
      //   },
      //   'button.hexagon': {
      //     border: 'none',
      //     cursor: 'pointer',
      //   },
      //   '.hexagon': {
      //     position: 'relative',
      //     width: 'var(--v1)',
      //     height: 'calc(var(--v1) * 1.1)',
      //     margin: 'calc(var(--v1) * 0.04) calc(var(--v1) *'
      //   },
      // },

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
