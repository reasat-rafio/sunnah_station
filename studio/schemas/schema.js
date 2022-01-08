// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//COMMON OBJECTS
import site from "./site";
import menuItem from "./objects/menuItem";
import seo from "./objects/seo";
import newsletter from "./objects/newsletter";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import product from "./product";
import productVariant from "./productVariant";
import deal from "./document/deal";

// PAGES
import landingPage from "./pages/landingPage";
import landingHero from "./objects/landing/hero";
import landingCategory from "./objects/landing/category";
import landingProduct from "./objects/landing/ourProduct";
import landingBanners from "./objects/landing/banners";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    site,
    menuItem,
    seo,
    newsletter,

    product,
    deal,

    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    productVariant,

    landingPage,
    landingHero,
    landingCategory,
    landingProduct,
    landingBanners,
  ]),
});
