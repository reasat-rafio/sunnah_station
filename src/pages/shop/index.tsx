import axios from "axios";
import { GetStaticProps } from "next";
import { Head } from "next/document";
import { useState } from "react";
import { InitialLayout } from "../../Components/Layouts/InitialLayout";
import { ShopLayout } from "../../Components/Layouts/ShopLayout";
import { ShopProducts } from "../../Components/ShopPage/ShopProducts";

const Shop = ({ products }) => {
   // sort items state
   const [showMoreFilter, setShowMoreFilter] = useState<boolean>(false);
   const [selectedFilter, setSelectedFilter] = useState<string>(
      "Sort by popularity"
   );

   // Products grid
   const [gridCount, setGridCount] = useState(3);

   return (
      <InitialLayout>
         <Head>Shop - Sunnah Station</Head>
         <div className=" pt-28 md:pt-32">
            <ShopLayout>
               <ShopProducts
                  products={products}
                  gridCount={gridCount}
                  setGridCount={setGridCount}
                  showMoreFilter={showMoreFilter}
                  setShowMoreFilter={setShowMoreFilter}
                  selectedFilter={selectedFilter}
                  setSelectedFilter={setSelectedFilter}
               />
            </ShopLayout>
         </div>
      </InitialLayout>
   );
};
export default Shop;

export const getStaticProps: GetStaticProps = async (ctx) => {
   const speical_deals = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/special-deals`
   );

   const new_arrivals_all = await axios.get(`${process.env.URL}/new-arrivals`);

   const allProducts = [...speical_deals.data, ...new_arrivals_all.data];

   return {
      props: {
         products: allProducts,
      },
   };
};
