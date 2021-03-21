import Head from "next/head";
import "../styles/globals.scss";
import { getStrapiMedia } from "../libs/media";
import { createContext } from "react";
import { fetchAPI } from "../libs/api";
import App from "next/app";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
   // const { global } = pageProps;

   return (
      <>
         <Head>
            {/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} /> */}
            <link
               rel="stylesheet"
               href="https://fonts.googleapis.com/css?family=Staatliches"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link
               rel="stylesheet"
               href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
            />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
         </Head>
         {/* <GlobalContext.Provider value={global}> */}
         <Component {...pageProps} />
         {/* </GlobalContext.Provider> */}
      </>
   );
}

// MyApp.getInitialProps = async (ctx) => {
//    // Calls page's `getInitialProps` and fills `appProps.pageProps`
//    const appProps = await App.getInitialProps(ctx);
//    // Fetch global site settings from Strapi
//    const global = await fetchAPI("/global");
//    // Pass the data to our page via props
//    return { ...appProps, pageProps: { global } };
// };

export default MyApp;
