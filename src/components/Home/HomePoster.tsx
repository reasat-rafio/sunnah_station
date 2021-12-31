// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//    Navigation,
//    Pagination,
//    Autoplay,
//    EffectFade,
// } from "swiper";
// import "swiper/swiper-bundle.css";
import { imageUrlBuilder } from "@utils/sanity";
import { SanityImage, SanityImg } from "sanity-react-extra";

interface HomePosterProps {
  type: string;
  images: SanityImage[];
}

// SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export const HomePoster: React.FC<HomePosterProps> = ({ images }) => {
  return (
    <section className="pt-36 md:pt-0">
      <div className="h-screen w-screen">
        <SanityImg
          className="h-full w-full object-cover"
          builder={imageUrlBuilder}
          image={images[0]}
          alt="HERO IMAGE"
          width={2500}
        />

        {/* <Image
               src={"url"}
               height="3"
               width="6"
               layout="responsive"
               alt="poster"
            /> */}

        {/* <img src="/img/ramadan-cover-website.jpg" alt="poster" /> */}

        {/* <Swiper
               style={{ height: "90vh" }}
               className=""
               effect="fade"
               navigation
               autoplay={{ disableOnInteraction: false }}
               pagination={{ clickable: true }}
            >
               {coverImg.map(({ _id, url }: singleImg) => (
                  <SwiperSlide key={_id}>
                     <Image
                        // className="rounded-3xl "
                        src={url}
                        height="3"
                        width="6"
                        layout="responsive"
                        alt="poster"
                     />
                  </SwiperSlide>
               ))}
            </Swiper> */}
      </div>
    </section>
  );
};
