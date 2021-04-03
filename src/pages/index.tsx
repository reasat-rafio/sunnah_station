import { GetStaticProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { InitialLayout } from "../Components/Layouts/InitialLayout";
import axios from "axios";
import { HomePoster } from "../Components/Home/HomePoster";
import { BrowseByCategory } from "../Components/Home/BrowsByCategory/BrowseByCategory";
import { SpeicalDeals } from "../Components/Home/OurProducts/SpeicalDeals";
import { Newsletter } from "../Components/Home/Newsletter/Newsletter";
import { NewArrivals } from "../Components/Home/NewArrivals/NewArrivals";
import { BackToTheTop } from "../Components/BackToTop/BackToTop";
import { Loading } from "../Components/Loading/Loading";
import { useEffect } from "react";
import { useCtx } from "../store";
import { getAllTheProducts } from "../store/actions/ProductsAction";

export default function Home({ coverImg, speicalDeals, newArrivals }) {
   const { productsDispatch } = useCtx();
   useEffect(() => {
      const allProducts = [...speicalDeals, ...newArrivals];
      productsDispatch(getAllTheProducts(allProducts));
   }, []);

   return (
      <InitialLayout>
         <Head>
            <title>Home - Sunnah Station</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="w-full">
            <HomePoster coverImg={coverImg} />
            <BrowseByCategory />
            <SpeicalDeals speicalDeals={speicalDeals} />
            <NewArrivals newArrivals={newArrivals} />
            <Newsletter />
            <BackToTheTop />
         </main>
      </InitialLayout>
   );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
   const cover_images = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/main-cover-images`
   );
   const speical_deals = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/special-deals?_limit=10`
   );

   const new_arrivals = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/new-arrivals?_limit=10`
   );

   return {
      props: {
         coverImg: cover_images.data[0].img,
         speicalDeals: speical_deals.data,
         newArrivals: new_arrivals.data,
      },
   };
};
