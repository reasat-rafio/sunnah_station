import { motion } from "framer-motion";
import { TabPageChangeVariants } from "../../../../utils/animation";
interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = ({}) => {
   return (
      <motion.div
         variants={TabPageChangeVariants}
         initial="inital"
         animate="animate"
         exit="exit"
      >
         Review
      </motion.div>
   );
};
