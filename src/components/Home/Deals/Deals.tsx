import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/css";
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
import { Product } from "@libs/types/landing-types";
import { SecondarySubtitle } from "@components/ui/secondary-subtitle";
import { useWindowSize } from "@libs/hooks";

SwiperCore.use([Autoplay]);

interface DealsProps {
  deals: Product[];
  to: string;
  name: string;
}

export const Deals: React.FC<DealsProps> = ({ deals, to, name }) => {
  // configring swiper
  // router
  const router = useRouter();
  // global state
  const {
    domDispatch,
    cartState: { inCartProducts },
    cartDispatch,
  } = useCtx();

  const windowWidth = useWindowSize()?.width ?? 0;

  const [loading, setLoading] = useState(false);

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
  const handleMouseEnter = (idx: number) => {
    const newArr = [...deals.map((deal) => deal.showAction)];
    newArr[idx] = true;
    setShowMoreActions(newArr);
  };

  // Mouse Leave event on Card
  const handleMouseleave = (i: number) => {
    const newArr = [...deals.map((deal) => deal.showAction)];
    newArr[i] = false;
    setShowMoreActions(newArr);
  };

  // selected  product qunatity
  const [productQuantity, setProductQuantity] = useState<number>(1);

  // Adding product to the cart
  const addToTheCartAction = (product: Product, quantity: number) => {
    const item = {
      ...product,
      subtotal: +(product.price.toString().replace(/,/g, ""), 10),
    };

    const _itemToTheCart = {
      ...product,
      subtotal: +(product.price.toString().replace(/,/g, ""), 10) * quantity,
    };

    domDispatch(showCart());

    if (inCartProducts && inCartProducts.length > 0) {
      let itemExistInTheCart = inCartProducts.some(
        (p: Product) => p._id === product._id
      );

      if (itemExistInTheCart) {
        // If that item exist in the cart
        cartDispatch(
          plusTheQuantityOfTheExistingItem({ id: product._id, quantity })
        );
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
    <section className="px-3 md:px-0">
      <div className="flex border-b  font-nav text-xl font-semibold ">
        <div className="py-2 border-b-4 border-nevyBlue  flex gap-1">
          <h6></h6>
        </div>

        <SecondarySubtitle>{name}</SecondarySubtitle>
      </div>
      {/* card section */}

      {showActions && !loading && (
        <div className="">
          <Swiper
            className="my-1 "
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              400: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              560: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              800: {
                slidesPerView: 5,
                spaceBetween: 3,
              },

              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            autoplay={{
              disableOnInteraction: false,
            }}
            spaceBetween={10}
          >
            {deals.map((deal, idx) => {
              return (
                <SwiperSlide key={deal._id}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`rounded-xl  md:h-80  text-center hover:shadow-2xl  transition-all duration-150  my-6 flex flex-col  relative `} //?sm:h-smCard
                    onClick={() => router.push(`/items/${deal.slug.current}`)}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={() => handleMouseleave(idx)}
                  >
                    {/* Card action section */}
                    <div
                    //  className={`absolute ${
                    //    pageWidth < 720
                    //      ? "top-1/2 right-5 flex-row"
                    //      : "top-1/2  right-4 flex-col"
                    //  } z-40  flex  gap-1`}
                    >
                      {windowWidth < 720 ? (
                        <></>
                      ) : (
                        // <SmCardActionBtns
                        //   addToTheCartAction={addToTheCartAction}
                        //   productQuantity={productQuantity}
                        //   showActions={showActions}
                        //   setShowModal={setShowModal}
                        //   setModalContent={setModalContent}
                        //   {...deal}
                        // />
                        // <LgCardActionBtns
                        //   addToTheCartAction={addToTheCartAction}
                        //   productQuantity={productQuantity}
                        //   showActions={showActions}
                        //   setShowModal={setShowModal}
                        //   setModalContent={setModalContent}
                        //   deal={deal}
                        // />
                        <></>
                      )}
                    </div>

                    {/* Image section */}
                    <div className="flex-1">
                      {/* <CardImage image={deal.images[0]} name={name} /> */}
                    </div>
                    {/* Name and price section */}
                    <div className="p-3 ">
                      <p className="text-sm font-medium text-center font-nav">
                        {name}
                      </p>
                      {deal.offderPrice ? (
                        <div className="my-2 flex gap-2 items-center justify-center">
                          <span className="line-through  text-sm text-gray-400 font-text">
                            ৳{deal.price}
                          </span>
                          <span className="text-lightBlue font-semibold font-text">
                            ৳{deal.offderPrice}
                          </span>
                        </div>
                      ) : (
                        <div className="my-2 flex gap-2 items-center justify-center">
                          <span className="text-lightBlue font-semibold font-text">
                            ৳{deal.price}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div
            className="flex bg-gray-100  py-2 justify-center items-center hover:bg-gray-300 transition-all duration-150 cursor-pointer rounded-sm font-nav font-medium text-sm"
            onClick={() => router.push(to)}
          >
            VIEW ALL
          </div>
        </div>
      )}

      <>
        {/* <ModalContent
          showModal={showModal}
          setShowModal={setShowModal}
          setModalContent={setModalContent}
          modalContent={modalContent}
          setProductQuantity={setProductQuantity}
          addToTheCartAction={addToTheCartAction}
          productQuantity={productQuantity}
        /> */}
      </>
    </section>
  );
};
