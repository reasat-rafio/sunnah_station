import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { InitialLayout } from "../../../Components/Layouts/InitialLayout";
import { ShopLayout } from "../../../Components/Layouts/ShopLayout";
import { Loading } from "../../../Components/Loading/Loading";
import { FilterProductSection } from "../../../Components/ShopPage/FilterProductSection";
import { ShopProducts } from "../../../Components/ShopPage/ShopProducts";
import { useCtx } from "../../../store";
import { loadingEnd, loadingstart } from "../../../store/actions/domAction";
import { InPageToast } from "../../../utils/_components/InPageToast";

const product = ({ products, ctg }) => {
   const router = useRouter();
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

   // const { product } = router.query;
   const [allFilteredProdtucts, setAllFiltredProducts] = useState(() => {
      return products;
   });
   // sort items state
   const [showMoreFilter, setShowMoreFilter] = useState<boolean>(false);
   const [selectedFilter, setSelectedFilter] = useState<string>(
      "Sort by popularity"
   );

   // Products grid
   const [gridCount, setGridCount] = useState(3);

   useEffect(() => {
      setAllFiltredProducts(products);
   }, [products]);

   return (
      <InitialLayout>
         <div className="pt-28 md:pt-32">
            <ShopLayout>
               <div className="min-h-screen">
                  {allFilteredProdtucts && allFilteredProdtucts.length > 0 ? (
                     <ShopProducts
                        products={allFilteredProdtucts}
                        gridCount={gridCount}
                        setGridCount={setGridCount}
                        showMoreFilter={showMoreFilter}
                        setShowMoreFilter={setShowMoreFilter}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                     />
                  ) : (
                     <>
                        <FilterProductSection
                           showMoreFilter={showMoreFilter}
                           setShowMoreFilter={setShowMoreFilter}
                           selectedFilter={selectedFilter}
                           setSelectedFilter={setSelectedFilter}
                        />
                        <InPageToast text="No products were found matching your selection." />
                     </>
                  )}
               </div>
            </ShopLayout>
         </div>
      </InitialLayout>
   );
};
export default product;

export const getStaticPaths: GetStaticPaths = async () => {
   const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/sub-categories`
   );

   const paths = [...data].map(({ name }) => ({
      params: { sub_categories: name },
   }));

   return {
      paths: [],
      fallback: true,
   };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
   const ctg = ctx.params.sub_categories;

   const speical_deals = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/special-deals`
   );
   const new_arrivals_all = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/new-arrivals`
   );

   const allProducts = [...speical_deals.data, ...new_arrivals_all.data];
   if (ctg) {
      const products = allProducts.filter(
         (pd) =>
            pd.sub_categories &&
            pd.sub_categories.length > 0 &&
            pd.sub_categories[0].name === `${ctg}`
      );

      return {
         props: {
            products: products,
         },
      };
   }
};
