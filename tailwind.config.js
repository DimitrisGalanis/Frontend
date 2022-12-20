module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        75: "19rem",
        81: "25rem",
        82: "28rem",
        92: "30rem",
        99: "33rem",
        97: "34rem",
        98: "38rem",
      },
      width: {
        97: "45rem",
      },
      fontFamily: {
        Roboto: ["Rubik Distressed", "cursive"],
        Test: ["Manrope", "sans-serif"],
        Abc: ["Roboto", "sans-serif"],
        Ab: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        grid: "url('./images/grid.png')",
      },
    },
  },
  plugins: [],
};
