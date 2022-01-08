export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seoImage",
      type: "image",
      title: "SEO Image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
