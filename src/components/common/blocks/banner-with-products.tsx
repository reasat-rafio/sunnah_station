import { Product } from "@libs/types/landing-types";
import React from "react";
import BannerCard from "../banner-card";

interface BannerWithProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  variant?: "default" | "reverse";
  data: Product[];
}

export const BannerWithProducts: React.FC<BannerWithProductsProps> = ({
  sectionHeading,
  categorySlug,
  variant = "default",
  className = "mb-12 md:mb-14 xl:mb-16",
  data,
}) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between -mt-2 lg:-mt-2.5"></div>

      <div className="grid grid-cols-4 gap-3 lg:gap-5 xl:gap-7">
        {variant === "reverse" ? (
          <BannerCard
            banner={""}
            href={`${""}`}
            className="hidden 3xl:block"
            effectActive={true}
          />
        ) : (
          <BannerCard
            banner={""}
            href={`${""}`}
            className="hidden 3xl:block"
            effectActive={true}
          />
        )}
        <div
          className={`col-span-full 3xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-7 ${
            variant === "reverse" ? "row-span-full" : ""
          }`}
        >
          {/* { data?.map((product) => (
                  <ProductCard
                    key={`product--key${product.id}`}
                    product={product}
                    imgWidth={176}
                    imgHeight={176}
                    variant="listSmall"
                  />
                )} */}
          {data.map((product) => (
            <></>
          ))}
        </div>
      </div>
    </div>
  );
};
