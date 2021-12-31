import { AnimatePresence, motion } from "framer-motion";

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useCtx } from "../../../store";
import {
   showCart,
   showSearchPage,
   showSideNavBar,
} from "../../../store/actions/domActions";
import { iconVariants, searchbarVariants } from "../../../utils/animation";
import { useClientSize } from "../../../utils/hooks/useClientSIze";
import { useSearchFilter } from "../../../utils/hooks/useFilterByInput";
import {
   Search,
   Cart,
   Menu,
   SmMenuToggle,
   DownArrowSm,
   SmMenu,
} from "../../../utils/svgs/Svg";
import { SearchResult } from "../../SearchResult/SearchResult";
import { SmNav } from "../SmNav/SmNav";
import { navs } from "./_helper";

interface LgNavbarProps {}

export const LgNavbar: React.FC<LgNavbarProps> = ({}) => {
   // router
   const router = useRouter();

   const {
      domDispatch,
      domState: { showSidebar, pageWidth },
      cartState: { inCartProducts },
      productsState: { products },
      cartState,
   } = useCtx();

   // This state is for hiding and showing the search input section
   const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
   const [showSmMenu, setShowSmMenu] = useState<boolean>(false);

   const navRef = useRef<HTMLElement>(null);
   const { Pageheight, compHeight } = useClientSize(navRef);

   // Show more deals and categories state
   const [showMoreDeals, setShowMoreDeals] = useState<boolean>(false);
   const [showMoreCategories, setShowMoreCategories] = useState<boolean>(false);

   // Search result state
   const [searFilteredItems, setSearchFilterItems] = useState<any>([]);
   const [searchInput, setSearchInput] = useState<string>("");

   const searchInputOnChangeAction = (e) => {
      setSearchInput(e.target.value);
      const all_products = products.map(
         ({
            name,
            image,
            offer_price,
            regular_price,
            slug,
            short_description,
         }) => {
            return {
               name,
               image,
               offer_price,
               regular_price,
               slug,
               short_description,
            };
         }
      );

      const { filteredItme } = useSearchFilter(all_products, e.target.value);
      setSearchFilterItems(filteredItme);
   };

   useEffect(() => {
      if (pageWidth > 710) {
         setShowSmMenu(false);
      }
   }, [pageWidth]);

   return (
      <nav
         className={`fixed w-full transition-all duration-300 z-40  ${
            Pageheight != 0 ? "top-0" : " top-4 md:top-8"
         } `}
         ref={navRef}
      >
         <div
            className={`container mx-auto  px-4 rounded-md bg-white ${
               Pageheight != 0 ? "py-1  md:py-2 shadow-lg" : "py-2 md:py-4"
            }`}
         >
            <ul className="flex items-center relative">
               <li className="flex-1 " onClick={() => router.push("/")}>
                  <div className="flex   ">
                     <img
                        className="min-w-24 w-28 cursor-pointer"
                        src="https://res.cloudinary.com/dapjxqk64/image/upload/v1616398446/sunnah%20statoin/sunnah_station_png_hfs68x.png"
                        alt="logo"
                     />
                  </div>
               </li>
               <li className=" gap-5 flex  items-center relative">
                  <div className=" hidden md:block">
                     <form
                        onSubmit={(e) => {
                           if (searFilteredItems.length > 0) {
                              router.push(
                                 `/items/${searFilteredItems[0].slug}`
                              );
                           } else {
                              e.preventDefault();
                           }
                        }}
                        className={`flex items-center ${
                           showSearchBar && " border rounded-full"
                        } p-2 `}
                     >
                        <motion.div
                           whileHover={{ scale: 1.2, originX: 0 }}
                           className={`hover:text-nevyBlue outline-none focus:outline-none cursor-pointer ${
                              showSearchBar && " mx-3"
                           }`}
                           onClick={() => setShowSearchBar((prev) => !prev)}
                        >
                           <Search />
                        </motion.div>
                        <AnimatePresence exitBeforeEnter>
                           {showSearchBar && (
                              <motion.input
                                 variants={searchbarVariants}
                                 initial="initial"
                                 exit="exit"
                                 animate="animate"
                                 className={`outline-none bg-transparent focus:outline-none border-none`}
                                 type="text"
                                 placeholder="What are you looking for?"
                                 onChange={(e) => searchInputOnChangeAction(e)}
                              />
                           )}
                        </AnimatePresence>
                     </form>
                  </div>

                  <motion.li
                     whileHover={{ scale: 1.2 }}
                     className="cursor-pointer block md:hidden"
                     onClick={() => domDispatch(showSearchPage())}
                  >
                     <Search />
                  </motion.li>

                  <motion.li
                     whileHover={{ scale: 1.2 }}
                     className="cursor-pointer relative hover:text-nevyBlue "
                     onClick={() => domDispatch(showCart())}
                  >
                     <Cart />
                     {inCartProducts && inCartProducts.length > 0 && (
                        <span className="absolute top-1 right-0 bg-red-600 h-2 w-2 rounded-full  "></span>
                     )}
                  </motion.li>
                  <motion.li
                     whileHover={{ scale: 1.2 }}
                     className="cursor-pointer hidden md:block"
                     onClick={() => domDispatch(showSideNavBar())}
                  >
                     <Menu />
                  </motion.li>
                  <motion.li
                     variants={iconVariants}
                     animate={showSmMenu ? "opened" : "closed"}
                     whileHover={{ scale: 1.2 }}
                     className="cursor-pointer block md:hidden "
                     onClick={() => setShowSmMenu((prev) => !prev)}
                  >
                     <SmMenu />
                  </motion.li>
               </li>
            </ul>

            {/* navs in sm screen */}

            <SmNav
               setShowMoreCategories={setShowMoreCategories}
               showSmMenu={showSmMenu}
               setShowMoreDeals={setShowMoreDeals}
               showMoreDeals={showMoreDeals}
               showMoreCategories={showMoreCategories}
            />
         </div>

         {/* Search result */}
         <AnimatePresence>
            {searchInput.length > 0 && (
               <SearchResult
                  searFilteredItems={searFilteredItems}
                  searchInput={searchInput}
               />
            )}
         </AnimatePresence>
      </nav>
   );
};
