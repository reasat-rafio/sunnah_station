import { useCtx } from "../../store";
import { showCategorySidebar } from "../../store/actions/domActions";
import { FourGrid, SmMenu, ThreeGrid } from "../../utils/svgs/Svg";
import { ShopShortDropDown } from "./ShopShortDropDown";

interface filerSectionProps {
   setGridCount: any;
   gridCount: number;
   showMoreFilter: boolean;
   setShowMoreFilter: any;
   selectedFilter: string;
   setSelectedFilter: any;
}

export const FilterProductSection: React.FC<filerSectionProps> = ({
   setGridCount,
   gridCount,
   selectedFilter,
   setSelectedFilter,
   setShowMoreFilter,
   showMoreFilter,
}) => {
   const { domDispatch } = useCtx();

   return (
      <div className="flex gap-2 my-5 items-center xl:justify-end ">
         <span className="flex flex-1 lg:hidden text-gray-300">
            <button
               className="flex"
               onClick={() => domDispatch(showCategorySidebar())}
            >
               <SmMenu />
               <p className="font-bold text-gray-900 ">OPTION</p>
            </button>
         </span>

         <>
            <span className="hidden xl:flex gap-2">
               <span
                  onClick={() => setGridCount(4)}
                  className={`cursor-pointer hover:text-darkBlue hidden xl:block  ${
                     gridCount == 4 && "text-darkBlue"
                  }`}
               >
                  <ThreeGrid />
               </span>
               <span
                  onClick={() => setGridCount(3)}
                  className={`cursor-pointer hover:text-darkBlue  hidden xl:block ${
                     gridCount == 3 && "text-darkBlue "
                  }`}
               >
                  <FourGrid />
               </span>
            </span>

            <ShopShortDropDown
               showMoreFilter={showMoreFilter}
               selectedFilter={selectedFilter}
               setShowMoreFilter={setShowMoreFilter}
               setSelectedFilter={setSelectedFilter}
            />
         </>
      </div>
   );
};
