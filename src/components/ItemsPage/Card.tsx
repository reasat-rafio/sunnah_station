import { motion } from "framer-motion";
import Image from "next/image";
import { Router, useRouter } from "next/router";
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
   main_categories: any[];
   multiple_quantity: boolean;
   quantity_and_price: any;
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
   main_categories,
   multiple_quantity,
   quantity_and_price,
}) => {
   // global store
   const {
      domDispatch,
      cartState: { inCartProducts },
      cartDispatch,
   } = useCtx();

   // selected  product qunatity
   const [productQuantity, setProductQuantity] = useState<number>(1);

   // Time countdown states
   const [timerDays, setTimerDays] = useState<string | number>("00");
   const [timerHours, setTimerHours] = useState<string | number>("00");
   const [timerMins, setTimerMins] = useState<string | number>("00");
   const [timerSecs, setTimerSecs] = useState<string | number>("00");

   // Ref for time
   let interval = useRef<any>();

   // router
   const router = useRouter();

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

   // Different quantity price
   const [quanity, setQuantity] = useState<number>(0);

   // State of Prices for diffrent quanity
   const [defQunatityRegularPrice, setDefQuantityRegularPrice] = useState();
   const [
      defQunatityRegularPriceQuantity,
      setDefQuantityRegularPriceQuantity,
   ] = useState();
   const [defQunatityOfferPrice, setDefQuantityOfferPrice] = useState();
   const [
      defQunatityOfferPriceQuantity,
      setDefQuantityOfferPriceQuantity,
   ] = useState();

   useEffect(() => {
      if (multiple_quantity && quantity_and_price) {
         setDefQuantityRegularPrice(quantity_and_price[quanity].regular_price);
         setDefQuantityRegularPriceQuantity(
            quantity_and_price[quanity].quantity
         );
         setDefQuantityOfferPrice(quantity_and_price[quanity].offer_price);
         setDefQuantityOfferPriceQuantity(quantity_and_price[quanity].quantity);
      }
   }, [quanity]);

   // Adding product to the cart
   const addToTheCartAction = (
      name: string,
      price,
      quantity,
      id: string,
      img,
      slug: string,
      multiple_quantity: boolean
   ) => {
      const _price = !multiple_quantity
         ? price
         : quantity_and_price[0].offer_price
         ? defQunatityOfferPrice
         : defQunatityRegularPrice;

      const item = {
         name,
         price: _price,
         quantity,
         id,
         img,
         slug,
         product_quantity: quantity_and_price[0].offer_price
            ? defQunatityOfferPriceQuantity
            : defQunatityRegularPriceQuantity,
         subtotal: parseInt(_price.replace(/,/g, ""), 10),
      };

      const _itemToTheCart = {
         name,
         price: _price,
         quantity,
         id,
         img,
         slug,
         product_quantity: quantity_and_price[0].offer_price
            ? defQunatityOfferPriceQuantity
            : defQunatityRegularPriceQuantity,
         subtotal: parseInt(_price.replace(/,/g, ""), 10) * quantity,
      };

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

   // Shop now action
   // const shopNowAction = (name, price, quantity, id, img, slug) => {};

   return (
      <motion.div initial="inital" animate="animate" variants={stagger}>
         <div>
            <motion.p
               variants={fadeIn}
               className="font-bold text-xl py-4 font-text "
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
                  <Image
                     src={
                        "https://res.cloudinary.com/dapjxqk64/image/upload/v1618150465/sunnah%20statoin/flash_deal_hilxxg.png"
                     }
                     alt="flash-daeal-logo"
                     layout="intrinsic"
                     height="30"
                     width="80"
                  />
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
            <motion.div variants={fadeIn} className="">
               {multiple_quantity && (
                  <div className=" my-3 ">
                     <div className=" flex-1">
                        <div className="flex  gap-2 text-base items-center ">
                           <span className="font-semibold text-black text-lg">
                              Quantity:{" "}
                           </span>
                           {quantity_and_price.map(
                              (
                                 { offer_price, quantity, regular_price },
                                 i: number
                              ) => (
                                 <button
                                    key={i}
                                    className={`hover:bg-lightBlue rounded  hover:text-white px-3 py-1 ${
                                       i === quanity &&
                                       "bg-lightBlue text-white"
                                    }`}
                                    onClick={() => setQuantity(i)}
                                 >
                                    {quantity}
                                 </button>
                              )
                           )}{" "}
                           {/* <button className="flex justify-center items-center">
                              <span>
                                 <SmCross />
                              </span>
                              Clear
                           </button> */}
                        </div>
                     </div>
                     <div className="flex gap-2 text-lg mt-4">
                        {quantity_and_price[0].offer_price ? (
                           <>
                              <p className="line-through text-gray-500">
                                 ৳{defQunatityRegularPrice}
                              </p>
                              <p className="text-lightBlue text-xl font-semibold">
                                 ৳{defQunatityOfferPrice}
                              </p>{" "}
                           </>
                        ) : (
                           <p className="text-lightBlue text-xl font-semibold">
                              ৳{quantity_and_price[quanity].offer_price}
                           </p>
                        )}
                     </div>
                  </div>
               )}

               <div className=" flex gap-2">
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
                           setProductQuantity(
                              (prevQuanitiy) => prevQuanitiy + 1
                           )
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
                                slug,
                                multiple_quantity
                             )
                           : // If no offer avilable
                             addToTheCartAction(
                                name,
                                regular_price,
                                productQuantity,
                                id,
                                img,
                                slug,
                                multiple_quantity
                             );
                        domDispatch(showCart());
                     }}
                  >
                     ADD TO CART
                  </button>
                  <button
                     className=" productBtn bg-lightBlue"
                     onClick={() => {
                        offer_price
                           ? // If offer avilable
                             addToTheCartAction(
                                name,
                                offer_price,
                                productQuantity,
                                id,
                                img,
                                slug,
                                multiple_quantity
                             )
                           : // If no offer avilable
                             addToTheCartAction(
                                name,
                                regular_price,
                                productQuantity,
                                id,
                                img,
                                slug,
                                multiple_quantity
                             );
                        router.push("/checkout");
                     }}
                  >
                     BUY NOW
                  </button>
               </div>
            </motion.div>
         </motion.div>
         <motion.div variants={fadeIn} className="py-4 ">
            <p>
               Product Id:{" "}
               <span className="text-xs text-gray-500">{id.toUpperCase()}</span>
            </p>
            <div>
               Categories:
               {main_categories &&
                  categories &&
                  main_categories.map(({ name }, i) => (
                     <span className="text-sm text-gray-500" key={i}>
                        {" "}
                        {name} {"> "}
                     </span>
                  ))}
               {main_categories &&
                  categories &&
                  categories.map(({ name }, i) => (
                     <span className="text-sm text-gray-500" key={i}>
                        {name}
                     </span>
                  ))}
               {!main_categories &&
                  categories.map(({ name }, i) => (
                     <span className="text-sm text-gray-500" key={i}>
                        {name}
                     </span>
                  ))}
            </div>
         </motion.div>
      </motion.div>
   );
};
