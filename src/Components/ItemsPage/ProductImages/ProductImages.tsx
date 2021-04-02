import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
   EffectFade,
   Navigation,
   Pagination,
   Thumbs,
   Zoom,
} from "swiper";
import "swiper/swiper-bundle.css";
import { useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProductImagesProps {
   img: any[];
}

// configring swiper
SwiperCore.use([Navigation, Pagination, EffectFade, Thumbs, Zoom]);
export const ProductImages: React.FC<ProductImagesProps> = ({ img }) => {
   const [thumbsSwiper, setThumbsSwiper] = useState<any>();
   return (
      <div className="">
         <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            effect="fade"
            navigation
            zoom={true}
            pagination={{ clickable: true }}
            className="flex justify-center items-center mb-2"
         >
            {img.map(({ url, id }, i: number) => (
               <div key={id}>
                  <SwiperSlide>
                     <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center items-center"
                     >
                        <Image
                           src={url}
                           alt="prodcut image"
                           layout="intrinsic"
                           width="500%"
                           height="500%"
                        />
                     </motion.div>
                  </SwiperSlide>
               </div>
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
            {img.map(({ formats: { thumbnail: { url } }, id }, i) => (
               <SwiperSlide
                  key={i}
                  className="flex justify-center items-center "
               >
                  <Image
                     className={`cursor-pointer flex justify-center items-center `}
                     src={url}
                     alt="thumb-image"
                     layout="intrinsic"
                     height="100%"
                     width="100%"
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};
