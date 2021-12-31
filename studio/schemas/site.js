import { FaSitemap } from "react-icons/fa";

export default {
  name: "siteConfig",
  type: "document",
  title: "Site",
  icon: FaSitemap,
  fields: [
    {
      name: "logo",
      type: "image",
      title: "Logo",
    },

    {
      name: "siteUrl",
      type: "url",
      title: "Site Url",
    },
    {
      name: "ogImage",
      type: "image",
      title: "Default SEO Image",
      options: {
        accept: "image/png, image/jpeg, image/webp",
      },
    },
    {
      name: "menu",
      title: "Menu",
      type: "array",
      of: [{ type: "menuItem" }],
    },
  ],
};
