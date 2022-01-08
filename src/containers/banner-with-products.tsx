import BannerCard from "@components/common/banner-card";
import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductCardListSmallLoader from "@components/ui/loaders/product-card-small-list-loader";
import { Product } from "@libs/types/landing-types";
import { useState } from "react";
import { SanityImage } from "sanity-react-extra";

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  variant?: "default" | "reverse";
  data: Product[];
  banner: SanityImage;
}

const BannerWithProducts: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  variant = "default",
  className = "mb-12 md:mb-14 xl:mb-16",
  data,
  banner,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />

      <div className="grid grid-cols-4 gap-3 lg:gap-5 xl:gap-7">
        {variant === "reverse" ? (
          <BannerCard
            banner={banner}
            alt={sectionHeading}
            className="hidden 3xl:block"
            effectActive={true}
            href={categorySlug as string}
          />
        ) : (
          <BannerCard
            banner={banner}
            alt={sectionHeading}
            className="hidden 3xl:block"
            effectActive={true}
            href={categorySlug as string}
          />
        )}
        <div
          className={`col-span-full 3xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-7 ${
            variant === "reverse" ? "row-span-full" : ""
          }`}
        >
          {isLoading
            ? Array.from({ length: 9 }).map((_, idx) => (
                <ProductCardListSmallLoader
                  key={idx}
                  uniqueKey={`on-selling-${idx}`}
                />
              ))
            : data?.map((product) => (
                <ProductCard
                  key={`product--key${product._id}`}
                  product={product}
                  imgWidth={176}
                  imgHeight={176}
                  variant="listSmall"
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default BannerWithProducts;
