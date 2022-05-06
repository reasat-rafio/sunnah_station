import { Product } from "@libs/types/landing-types";
import { imageUrlBuilder } from "@utils/sanity";
import React from "react";
import { SanityImg } from "sanity-react-extra";

interface IProductCardProps extends Product {
  onClick?: () => void;
}

export const ProductCard: React.FC<IProductCardProps> = ({
  images,
  title,
  offderPrice,
  price,
  onClick,
}) => {
  return (
    <div
      className="rounded-xl md:h-80 h-smCard hover:shadow-2xl transition-all duration-150 flex flex-col relative group cursor-pointer border"
      onClick={onClick}
    >
      <div className="flex-[7] overflow-hidden bg-black flex justify-center items-center">
        <SanityImg
          className="m-auto group-hover:scale-110 transition-all duration-150 "
          height={200}
          builder={imageUrlBuilder}
          image={images[0]}
          alt={title}
        />
      </div>

      <div className="flex-[3] flex flex-col justify-center items-center p-3">
        <p className="text-sm font-medium text-center font-nav">{title}</p>
        {offderPrice ? (
          <div className="my-2 flex gap-2 items-center justify-center">
            <span className="line-through  text-sm text-gray-400 font-text">
              ৳{price}
            </span>
            <span className="text-lightBlue font-semibold font-text">
              ৳{offderPrice}
            </span>
          </div>
        ) : (
          <div className="my-2 flex gap-2 items-center justify-center">
            <span className="text-lightBlue font-semibold font-text">
              ৳{price}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
