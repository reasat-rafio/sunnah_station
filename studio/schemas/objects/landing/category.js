import { BiCategoryAlt } from "react-icons/bi";
export default {
  name: "landingCategory",
  title: "Category",
  type: "document",
  icon: BiCategoryAlt,
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
