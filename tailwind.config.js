/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        white: "rgb(var(--white))",
        black: "rgb(var(--black))",
        celestialBlue: "rgb(var(--celestial-blue))",
        celestialBlue70: "rgb(var(--celestial-blue), 0.7)",
        aetroBlue: "rgb(var(--aetro-blue))",
        saffronYellow: "rgb(var(--saffron-yellow))",
      },
    },

    fontFamily: {
      playfair: ["Playfair Display"],
    },

    screens: {
      sm: "640px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#058ED9",

          secondary: "#EABF53",

          accent: "#40BBDA",

          neutral: "#080F0F",

          "base-100": "#FBFCFF",

          info: "#81b8df",

          success: "#16988b",

          warning: "#f2bc07",

          error: "#ed4835",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
