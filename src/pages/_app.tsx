import Head from "next/head";
import "../styles/tailwind.scss";
import { createContext } from "react";

import { GlobalState } from "../store";
import { GlobalLayout } from "../Components/Layouts/GlobalLayout";
import { Provider } from "next-auth/client";

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

         <Provider session={pageProps.session}>
            <GlobalState>
               <GlobalLayout>
                  <Component {...pageProps} />
               </GlobalLayout>
            </GlobalState>
         </Provider>

         {/* </GlobalContext.Provider> */}
      </>
   );
}

export default MyApp;
