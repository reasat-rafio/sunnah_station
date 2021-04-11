import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCtx } from "../../store";
import { hideSideNavBar } from "../../store/actions/domAction";
import { sideBarMoreVarients } from "../../utils/animation";
import { Minus, Plus } from "../../utils/svgs/Svg";

export const navs = [
   {
      name: "Home",
      link: "/",
   },
   {
      name: "Shop",
      link: "/shop",
   },
   {
      name: "Deals",
      subNavs: [
         {
            name: "Ramadan Seal",
            link: "/speal-deals",
         },
      ],
   },
   {
      name: "Categories",
      subNavs: [
         {
            name: "Food",
            link: "/shop/food",
         },
         {
            name: "Men wearing",
            link: "/shop/mens-wearings",
         },
         {
            name: "Womens wearing",
            link: "/shop/womens-wearings",
         },
         {
            name: "Art and aesthetic",
            link: "/shop/art-aesthetic",
         },
         {
            name: "others",
            link: "/shop/others",
         },
      ],
   },
   {
      name: "New arrivals",
      link: "/new-arrivals",
   },
   {
      name: "Blog",
      link: "/blog",
   },
];

interface MoreSubDealsProps {
   nm: string;
   subNavs: SubNavs[];
   showMore: boolean;
   setShowMore: any;
}

interface SubNavs {
   name: string;
   link: string;
}

// This two JSX Components will show more and less subnavs based on the showMoreDeals and showMoreCategories states
export const MoreSubNavs: React.FC<MoreSubDealsProps> = ({
   nm,
   subNavs,
   showMore,
   setShowMore,
}) => {
   const {
      domDispatch,
      userDispatch,
      domState: { showSidebar },
      userState: { isLoggedIn },
   } = useCtx();
   return (
      <li>
         <div
            className="flex items-center "
            onClick={() => {
               setShowMore((prevState) => !prevState);
            }}
         >
            <p className="flex-1 sideBarMainNav cursor-pointer">{nm}</p>
            {showMore ? <Minus /> : <Plus />}
         </div>

         <AnimatePresence exitBeforeEnter>
            {showMore && (
               <motion.ul
                  initial="initial"
                  animate="animate"
                  variants={sideBarMoreVarients}
                  exit="exit"
               >
                  {subNavs.map(({ link, name }, i: number) => (
                     <li key={i} onClick={() => domDispatch(hideSideNavBar())}>
                        <Link href={link}>
                           <a className="sideBarMainNavMore">{name}</a>
                        </Link>
                     </li>
                  ))}
               </motion.ul>
            )}
         </AnimatePresence>
      </li>
   );
};
