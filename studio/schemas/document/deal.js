import { FaRegHandshake } from "react-icons/fa";

export default {
  name: "deal",
  title: "Deals",
  type: "document",
  icon: FaRegHandshake,
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
    {
      name: "banner",
      title: "Banner",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "endsAt",
      title: "Ends At",
      type: "datetime",
    },
    {
      name: "appliesTo",
      title: "Applies To",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "description", media: "banner" },
  },
};
