import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { ButtonPrimary } from "../../components";
import { menusPath } from "../../routes/Menus";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import { authLoginAsync } from "../../slice/authSlice";
import { loginFormSchema } from "./loginSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginFormProps } from "../../@types/type";
const Login = () => {
  const dispatch = useAppDispatch();
  const authToken = useAppSelector((state) => state.auth.token);
  const authStatus = useAppSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const initialValues: LoginFormProps = {
    username: "",
    password: "",
  };

  const loginHanlder = ({ username, password }: LoginFormProps) => {
    dispatch(
      authLoginAsync({
        username,
        password,
      })
    );
  };

  useEffect(() => {
    if (authToken && authStatus === "succeeded") {
      navigate(menusPath.jobList);
    }
  }, [authToken, authStatus, navigate]);

  return (
    <div className="flex size-full h-screen justify-center items-center p-5">
      <div className="relative bg-pinkBackground bg-gradient-custom rounded-lg w-2/6 min-w-[320px]">
        <div className="text-center border-b border-pink-500 py-5">
          <img src={logo} alt="Career Cruise" className="m-auto" />
        </div>
        <div className="p-7 px-9">
          <Formik
            initialValues={initialValues}
            validationSchema={loginFormSchema}
            onSubmit={(values) => loginHanlder(values)}
          >
            {() => (
              <Form>
                <div>
                  <label
                    htmlFor="username"
                    className="block w-full pb-2 text-[16px] text-white"
                  >
                    Username
                  </label>
                  <Field
                    name={"username"}
                    type="text"
                    className="w-full border-0 p-2 rounded-md"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="mt-1 text-sm text-yellow-500"
                  />
                </div>
                <div className="pt-5">
                  <label
                    htmlFor="password"
                    className="block w-full pb-2 text-[16px] text-white"
                  >
                    Password
                  </label>
                  <Field
                    name={"password"}
                    type="password"
                    className="w-full border-0 p-2 rounded-md"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-1 text-sm text-yellow-500"
                  />
                </div>
                <div className="pt-7">
                  <ButtonPrimary
                    label={"Login"}
                    // onClickHandler={loginHanlder}
                  />
                </div>
              </Form>
            )}
          </Formik>

          <div className="flex gap-5 justify-between pt-10">
            <div className="text-linkColor underline cursor-pointer">
              Forgot Password?
            </div>
            <div className="text-linkColor underline cursor-pointer">
              <Link to={menusPath.signup}>New user? Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
