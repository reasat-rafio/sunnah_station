// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//    Navigation,
//    Pagination,
//    Autoplay,
//    EffectFade,
// } from "swiper";
// import "swiper/swiper-bundle.css";
import Image from "next/image";

interface HomePosterProps {
   coverImg: any[];
}

interface singleImg {
   _id: string;
   url: string;
}

// SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export const HomePoster: React.FC<HomePosterProps> = ({ coverImg }) => {
   return (
      <section className="pt-36 md:pt-0">
         <div className="img_container">
            {/* <Image
               src={"url"}
               height="3"
               width="6"
               layout="responsive"
               alt="poster"
            /> */}

            <img src="/img/ramadan-cover-website.jpg" alt="poster" />

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
