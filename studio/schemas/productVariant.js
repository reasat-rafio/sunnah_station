export default {
  title: "Product variant",
  name: "productVariant",
  type: "object",
  fields: [
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
  ],
};
