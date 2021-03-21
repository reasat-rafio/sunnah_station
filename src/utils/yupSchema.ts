import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
   first_name: yup.string().required("First name is required"),
   last_name: yup.string().required("Last name is required"),
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
   password: yup
      .string()
      .min(4, "Password must be longer than 4 character")
      .required("This field is required"),
});

export const Checkoutschema = yup.object().shape({
   first_name: yup.string().required("Please fill out this field"),
   last_name: yup.string().required("Please fill out this field"),
   street_address: yup.string().required("Please fill out this field"),
   town_city: yup.string().required("Please fill out this field"),
   phone: yup.string().required("Please fill out this field"),
   email_address: yup
      .string()
      .email("Invalid email address")
      .required("Please fill out this field"),
   additional_info: yup.string(),
});
