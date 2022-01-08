import { Product } from "@libs/types/landing-types";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface LgCardActionBtnsProps {
  addToTheCartAction: (product: Product, quantity: number) => void;
  productQuantity: number;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setModalContent: any;
  showActions: any;
  deal: Product;
}

// Adding product to the cart
export const LgCardActionBtns: React.FC<LgCardActionBtnsProps> = ({
  deal,
  addToTheCartAction,
  productQuantity,
}) => {
  return (
    <>
      <motion.span
        whileHover={{ scale: 1.1 }}
        className="text-white"
        onClick={(e) => {
          e.stopPropagation();
          deal.offderPrice
            ? // If offer avilable
              addToTheCartAction(deal, productQuantity)
            : // If no offer avilable
              addToTheCartAction(
                name,
                regular_price,
                productQuantity,
                id,
                image,
                slug
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
                image,
                slug
              )
            : // If no offer avilable
              addToTheCartAction(
                name,
                regular_price,
                productQuantity,
                id,
                image,
                slug
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
