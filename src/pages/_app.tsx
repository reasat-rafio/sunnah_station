import Head from "next/head";
import "../styles/tailwind.scss";
import { createContext, useEffect } from "react";
import NProgress from "nprogress";
import { GlobalState } from "../store";
import { GlobalLayout } from "../Components/Layouts/GlobalLayout";
import { Provider, getSession } from "next-auth/client";
import { useRouter } from "next/router";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
   const router = useRouter();
   // page route changing loading bar
   useEffect(() => {
      let routeChangeStart = () => NProgress.start();
      let routeChangeComplete = () => NProgress.done();

      router.events.on("routeChangeStart", routeChangeStart);
      router.events.on("routeChangeComplete", routeChangeComplete);
      router.events.on("routeChangeError", routeChangeComplete);
      return () => {
         router.events.off("routeChangeStart", routeChangeStart);
         router.events.off("routeChangeComplete", routeChangeComplete);
         router.events.off("routeChangeError", routeChangeComplete);
      };
   }, []);

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

            <link
               rel="stylesheet"
               href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
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
      </>
   );
}

export default MyApp;
