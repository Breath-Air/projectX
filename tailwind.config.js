/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "rgba(0, 0, 0, 0.93)",
          "200": "rgba(255, 255, 255, 0)",
          "300": "rgba(11, 10, 10, 0.98)",
        },
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
    },
    fontSize: {
      "77xl": "6rem",
      "196xl": "13.44rem",
      lg: "1.13rem",
      xl: "1.25rem",
      sm: "0.88rem",
      "29xl": "3rem",
      "11xl": "1.88rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
