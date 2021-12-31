export default {
  name: "siteConfig",
  title: "Site",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },

    { name: "ogImage", type: "image", title: "Default SEO Image" },
    {
      name: "menu",
      title: "Menu",
      type: "array",
      of: [{ type: "menuItem" }],
    },
  ],
  preview: {
    select: {
      media: "logo",
    },
  },
};
