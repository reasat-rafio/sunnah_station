import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { InitialLayout } from "../components/Layouts/InitialLayout";
import axios from "axios";
import { HomePoster } from "../components/Home/HomePoster";
import { BrowseByCategory } from "../components/Home/BrowsByCategory/BrowseByCategory";
import { SpeicalDeals } from "../components/Home/OurProducts/SpeicalDeals";
import { Newsletter } from "../components/Home/Newsletter/Newsletter";
import { NewArrivals } from "../components/Home/NewArrivals/NewArrivals";
import { BackToTheTop } from "../components/BackToTop/BackToTop";
import { useEffect } from "react";
import { useCtx } from "../store";
import { getAllTheProducts } from "../store/actions/ProductsAction";
import { Seo } from "../components/SEO/SEO";
import { useSession } from "next-auth/client";
import Image from "next/image";
import groq from "groq";
import { renderObjectArray, withDimensions } from "sanity-react-extra";
import { pageQuery } from "@libs/query";
import { sanityStaticProps, useSanityQuery } from "@utils/sanity";
import { SanityProps } from "next-sanity-extra";

const query = pageQuery(groq`
  *[_id == "landingPage"][0] {
     ...,
      sections[]{
      ...,
      "image": ${withDimensions("image")},
      images[]{
        ...,
      "image": ${withDimensions("image")},
      },
      browseByCategory->{
        ...,
      "image": ${withDimensions("image")},
      },
      highlightDeals-> [0..7]{
        ...,
      "banner": ${withDimensions("banner")}, 
      },
    },
    "latestPosts": *[_type == 'deal' && slug.current != "winter-seals"] | order(date desc) [0..29]{
      ...,
      appliesTo[]->{
        ...,
        categories[]->
      }
    }
  }
`);

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await sanityStaticProps({ query: query, context }),
  revalidate: 5,
});

export default function Home(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data;
  console.log("====================================");
  console.log(page);
  console.log("====================================");

  const { productsDispatch } = useCtx();

  useEffect(() => {
    // const allProducts = [...speicalDeals, ...newArrivals];
    // productsDispatch(getAllTheProducts(allProducts));
  }, []);

  return (
    <InitialLayout>
      {/* <Seo
        title="Home - Sunnah Station"
        description={
          "This is an Islamic e-commerce site where we set out to take all Islamic and halal products on one platform."
        }
        url={`${process.env.NEXTAUTH_URL}`}
        shareImage="https://res.cloudinary.com/dapjxqk64/image/upload/v1616398446/sunnah%20statoin/sunnah_station_png_hfs68x.png"
        preventIndexing={false}
      /> */}

      {renderObjectArray(page.sections, {
        landingHero: HomePoster,
      })}

      <main className="w-full">
        {/* <HomePoster coverImg={coverImg} /> */}
        {/* <BrowseByCategory /> */}
        {/* <SpeicalDeals speicalDeals={speicalDeals} /> */}
        {/* <NewArrivals newArrivals={newArrivals} /> */}
        {/* <Newsletter />
        <BackToTheTop /> */}
      </main>
    </InitialLayout>
  );
}
