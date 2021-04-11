import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

interface CardImageProps {
   image: any[];
   name: string;
}
// configring swiper
SwiperCore.use([]);
export const CardImage: React.FC<CardImageProps> = ({ image, name }) => {
   return (
      <>
         <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={{
               disableOnInteraction: false,
            }}
            style={{ maxWidth: "200px" }}
            className="flex justify-center items-center "
         >
            {image.map((a, i) => (
               <SwiperSlide key={i} className="flex flex-col  m-auto ">
                  <Image
                     className="flex justify-center items-center mx-auto "
                     src={a.url}
                     alt={name}
                     layout="responsive"
                     height="1"
                     width="1"
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
};
