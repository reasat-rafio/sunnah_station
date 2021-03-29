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
   // env: {
   //    URL: "http://localhost:1337",
   //    NEXT_PUBLIC_API_URL: "http://localhost:1337",
   //    NEXT_PUBLIC_DATABASE_URL:
   //       "mongodb+srv://takib:123@cluster0.yagrz.mongodb.net/server?retryWrites=true&w=majority",
   //    NEXTAUTH_URL: "http://localhost:3000",
   //    GOOGLE_CLIENT_ID:
   //       "228590375963-v0i2fsshd4tuk0abelikjp6lbumv0s0d.apps.googleusercontent.com",
   //    GOOGLE_CLIENT_SECRET: "TKeB1R_cek4uuPVHEaCgw0tU",
   // },
};
