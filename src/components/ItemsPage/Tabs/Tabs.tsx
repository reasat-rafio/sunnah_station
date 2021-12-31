import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabVariants } from "../../../utils/animation";
import { Description } from "./Description/Description";
import { DeliveryProcess } from "./DeliveryProcess/DeliveryProcess";
import { ReturnRefunds } from "./ReturnRefund/ReturnRefunds";
import { Reviews } from "./Reviews/Reviews";
import { Details, Process, Return, Star } from "../../../utils/svgs/Svg";

interface TabsProps {
   name: string;

   description: any;
}

export const Tabs: React.FC<TabsProps> = ({
   name,

   description,
}) => {
   const [tab, setTab] = useState<string>("description");

   return (
      <>
         <div className="w-full  border-t  ">
            <ul className="  container m-auto flex justify-center items-center gap-12 font-nav lg:font-semibold  font-medium text-lg  border-b">
               <li
                  onClick={() => setTab("description")}
                  className={`py-5 cursor-pointer relative  ${
                     tab === "description" ? "text-gray-800" : "text-gray-500"
                  }`}
               >
                  <span className="lg:block text-lg hidden ">DESCRIPTION</span>
                  <span className="block lg:hidden">
                     <Details />
                  </span>
                  <AnimatePresence exitBeforeEnter>
                     {tab === "description" && (
                        <motion.span
                           variants={TabVariants}
                           initial="inital"
                           animate="animate"
                           exit="exit"
                           className="absolute top-0 left-0 h-1 w-full bg-nevyBlue "
                        ></motion.span>
                     )}
                  </AnimatePresence>
               </li>
               <li
                  onClick={() => setTab("delivery_process")}
                  className={`py-5 cursor-pointer relative  ${
                     tab === "delivery_process"
                        ? "text-gray-800"
                        : "text-gray-500"
                  }`}
               >
                  <span className="lg:block text-lg hidden">
                     DELIVERY PROCESS
                  </span>
                  <span className="block lg:hidden">
                     <Process />
                  </span>
                  <AnimatePresence exitBeforeEnter>
                     {tab === "delivery_process" && (
                        <motion.span
                           variants={TabVariants}
                           initial="inital"
                           animate="animate"
                           exit="exit"
                           className="absolute top-0 left-0 h-1 w-full bg-nevyBlue"
                        ></motion.span>
                     )}
                  </AnimatePresence>
               </li>
               <li
                  onClick={() => setTab("return_refund")}
                  className={`py-5 cursor-pointer relative  ${
                     tab === "return_refund" ? "text-gray-800" : "text-gray-500"
                  }`}
               >
                  <span className="lg:block text-lg hidden">
                     RETURN & REFUND
                  </span>
                  <span className="block lg:hidden">
                     <Return />
                  </span>
                  <AnimatePresence exitBeforeEnter>
                     {tab === "return_refund" && (
                        <motion.span
                           variants={TabVariants}
                           initial="inital"
                           animate="animate"
                           exit="exit"
                           className="absolute top-0 left-0 h-1 w-full bg-nevyBlue"
                        ></motion.span>
                     )}
                  </AnimatePresence>
               </li>
               <li
                  onClick={() => setTab("reviews")}
                  className={`py-5 cursor-pointer relative  ${
                     tab === "reviews" ? "text-gray-800" : "text-gray-500"
                  }`}
               >
                  <span className="lg:block text-lg hidden">REVIEWS</span>
                  <span className="block lg:hidden">
                     <Star />
                  </span>
                  <AnimatePresence exitBeforeEnter>
                     {tab === "reviews" && (
                        <motion.span
                           variants={TabVariants}
                           initial="inital"
                           animate="animate"
                           exit="exit"
                           className="absolute top-0 left-0 h-1 w-full bg-nevyBlue"
                        ></motion.span>
                     )}
                  </AnimatePresence>
               </li>
            </ul>
         </div>
         <div className="w-full px-3">
            <div className=" container mx-auto border-b py-3 font-text text-gray-400">
               <AnimatePresence exitBeforeEnter>
                  {tab === "description" && (
                     <Description name={name} description={description} />
                  )}
               </AnimatePresence>
               <AnimatePresence exitBeforeEnter>
                  {tab === "delivery_process" && <DeliveryProcess />}
               </AnimatePresence>
               <AnimatePresence exitBeforeEnter>
                  {tab === "return_refund" && <ReturnRefunds />}
               </AnimatePresence>
               <AnimatePresence exitBeforeEnter>
                  {tab === "reviews" && <Reviews />}
               </AnimatePresence>
            </div>
         </div>
      </>
   );
};
