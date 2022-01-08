import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import { ImageBanner } from "@libs/types/landing-types";

interface BannerProps {
  type: string;
  imageBanners: ImageBanner[];
}

const breakpoints = {
  "0": {
    slidesPerView: 2,
  },
};

const BannerSliderBlock: React.FC<BannerProps> = ({ imageBanners }) => {
  return (
    <div className="mb-12 md:mb-14 xl:mb-16 mx-auto max-w-[1920px] overflow-hidden">
      <div className="-mx-32 sm:-mx-44 lg:-mx-60 xl:-mx-72 2xl:-mx-80">
        <Carousel
          breakpoints={breakpoints}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          paginationVariant="circle"
          buttonClassName="hidden"
        >
          {imageBanners.map((banner, idx) => (
            <SwiperSlide
              key={`banner--key${banner._key}`}
              className="px-1.5 md:px-2.5 xl:px-3.5"
            >
              <BannerCard
                banner={banner.image}
                effectActive={true}
                href={`/${banner.href}`}
                alt={banner.name}
                height={600}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BannerSliderBlock;
