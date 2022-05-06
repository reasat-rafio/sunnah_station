import Head from "next/head";
import "../styles/tailwind.css";
import "../styles/custom-plugins.css";
import "../styles/scrollbar.css";
import "../styles/swiper-carousel.css";
import { createContext, useEffect } from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { imageUrlBuilder } from "@utils/sanity";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { ManagedUIContext } from "src/contexts/ui.context";
import ManagedModal from "@components/common/modal/managed-modal";
import ManagedDrawer from "@components/common/drawer/managed-drawer";
import { Header } from "@components/layout/header/header";
import Search from "@components/common/search";
import BottomNavigation from "@components/layout/mobile-navigation/mobile-navigation";
import Footer from "@components/layout/footer/footer";

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

  const ogImage =
    pageProps.data?.page.seo.seoImage ?? pageProps.data?.site.ogImage;

  const openGraphImages = ogImage
    ? [
        { w: 800, h: 600 },
        { w: 1200, h: 630 },
        { w: 600, h: 600 },
        { w: 256, h: 256 },
      ].map(({ w, h }) => ({
        url: `${imageUrlBuilder.image(ogImage).width(w).height(h).url()}`,
        width: w,
        height: h,
        alt: `${pageProps.data?.page.seo.title}`,
      }))
    : [];

  function handleExitComplete() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
    }
  }

  const Noop: React.FC = ({ children }) => <>{children}</>;

  const Layout = (Component as any).Layout || Noop;
  return (
    <>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <ManagedUIContext>
          <Layout pageProps={pageProps}>
            <NextSeo
              title={pageProps.data?.page.seo.title}
              description={pageProps.data?.page.seo.description}
              canonical={`${pageProps.data?.site.siteUrl}${router.asPath}`}
              openGraph={{
                images: openGraphImages,
              }}
            />
            <Header
              navItems={pageProps.data?.site.menu}
              logo={pageProps.data?.site.logo}
            />
            <BottomNavigation
              navItems={pageProps.data?.site.menu}
              logo={pageProps.data?.site.logo}
            />

            <Search />

            <Component {...pageProps} key={router.route} />
            <Footer widgets={pageProps.data?.site.footer} />

            <ToastContainer />
          </Layout>
          <ManagedModal />
          <ManagedDrawer />
        </ManagedUIContext>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
