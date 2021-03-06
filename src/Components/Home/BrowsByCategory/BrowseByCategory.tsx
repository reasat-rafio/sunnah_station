import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { useCtx } from "../../../store";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { categories, GoLeft, GoRight } from "./_data";
import Link from "next/link";

interface BrowseByCategoryProps {}

// configring swiper
SwiperCore.use([Autoplay, EffectFade]);

export const BrowseByCategory: React.FC<BrowseByCategoryProps> = ({}) => {
   // router
   const router = useRouter();

   // global state
   const {
      domState: { pageWidth },
   } = useCtx();
   const [loading, setLoading] = useState(false);
   const [pgWidth, setPgWidth] = useState<string>("");

   // swiper slidesPerView
   const [cardsPerView, setCardsPerView] = useState<number>(5);

   // custome navigation button ref
   const navigationPrevRef = useRef<HTMLDivElement>(null);
   const navigationNextRef = useRef<HTMLDivElement>(null);

   const smNavigationPrevRef = useRef<HTMLDivElement>(null);
   const smNavigationNextRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (pageWidth > 1180) {
         setPgWidth("lg");
         setCardsPerView(5);
         setLoading(false);
      } else if (pageWidth < 1180 && pageWidth > 720) {
         setCardsPerView(3);
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

   return (
      <section className="container  mx-auto px-2 font-title">
         <div className="my-10 flex md:block justify-center items-center flex-col">
            <h3 className="italic font-semibold text-blue-600 py-1 text-xl ">
               - The Categories
            </h3>
            <div className="flex  flex-col md:flex-row">
               <h4 className="text-smTitle md:text-lgTitle font-extrabold flex-1 text-nevyBlue font-title">
                  Browse by Category
               </h4>
               <div className="flex justify-center items-center gap-3 md:gap-5 mt-6 md:mt-0">
                  <span
                     className="p-2 text-nevyBlue rounded-full border hover:border-nevyBlue cursor-pointer  transition-colors duration-200"
                     ref={navigationPrevRef}
                  >
                     <GoLeft />
                  </span>
                  <span
                     className="p-2 text-nevyBlue rounded-full border hover:border-nevyBlue cursor-pointer transition-colors duration-200"
                     ref={navigationNextRef}
                  >
                     <GoRight />
                  </span>
               </div>
            </div>
         </div>

         <Swiper
            className="my-4"
            slidesPerView={cardsPerView}
            autoplay={{ disableOnInteraction: false }}
            spaceBetween={pageWidth < 550 && pageWidth > 0 ? 15 : 40}
            navigation={{
               prevEl: navigationPrevRef.current
                  ? navigationPrevRef.current
                  : undefined,
               nextEl: navigationNextRef.current
                  ? navigationNextRef.current
                  : undefined,
            }}
            onInit={(swiper: any) => {
               swiper.params.navigation.prevEl = navigationPrevRef.current;
               swiper.params.navigation.nextEl = navigationNextRef.current;
               swiper.navigation.update();
            }}
         >
            {categories.map(({ name, icon, to }, id: number) => (
               <SwiperSlide key={id}>
                  <Link href={to}>
                     <motion.div
                        whileHover={{ y: -10 }}
                        className={`cursor-pointer  text-center hover:shadow-md rounded-3xl flex flex-col justify-center items-center h-32  py-3  my-3 bg-lightest_gray hover:bg-nevyBlue hover:text-gray-50 transition-none duration-300 text-nevyBlue ${
                           pgWidth == "sm" && ""
                        } ${pgWidth == "xs" && ""}`}
                     >
                        <span className="text-lightBlue py-3">{icon}</span>
                        <p className="font-bold text-xl"> {name}</p>
                     </motion.div>
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};
