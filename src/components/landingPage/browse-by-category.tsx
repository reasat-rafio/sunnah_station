import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { useRef } from "react";
import { motion } from "framer-motion";
import { GoLeft, GoRight } from "../Home/BrowsByCategory/_data";
import Link from "next/link";
import "swiper/css";
import { ICategory } from "@libs/types/landing-types";
import { Title } from "@components/ui/title";
import { SubTitle } from "@components/ui/subtitle";
import { SanityImg } from "sanity-react-extra";
import { imageUrlBuilder } from "@utils/sanity";

interface BrowseByCategoryProps {
  type: string;
  browseByCategory: ICategory[];
  tagline: string;
  title: string;
}

SwiperCore.use([Autoplay]);

export const BrowseByCategory: React.FC<BrowseByCategoryProps> = ({
  browseByCategory,
  title,
  tagline,
}) => {
  // custome navigation button ref
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="font-title">
      <div className="my-10 flex md:block justify-center items-center flex-col">
        <Title>{title}</Title>
        <div className="flex  flex-col md:flex-row">
          <SubTitle>{tagline}</SubTitle>

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
        modules={[Autoplay]}
        className="my-4"
        autoplay={{ disableOnInteraction: false }}
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
            slidesPerView: 6,
            spaceBetween: 3,
          },

          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
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
          swiper.navigation?.update();
        }}
      >
        {browseByCategory.map(({ _id, image, title, slug }) => (
          <SwiperSlide key={_id}>
            <Link href={`/shop/${slug.current}`}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`cursor-pointer  text-center hover:shadow-md rounded-3xl flex flex-col justify-center items-center h-32  py-3  my-3 bg-lightest_gray hover:bg-nevyBlue hover:text-gray-50 transition-none duration-300 text-nevyBlue`}
              >
                <span className="text-lightBlue py-3">
                  <SanityImg
                    width={50}
                    image={image}
                    builder={imageUrlBuilder}
                    alt={title}
                  />
                </span>
                <p className="font-bold text-xl"> {title}</p>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
