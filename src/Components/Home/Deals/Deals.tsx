import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import TextTruncate from "react-text-truncate";
import { motion } from "framer-motion";
import { useCtx } from "../../../store";
import Image from "next/image";
import { LgCardActionBtns, SmCardActionBtns } from "../_helper";
import {
   addFirstItemToTheCart,
   addNonExistingItemInTheCart,
   plusTheQuantityOfTheExistingItem,
} from "../../../store/actions/CartAction";
import { showCart } from "../../../store/actions/domActions";
import { ModalContent } from "../../../utils/_components/ModalContent";
import { CardImage } from "./CardImage";

interface DealsProps {
   deals: any;
   to: string;
   name: string;
}

export const Deals: React.FC<DealsProps> = ({ deals, to, name }) => {
   // configring swiper
   SwiperCore.use([Autoplay, EffectFade]);
   // router
   const router = useRouter();
   // global state
   const {
      domState: { pageWidth },
      domDispatch,
      cartState: { inCartProducts },
      cartDispatch,
   } = useCtx();

   const [loading, setLoading] = useState(false);
   const [pgWidth, setPgWidth] = useState<string>("");
   // swiper slidesPerView
   const [cardsPerView, setCardsPerView] = useState<number>(6);

   // Modal state
   const [showModal, setShowModal] = useState<boolean>(false);
   const [modalContent, setModalContent] = useState({});

   // show more action
   const [showActions, setShowMoreActions] = useState<any>([]);

   // adding a new value to every object to add the cart hover action
   useEffect(() => {
      deals.forEach((deal) => (deal.showAction = false));
      const initalState = deals.map((deal) => deal.showAction);
      setShowMoreActions(initalState);
   }, [deals]);

   // Mouse Enter event on Card
   const handleMouseEnter = (i) => {
      const newArr = [...deals.map((deal) => deal.showAction)];
      newArr[i] = true;
      setShowMoreActions(newArr);
   };

   // Mouse Leave event on Card
   const handleMouseleave = (i) => {
      const newArr = [...deals.map((deal) => deal.showAction)];
      newArr[i] = false;
      setShowMoreActions(newArr);
   };

   useEffect(() => {
      if (pageWidth > 1180) {
         setPgWidth("lg");
         setCardsPerView(5);
         setLoading(false);
      } else if (pageWidth < 1180 && pageWidth > 720) {
         setCardsPerView(4);
         setPgWidth("md");
         setLoading(false);
      } else if (pageWidth < 720 && pageWidth > 550) {
         setCardsPerView(2);
         setPgWidth("sm");
         setLoading(false);
      } else if (pageWidth < 550 && pageWidth > 0) {
         setCardsPerView(2);
         setPgWidth("xs");
         setLoading(false);
      } else if (pageWidth == 0) {
         setLoading(true);
         setCardsPerView(5);
      }
   }, [pageWidth]);

   // selected  product qunatity
   const [productQuantity, setProductQuantity] = useState<number>(1);

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

   return (
      <div className=" px-3 md:px-0">
         <section className="flex border-b  font-nav text-xl font-semibold ">
            <div className="py-3 border-b-4 border-nevyBlue  flex gap-1">
               <h1>{name}</h1>
            </div>
         </section>
         {/* card section */}
         {showActions && !loading && cardsPerView != 0 && (
            <section className="">
               <Swiper
                  className="my-1 "
                  slidesPerView={cardsPerView}
                  autoplay={{
                     disableOnInteraction: false,
                  }}
                  spaceBetween={10}
               >
                  {deals
                     .sort((a, b) =>
                        a.highlight === b.highlight ? 0 : a.highlight ? -1 : 1
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
                              description,
                              short_description,
                           },
                           i
                        ) => {
                           return (
                              <SwiperSlide key={id}>
                                 <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className={`rounded-xl  md:h-80  text-center hover:shadow-2xl  transition-all duration-150  my-6 flex flex-col  relative ${
                                       pgWidth == "sm" && "h-smCard"
                                    } ${pgWidth == "xs" && "h-smCard"}`}
                                    onClick={() =>
                                       router.push(`/items/${slug}`)
                                    }
                                    onMouseEnter={(e) => handleMouseEnter(i)}
                                    onMouseLeave={(e) => handleMouseleave(i)}
                                 >
                                    {/* Card action section */}
                                    <div
                                       className={`absolute ${
                                          pageWidth < 720
                                             ? "top-1/2 right-5 flex-row"
                                             : "top-1/2  right-4 flex-col"
                                       } z-50  flex  gap-1`}
                                    >
                                       {pageWidth < 720 ? (
                                          <SmCardActionBtns
                                             offer_price={offer_price}
                                             addToTheCartAction={
                                                addToTheCartAction
                                             }
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
                                             addToTheCartAction={
                                                addToTheCartAction
                                             }
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
                              </SwiperSlide>
                           );
                        }
                     )}
               </Swiper>
               <div
                  className="flex bg-gray-100  py-2 justify-center items-center hover:bg-gray-300 transition-all duration-150 cursor-pointer rounded-sm font-nav font-medium text-sm"
                  onClick={() => router.push(to)}
               >
                  VIEW ALL
               </div>

               {/* <div className="grid  md:grid-cols-3 grid-cols-1 md:gap-4"></div>
            <Poster src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Computer-Accessories-v2.png" />
            <Poster src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Mobile-Accessories-v2.png" /> */}
            </section>
         )}
         <>
            <ModalContent
               showModal={showModal}
               setShowModal={setShowModal}
               setModalContent={setModalContent}
               modalContent={modalContent}
               setProductQuantity={setProductQuantity}
               addToTheCartAction={addToTheCartAction}
               productQuantity={productQuantity}
            />
         </>
      </div>
   );
};
