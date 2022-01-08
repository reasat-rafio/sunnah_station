import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SanityImage, SanityImg } from "sanity-react-extra";
import { imageUrlBuilder } from "@utils/sanity";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

interface ProductImagesProps {
  images: SanityImage[];
  name: string;
}

SwiperCore.use([Autoplay]);

export const ProductImages: React.FC<ProductImagesProps> = ({
  images,
  name,
}) => {
  return (
    <div className=" h-full w-full bg-black">
      <Swiper
        className=" h-full w-full"
        centeredSlides
        slidesPerView={1}
        loop={false}
        autoplay={{
          disableOnInteraction: true,
        }}
      >
        {images.map((image, idx) => (
          <SwiperSlide
            key={idx}
            className="m-auto box-border flex justify-center items-center h-full w-full"
          >
            <SanityImg
              className="m-auto group-hover:scale-110 transition-all duration-150 "
              height={200}
              builder={imageUrlBuilder}
              image={image}
              alt={name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
