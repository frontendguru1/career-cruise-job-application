import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});
