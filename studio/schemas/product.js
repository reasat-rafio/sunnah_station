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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
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
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Weight in grams",
      name: "grams",
      type: "number",
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
      title: "Price",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },

    {
      title: "OfferPrice",
      name: "offderPrice",
      type: "number",
    },

    {
      name: "images",
      title: "Images",
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

    // @TODO impliemnt is later
    // {
    //   title: "Default variant",
    //   name: "defaultProductVariant",
    //   type: "productVariant",
    //   validation: (Rule) => Rule.required(),
    // },
    // {
    //   title: "Variants",
    //   name: "variants",
    //   type: "array",
    //   of: [
    //     {
    //       title: "Variant",
    //       type: "productVariant",
    //     },
    //   ],
    // },
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
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Colors",
      name: "colors",
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
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "seo.seoImage",
    },
  },
};
