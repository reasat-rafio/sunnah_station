import React, { useEffect, useState } from "react";
import { Poster } from "../../../utils/_components/Poster";
import { motion } from "framer-motion";

import { useRouter } from "next/router";

import { useCtx } from "../../../store";
import { LgCardActionBtns, SmCardActionBtns } from "../_helper";
import { showCart } from "../../../store/actions/domActions";
import {
   addFirstItemToTheCart,
   addNonExistingItemInTheCart,
   plusTheQuantityOfTheExistingItem,
} from "../../../store/actions/CartAction";
import { CardImage } from "../Deals/CardImage";
import { ModalContent } from "../../../utils/_components/ModalContent";
import { loadingEnd, loadingstart } from "../../../store/actions/domAction";
import { ShopLayout } from "../../Layouts/ShopLayout";

interface NewArrivalsProps {
   newArrivals: any[];
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({ newArrivals }) => {
   const [pgWidth, setPgWidth] = useState<string>("");

   // show more action
   const [showActions, setShowMoreActions] = useState<any>([]);

   // selected  product qunatity
   const [productQuantity, setProductQuantity] = useState<number>(1);

   // Modal state
   const [showModal, setShowModal] = useState<boolean>(false);
   const [modalContent, setModalContent] = useState({});

   // show all products
   const [loading, setLoading] = useState(false);

   // router
   const router = useRouter();

   // global state
   const {
      domState: { pageWidth },
      domDispatch,
      cartState: { inCartProducts },
      cartDispatch,
   } = useCtx();

   useEffect(() => {
      if (pageWidth > 1180) {
         setPgWidth("lg");
      } else if (pageWidth < 1180 && pageWidth > 720) {
         setPgWidth("md");
      } else if (pageWidth < 720 && pageWidth > 550) {
         setPgWidth("sm");
      } else if (pageWidth < 550 && pageWidth > 0) {
         setPgWidth("xs");
      } else if (pageWidth == 0) {
         return;
      }
   }, [pageWidth]);

   // Mouse Enter event on Card
   const handleMouseEnter = (i) => {
      const newArr = [...newArrivals.map((deal) => deal.showAction)];
      newArr[i] = true;
      setShowMoreActions(newArr);
   };

   // Mouse Leave event on Card
   const handleMouseleave = (i) => {
      const newArr = [...newArrivals.map((deal) => deal.showAction)];
      newArr[i] = false;
      setShowMoreActions(newArr);
   };

   // Adding product to the cart
   const addToTheCartAction = (name, price, quantity, id, img) => {
      const item = {
         name,
         price,
         quantity,
         id,
         img,
         subtotal: parseInt(price.replace(/,/g, ""), 10),
      };

      const _itemToTheCart = {
         name,
         price,
         quantity,
         id,
         img,
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

   // Load more products
   const showMoreProducts = () => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
         router.push("/new-arrivals");
      }, 1000);
   };

   return (
      <section className="container  mx-auto px-2 font-title">
         <Poster
            src="https://res.cloudinary.com/dapjxqk64/image/upload/v1618055663/sunnah%20statoin/bar2_acqzfv.jpg"
            to="/shop/food/khejur"
            alt="new arrivals"
         />

         <div className="flex border-b font-nav text-xl font-semibold ">
            <h2 className="py-3 border-b-4 border-nevyBlue flex gap-1">
               NEW ARRIVALS
            </h2>
         </div>

         {/* card section */}
         <div className="my-4 grid grid-cols-20 gap-2 ">
            {newArrivals
               .sort((a, b) =>
                  a.highlight_item === b.highlight_item
                     ? 0
                     : a.highlight_item
                     ? -1
                     : 1
               )
               .map(
                  (
                     {
                        name,
                        image,
                        offer_price,
                        regular_price,
                        id,
                        slug,
                        short_description,
                     },
                     i
                  ) => (
                     <motion.div
                        key={id}
                        whileHover={{ scale: 1.1 }}
                        className={`rounded-xl md:h-80  text-center hover:shadow-2xl  transition-all duration-150  my-6 flex flex-col  relative col-span-10 md:col-span-5 xl:col-span-4 ${
                           pgWidth == "sm" && "h-smCard"
                        } ${pgWidth == "xs" && "h-smCard"}`}
                        onClick={() => {
                           router.push(`/items/${slug}`);
                        }}
                        onMouseEnter={(e) => handleMouseEnter(i)}
                        onMouseLeave={(e) => handleMouseleave(i)}
                     >
                        {/* Card action section */}
                        <div
                           className={`absolute ${
                              pageWidth < 720
                                 ? "top-1/2 right-5 flex-row"
                                 : "top-1/2  right-4 flex-col"
                           } z-30  flex  gap-1`}
                        >
                           {pageWidth <div 720 ? (
                              <SmCardActionBtns
                                 offer_price={offer_price}
                                 addToTheCartAction={addToTheCartAction}
                                 name={name}
                                 productQuantity={productQuantity}
                                 id={id}
                                 image={image}
                                 regular_price={regular_price}
                                 showActions={showActions}
                                 i={i}
                                 pageWidth={pageWidth}
                                 setShowModal={setShowModal}
                                 setModalContent={setModalContent}
                                 slug={slug}
                                 description={short_description}
                              />
                           ) : (
                              <LgCardActionBtns
                                 offer_price={offer_price}
                                 addToTheCartAction={addToTheCartAction}
                                 name={name}
                                 productQuantity={productQuantity}
                                 id={id}
                                 image={image}
                                 regular_price={regular_price}
                                 showActions={showActions}
                                 i={i}
                                 pageWidth={pageWidth}
                                 setShowModal={setShowModal}
                                 setModalContent={setModalContent}
                                 slug={slug}
                                 description={short_description}
                              />
                           )}
                        </div>

                        {/* Image section */}
                        <div className="flex-1">
                           <CardImage image={image} name={name} />
                        </div>
                        {/* Name and price section */}
                        <div className="p-3 ">
                           <p className="text-sm font-medium text-center font-nav">
                              {name}
                           </p>
                           {offer_price ? (
                              <div className="my-2 flex gap-2 items-center justify-center">
                                 <span className="line-through  text-sm text-gray-400 font-text">
                                    ৳{regular_price}
                                 </span>
                                 <span className="text-lightBlue font-semibold font-text">
                                    ৳{offer_price}
                                 </span>
                              </div>
                           ) : (
                              <div className="my-2 flex gap-2 items-center justify-center">
                                 <span className="text-lightBlue font-semibold font-text">
                                    ৳{regular_price}
                                 </span>
                              </div>
                           )}
                        </div>
                     </motion.div>
                  )
               )}
         </div>

         {loading ? (
            <button
               className="mx-auto flex my-2 rounded-sm  p-3 border-nevyBlue text-nevyBlue border   font-semibold transition-all duration-300 mb-16 cursor-not-allowed"
               disabled={true}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
               >
                  <path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z"></path>
               </svg>
               Processing
            </button>
         ) : (
            <button
               className="mx-auto flex my-2 rounded-sm  p-3 border-nevyBlue text-nevyBlue border hover:bg-black hover:text-white font-semibold hover:border-black transition-all duration-300 mb-16"
               onClick={showMoreProducts}
            >
               SHOW ALL PRODUCTS
            </button>
         )}

         <ModalContent
            showModal={showModal}
            setShowModal={setShowModal}
            setModalContent={setModalContent}
            modalContent={modalContent}
            setProductQuantity={setProductQuantity}
            addToTheCartAction={addToTheCartAction}
            productQuantity={productQuantity}
         />
      </section>
   );
};
