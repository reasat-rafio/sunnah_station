import { RightArrowPointer } from "../../../../utils/svgs/Svg";
import { Process, Warranty } from "./_Data";
import { motion } from "framer-motion";
import { TabPageChangeVariants } from "../../../../../utils/motion/animation";
interface ReturnRefundsProps {}

export const ReturnRefunds: React.FC<ReturnRefundsProps> = ({}) => {
  return (
    <motion.div
      variants={TabPageChangeVariants}
      initial="inital"
      animate="animate"
      exit="exit"
      className="grid grid-cols-2 gap-3"
    >
      <section className="md:col-span-1 col-span-2">
        <h2 className="text-2xl font-bold text-gray-800 my-4">
          RETURN/REPLACEMENT WARRANTY
        </h2>
        {Warranty.map((w, i) => (
          <p className="my-3 flex items-center text-gray-700" key={i}>
            <span className="">
              <RightArrowPointer />
            </span>
            <span className="ml-3">{w}</span>
          </p>
        ))}
      </section>
      <section className="md:col-span-1 col-span-2">
        <h2 className="text-2xl font-bold text-gray-800 my-4">
          REFUND PROCESS
        </h2>
        {Process.map((p, i) => (
          <p className="my-3 flex items-center text-gray-700" key={i}>
            <span className="">
              <RightArrowPointer />
            </span>
            <span className="ml-3 ">{p}</span>
          </p>
        ))}
      </section>
    </motion.div>
  );
};
