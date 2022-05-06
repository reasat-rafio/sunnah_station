import { SanityImage } from "sanity-react-extra";
import BannerCard from "@components/common/banner-card";
import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductCardListSmallLoader from "@components/ui/loaders/product-card-small-list-loader";
import { Product } from "@libs/types/landing-types";
import { useState } from "react";

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
        <BannerCard
          banner={banner}
          className="hidden 2xl:block"
          alt={sectionHeading}
          effectActive={true}
          href={categorySlug as string}
          height={600}
          width={430}
        />
        <div
          className={`col-span-full 2xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-7 ${
            variant === "reverse" ? "row-span-full" : ""
          }`}
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, idx) => (
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
