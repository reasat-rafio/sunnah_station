import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCtx } from "../../store";
import { hideCategorySidebar } from "../../store/actions/domActions";
import { ChangeCategoryVariants } from "../../utils/animation";
import { MoreCtg } from "../../utils/svgs/Svg";
import { Categories } from "./_Data";

interface ProductCategoriesProps {}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({}) => {
   // router
   const router = useRouter();
   const { product } = router.query;
   const [showMoreFood, setShowMoreFood] = useState<boolean>(false);
   const [ShowMoreMensWearings, SetShowMoreMensWearings] = useState<boolean>(
      false
   );
   const [SowMoreWomensWearings, SetSowMoreWomensWearings] = useState<boolean>(
      false
   );
   const [
      showMoreHomeAppliances,
      SetShowMoreHomeAppliances,
   ] = useState<boolean>(false);

   // Show more action
   const showSubCategoryAction = (name: string) => {
      name == "food" && setShowMoreFood((prev) => !prev);

      name == "mens-wearings" && SetShowMoreMensWearings((prev) => !prev);

      name == "womens-wearings" && SetSowMoreWomensWearings((prev) => !prev);

      name == "home-appliances" && SetShowMoreHomeAppliances((prev) => !prev);
   };

   // global state
   const { domDispatch } = useCtx();

   // Side Menu close onClick action
   const closeSideMenubarAction = () => {
      domDispatch(hideCategorySidebar());
   };

   const sub_ctg = (sub_category, state) => {
      return (
         <>
            <AnimatePresence exitBeforeEnter>
               {state && (
                  <motion.ul
                     className="ml-4"
                     variants={ChangeCategoryVariants}
                     initial="inital"
                     animate="animate"
                     exit="exit"
                  >
                     {sub_category.map((sub_c, i) => (
                        <Link href={`/shop/${sub_c.sub_link}`} key={i}>
                           <li
                              key={i}
                              className={`hover:text-darkBlue cursor-pointer my-2 ${
                                 product == sub_c.sub_link && "text-darkBlue"
                              }`}
                              onClick={closeSideMenubarAction}
                           >
                              <p>{sub_c.sub_category_name}</p>
                           </li>
                        </Link>
                     ))}
                  </motion.ul>
               )}
            </AnimatePresence>
         </>
      );
   };

   const itemsWithOutAnySubCategoriesClickACtion = (
      sub_category,
      to: string
   ) => {
      if (!sub_category) {
         router.push(`/shop/${to}`);
      }
   };

   const outputFood = (name: string, state: any, sub_category) => {
      return name === "food" && sub_ctg(sub_category, state);
   };

   const outputMesnWearings = (name: string, state: any, sub_category) => {
      return name === "mens-wearings" && sub_ctg(sub_category, state);
   };
   const outputWomensWearings = (name: string, state: any, sub_category) => {
      return name === "womens-wearings" && sub_ctg(sub_category, state);
   };
   const outPutHomeAppliances = (name: string, state: any, sub_category) => {
      return (
         name === "home-appliances" && state && sub_ctg(sub_category, state)
      );
   };

   const UpOrDownArrowAction = (state) => {
      return state ? (
         <span className={`transform rotate-180 transition-all`}>
            <MoreCtg />
         </span>
      ) : (
         <span className={`transition-all `}>
            <MoreCtg />
         </span>
      );
   };

   return (
      <div className="my-5 px-5 font-text outline-none">
         <h3 className="font-nav text-lg font-medium my-4">
            PRODUCT CATEGORIES
         </h3>
         <ul className=" ">
            {Categories.map(({ category_name, sub_category, link }, i) => (
               <li key={i} className="my-4 text-gray-600">
                  <div
                     className="flex justify-end items-center hover:text-darkBlue cursor-pointer"
                     onClick={() => showSubCategoryAction(link)}
                  >
                     <p
                        className={`flex-1 ${
                           product == link && "text-darkBlue"
                        }`}
                        onClick={() =>
                           itemsWithOutAnySubCategoriesClickACtion(
                              sub_category,
                              link
                           )
                        }
                     >
                        {" "}
                        {category_name}
                     </p>

                     {/*   icon up/down */}
                     {sub_category &&
                        link === "food" &&
                        UpOrDownArrowAction(showMoreFood)}

                     {sub_category &&
                        link === "mens-wearings" &&
                        UpOrDownArrowAction(ShowMoreMensWearings)}

                     {sub_category &&
                        link === "womens-wearings" &&
                        UpOrDownArrowAction(SowMoreWomensWearings)}

                     {sub_category &&
                        link === "home-appliances" &&
                        UpOrDownArrowAction(showMoreHomeAppliances)}
                  </div>

                  {/* sub ctg */}
                  {sub_category && outputFood(link, showMoreFood, sub_category)}
                  {sub_category &&
                     outputMesnWearings(
                        link,
                        ShowMoreMensWearings,
                        sub_category
                     )}
                  {sub_category &&
                     outputWomensWearings(
                        link,
                        SowMoreWomensWearings,
                        sub_category
                     )}
                  {sub_category &&
                     outPutHomeAppliances(
                        link,
                        showMoreHomeAppliances,
                        sub_category
                     )}
               </li>
            ))}
         </ul>
      </div>
   );
};
