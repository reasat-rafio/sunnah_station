import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCtx } from "../../store";
import { Back_To_Top } from "../../utils/svgs/Svg";
import { useClientSize } from "../../utils/hooks/useClientSIze";
import {
   showBackToTheTopAction,
   hideBackToTheTopAction,
} from "../../store/actions/domActions";
import { BackToTheTopVariants } from "../../utils/animation";

interface BackToTheTopProps {}

export const BackToTheTop: React.FC<BackToTheTopProps> = ({}) => {
   const {
      domDispatch,
      domState: { showBackToTheTop },
   } = useCtx();

   const ref = useRef(null);
   const { Pageheight, compHeight } = useClientSize(ref);

   useEffect(() => {
      if (Pageheight > 500) {
         domDispatch(showBackToTheTopAction());
      } else {
         domDispatch(hideBackToTheTopAction());
      }
   }, [Pageheight]);

   return (
      <div ref={ref}>
         <AnimatePresence>
            {showBackToTheTop && (
               <motion.a
                  variants={BackToTheTopVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover={{ y: -4 }}
                  href="#top"
                  className="flex justify-center items-center fixed right-10 bottom-10 z-50 bg-lightBlue text-white font-bold text-sm p-2 lg:p-3 hover:no-underline hover:text-white"
               >
                  <span className="mx-2">
                     <Back_To_Top />
                  </span>
                  <p className="hidden lg:block">To Top </p>
               </motion.a>
            )}
         </AnimatePresence>
      </div>
   );
};
