import * as yup from "yup";

const LoginSchema = yup.object({
  username: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 char or above")
    .max(20, "username must be below 20 char"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must be 3 char or above"),
});

export default LoginSchema;
