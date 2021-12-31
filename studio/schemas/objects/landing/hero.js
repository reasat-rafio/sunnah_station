import { FiStar } from "react-icons/fi";

export default {
  name: "landingHero",
  type: "object",
  title: "Hero",
  icon: FiStar,
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: "Hero Section",
      };
    },
  },
};
