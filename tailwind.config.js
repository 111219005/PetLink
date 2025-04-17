const { extend } = require("lodash");

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './index.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
          {
            light: {
              primary: "#7392B9", // 藍
              secondary: "#000000", // 白
              accent: "#FAAA5D", // 橘
              neutral: "#9AA57C", // 綠
              "base-100": "#FFF7D8", // 淡黃
            },
            dark: {
              primary: "#8BC34A",
              secondary: "#FF5722",
              accent: "#2196F3",
              neutral: "#212121",
              "base-100": "#121212",
            },
          },
        ],
      },
      
};