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

      boxShadow: {
        cart: "0 3px 6px rgba(0,0,0,0.12)",
        product: "0 6px 12px rgba(0,0,0,.08)",
        listProduct: "0 2px 4px rgba(0,0,0,.08)",
        navigation: "0 3px 6px rgba(0, 0, 0, 0.16)",
        navigationReverse: "0 -3px 6px rgba(0, 0, 0, 0.16)",
        header: "0 2px 3px rgba(0, 0, 0, 0.08)",
        subMenu: "1px 2px 3px rgba(0, 0, 0, 0.08)",
        bottomNavigation: "0 -2px 3px rgba(0, 0, 0, 0.06)",
        cookies: "0 -2px 3px rgba(0, 0, 0, 0.04)",
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
  },
  variants: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("tailwindcss-rtl"),
    require("@tailwindcss/typography"),
  ],
};
