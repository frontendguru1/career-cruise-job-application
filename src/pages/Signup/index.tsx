import logo from "../../assets/img/logo.svg";
import { ButtonPrimary } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signupSchema } from "./signupSchema";
import { signupFormProps } from "../../@types/type";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import { authSignupAsync } from "../../slice/authSignup";
import { useEffect } from "react";

const Signup = () => {
  const dispatch = useAppDispatch();
  const signupStatus = useAppSelector((state) => state.signup.status);
  const navigate = useNavigate();
  const initialValues: signupFormProps = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const submitHandler = (values: signupFormProps) => {
    dispatch(authSignupAsync(values));
  };

  useEffect(() => {
    if (signupStatus === "succeeded") {
      navigate(ROUTES.LOGIN);
    }
  }, [signupStatus, navigate]);

  return (
    <div className="flex bg-bodyBg">
      <div className="relative bg-pinkBackground bg-gradient-custom h-screen min-w-96 max-w-[25%] p-10">
        <div className="text-center">
          <img src={logo} alt="Career Cruise" className="m-auto" />
        </div>
        <div className="pt-5 text-center">
          <h1 className="text-center text-white text-4xl font-black">
            Lorem ipsum dolor{" "}
          </h1>
          <p className="pt-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor
            sapien id elit dignissim convallis. Fusce ut molestie eros, a
            commodo enim. Etiam dapibus congue magna. Donec malesuada, purus
            vitae tristique suscipit, magna justo faucibus mauris, vitae finibus
            tortor urna nec dui.
          </p>
        </div>
      </div>
      <div className="p-8 flex-1">
        <div className="border-pinkBackground border-2 rounded-xl p-6 bg-white">
          <h2 className="text-3xl text-center color-black font-medium">
            Sign up
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={(values) => submitHandler(values)}
          >
            {() => (
              <Form>
                <div className="pt-10">
                  <div className="flex gap-6">
                    <div className="w-[50%]">
                      <label
                        htmlFor="firstName"
                        className="block w-full pb-2 text-[16px]"
                      >
                        First Name
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>
                    <div className="w-[50%]">
                      <label
                        htmlFor="lastName"
                        className="block w-full pb-2 text-[16px]"
                      >
                        Last Name
                      </label>
                      <Field
                        name="lastName"
                        type="text"
                        id="lastName"
                        className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-6 mt-5">
                    <div className="w-[50%]">
                      <label
                        htmlFor="email"
                        className="block w-full pb-2 text-[16px]"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>
                    <div className="w-[50%]">
                      <label
                        htmlFor="userName"
                        className="block w-full pb-2 text-[16px]"
                      >
                        Username
                      </label>
                      <Field
                        type="text"
                        name="userName"
                        id="userName"
                        className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                      />
                      <ErrorMessage
                        name="userName"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-6 mt-5">
                    <div className="w-[50%]">
                      <label
                        htmlFor="password"
                        className="block w-full pb-2 text-[16px]"
                      >
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>
                    <div className="w-[50%]">
                      <label
                        htmlFor="confirmPassword"
                        className="block w-full pb-2 text-[16px]"
                      >
                        Confirm Password
                      </label>
                      <Field
                        name="confirmPassword"
                        type="password"
                        id="confirmPassword"
                        className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-6 mt-9 justify-between">
                    <ButtonPrimary label={"Sign up"} />

                    <div className="text-linkColor cursor-pointer underline">
                      <Link to={ROUTES.LOGIN}>Already sign up? Login</Link>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
