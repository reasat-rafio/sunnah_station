import {
   Box,
   Cross,
   Fire,
   Lignting_bolt,
   LogOut,
   Phone,
   User,
} from "../../utils/svgs/Svg";
import Link from "next/link";
import { useCtx } from "../../store";
import { hideSideNavBar } from "../../store/actions/domActions";
import { motion, AnimatePresence } from "framer-motion";
import { sideBarVarients, sideBarMoreVarients } from "../../utils/animation";
import { useRef, useState } from "react";
import { useOutsideAlerter } from "../../utils/hooks/useOutSideClickAlerter";
import { HIDE_SIDE_BAR } from "../../store/types";
import { navs, MoreSubNavs } from "./_helper";
import { getSession, signIn, signOut } from "next-auth/client";
import { logOutAaction } from "../../store/actions/userAction";

interface SideMenuBarProps {}
interface Navs {
   name: string;
   link?: string;
   subNavs?: SubNavs[];
}

interface SubNavs {
   name: string;
   link: string;
}

export const NavSideBars: React.FC<SideMenuBarProps> = ({}) => {
   const {
      domDispatch,
      userDispatch,
      domState: { showSidebar },
      userState: { isLoggedIn },
   } = useCtx();
   // Side Menu close onClick action
   const closeSideMenubarAction = () => {
      domDispatch(hideSideNavBar());
   };
   // sidebar ref
   const sidebarRef = useRef<HTMLDivElement>(null);
   useOutsideAlerter(sidebarRef, HIDE_SIDE_BAR, domDispatch);
   // Show more deals and categories state
   const [showMoreDeals, setShowMoreDeals] = useState<boolean>(false);
   const [showMoreCategories, setShowMoreCategories] = useState<boolean>(false);
   //cookies

   // // Logout action
   const logOut = () => {
      userDispatch(logOutAaction());
      signOut();
   };

   // Chaning nav action
   const navAction = () => {
      domDispatch(hideSideNavBar());
   };

   return (
      <>
         <div
            className={`fixed h-full w-full right-0 top-0 left-0 bottom-0  transition-all duration-300${
               showSidebar ? " z-40  block " : " z-0 hidden "
            }`}
            style={{ background: "rgba(0, 0, 0, 0.7)" }}
         ></div>
         <AnimatePresence exitBeforeEnter>
            {showSidebar && (
               <motion.section
                  ref={sidebarRef}
                  variants={sideBarVarients}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={`fixed h-full md:w-96 w-full  right-0 top-0 bg-white p-8 z-50 overflow-auto`}
               >
                  <motion.span
                     onClick={closeSideMenubarAction}
                     className="hover:text-nevyBlue mt-3 "
                  >
                     <Cross />
                  </motion.span>
                  <ul className="py-8 border-b transition-all duration-300 ">
                     {navs.map(({ name, link, subNavs }: Navs, i: number) => (
                        <div key={i}>
                           {!subNavs ? (
                              <li onClick={navAction}>
                                 <Link href={link}>
                                    <a className="flex sideBarMainNav">
                                       {name}
                                    </a>
                                 </Link>
                              </li>
                           ) : (
                              <>
                                 {name == "Deals" && (
                                    <MoreSubNavs
                                       nm={name}
                                       subNavs={subNavs}
                                       showMore={showMoreDeals}
                                       setShowMore={setShowMoreDeals}
                                    />
                                 )}

                                 {name == "Categories" && (
                                    <MoreSubNavs
                                       nm={name}
                                       subNavs={subNavs}
                                       showMore={showMoreCategories}
                                       setShowMore={setShowMoreCategories}
                                    />
                                 )}
                              </>
                           )}
                        </div>
                     ))}
                  </ul>
                  <div className="my-6 border-b">
                     {/* Assistance */}
                     <div className="flex ">
                        <div>
                           <Phone height={33} width={33} />
                        </div>

                        <div className="px-4 font-nav">
                           <h3 className="text-lg ">Assistance</h3>
                           <a
                              href="mailto:sunnah.station.bd@gmail.com"
                              className="sideBarUtilsChildren "
                           >
                              sunnah.station.bd@gmail.com
                           </a>
                           <p className="sideBarUtilsChildren">016 8688 2085</p>
                        </div>
                     </div>
                     {/* Delivery */}
                     <div className="flex my-4">
                        <div>
                           <Box />
                        </div>
                        <div className="px-4 font-nav">
                           <h3 className="text-lg ">Delivery</h3>
                           <p className="sideBarUtilsChildren">
                              Inside Dhaka: 1 working days
                           </p>
                           <p className="sideBarUtilsChildren">
                              Ourside Dhaka: 2-4 working days
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="cursor-pointer">
                     {isLoggedIn ? (
                        <div
                           className="sideBarMainNav flex justify-between"
                           onClick={logOut}
                        >
                           <button>Logout</button>
                           <span className="my-auto">
                              <LogOut />
                           </span>
                        </div>
                     ) : (
                        <div
                           className="sideBarMainNav flex justify-between"
                           onClick={navAction}
                        >
                           <Link href="/authentication/signin">
                              <a className="hover:no-underline">
                                 Login / Register
                              </a>
                           </Link>
                           <span className="my-auto">
                              <User />
                           </span>
                        </div>
                     )}
                  </div>
               </motion.section>
            )}
         </AnimatePresence>
      </>
   );
};
