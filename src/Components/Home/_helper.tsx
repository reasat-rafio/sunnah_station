import { AnimatePresence, motion } from "framer-motion";

export const CardCart = ({ pageWidth }) => {
   return (
      <>
         <motion.svg
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="p-1 rounded-md bg-nevyBlue text-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={27}
            height={27}
            fill="currentColor"
         >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
         </motion.svg>
      </>
   );
};

export const Love = ({ pageWidth }) => {
   return (
      <motion.svg
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 10 }}
         className="p-1 rounded-md bg-nevyBlue text-white cursor-pointer"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         width={27}
         height={27}
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
         />
      </motion.svg>
   );
};

export const View = ({ pageWidth }) => {
   return (
      <motion.svg
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 10 }}
         className="p-1 rounded-md bg-nevyBlue text-white cursor-pointer"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         width={27}
         height={27}
         viewBox="0 0 24 24"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
         />
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
         />
      </motion.svg>
   );
};

// Adding product to the cart
export const LgCardActionBtns = ({
   offer_price,
   addToTheCartAction,
   name,
   productQuantity,
   id,
   image,
   regular_price,
   showActions,
   i,
   pageWidth,
   setShowModal,
   slug,
   description,
   setModalContent,
}) => {
   return (
      <>
         <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-white"
            onClick={(e) => {
               e.stopPropagation();
               offer_price
                  ? // If offer avilable
                    addToTheCartAction(
                       name,
                       offer_price,
                       productQuantity,
                       id,
                       image
                    )
                  : // If no offer avilable
                    addToTheCartAction(
                       name,
                       regular_price,
                       productQuantity,
                       id,
                       image
                    );
            }}
         >
            <AnimatePresence exitBeforeEnter>
               {showActions[i] && <CardCart pageWidth={pageWidth} />}
            </AnimatePresence>
         </motion.span>
         <motion.span className="text-white" whileHover={{ scale: 1.1 }}>
            <AnimatePresence exitBeforeEnter>
               {showActions[i] && <Love pageWidth={pageWidth} />}
            </AnimatePresence>
         </motion.span>
         <motion.span
            className="text-white"
            whileHover={{ scale: 1.1 }}
            onClick={(e) => {
               e.stopPropagation();
               setShowModal(true);
               setModalContent({
                  name,
                  offer_price,
                  productQuantity,
                  image,
                  id,
                  slug,
                  regular_price,
                  description,
               });
            }}
         >
            <AnimatePresence exitBeforeEnter>
               {showActions[i] && <View pageWidth={pageWidth} />}
            </AnimatePresence>
         </motion.span>
      </>
   );
};

export const SmCardActionBtns = ({
   offer_price,
   addToTheCartAction,
   name,
   productQuantity,
   id,
   image,
   regular_price,
   showActions,
   i,
   setShowModal,
   pageWidth,
   setModalContent,
   description,
   slug,
}) => {
   return (
      <>
         <span
            className="text-white"
            onClick={(e) => {
               e.stopPropagation();
               offer_price
                  ? // If offer avilable
                    addToTheCartAction(
                       name,
                       offer_price,
                       productQuantity,
                       id,
                       image
                    )
                  : // If no offer avilable
                    addToTheCartAction(
                       name,
                       regular_price,
                       productQuantity,
                       id,
                       image
                    );
            }}
         >
            <CardCart pageWidth={pageWidth} />
         </span>
         <span className="text-white">
            <Love pageWidth={pageWidth} />
         </span>
         <span
            className="text-white"
            onClick={(e) => {
               e.stopPropagation();
               setShowModal(true);
               setModalContent({
                  name,
                  offer_price,
                  productQuantity,
                  image,
                  id,
                  regular_price,
                  slug,
                  description,
               });
            }}
         >
            <View pageWidth={pageWidth} />
         </span>
      </>
   );
};
