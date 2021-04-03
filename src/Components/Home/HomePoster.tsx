import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
   Navigation,
   Pagination,
   Autoplay,
   EffectFade,
} from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

interface HomePosterProps {
   coverImg: any[];
}

interface singleImg {
   _id: string;
   url: string;
}

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export const HomePoster: React.FC<HomePosterProps> = ({ coverImg }) => {
   return (
      <section className="container mx-auto  px-2">
         <div className="lg:min-h-screen h-auto pt-32 md:pt-64">
            <Swiper
               effect="fade"
               navigation
               autoplay={{ disableOnInteraction: false }}
               pagination={{ clickable: true }}
            >
               {coverImg.map(({ _id, url }: singleImg) => (
                  <SwiperSlide key={_id}>
                     <Image
                        className="rounded-3xl "
                        src={url}
                        height="3"
                        width="6"
                        layout="responsive"
                        alt="poster"
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};
