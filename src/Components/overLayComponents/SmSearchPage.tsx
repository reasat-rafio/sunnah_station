import { useCtx } from "../../store";
import { hideSearchPage } from "../../store/actions/domActions";
import { Cross } from "../../utils/svgs/Svg";
import { motion, AnimatePresence } from "framer-motion";
import { searchPageVarients } from "../../utils/animation";
import { useState } from "react";
import { useSearchFilter } from "../../utils/hooks/useFilterByInput";
import { SearchResult } from "../SearchResult/SearchResult";
import Image from "next/image";
import Link from "next/link";

interface SmSearchPageProps {}

export const SmSearchPage: React.FC<SmSearchPageProps> = ({}) => {
   const {
      domState: { showSearchPage },
      domDispatch,
      productsState,
   } = useCtx();

   // Search Input value
   const [searchInput, setSearchInput] = useState<string>("");

   // search filter state
   const [searchFilterItems, setSearchFilterItems] = useState([]);

   // On change searchfilter action
   const searchInputOnChangeAction = (e) => {
      setSearchInput(e.target.value);
      const all_products = productsState.products.map(
         ({ name, image, offer_price, regular_price, slug }) => {
            return { name, image, offer_price, regular_price, slug };
         }
      );

      const { filteredItme } = useSearchFilter(all_products, e.target.value);
      setSearchFilterItems(filteredItme);
   };

   return (
      <>
         <AnimatePresence exitBeforeEnter>
            {showSearchPage && (
               <motion.section
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={searchPageVarients}
                  className={
                     "fixed min-h-screen  w-screen bg-white z-50 block overflow-auto"
                  }
               >
                  <div className="container mx-auto">
                     <div className="flex justify-end">
                        <span
                           className="p-3"
                           onClick={() => domDispatch(hideSearchPage())}
                        >
                           <Cross />
                        </span>
                     </div>

                     <form className=" flex justify-center flex-col ">
                        <input
                           type="text"
                           className="border rounded-sm py-3 px-2 outline-none mx-auto  w-11/12  "
                           onChange={(e) => searchInputOnChangeAction(e)}
                        />
                        {searchInput.length <= 0 && (
                           <p className="text-sm text-gray-500 font-text  mx-auto">
                              Type here any product name
                           </p>
                        )}

                        {searchInput.length > 0 && (
                           <div className=" my-2  flex justify-end font-title  overflow-auto">
                              <ul className="w-full rounded-sm overflow-auto p-3 divide-y-2 shadow-md disable-scrollbars ">
                                 {searchFilterItems &&
                                 searchFilterItems.length > 0 ? (
                                    searchFilterItems.map(
                                       ({
                                          name,
                                          image,
                                          offer_price,
                                          regular_price,
                                          slug,
                                          short_description,
                                       }) => (
                                          <Link href={`/items/${slug}`}>
                                             <li className="py-2 grid grid-cols-12 hover:bg-gray-50 cursor-pointer gap-3 text-sm">
                                                <div className="col-span-1 my-auto">
                                                   <Image
                                                      className=""
                                                      src={image[0].url}
                                                      layout="responsive"
                                                      height="1"
                                                      width="1"
                                                      alt={name}
                                                   />
                                                </div>

                                                <div className="col-span-11 flex flex-col justify-center">
                                                   <p className="truncate font-medium">
                                                      {name}
                                                   </p>
                                                   {short_description && (
                                                      <p className="truncate max-w-md">
                                                         {short_description}
                                                      </p>
                                                   )}
                                                   {offer_price ? (
                                                      <div>
                                                         <span className="line-through text-gray-500">
                                                            ৳{regular_price}
                                                         </span>
                                                         <span className="text-lightBlue text-xl font-semibold">
                                                            ৳{offer_price}
                                                         </span>
                                                      </div>
                                                   ) : (
                                                      <span className="text-lightBlue text-xl font-semibold">
                                                         ৳{regular_price}
                                                      </span>
                                                   )}
                                                </div>
                                             </li>
                                          </Link>
                                       )
                                    )
                                 ) : (
                                    <p className="flex ">
                                       Sorry, nothing found for
                                       <span className="font-semibold ml-2">
                                          {searchInput}
                                       </span>
                                    </p>
                                 )}
                              </ul>
                           </div>
                        )}
                     </form>
                  </div>
               </motion.section>
            )}
         </AnimatePresence>
      </>
   );
};
