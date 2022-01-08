module.exports = {
  mode: "jit",
  purge: {
    enable: true,
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        body: "#5A5A5A",
        heading: "#212121",
        input: "#1D1E1F",
        black: "#000",
        white: "#fff",
        linen: "#FBF1E9",
        linenSecondary: "#ECE7E3",
        olive: "#3D9970",
        maroon: "#B03060",
        brown: "#C7844B",
        placeholder: "#707070",
        borderBottom: "#f7f7f7",
        facebook: "#4267B2",
        facebookHover: "#395fad",
        google: "#4285F4",
        googleHover: "#307bf9",
        nevyBlue: "#011325",
        lightBlue: "#00c0fa",
        optional: "#016cec",
        lightest_gray: "#F6F7FB",
        light_gray: "#e2e8f0",
        gray: {
          50: "#FBFBFB",
          100: "#F1F1F1",
          150: "#F4F4F4",
          200: "#F9F9F9",
          300: "#E6E6E6",
          350: "#E9ECEF",
          400: "#999999",
          500: "#D8D8D8",
          600: "#3A3A3A",
          700: "#292929",
          800: "#707070",
        },
      },
      fontSize: {
        "10px": ".625rem",
      },
      screens: {
        sm: "480px",
        lg: "1025px",
        "2xl": "1500px",
        "3xl": "1780px",
      },
      spacing: {
        "430px": "430px",
        "450px": "450px",
        "500px": "500px",
        "64vh": "64vh",
      },
      minHeight: {
        "50px": "50px",
      },
      scale: {
        80: "0.8",
        85: "0.85",
        300: "3",
        400: "4",
      },

      fontSize: {
        smTitle: "2.25rem",
        lgTitle: "3rem",
      },

      borderColor: {
        nevyBlue: "#011325",
      },
      fontFamily: {
        text: ["Roboto", " sans-serif"],
        title: ["Cabin", " sans-serif"],
      },
      height: {
        lgCard: "350px",
        smCard: "320px",
      },
      maxHeight: {
        smCard: "400px",
      },
      minHeight: {
        smCard: "350px",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },

      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },

    screens: {
      sm: "600px",
      md: "720px",
      lg: "920px",
      xl: "1300px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },

  //  custome container with
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "920px",
          },
          "@screen xl": {
            maxWidth: "1300px",
          },
        },
      });
    },

    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("tailwindcss-rtl"),
    require("@tailwindcss/typography"),
  ],
};
