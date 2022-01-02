import { SubTitle } from "@components/ui/subtitle";
import { Title } from "@components/ui/title";
import { HighlightDeals } from "@libs/types/landing-types";
import React from "react";
import { Poster } from "../../utils/_components/Poster";
import { Deals } from "../Home/Deals/Deals";

interface HighlightedDealsProps {
  type: string;
  highlightDeals: HighlightDeals;
  tagline: string;
  title: string;
}

export const HighlightedDeal: React.FC<HighlightedDealsProps> = ({
  highlightDeals,
  tagline,
  title,
}) => {
  return (
    <section className="container  mx-auto px-2 font-title">
      <div className="my-10 flex md:block justify-center items-center flex-col">
        <Title>{title}</Title>
        <div className="flex  flex-col md:flex-row">
          <SubTitle>{tagline}</SubTitle>
        </div>
      </div>

      <Poster
        src={highlightDeals.banner}
        to={highlightDeals.slug.current}
        alt={`${highlightDeals.title} banner`}
      />

      <div>
        {/* <Deals
               deals={speicalDeals}
               to="/special-deals"
               name="RAMADAN SALE"
            /> */}
      </div>
    </section>
  );
};
