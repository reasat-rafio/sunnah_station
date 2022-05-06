import React from "react";
import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import { Product } from "@libs/types/landing-types";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  products?: Product[];
  loading: boolean;
  uniqueKey?: string;
}

const ProductsBlock: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  className = "mb-9 md:mb-9 lg:mb-10 xl:mb-12",
  products,
  loading,
  uniqueKey,
}) => {
  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
        {loading && !products?.length ? (
          <ProductFeedLoader limit={10} uniqueKey={uniqueKey} />
        ) : (
          products?.map((product: Product) => (
            <ProductCard
              key={`product--key${product._id}`}
              product={product}
              imgWidth={324}
              imgHeight={324}
              variant="grid"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsBlock;
