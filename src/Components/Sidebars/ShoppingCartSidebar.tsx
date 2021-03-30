import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useCtx } from "../../store";
import { hideCart } from "../../store/actions/domActions";
import { HIDE_CART_SIDEBAR } from "../../store/types";
import { sideBarVarients } from "../../utils/animation";
import { useOutsideAlerter } from "../../utils/hooks/useOutSideClickAlerter";
import { SmCross, Cross, EmptyCart } from "../../utils/svgs/Svg";
import { useRouter } from "next/router";
import { removeFromCart } from "../../store/actions/CartAction";
import Image from "next/image";

interface ShoppingCartSideBarProps {}

export const ShoppingCartSideBar: React.FC<ShoppingCartSideBarProps> = ({}) => {
   // Global store
   const {
      domDispatch,
      cartDispatch,
      domState: { showCartSidebar },
      cartState: { inCartProducts },
      cartState,
   } = useCtx();

   // items subtotal
   const [subTotal, setSubTotal] = useState<number>(0);
   //  doing the sum of the items price
   useEffect(() => {
      if (inCartProducts && inCartProducts.length > 0) {
         const _subtotal = inCartProducts.reduce(
            (result: number, { subtotal }) => result + subtotal,
            0
         );
         setSubTotal(_subtotal);
      } else {
         setSubTotal(0);
      }
   }, [cartState]);

   // router
   const router = useRouter();

   // Item onClick Funtion
   const ItemOnCLickAction = (id: string) => {
      router.push(`/items/${id}`);
      domDispatch({
         type: HIDE_CART_SIDEBAR,
      });
   };

   // Removing item from the cart action
   const removeFromTheCartAction = (id: string) => {
      cartDispatch(removeFromCart(id));
   };

   // redirectingToCartPageAction
   const redirectingToCartPageAction = () => {
      domDispatch({
         type: HIDE_CART_SIDEBAR,
      });
      router.push("/cart");
   };

   // Cart Sidebar ref
   const cartSidebarRef = useRef<HTMLDivElement>(null);
   useOutsideAlerter(cartSidebarRef, HIDE_CART_SIDEBAR, domDispatch);
   return (
      <>
         <div
            className={`fixed h-full w-full right-0 top-0 left-0 bottom-0  transition-all duration-300 ${
               showCartSidebar ? " z-40 block" : "z-0 hidden"
            }`}
            style={{ background: "rgba(0, 0, 0, 0.7)" }}
         />
         <AnimatePresence exitBeforeEnter>
            {showCartSidebar && (
               <motion.div
                  ref={cartSidebarRef}
                  variants={sideBarVarients}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={`fixed h-full md:w-96 w-full  right-0 top-0 bg-white  z-50 overflow-auto flex flex-col`}
               >
                  {/* Header */}
                  <div className="flex p-5 border-b  font-bold text-xl">
                     <h2 className="flex-1 font-title">SHOPPING CART</h2>
                     <motion.span
                        className="hover:text-nevyBlue"
                        whileHover={{ scale: 1.2 }}
                        onClick={() => domDispatch(hideCart())}
                     >
                        <Cross />
                     </motion.span>
                  </div>
                  {/* Selected products */}
                  <div className="flex-1 border-b  ">
                     {inCartProducts && inCartProducts.length > 0 ? (
                        inCartProducts.map(
                           ({ name, img, price, quantity, id, subtotal }, i: number) => {
                              return (
                                 <div className=" text-sm font-title py-3 border-b hover:bg-gray-50  flex  justify-center items-center cursor-pointer" key={i}>
                                    <Image
                                       src={img[0].url || img}
                                       alt={name}
                                       layout="intrinsic"
                                       height={"100%"}
                                       width={"100%"}
                                    />

                                    <div
                                       className="flex-1 "
                                       onClick={() => ItemOnCLickAction(id)}
                                    >
                                       <h2 className="font-bold">{name}</h2>
                                       <div className="py-3">
                                          <span className="text-gray-400">
                                             {quantity} x
                                          </span>
                                          <span className="text-lightBlue ml-2 font-bold">
                                             ৳{price}
                                          </span>
                                       </div>
                                    </div>
                                    <span
                                       className="px-4 "
                                       onClick={() =>
                                          removeFromTheCartAction(id)
                                       }
                                    >
                                       <SmCross />
                                    </span>
                                 </div>
                              );
                           }
                        )
                     ) : (
                        <div className="flex flex-col items-center my-10 gap-5">
                           <span>
                              <EmptyCart />
                           </span>
                           <div className="flex flex-col items-center gap-2">
                              <h2 className="font-title font-medium text-lg">
                                 NO PRODUCTS IN THE CART.
                              </h2>
                              <motion.button
                                 onClick={() => {
                                    domDispatch(hideCart());
                                    router.push("/shop");
                                 }}
                                 whileHover={{ scale: [1, 1.1, 1, 1.1, 1] }}
                                 className="bg-gradient-to-r from-blue-500 to-lightBlue text-white rounded-md p-3 font-text text-sm font-bold"
                              >
                                 RETURN TO THE SHOP
                              </motion.button>
                           </div>
                        </div>
                     )}
                  </div>
                  {/* Footer (Checkout) */}
                  <div className="py-4 flex flex-col justify-center gap-2 p-5">
                     <div className="flex font-text font-bold">
                        <p className="flex-1"> SUBTOTAL:</p>
                        <p className="text-lightBlue">
                           ৳ {subTotal.toLocaleString()}
                        </p>
                     </div>
                     <button
                        className="p-3 bg-gray-200 rounded-lg text-sm font-text"
                        onClick={redirectingToCartPageAction}
                     >
                        VIEW CART
                     </button>
                     <button
                        className="p-3 font-text bg-lightBlue text-white rounded-lg  text-sm font-semibold"
                        onClick={() => {
                           domDispatch(hideCart());
                           router.push("/checkout");
                        }}
                     >
                        CHECKOUT
                     </button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};
