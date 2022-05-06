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

export const RegisterSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Please enter a correct email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be longer than 4 character")
    .required("Password is required"),
  con_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const LoginSchema = yup.object().shape({
  identifier: yup
    .string()
    .email("Please enter a correct email")
    .required("Email is required"),
  password: yup.string().required("This field is required"),
});

export const Checkoutschema = yup.object().shape({
  first_name: yup.string().required("Please fill out this field"),
  last_name: yup.string().required("Please fill out this field"),
  street_address: yup.string().required("Please fill out this field"),
  town_city: yup.string().required("Please fill out this field"),
  phone: yup
    .string()
    .trim()
    .matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, "invalid phone number")
    .required("Please fill out this field"),
  email_address: yup.string().email("Invalid email address"),

  additional_info: yup.string(),
});

export const NewsletterSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a correct email")
    .required("Email is required"),
});
