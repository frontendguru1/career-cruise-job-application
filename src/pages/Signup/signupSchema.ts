import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  userName: Yup.string().required("This field is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("This field is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords does not match")
    .required("This field is required"),
});
