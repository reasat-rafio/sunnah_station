import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Next, Prev } from "../../utils/svgs/Svg";

interface N_Deals_PageProps {
   products: any[];
}

export const Products: React.FC<N_Deals_PageProps> = ({ products }) => {
   const router = useRouter();

   const [allProducts, setAllProducts] = useState(products);
   const [pageNumber, setPageNumber] = useState<number>(0);
   const productPerPage = 12;
   const PagesVisited = pageNumber * productPerPage;

   const displayProrducts = allProducts
      .sort((a, b) =>
         a.highlight_item === b.highlight_item ? 0 : a.highlight_item ? -1 : 1
      )
      .slice(PagesVisited, PagesVisited + productPerPage)
      .map(({ name, image, offer_price, regular_price, id, slug }) => {
         return (
            <div
               className="col-span-6 lg:col-span-4 xl:col-span-3 border cursor-pointer  flex flex-col font-title"
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
                        <span className="text-lightBlue font-semibold font-text">
                           ৳{offer_price}
                        </span>
                     </div>
                  )}
               </div>
            </div>
         );
      });

   const pageCount = Math.ceil(allProducts.length / productPerPage);

   const chnagePage = ({ selected }) => {
      setPageNumber(selected);
   };

   return (
      <div className="w-full">
         <div className="container mx-auto">
            <section className="grid grid-cols-12 my-5 gap-2">
               {displayProrducts}
            </section>
            <span className="mx-auto flex">
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
      </div>
   );
};
