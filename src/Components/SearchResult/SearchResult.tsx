import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { searchBarAnimation } from "../../utils/animation";

interface SearchResultProps {
   searFilteredItems: any;
   searchInput: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({
   searFilteredItems,
   searchInput,
}) => {
   return (
      <motion.div
         className="container my-2  mx-auto flex justify-end font-title"
         initial="initial"
         animate="animate"
         exit="exit"
         variants={searchBarAnimation}
      >
         <ul className="w-7/12 bg-white max-h-96 rounded-sm overflow-auto p-3 divide-y-2 shadow-md disable-scrollbars hidden md:block">
            {searFilteredItems && searFilteredItems.length > 0 ? (
               searFilteredItems.map(
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
                              <p className="truncate font-medium">{name}</p>
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
                  <span className="font-semibold ml-2">{searchInput}</span>
               </p>
            )}
         </ul>
      </motion.div>
   );
};
