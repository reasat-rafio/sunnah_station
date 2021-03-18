module.exports = {
   purge: {
      enable: true,
      content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
   },
   darkMode: false,
   theme: {
      extend: {
         colors: {
            nevyBlue: "#011325",
            lightBlue: "#00c0fa",
            optional: "#016cec",
         },
         fontFamily: {
            nav: ["Roboto", " sans-serif"],
            text: ["Nunito", " sans-serif"],
         },
         height: {
            lgCard: "350px",
            smCard: "400px",
            // xsCard:
         },
         maxHeight: {
            smCard: "400px",
         },
         minHeight: {
            smCard: "350px",
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
      //  end
   ],
};
