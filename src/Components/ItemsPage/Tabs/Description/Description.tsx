import { RightArrowPointer } from "../../../../utils/svgs/Svg";
import { motion } from "framer-motion";
import { TabPageChangeVariants } from "../../../../utils/animation";
import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";

interface DescriptionProps {
   name: string;
   description: any;
}

export const Description: React.FC<DescriptionProps> = ({
   name,
   description,
}) => {
   return (
      <motion.div
         variants={TabPageChangeVariants}
         initial="inital"
         animate="animate"
         exit="exit"
         className=""
      >
         <h2 className="text-gray-600 my-3 font-bold  md:text-lgTitle text-smTitle ">
            {name}
         </h2>

         {description && (
            <ReactMarkdown
               className="prose max-w-none"
               plugins={[gfm]}
               children={description}
               escapeHtml={false}
            />
         )}
      </motion.div>
   );
};
