import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ContactSchema = yup.object().shape({
  name: yup.string().max(40).required(),
  email: yup.string().email("Please enter a correct email").required(),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
  message: yup.string().required(),
  budget: yup.string().required(),
});
