import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useCtx } from "../../store";
import { showCategorySidebar } from "../../store/actions/domActions";
import { FourGrid, SmMenu, ThreeGrid, TwoGrid } from "../../utils/svgs/Svg";
import { InPageToast } from "../../utils/_components/InPageToast";
import { FilterProductSection } from "./FilterProductSection";
import { ShopShortDropDown } from "./ShopShortDropDown";
interface ShopProductsProps {
   products: any;
   gridCount: number;
   setGridCount: any;
   showMoreFilter: boolean;
   setShowMoreFilter: any;
   selectedFilter: string;
   setSelectedFilter: any;
}

export const ShopProducts: React.FC<ShopProductsProps> = ({
   products,
   gridCount,
   setGridCount,
   showMoreFilter,
   setShowMoreFilter,
   selectedFilter,
   setSelectedFilter,
}) => {
   const router = useRouter();

   const [allProducts, setAllProducts] = useState<any>([...products]);

   useEffect(() => {
      setAllProducts(products);
   }, [products]);

   const [pageNumber, setPageNumber] = useState<number>(0);
   const productPerPage = 12;
   const PagesVisited = pageNumber * productPerPage;

   // SHORTING THE PRODUCTS. PS:ALL THE SORTING AND FILTERING HAPPENING HERE
   const displayProrducts = () => {
      return (
         allProducts &&
         allProducts.length > 0 &&
         allProducts
            .sort((a, b) => {
               if (selectedFilter === "Sort by popularity") {
                  return a.highlight === b.highlight ? 0 : a.highlight ? -1 : 1;
               }
               if (selectedFilter === "Sort by latest") {
                  return a.createdAt > b.createdAt ? 1 : -1;
               }
               if (selectedFilter === "Sort by Price: low to high") {
                  if (a.offer_price && b.offer_price) {
                     return parseInt(a.offer_price.replace(/,/g, ""), 10) <
                        parseInt(b.offer_price.replace(/,/g, ""), 10)
                        ? -1
                        : 1;
                  } else {
                     return parseInt(a.regular_price) <
                        parseInt(b.regular_price)
                        ? -1
                        : 1;
                  }
               }
               if (selectedFilter === "Sort by Price: high to low") {
                  if (a.offer_price && b.offer_price) {
                     return parseInt(a.offer_price.replace(/,/g, ""), 10) >
                        parseInt(b.offer_price.replace(/,/g, ""), 10)
                        ? -1
                        : 1;
                  } else {
                     return parseInt(a.regular_price) >
                        parseInt(b.regular_price)
                        ? -1
                        : 1;
                  }
               }
            })
            .slice(PagesVisited, PagesVisited + productPerPage)
            .map(({ name, image, offer_price, regular_price, id, slug }) => {
               return (
                  <div
                     className={`col-span-6 lg:col-span-4 xl:col-span-${gridCount} border cursor-pointer flex flex-col `}
                     key={id}
                  >
                     <div
                        className="flex-1 overflow-hidden"
                        onClick={() => router.push(`/items/${slug}`)}
                     >
                        <motion.img
                           whileHover={{ scale: 1.1 }}
                           src={image[0].url}
                           alt={name}
                        />
                     </div>

                     <div className="">
                        <p className="text-sm font-medium text-center font-nav   ">
                           {name}
                        </p>
                        {offer_price && (
                           <div className="my-2 flex gap-2 items-center justify-center">
                              <span className="line-through  text-sm text-gray-400 font-text">
                                 ৳{regular_price}
                              </span>
                              <span className="text-darkBlue font-semibold font-text">
                                 ৳{offer_price}
                              </span>
                           </div>
                        )}
                     </div>
                  </div>
               );
            })
      );
   };

   // PAGINATION
   const pageCount = Math.ceil(allProducts.length / productPerPage);
   const chnagePage = ({ selected }) => {
      setPageNumber(selected);
   };

   // GLOBAL STATE
   const { domDispatch } = useCtx();

   return (
      <>
         {/* filter section */}
         <FilterProductSection
            setGridCount={setGridCount}
            gridCount={gridCount}
            showMoreFilter={showMoreFilter}
            setShowMoreFilter={setShowMoreFilter}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
         />
         {/* ----- PRODUCTS OUTPUT SECTION ----- */}

         <div className="flex flex-col ">
            <section className="grid grid-cols-12 my-5 gap-2 flex-1">
               {displayProrducts()}
            </section>
            <span className="mx-auto flex ">
               <ReactPaginate
                  previousLabel={"← Prev"}
                  nextLabel={"Next →"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  onPageChange={chnagePage}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  containerClassName={"pagination"}
                  previousLinkClassName={"pagination__link"}
                  nextLinkClassName={"pagination__link"}
                  disabledClassName={"pagination__link--disabled"}
                  activeClassName={"pagination__link--active"}
               />
            </span>
         </div>
      </>
   );
};
