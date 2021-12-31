import { FcHome } from "react-icons/fc";

export default {
  name: "landingPage",
  type: "document",
  title: "Landing",
  icon: FcHome,
  fields: [
    { name: "seo", type: "seo", title: "SEO" },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        { type: "landingHero" },
        { type: "landingCategory" },
        { type: "landingProduct" },
        // { type: "landingPortfolio" },
        // { type: "landingAwards" },
        // { type: "landingContact" },
        // { type: "landingDecor" },
        // { type: "landingTrustedBy" },
      ],
    },
  ],
  preview: {
    select: {
      title: "seo.title",
      subtitle: "seo.description",
    },
  },
};
