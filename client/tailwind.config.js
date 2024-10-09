module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        clash: ["Clash Display", "sans-serif"], // Added Clash Display font
      },
    },
  },
  plugins: [],
};
