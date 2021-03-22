import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useCtx } from "../../../store";
import {
   showCart,
   showSearchPage,
   showSideNavBar,
} from "../../../store/actions/domActions";
import {
   iconVariants,
   menuVariants,
   searchbarVariants,
   linkVariants,
   sideBarMoreVarients,
   arrowVariants,
} from "../../../utils/animation";
import { useClientSize } from "../../../utils/hooks/useClientSIze";
import {
   Search,
   Cart,
   Menu,
   SmMenuToggle,
   DownArrowSm,
} from "../../../utils/svgs/Svg";
import { navs } from "./_helper";

interface LgNavbarProps {}

export const LgNavbar: React.FC<LgNavbarProps> = ({}) => {
   const {
      domDispatch,
      domState: { showSidebar, pageWidth },
      cartState: { inCartProducts },
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

   useEffect(() => {
      if (pageWidth > 710) {
         setShowSmMenu(false);
      }
   }, [pageWidth]);

   // router
   const router = useRouter();

   return (
      <nav
         className={`fixed w-full transition-all duration-300 z-40  ${
            Pageheight != 0 ? "top-0" : "top-8"
         } `}
         ref={navRef}
      >
         <ul
            className={`container mx-auto  px-4 rounded-md bg-white ${
               Pageheight != 0 ? "py-2 shadow-lg" : "py-3 md:py-4"
            }`}
         >
            <div className="flex items-center relative">
               <div className="flex-1">
                  <li className="flex   ">
                     <img
                        className="min-w-24 w-28"
                        onClick={() => router.push("/")}
                        src="https://res.cloudinary.com/dapjxqk64/image/upload/v1616398446/sunnah%20statoin/sunnah_station_png_hfs68x.png"
                        alt="logo"
                     />
                  </li>
               </div>
               <div className=" gap-5 flex  items-center ">
                  <li className=" hidden md:block">
                     <div
                        className={`flex items-center ${
                           showSearchBar && " border rounded-full"
                        } p-2 `}
                     >
                        <motion.button
                           whileHover={{ scale: 1.2, originX: 0 }}
                           className={`hover:text-nevyBlue outline-none  focus:outline-none ${
                              showSearchBar && " mx-3"
                           }`}
                           onClick={() => setShowSearchBar((prev) => !prev)}
                        >
                           <Search />
                        </motion.button>
                        <AnimatePresence exitBeforeEnter>
                           {showSearchBar && (
                              <motion.input
                                 variants={searchbarVariants}
                                 initial="initial"
                                 exit="exit"
                                 animate="animate"
                                 className={`outline-none bg-transparent`}
                                 type="text"
                                 placeholder="What are you looking for?"
                              />
                           )}
                        </AnimatePresence>
                     </div>
                  </li>

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
                     <SmMenuToggle />
                  </motion.li>
               </div>
            </div>

            {/* navs in sm screen */}
            <div className=" ">
               <AnimatePresence exitBeforeEnter>
                  {showSmMenu && (
                     <motion.ul
                        variants={menuVariants}
                        className="font-title flex gap-2 flex-col justify-center items-center text-xl shadow-sm"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                     >
                        {navs.map(({ name, link, subNavs }, i: number) => (
                           <div key={i}>
                              {!subNavs ? (
                                 <motion.li variants={linkVariants}>
                                    <Link href={link}>
                                       <a className="flex smNavBarCtg hover:text-lightBlue ">
                                          {name}
                                       </a>
                                    </Link>
                                 </motion.li>
                              ) : (
                                 <>
                                    {name == "Deals" && (
                                       <motion.li variants={linkVariants}>
                                          <div
                                             className="flex items-center justify-center "
                                             onClick={() =>
                                                setShowMoreDeals(
                                                   (prevState) => !prevState
                                                )
                                             }
                                          >
                                             <p className="flex-1 smNavBarCtg  hover:text-lightBlue cursor-pointer">
                                                {name}
                                             </p>

                                             <motion.span
                                                variants={arrowVariants}
                                                animate={
                                                   showMoreDeals
                                                      ? "opened"
                                                      : "closed"
                                                }
                                             >
                                                <DownArrowSm />
                                             </motion.span>
                                          </div>

                                          <AnimatePresence exitBeforeEnter>
                                             {showMoreDeals && (
                                                <motion.ul
                                                   initial="initial"
                                                   animate="animate"
                                                   variants={
                                                      sideBarMoreVarients
                                                   }
                                                   exit="exit"
                                                   className="flex flex-col justify-center items-center"
                                                >
                                                   {subNavs.map(
                                                      (
                                                         { link, name },
                                                         i: number
                                                      ) => (
                                                         <motion.li key={i}>
                                                            <Link href={link}>
                                                               <a className="smSubNavCtg">
                                                                  {name}
                                                               </a>
                                                            </Link>
                                                         </motion.li>
                                                      )
                                                   )}
                                                </motion.ul>
                                             )}
                                          </AnimatePresence>
                                       </motion.li>
                                    )}

                                    {name == "Categories" && (
                                       <motion.li variants={linkVariants}>
                                          <div
                                             className="flex items-center justify-center "
                                             onClick={() =>
                                                setShowMoreCategories(
                                                   (prevState) => !prevState
                                                )
                                             }
                                          >
                                             <p className="flex-1 smNavBarCtg  cursor-pointer hover:text-lightBlue">
                                                {name}
                                             </p>

                                             <motion.span
                                                variants={arrowVariants}
                                                animate={
                                                   showMoreCategories
                                                      ? "opened"
                                                      : "closed"
                                                }
                                             >
                                                <DownArrowSm />
                                             </motion.span>
                                          </div>

                                          <AnimatePresence exitBeforeEnter>
                                             {showMoreCategories && (
                                                <motion.ul
                                                   initial="initial"
                                                   animate="animate"
                                                   variants={
                                                      sideBarMoreVarients
                                                   }
                                                   exit="exit"
                                                   className="flex flex-col justify-center items-center"
                                                >
                                                   {subNavs.map(
                                                      (
                                                         { link, name },
                                                         i: number
                                                      ) => (
                                                         <motion.li key={i}>
                                                            <Link href={link}>
                                                               <a className="smSubNavCtg">
                                                                  {name}
                                                               </a>
                                                            </Link>
                                                         </motion.li>
                                                      )
                                                   )}
                                                </motion.ul>
                                             )}
                                          </AnimatePresence>
                                       </motion.li>
                                    )}
                                 </>
                              )}
                           </div>
                        ))}
                        <motion.li
                           className="flex my-3"
                           variants={sideBarMoreVarients}
                        >
                           <button className="bg-lightBlue py-2 rounded-full text-white font-text font-bold  w-52 m-auto">
                              Login
                           </button>
                        </motion.li>
                     </motion.ul>
                  )}
               </AnimatePresence>
            </div>
         </ul>
      </nav>
   );
};
