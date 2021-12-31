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
      name: "image",
      title: "Image",
      type: "image",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
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
};
