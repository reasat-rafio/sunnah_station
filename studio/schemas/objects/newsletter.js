import { RiMailSendLine } from "react-icons/ri";
export default {
  name: "newsletter",
  title: "Newsletter",
  type: "object",
  icon: RiMailSendLine,
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
  ],
};
