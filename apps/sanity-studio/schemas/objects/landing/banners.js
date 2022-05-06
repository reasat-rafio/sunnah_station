import { FaRegImages } from "react-icons/fa";

export default {
  name: "landingBanners",
  title: "Banners",
  type: "object",
  icon: FaRegImages,
  fields: [
    {
      name: "imageBanners",
      title: "Image Banners",
      type: "array",
      of: [
        {
          name: "banner",
          title: "Banner",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "href",
              title: "Href",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "Banners Section",
      };
    },
  },
};
