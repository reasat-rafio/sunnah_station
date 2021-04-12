import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Next, Prev } from "../../utils/svgs/Svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { useCtx } from "../../store";
import { showCart } from "../../store/actions/domActions";
import {
   addFirstItemToTheCart,
   addNonExistingItemInTheCart,
   plusTheQuantityOfTheExistingItem,
} from "../../store/actions/CartAction";
import { LgCardActionBtns, SmCardActionBtns } from "../Home/_helper";
import { CardImage } from "../Home/Deals/CardImage";
import { ModalContent } from "../../utils/_components/ModalContent";
import { ShopLayout } from "../Layouts/ShopLayout";
import { FilterProductSection } from "../ShopPage/FilterProductSection";

interface N_Deals_PageProps {
   products: any[];
}

// configring swiper
SwiperCore.use([Autoplay, EffectFade]);

export const Products: React.FC<N_Deals_PageProps> = ({ products }) => {
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

   // show more action
   const [showActions, setShowMoreActions] = useState<any>([]);

   // Modal state
   const [showModal, setShowModal] = useState<boolean>(false);
   const [modalContent, setModalContent] = useState({});

   const [allProducts, setAllProducts] = useState(products);
   const [pageNumber, setPageNumber] = useState<number>(0);
   const productPerPage = 12;
   const PagesVisited = pageNumber * productPerPage;

   // adding a new value to every object to add the cart hover action
   useEffect(() => {
      products.forEach((deal) => (deal.showAction = false));
      const initalState = products.map((deal) => deal.showAction);
      setShowMoreActions(initalState);
   }, [products]);

   // Mouse Enter event on Card
   const handleMouseEnter = (i) => {
      const newArr = [...products.map((deal) => deal.showAction)];
      newArr[i] = true;
      setShowMoreActions(newArr);
   };

   // Mouse Leave event on Card
   const handleMouseleave = (i) => {
      const newArr = [...products.map((deal) => deal.showAction)];
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

   const [showMoreFilter, setShowMoreFilter] = useState<boolean>(false);
   const [selectedFilter, setSelectedFilter] = useState<string>(
      "Sort by popularity"
   );

   const displayProrducts =
      allProducts &&
      allProducts.length > 0 &&
      allProducts
         .sort((a, b) => {
            if (selectedFilter === "Sort by popularity") {
               return a.highlight === b.highlight ? 0 : a.highlight ? -1 : 1;
            }
            if (selectedFilter === "Sort by latest") {
               return a.createdAt > b.createdAt ? -1 : 1;
            }
            if (selectedFilter === "Sort by Price: low to high") {
               if (a.offer_price && b.offer_price) {
                  return parseInt(a.offer_price.replace(/,/g, ""), 10) <
                     parseInt(b.offer_price.replace(/,/g, ""), 10)
                     ? -1
                     : 1;
               } else {
                  return parseInt(a.regular_price) < parseInt(b.regular_price)
                     ? -1
                     : 1;
               }
            }
            if (selectedFilter === "Sort by Price: high to low") {
               if (a.offer_price && b.offer_price) {
                  return parseInt(a.offer_price.replace(/,/g, ""), 10) >
                     parseInt(b.offer_price.replace(/,/g, ""), 10)
                     ? -1
                     : 1;
               } else {
                  return parseInt(a.regular_price) > parseInt(b.regular_price)
                     ? -1
                     : 1;
               }
            }
         })
         .slice(PagesVisited, PagesVisited + productPerPage)
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
               i: number
            ) => {
               return (
                  <motion.div
                     key={id}
                     whileHover={{ scale: 1.1 }}
                     className={`rounded-xl md:h-80  text-center hover:shadow-2xl  transition-all duration-150  my-6 flex flex-col  relative col-span-10 md:col-span-5 xl:col-span-4 ${
                        pgWidth == "sm" && "h-smCard"
                     } ${pgWidth == "xs" && "h-smCard"}`}
                     onClick={() => router.push(`/items/${slug}`)}
                     onMouseEnter={(e) => handleMouseEnter(i)}
                     onMouseLeave={(e) => handleMouseleave(i)}
                  >
                     {/* Card action section */}
                     <div
                        className={`absolute ${
                           pageWidth < 720
                              ? "top-1/2 right-5 flex-row"
                              : "top-1/2  right-4 flex-col"
                        } z-20  flex  gap-1`}
                     >
                        {pageWidth < 720 ? (
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
               );
            }
         );

   const pageCount = Math.ceil(allProducts.length / productPerPage);

   const chnagePage = ({ selected }) => {
      setPageNumber(selected);
   };

   return (
      <ShopLayout>
         <FilterProductSection
            showMoreFilter={showMoreFilter}
            setShowMoreFilter={setShowMoreFilter}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
         />
         <div className="my-4 grid grid-cols-20 gap-2 ">{displayProrducts}</div>

         <span className="mx-auto flex">
            <ReactPaginate
               previousLabel={"← Prev"}
               nextLabel={"Next →"}
               breakLabel={"..."}
               breakClassName={"break-me"}
               onPageChange={chnagePage}
               pageCount={pageCount}
               marginPagesDisplayed={2}
               pageRangeDisplayed={5}
               containerClassName={"pagination"}
               previousLinkClassName={"pagination__link"}
               nextLinkClassName={"pagination__link"}
               disabledClassName={"pagination__link--disabled"}
               activeClassName={"pagination__link--active"}
            />
         </span>

         <ModalContent
            showModal={showModal}
            setShowModal={setShowModal}
            setModalContent={setModalContent}
            modalContent={modalContent}
            setProductQuantity={setProductQuantity}
            addToTheCartAction={addToTheCartAction}
            productQuantity={productQuantity}
         />
      </ShopLayout>
   );
};
