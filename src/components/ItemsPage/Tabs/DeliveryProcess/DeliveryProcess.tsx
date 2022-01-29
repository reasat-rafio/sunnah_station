import React from "react";
import { DeliveryGuySvg } from "../../../../utils/svgs/DeliverySvg";
import { RightArrowPointer } from "../../../../utils/svgs/Svg";
import { ShippingProcess } from "./_Data";
import { motion } from "framer-motion";
import { TabPageChangeVariants } from "../../../../../utils/motion/animation";
interface DeliveryProcessProps {}

export const DeliveryProcess: React.FC<DeliveryProcessProps> = ({}) => {
  return (
    <motion.div
      variants={TabPageChangeVariants}
      initial="inital"
      animate="animate"
      exit="exit"
      className="grid grid-cols-2 gap-3"
    >
      <section className="md:col-span-1 col-span-2">
        <DeliveryGuySvg />
      </section>
      <section className="md:col-span-1 col-span-2">
        <h2 className="text-2xl font-bold text-gray-800 my-4">
          DELIVERY/SHIPPING PROCESS
        </h2>
        {ShippingProcess.map((process, i) => (
          <p className="my-3 flex items-center" key={i}>
            <span className="">
              <RightArrowPointer />
            </span>
            <span className="ml-3 text-gray-700">{process}</span>
          </p>
        ))}
      </section>
    </motion.div>
  );
};
