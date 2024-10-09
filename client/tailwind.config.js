module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      textColor: {
        gradient:
          "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        clash: ["Clash Display", "sans-serif"], // Added Clash Display font
      },
    },
  },
  plugins: [],
};
