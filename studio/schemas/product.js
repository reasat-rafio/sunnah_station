import { CgShoppingCart } from "react-icons/cg";
export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: CgShoppingCart,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Product Id",
      name: "productId",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Price",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Sale Price",
      name: "sale_price",
      type: "number",
      description:
        "Keep this empty if there is no sale going on for this product",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },

    {
      title: "Variations",
      name: "variations",
      type: "array",
      of: [
        {
          name: "variation",
          title: "Variation",
          type: "object",
          fields: [
            {
              name: "value",
              title: "value",
              type: "string",
            },
            {
              name: "color",
              title: "Color",
              type: "colorPicker",
              description: "select this only if the Attribute is set to color",
            },

            {
              name: "attribute",
              title: "Attribute",
              type: "object",
              fields: [
                {
                  title: "Name",
                  name: "name",
                  type: "string",
                  options: {
                    list: ["Color", "Size", "Weight"],
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },

    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "shortDescription",
      media: "image",
    },
  },
};
