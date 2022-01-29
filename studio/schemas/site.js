import { FaSitemap } from "react-icons/fa";

export default {
  name: "siteConfig",
  type: "document",
  title: "Site",
  icon: FaSitemap,
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "media",
      title: "Media",
    },
    {
      name: "footer",
      title: "Footer",
    },
    {
      name: "navbar",
      title: "Navbar",
    },
  ],
  fields: [
    {
      name: "logo",
      type: "image",
      title: "Logo",
      group: "media",
    },

    {
      name: "ogImage",
      type: "image",
      title: "Default SEO Image",
      group: "seo",
      options: {
        accept: "image/png, image/jpeg, image/webp",
      },
    },
    {
      name: "menu",
      title: "Menu",
      type: "array",
      group: "navbar",
      of: [{ type: "menuItem" }],
    },
    {
      name: "footer",
      title: "Footer",
      type: "array",
      group: "footer",
      of: [{ type: "footerItem" }],
    },
  ],
};
