import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { InitialLayout } from "../../../Components/Layouts/InitialLayout";
import { ShopLayout } from "../../../Components/Layouts/ShopLayout";
import { FilterProductSection } from "../../../Components/ShopPage/FilterProductSection";
import { ShopProducts } from "../../../Components/ShopPage/ShopProducts";
import { useCtx } from "../../../store";
import { loadingEnd, loadingstart } from "../../../store/actions/domAction";
import { InPageToast } from "../../../utils/_components/InPageToast";

const main_categories = ({ products }) => {
   console.log(products);

   const router = useRouter();
   const {
      domDispatch,
      domState: { isLoading },
   } = useCtx();

   // sub categories
   const [khejur, setKhejur] = useState([]);
   const [panjabi, setPanjabi] = useState([]);
   const [tinfol, setTinfol] = useState([]);
   const [tupi, setTupi] = useState([]);
   const [pagri_rumal, setPagri_rumal] = useState([]);

   // filtering the sub ctg to there own state
   useEffect(() => {
      const filterSubCtg = (nam: string, setState: any) => {
         if (products) {
            const newState = products.filter(({ sub_categories }) => {
               let { name } = sub_categories[0];
               return name == nam;
            });
            setState(newState);
         }
      };

      filterSubCtg("khejur", setKhejur);
      filterSubCtg("panjabi", setPanjabi);
      filterSubCtg("tinfol", setTinfol);
      filterSubCtg("tupi", setTupi);
      filterSubCtg("pagri-rumal", setPagri_rumal);
   }, [products]);

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

   return (
      <InitialLayout>
         <div className="pt-28 md:pt-32">
            <ShopLayout>
               <div className="min-h-screen">
                  {products && products.length > 0 ? (
                     <ShopProducts
                        products={products}
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
                           gridCount={gridCount}
                           setGridCount={setGridCount}
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

export default main_categories;

export const getStaticPaths: GetStaticPaths = async () => {
   // const { data } = await axios.get(`${process.env.URL}/sub-categories`);

   // const paths = [...data].map(({ name }) => ({
   //    params: { product: name },
   // }));

   return {
      paths: [],
      fallback: true,
   };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
   const ctg = ctx.params.main_categories;

   const speical_deals = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/special-deals`
   );
   const new_arrivals_all = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/new-arrivals`
   );

   const allProducts = [...speical_deals.data, ...new_arrivals_all.data];

   const products = allProducts.filter((pd) => {
      if (pd.main_categories && pd.main_categories[0].name === `${ctg}`) {
         return pd;
      }
   });

   return {
      props: {
         products: products,
      },
   };
};
