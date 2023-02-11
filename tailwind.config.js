module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        75: "19rem",
        81: "25rem",
        82: "28rem",
        91: "35rem",
        92: "30rem",
        99: "33rem",
        97: "34rem",
        96: "37rem",
        98: "38rem",
      },
      width: {
        97: "45rem",
        98: "30rem",
      },
      fontFamily: {
        Roboto: ["Rubik Distressed", "cursive"],
        Test: ["Manrope", "sans-serif"],
        Abc: ["Roboto", "sans-serif"],
        Ab: ["Open Sans", "sans-serif"],
        abcc: ["Noto Serif", "serif"],
        tasos: ["Fira Sans", "sans-serif"],
        tasos1: ["Source Sans Pro", "sans-serif"],
        tasos2: ["Open Sans", "sans-serif"],
        tasos3: ["Advent Pro", "sans-serif"],
      },
      backgroundImage: {
        grid: "url('./images/grid.png')",
      },
      textUnderlineOffset: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
