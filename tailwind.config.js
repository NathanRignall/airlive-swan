module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        logo: {
          light: "#30CFD0",
          main: "#4A729D",
          dark: "#330867",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
