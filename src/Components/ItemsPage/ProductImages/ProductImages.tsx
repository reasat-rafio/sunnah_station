import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { motion } from "framer-motion";

interface ProductImagesProps {
   img: any[];
}

// configring swiper
SwiperCore.use([Navigation, Pagination, EffectFade, Thumbs]);
export const ProductImages: React.FC<ProductImagesProps> = ({ img }) => {
   const [thumbsSwiper, setThumbsSwiper] = useState<any>();
   return (
      <div>
         <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
         >
            {img.map(({ url }, i) => (
               <SwiperSlide key={i}>
                  <motion.div
                     className={`m-auto`}
                     initial={{ x: 200, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: 0.2 }}
                  >
                     <InnerImageZoom zoomType="hover" src={url} zoomSrc={url} />
                  </motion.div>
               </SwiperSlide>
            ))}
         </Swiper>

         <Swiper
            id="thumbs"
            onSwiper={setThumbsSwiper}
            spaceBetween={5}
            slidesPerView={3}
            watchSlidesVisibility
            watchSlidesProgress
         >
            {img.map(({ formats: { thumbnail: { url } } }, i) => (
               <SwiperSlide key={i}>
                  <img className={`cursor-pointer`} src={url} alt="img" />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};
