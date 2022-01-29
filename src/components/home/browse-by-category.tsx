import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { ICategory } from "@libs/types/landing-types";
import { Title } from "@components/ui/title";
import { SubTitle } from "@components/ui/subtitle";
import { SanityImg } from "sanity-react-extra";
import { imageUrlBuilder } from "@utils/sanity";
import { LeftArrow } from "@components/icons/left-arrow";
import { RightArrow } from "@components/icons/right-arrow";
import { motion } from "framer-motion";
import { useWindowSize } from "@libs/hooks";
import clsx from "clsx";

interface BrowseByCategoryProps {
  type: string;
  browseByCategory: ICategory[];
  tagline: string;
  title: string;
}

type ElType = HTMLSpanElement | null;

interface ControllerIconBlockProps {
  className?: string;
  setPrevEl: Dispatch<SetStateAction<ElType>>;
  setNextEl: Dispatch<SetStateAction<ElType>>;
}

const ControllerIconBlock: React.FC<ControllerIconBlockProps> = ({
  className,
  setNextEl,
  setPrevEl,
}) => {
  return (
    <div
      className={clsx(
        className,
        "flex justify-center items-center gap-3 md:gap-5 mt-6 md:mt-0"
      )}
    >
      <span
        className="p-2 text-nevyBlue rounded-full border border-nevyBlue cursor-pointer  transition-all duration-200 hover:scale-105 z-10"
        ref={(node) => setPrevEl(node)}
      >
        <LeftArrow />
      </span>
      <span
        className="p-2 text-nevyBlue rounded-full border border-nevyBlue cursor-pointer transition-all duration-200 hover:scale-105 z-10"
        ref={(node) => setNextEl(node)}
      >
        <RightArrow />
      </span>
    </div>
  );
};

export const BrowseByCategory: React.FC<BrowseByCategoryProps> = ({
  browseByCategory,
  title,
  tagline,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0;

  // custome navigation button ref
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <section className="font-title">
      <div className="my-10 flex md:block justify-center items-center flex-col">
        <Title>{title}</Title>
        <div className="flex  flex-col md:flex-row">
          <SubTitle>{tagline}</SubTitle>

          {windowWidth >= 768 && (
            <ControllerIconBlock setNextEl={setNextEl} setPrevEl={setPrevEl} />
          )}
        </div>
      </div>

      <Swiper
        className="my-4"
        modules={[Navigation, A11y, Autoplay]}
        navigation={{ prevEl, nextEl }}
        autoplay={{ disableOnInteraction: false }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 6,
            spaceBetween: 30,
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
      >
        {browseByCategory.map(({ _id, image, title, slug }) => (
          <SwiperSlide key={_id}>
            <Link href={`/shop/${slug.current}`}>
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
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

      {windowWidth < 768 && (
        <ControllerIconBlock setNextEl={setNextEl} setPrevEl={setPrevEl} />
      )}
    </section>
  );
};
