import { FcShare } from "react-icons/fc";

export default {
  name: "landingCategory",
  title: "Category",
  type: "object",
  icon: FcShare,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "tagline",
      title: "Tagline",
      type: "text",
    },
    {
      name: "browseByCategory",
      title: "Browse by Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
  ],
};
