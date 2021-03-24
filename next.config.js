module.exports = {
   images: {
      domains: ["res.cloudinary.com"],
   },

   webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module

      config.module.rules.push({
         test: /\.svg$/,
         issuer: {
            test: /\.(js|ts)x?$/,
         },
         use: ["@svgr/webpack"],
      });

      if (!isServer) {
         config.node = {
            fs: "empty",
            module: "empty",
         };
      }

      return config;
   },
};
