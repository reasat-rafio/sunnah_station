import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useCtx } from "../../store";
import {
   addFirstItemToTheCart,
   addNonExistingItemInTheCart,
   plusTheQuantityOfTheExistingItem,
} from "../../store/actions/CartAction";
import { showCart } from "../../store/actions/domActions";

interface CardProps {
   brand: string;
   categories: any[];
   name: string;
   offer_price: string;
   offer_time_till: string;
   regular_price: string;
   id: string;
   img: any;
   in_stock: boolean;
   short_description: string;
   slug: string;
}

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
   inital: {
      y: 60,
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: easing,
      },
   },
};

const stagger = {
   animate: {
      transition: {
         staggerChildren: 0.05,
      },
   },
};

export const Card: React.FC<CardProps> = ({
   short_description,
   categories,
   name,
   offer_price,
   offer_time_till,
   regular_price,
   id,
   img,
   in_stock,
   slug,
}) => {
   // selected  product qunatity
   const [productQuantity, setProductQuantity] = useState<number>(1);

   // Time countdown states
   const [timerDays, setTimerDays] = useState<string | number>("00");
   const [timerHours, setTimerHours] = useState<string | number>("00");
   const [timerMins, setTimerMins] = useState<string | number>("00");
   const [timerSecs, setTimerSecs] = useState<string | number>("00");

   // Ref for time
   let interval = useRef<any>();

   // Caculate and setting time action
   const startTimer = () => {
      const countdownDate = new Date(offer_time_till).getTime();

      interval.current = setInterval(() => {
         const now = new Date().getTime();
         const distance = +countdownDate - now;

         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
         );
         const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
         );
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

         if (distance < 0) {
            // something
            clearInterval(interval.current);
         } else {
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMins(minutes);
            setTimerSecs(seconds);
         }
      }, 1000);
   };

   useEffect(() => {
      startTimer();
      return () => {
         clearInterval(interval.current);
      };
   }, []);

   // global store
   const {
      domDispatch,
      cartState: { inCartProducts },
      cartDispatch,
   } = useCtx();

   // Adding product to the cart
   const addToTheCartAction = (name, price, quantity, id, img, slug) => {
      const item = {
         name,
         price,
         quantity,
         id,
         img,
         slug,
         subtotal: parseInt(price.replace(/,/g, ""), 10),
      };

      const _itemToTheCart = {
         name,
         price,
         quantity,
         id,
         img,
         slug,
         subtotal: parseInt(price.replace(/,/g, ""), 10) * quantity,
      };

      domDispatch(showCart());

      if (inCartProducts && inCartProducts.length > 0) {
         let itemExistInTheCart = inCartProducts.some((i) => i.id === id);

         if (itemExistInTheCart) {
            // If that item exist in the cart
            cartDispatch(plusTheQuantityOfTheExistingItem({ id, quantity }));
         } else {
            // If that item dont exist in the cart
            cartDispatch(addNonExistingItemInTheCart(item));
         }
      } else {
         // If there is no item in the cart
         cartDispatch(addFirstItemToTheCart(_itemToTheCart));
      }
      setProductQuantity(1);
   };

   return (
      <motion.div initial="inital" animate="animate" variants={stagger}>
         <div>
            <motion.p
               variants={fadeIn}
               className="font-bold text-xl py-4 font-text"
            >
               {name}
            </motion.p>
            <div className="py-3 border-b">
               {!in_stock && <p className="text-red-600">out of stock</p>}

               <motion.div variants={fadeIn} className="text-xl flex gap-4">
                  {offer_price ? (
                     <>
                        <span className="line-through text-gray-500">
                           ৳{regular_price}
                        </span>
                        <span className="text-lightBlue text-xl font-semibold">
                           ৳{offer_price}
                        </span>
                     </>
                  ) : (
                     <span className="text-lightBlue text-xl font-semibold">
                        ৳{regular_price}
                     </span>
                  )}
               </motion.div>
               {short_description && (
                  <motion.p
                     variants={fadeIn}
                     className="font-text text-sm py-3"
                  >
                     {short_description}
                  </motion.p>
               )}
            </div>
         </div>
         {/* Timer section */}
         <motion.div variants={fadeIn} className="py-4 text-xs border-b">
            {offer_time_till && (
               <div className=" my-4 flex lg:gap-5 gap-1 justify-start items-center p-1 border border-nevyBlue rounded-full">
                  {/* <Image src={"/img/flash-sale-badge.png"} alt="" /> */}
                  <section>
                     <span className="font-bold text-sm pr-1">{timerDays}</span>
                     <span className="text-gray-500">Day</span>
                  </section>
                  <section>
                     <span className="font-bold text-sm pr-1">
                        {timerHours}
                     </span>
                     <span className="text-gray-500">Hour</span>
                  </section>
                  <section>
                     <span className="font-bold text-sm pr-1">{timerMins}</span>
                     <span className="text-gray-500">Min</span>
                  </section>
                  <section>
                     <span className="font-bold text-sm pr-1">{timerSecs}</span>
                     <span className="text-gray-500">Sec</span>
                  </section>
               </div>
            )}
            <motion.div variants={fadeIn} className=" flex gap-2">
               <div className="flex justify-center items-center">
                  <button
                     className="py-3 px-2 border rounded-l-md transition-all duration-150 hover:bg-lightBlue outline-none"
                     onClick={() => {
                        setProductQuantity((prevQuanity) =>
                           prevQuanity > 1 ? prevQuanity - 1 : 1
                        );
                     }}
                  >
                     -
                  </button>
                  <span className="py-3 px-2 border-t border-b">
                     {productQuantity}
                  </span>
                  <button
                     className="py-3 px-2 border rounded-r-md hover:bg-lightBlue transition-all duration-150 outline-none"
                     onClick={() =>
                        setProductQuantity((prevQuanitiy) => prevQuanitiy + 1)
                     }
                  >
                     +
                  </button>
               </div>
               <button
                  className=" productBtn bg-gray-500 hover:bg-gray-600 "
                  onClick={() => {
                     offer_price
                        ? // If offer avilable
                          addToTheCartAction(
                             name,
                             offer_price,
                             productQuantity,
                             id,
                             img,
                             slug
                          )
                        : // If no offer avilable
                          addToTheCartAction(
                             name,
                             regular_price,
                             productQuantity,
                             id,
                             img,
                             slug
                          );
                  }}
               >
                  ADD TO CART
               </button>
               <button className=" productBtn bg-lightBlue hover:bg-nevyBlue ">
                  BUY NOW
               </button>
            </motion.div>
         </motion.div>
         <motion.div variants={fadeIn} className="py-4 ">
            <p>
               Product Id:{" "}
               <span className="text-xs text-gray-500">{id.toUpperCase()}</span>
            </p>
            <div>
               Categories:
               {categories.map(({ name }, i) => (
                  <span className="text-xs text-gray-500" key={i}>
                     {" "}
                     {name}{" "}
                  </span>
               ))}
            </div>
         </motion.div>
      </motion.div>
   );
};
