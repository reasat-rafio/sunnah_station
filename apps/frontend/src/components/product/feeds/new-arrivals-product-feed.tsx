import { Product } from "@libs/types/landing-types";
import { useState } from "react";
import ProductsBlock from "src/containers/products-block";

export const NewArrivalsProductFeed: React.FC<{ data: Product[] }> = ({
  data,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ProductsBlock
      sectionHeading="new arrivals"
      products={data}
      loading={isLoading}
      uniqueKey="new-arrivals"
    />
  );
};
