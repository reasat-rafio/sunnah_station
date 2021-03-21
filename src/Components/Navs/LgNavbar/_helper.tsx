import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { linkVariants, sideBarMoreVarients } from "../../../utils/animation";

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
            name: "Flash Deals",
            link: "/speal-deals",
         },
         {
            name: "undefind",
            link: "/",
         },
      ],
   },
   {
      name: "Categories",
      subNavs: [
         {
            name: "Food",
            link: "#",
         },
         {
            name: "Men wearing",
            link: "#",
         },
         {
            name: "Womens wearing",
            link: "#",
         },
         {
            name: "Art and aesthetic",
            link: "#",
         },
         {
            name: "others",
            link: "#",
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
export const SmMoreSubNavs: React.FC<MoreSubDealsProps> = ({
   nm,
   subNavs,
   showMore,
   setShowMore,
}) => {
   return (
      <li>
         <div
            className="flex items-center "
            onClick={() => setShowMore((prevState) => !prevState)}
         >
            <p className="flex-1 sideBarMainNav cursor-pointer">{nm}</p>
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
                     <motion.li key={i}>
                        <Link href={link}>
                           <a className="sideBarMainNavMore">{name}</a>
                        </Link>
                     </motion.li>
                  ))}
               </motion.ul>
            )}
         </AnimatePresence>
      </li>
   );
};
