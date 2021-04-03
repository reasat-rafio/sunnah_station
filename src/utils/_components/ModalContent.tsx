import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Cross } from "../svgs/Svg";
import { SocialShare } from "./SocialShare";
import TextTruncate from "react-text-truncate";

interface ModalContentProps {
   showModal: boolean;
   setShowModal: any;
   setModalContent: any;
   modalContent: any;
   setProductQuantity: any;
   addToTheCartAction: any;
   productQuantity: any;
}
// configring swiper
SwiperCore.use([EffectFade, Navigation, Pagination]);
export const ModalContent: React.FC<ModalContentProps> = ({
   showModal,
   setShowModal,
   setModalContent,
   setProductQuantity,
   addToTheCartAction,
   productQuantity,
   modalContent: {
      name,
      regular_price,

      id,
      image,
      slug,
      offer_price,
      description,
   },
}) => {
   const router = useRouter();

   // Modal container ref
   const modalRef = useRef<HTMLDivElement>(null);

   //    for closing the modal when it clicked outside the the modal
   useEffect(() => {
      function handleClickOutside(event) {
         if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
            setModalContent({});
         }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         // Unbind the event listener on clean up
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [modalRef]);

   return (
      <>
         <div
            className={`fixed h-full w-full right-0 top-0 left-0 bottom-0  transition-all duration-300${
               showModal ? " z-40  block " : " z-0 hidden "
            }`}
            style={{ background: "rgba(0, 0, 0, 0.7)" }}
         ></div>

         <AnimatePresence>
            {showModal && (
               <section
                  className={`main-modal fixed w-full h-100 inset-0 overflow-y-auto   justify-center items-center   z-50 flex `}
               >
                  <motion.div
                     ref={modalRef}
                     className="border border-teal-500 smodal-container max-h-screen  bg-white w-11/12 md:max-w-5xl mx-auto rounded shadow-lg z-50 overflow-y-auto p-5 overflow-x-hidden"
                     initial={{ opacity: 0, y: 60, scale: 0.3 }}
                     animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 300 },
                     }}
                     exit={{
                        opacity: 0,
                        scale: 0.5,
                        transition: { duration: 0.6 },
                     }}
                  >
                     <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
                        className="grid grid-cols-12  h-full w-full relative overflow-y-auto gap-2"
                     >
                        {/* CROSS */}
                        <motion.button
                           className="absolute top-0 right-0 z-40"
                           onClick={() => setShowModal(false)}
                        >
                           <Cross />
                        </motion.button>

                        {/* IMAGE SECTION */}
                        <div className="col-span-12 md:col-span-5  flex flex-col items-center justify-center">
                           <Swiper
                              slidesPerView={1}
                              style={{ maxWidth: "100%" }}
                              navigation
                              pagination={{ clickable: true }}
                           >
                              {image.map((a, i) => (
                                 <SwiperSlide key={i} className="">
                                    <Image
                                       src={a.url}
                                       alt={name}
                                       layout="intrinsic"
                                       height="500%"
                                       width="500%"
                                    />
                                 </SwiperSlide>
                              ))}
                           </Swiper>
                           <button
                              className="text-white bg-nevyBlue text-sm font-text rounded-sm w-full py-2 my-3"
                              onClick={() => router.push(`/items/${slug}`)}
                           >
                              VIEW MORE DETAILS
                           </button>
                        </div>
                        {/* Product Details section */}
                        <div className="col-span-12 md:col-span-7 mt-6 flex flex-col justify-center">
                           <h2
                              className=" pt-2 font-title font-semibold text-2xl hover:text-lightBlue cursor-pointer "
                              onClick={() => router.push(`/items/${slug}`)}
                           >
                              {name}
                           </h2>

                           <div>
                              {offer_price ? (
                                 <div className="flex justify-start items-center gap-2 pb-2">
                                    <span className="line-through  text-sm text-gray-400 font-text">
                                       ৳{regular_price}
                                    </span>
                                    <span className="text-lightBlue font-semibold font-text">
                                       ৳{offer_price}
                                    </span>
                                 </div>
                              ) : (
                                 <div className="flex justify-start items-center gap-2 pb-2">
                                    <span className="text-lightBlue font-semibold font-text">
                                       ৳{regular_price}
                                    </span>
                                 </div>
                              )}
                              {description && (
                                 <TextTruncate
                                    line={10}
                                    element="span"
                                    truncateText="…"
                                    text={description}
                                    textTruncateChild={
                                       <a href={`/items/${slug}`}>Show more</a>
                                    }
                                 />
                              )}
                              {/* item plus minus section */}
                              <motion.div className=" flex gap-2 my-4">
                                 <div className="flex justify-center items-center">
                                    <button
                                       className="py-2 px-2 border rounded-l-md transition-all duration-150 hover:bg-lightBlue outline-none"
                                       onClick={() => {
                                          setProductQuantity((prevQuanity) =>
                                             prevQuanity > 1
                                                ? prevQuanity - 1
                                                : 1
                                          );
                                       }}
                                    >
                                       -
                                    </button>
                                    <span className="py-2 px-2 border-t border-b">
                                       {productQuantity}
                                    </span>
                                    <button
                                       className="py-2 px-2 border rounded-r-md hover:bg-lightBlue transition-all duration-150 outline-none "
                                       onClick={() =>
                                          setProductQuantity(
                                             (prevQuanitiy) => prevQuanitiy + 1
                                          )
                                       }
                                    >
                                       +
                                    </button>
                                 </div>
                                 <motion.button
                                    className=" flex-1 rounded-sm text-white border-2 bg-nevyBlue hover:bg-white hover:border-nevyBlue hover:text-black duration-150 transition-colors"
                                    onClick={() => {
                                       setShowModal(false);
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
                                    ADD TO CART
                                 </motion.button>
                              </motion.div>
                              <div>
                                 <p> Add to Wishlist</p>
                              </div>

                              {/* Social Icons */}
                              <SocialShare slug={slug} />
                           </div>
                        </div>
                     </motion.div>
                  </motion.div>
               </section>
            )}
         </AnimatePresence>
      </>
   );
};
