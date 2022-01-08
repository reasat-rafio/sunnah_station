import { SubTitle } from "@components/ui/subtitle";
import { Title } from "@components/ui/title";
import { HighlightDeals } from "@libs/types/landing-types";
import React from "react";
import BannerWithProducts from "src/containers/banner-with-products";
interface HighlightedDealsProps {
  type: string;
  highlightDeals: HighlightDeals;
  tagline: string;
  title: string;
}

export const HighlightedDeal: React.FC<HighlightedDealsProps> = ({
  title,
  tagline,
  highlightDeals,
}) => {
  return (
    <div>
      <Title>{title}</Title>
      <SubTitle>{tagline}</SubTitle>

      <BannerWithProducts
        sectionHeading={highlightDeals.title}
        categorySlug={`/${highlightDeals.slug.current}`}
        data={highlightDeals.appliesTo}
        banner={highlightDeals.banner}
      />
    </div>
  );
};
