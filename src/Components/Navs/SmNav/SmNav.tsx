import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
   arrowVariants,
   linkVariants,
   menuVariants,
   sideBarMoreVarients,
} from "../../../utils/animation";
import { DownArrowSm } from "../../../utils/svgs/Svg";
import { navs } from "../LgNavbar/_helper";

interface SmNavProps {
   setShowMoreCategories: any;
   showSmMenu: any;
   setShowMoreDeals: any;
   showMoreDeals: any;
   showMoreCategories: boolean;
}

export const SmNav: React.FC<SmNavProps> = ({
   setShowMoreCategories,
   showSmMenu,
   setShowMoreDeals,
   showMoreDeals,
   showMoreCategories,
}) => {
   return (
      <div className=" ">
         <AnimatePresence exitBeforeEnter>
            {showSmMenu && (
               <motion.ul
                  variants={menuVariants}
                  className="font-title flex gap-2 flex-col justify-center items-center text-xl shadow-sm "
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
                                       <p className="flex-1 smNavBarCtg  cursor-pointer hover:text-lightBlue">
                                          {name}
                                       </p>

                                       <motion.span
                                          variants={arrowVariants}
                                          animate={
                                             showMoreDeals ? "opened" : "closed"
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
                                             variants={sideBarMoreVarients}
                                             exit="exit"
                                             className="flex flex-col justify-center items-center"
                                          >
                                             {subNavs.map(
                                                ({ link, name }, i: number) => (
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
                                             variants={sideBarMoreVarients}
                                             exit="exit"
                                             className="flex flex-col justify-center items-center"
                                          >
                                             {subNavs.map(
                                                ({ link, name }, i: number) => (
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
   );
};
