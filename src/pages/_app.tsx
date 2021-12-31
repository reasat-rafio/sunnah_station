import Head from "next/head";
import "../styles/tailwind.scss";
import { createContext, useEffect } from "react";
import NProgress from "nprogress";
import { GlobalState } from "../store";
import { GlobalLayout } from "../components/Layouts/GlobalLayout";
// import { Provider, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { imageUrlBuilder } from "@utils/sanity";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
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

  // const ogImage =
  //   pageProps.data?.page.seo.seoImage ?? pageProps.data?.site.ogImage;

  // const openGraphImages = ogImage
  //   ? [
  //       { w: 800, h: 600 },
  //       { w: 1200, h: 630 },
  //       { w: 600, h: 600 },
  //       { w: 256, h: 256 },
  //     ].map(({ w, h }) => ({
  //       url: `${imageUrlBuilder.image(ogImage).width(w).height(h).url()}`,
  //       width: w,
  //       height: h,
  //       alt: `${pageProps.data?.page.seo.title}`,
  //     }))
  //   : [];

  return (
    <>
      {/* <Provider session={pageProps.session}> */}
      <GlobalState>
        <GlobalLayout>
          <NextSeo
          // title={pageProps.data?.page.seo.title}
          // description={pageProps.data?.page.seo.description}
          // canonical={`${pageProps.data?.site.siteUrl}${router.asPath}`}
          // openGraph={{
          //   images: openGraphImages,
          // }}
          />
          <Component {...pageProps} />
        </GlobalLayout>
      </GlobalState>
      {/* </Provider> */}
    </>
  );
}

export default MyApp;
