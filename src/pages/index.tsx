import { GetStaticProps, GetStaticPropsContext } from "next";
import { InitialLayout } from "../components/Layouts/InitialLayout";
import { Banner } from "@components/landingPage/banner";
import { BrowseByCategory } from "../components/landingPage/browse-by-category";
import { HighlightedDeal } from "../components/landingPage/highlighted-deal";
import groq from "groq";
import { renderObjectArray, withDimensions } from "sanity-react-extra";
import { pageQuery } from "@libs/query";
import { sanityStaticProps, useSanityQuery } from "@utils/sanity";
import { SanityProps } from "next-sanity-extra";
import Container from "@components/ui/container";
import { NewArrivalsProductFeed } from "@components/product/feeds/new-arrivals-product-feed";

const query = pageQuery(groq`
  *[_id == "landingPage"][0] {
     ...,
      sections[]{
      ...,
      "image": ${withDimensions("image")},
      images[]{
        ...,
      "image": ${withDimensions("image")},
      },
      browseByCategory[]->{
        ...,
      "image": ${withDimensions("image")},
      },
      highlightDeals -> {
        ...,
      appliesTo[0...9]->,
      "banner": ${withDimensions("banner")}, 
      },
    },
    "latestProduct": *[_type == 'product'] | order(date desc) [0..10]{
      ...,
      appliesTo[]->{
        ...,
        categories[]->
      }
    }
  }
`);

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await sanityStaticProps({ query: query, context }),
  revalidate: 5,
});

export default function Home(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data;

  return (
    <InitialLayout>
      {renderObjectArray(page.sections, {
        landingHero: Banner,
      })}
      <Container>
        {renderObjectArray(page.sections, {
          landingCategory: BrowseByCategory,
          landingProduct: HighlightedDeal,
        })}
        <NewArrivalsProductFeed data={page.latestProduct} />
      </Container>
    </InitialLayout>
  );
}
