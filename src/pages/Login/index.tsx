import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { ButtonPrimary } from "../../components";
import { menusPath } from "../../routes/Menus";
import { useAppDispatch } from "../../hooks/redux-hook";
import { authLoginAsync } from "../../slice/authSlice";
// import { useEffect } from "react";
// import { loginService } from "../../services/authServices";
const Login = () => {
  // useEffect(() => {
  //   const username = "abc";
  //   const password = "password123";
  //   loginService({
  //     username,
  //     password,
  //   });
  // }, []);

  const dispatch = useAppDispatch();

  const loginHanlder = () => {
    dispatch(
      authLoginAsync({
        username: "abc",
        password: "password123",
      })
    );
  };

  return (
    <div className="flex size-full h-screen justify-center items-center p-5">
      <div className="relative bg-pinkBackground bg-gradient-custom rounded-lg w-2/6 min-w-[320px]">
        <div className="text-center border-b border-pink-500 py-5">
          <img src={logo} alt="Career Cruise" className="m-auto" />
        </div>
        <div className="p-7 px-9">
          <div>
            <label
              htmlFor="UserName"
              className="block w-full pb-2 text-[16px] text-white"
            >
              Username
            </label>
            <input
              type="text"
              name=""
              id="UserName"
              className="w-full border-0 p-2 rounded-md"
            />
          </div>

          <div className="pt-5">
            <label
              htmlFor="password"
              className="block w-full pb-2 text-[16px] text-white"
            >
              Password
            </label>
            <input
              type="password"
              name=""
              id="password"
              className="w-full border-0 p-2 rounded-md"
            />
          </div>

          <div className="pt-7">
            <ButtonPrimary label={"Login"} onClickHandler={loginHanlder} />
          </div>

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
