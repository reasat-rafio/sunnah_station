import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { imageUrlBuilder } from "@utils/sanity";
import { SanityImage, SanityImg } from "sanity-react-extra";
import { Pagination, Autoplay, EffectFade } from "swiper";

interface Banner {
  type: string;
  images: SanityImage[];
}

export const Banner: React.FC<Banner> = ({ images }) => {
  return (
    <section className="pt-36 md:pt-0">
      <div className="2xl:h-[80vh] lg:h-[90vh] h-[40vh] ">
        <Swiper
          className="h-full w-full"
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          centeredSlides
          loop
          pagination={{ clickable: true }}
          loopedSlides={images.length}
          autoplay={{ delay: 5000 }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <SanityImg
                className="h-full w-full object-cover"
                builder={imageUrlBuilder}
                image={img}
                alt="HERO IMAGE"
                width={2500}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
