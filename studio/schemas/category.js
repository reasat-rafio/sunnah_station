import { BiCategoryAlt } from "react-icons/bi";
export default {
  name: "category",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    { name: "image", title: "Image", type: "image" },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "parents",
      title: "Parent categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "description", media: "image" },
  },
};
