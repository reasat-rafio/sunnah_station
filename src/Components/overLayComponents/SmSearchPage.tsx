import { useCtx } from "../../store";
import { hideSearchPage } from "../../store/actions/domActions";
import { Cross } from "../../utils/svgs/Svg";
import { motion, AnimatePresence } from "framer-motion";
import { searchPageVarients } from "../../utils/animation";
import { useState } from "react";
import { useSearchFilter } from "../../utils/hooks/useFilterByInput";
// import { SearchbarResult } from "../SearchbarResult/SearchbarResult";

interface SmSearchPageProps {}

export const SmSearchPage: React.FC<SmSearchPageProps> = ({}) => {
   const {
      domState: { showSearchPage },
      domDispatch,
      productsState,
   } = useCtx();

   // Search Input value
   const [inputValue, setInputValue] = useState<string>("");

   // search filter state
   const [searchFilterItems, setSearchFilterItems] = useState([]);

   // On change searchfilter action
   const searchInputOnChangeAction = (e) => {
      setInputValue(e.target.value);
      const all_products = productsState.products.map(
         ({ name, img, offer_price, regular_price, slug }) => {
            return { name, img, offer_price, regular_price, slug };
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
                  className={"fixed h-screen w-screen bg-white z-50 block "}
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
                        {inputValue.length <= 0 && (
                           <p className="text-sm text-gray-500 font-text  mx-auto">
                              Type here any product name
                           </p>
                        )}

                        {/* {inputValue.length > 0 && (
                           <SearchbarResult
                              searchFilterItems={searchFilterItems}
                              inputValue={inputValue}
                           />
                        )} */}
                     </form>
                  </div>
               </motion.section>
            )}
         </AnimatePresence>
      </>
   );
};
