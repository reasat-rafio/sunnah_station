import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { InitialLayout } from "../../Components/Layouts/InitialLayout";
import { Card } from "../../Components/ItemsPage/Card";
import { ProductImages } from "../../Components/ItemsPage/ProductImages/ProductImages";
import { Tabs } from "../../Components/ItemsPage/Tabs/Tabs";
import { useCtx } from "../../store";
import { loadingEnd, loadingstart } from "../../store/actions/domAction";
import { useRouter } from "next/router";

interface itemProps {
   new_arrivals: any;
   speical_deals: any;
}

const item: React.FC<itemProps> = ({ new_arrivals, speical_deals }) => {
   const router = useRouter();
   const [product, setProduct] = useState<any>(() => {
      //   if (flash_deals && flash_deals[0]) {
      //      return flash_deals;
      //   }
      if (new_arrivals && new_arrivals[0]) {
         return new_arrivals;
      }

      if (speical_deals && speical_deals[0]) {
         return speical_deals;
      }
   });

   const {
      domDispatch,
      domState: { isLoading },
   } = useCtx();

   useEffect(() => {
      if (router.isFallback) {
         domDispatch(loadingstart());
      } else {
         domDispatch(loadingEnd());
      }
   }, [router.isFallback]);

   useEffect(() => {
      //   if (flash_deals && flash_deals[0]) {
      //      setProduct(flash_deals);
      //   }
      if (new_arrivals && new_arrivals[0]) {
         setProduct(new_arrivals);
      }

      if (speical_deals && speical_deals[0]) {
         return speical_deals;
      }
   }, [speical_deals, new_arrivals]);
   return (
      <InitialLayout>
         <section className=" w-full pt-16 md:pt-32">
            {product &&
               product.map(
                  ({
                     image,
                     brand,
                     sub_categories,
                     name,
                     offer_price,
                     offer_till,
                     regular_price,
                     id,
                     short_description,
                     description,
                     in_stock,
                     slug,
                     main_categories,
                     multiple_quantity,
                     quantity_and_price,
                  }) => (
                     <section key={id} className="min-h-screen">
                        <div className="container m-auto grid gap-0 lg:gap-3  grid-cols-6 p-8 font-text ">
                           {/* Image preview */}
                           <div className=" col-span-6 lg:col-span-2">
                              <ProductImages img={image} />
                           </div>
                           {/* product discription */}
                           <div className="lg:shadow-xl col-span-6 lg:col-span-4   lg:p-8 p-2">
                              <Card
                                 brand={brand}
                                 categories={sub_categories}
                                 name={name}
                                 offer_price={offer_price}
                                 offer_time_till={offer_till}
                                 regular_price={regular_price}
                                 id={id}
                                 img={image[0].url}
                                 in_stock={in_stock}
                                 short_description={short_description}
                                 slug={slug}
                                 main_categories={main_categories}
                                 quantity_and_price={quantity_and_price}
                                 multiple_quantity={multiple_quantity}
                              />
                           </div>
                        </div>
                        <Tabs name={name} description={description} />
                     </section>
                  )
               )}
         </section>
      </InitialLayout>
   );
};

export default item;

export const getStaticPaths: GetStaticPaths = async () => {
   //    const flash_deals = await axios.get(`${process.env.URL}/products`);
   const new_arrivals = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/new-arrivals`
   );
   //    const gaming_accessories = await axios.get(
   //       `${process.env.URL}/gaming-accessories`
   //    );
   const speical_deals = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/special-deals`
   );

   const data = [
      //   ...flash_deals.data,
      ...new_arrivals.data,
      ...speical_deals.data,
   ];

   const paths = data.map(({ slug }) => ({
      params: { item: slug },
   }));

   return {
      paths: [],
      fallback: true,
   };
};

export const getStaticProps: GetStaticProps = async (context) => {
   // setting the request variable

   const slug = context.params.item;

   //    const flash_deals = await axios.get(
   //       `${process.env.URL}/products?slug=${slug}`
   //    );
   const new_arrivals = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/new-arrivals?slug=${slug}`
   );

   // const new_arrivals = await axios.get(
   //    `${process.env.URL}/gaming-accessories?slug=${slug}`
   // );
   const speical_deals = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/special-deals?slug=${slug}`
   );

   return {
      props: {
         speical_deals: speical_deals.data,
         //  flash_deals: flash_deals.data,
         new_arrivals: new_arrivals.data,
         //  gaming_accessories: gaming_accessories.data,
      },
      revalidate: 10,
   };
};
