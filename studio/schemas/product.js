import { CgShoppingCart } from "react-icons/cg";
export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: CgShoppingCart,
  fields: [
    {
      name: "seo",
      title: "Seo",
      type: "seo",
    },
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
      title: "Offer Available",
      name: "offerAvailable",
      type: "boolean",
    },

    {
      title: "Offer Starts At",
      name: "offerStartsAt",
      type: "datetime",
    },

    {
      title: "Offer Ends At",
      name: "offerEndsAt",
      type: "datetime",
    },

    {
      title: "Default variant",
      name: "defaultProductVariant",
      type: "productVariant",
    },
    {
      title: "Variants",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "productVariant",
        },
      ],
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
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

    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]",
    },
  },
};
