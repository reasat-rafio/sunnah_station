import { RightArrowPointer } from "../../../../utils/svgs/Svg";
import { motion } from "framer-motion";
import { TabPageChangeVariants } from "../../../../utils/animation";
import ReactMarkdown from "react-markdown";

import gfm from "remark-gfm";

interface DescriptionProps {
   short_description: string;
   name: string;
   description: any;
}

export const Description: React.FC<DescriptionProps> = ({
   name,
   short_description,
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
         <h2 className="text-gray-600 my-3 font-bold">{name}</h2>
         {short_description && (
            <p className="my-3 text-gray-800">{short_description}</p>
         )}

         {description && (
            <ReactMarkdown
               className="markdown"
               plugins={[gfm]}
               children={description}
               escapeHtml={false}
            />
         )}
      </motion.div>
   );
};
