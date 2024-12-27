import logo from "../../assets/img/logo.svg";
import { ButtonPrimary } from "../../components";
const Login = () => {
  return (
    <div className="flex size-full h-screen justify-center items-center p-5">
      <div className="relative bg-pinkBackground bg-gradient-custom rounded-lg w-2/5 min-w-[400px]">
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
            <ButtonPrimary label={"Login"} />
          </div>

          <div className="flex gap-5 justify-between pt-10">
            <div className="text-linkColor underline cursor-pointer">
              Forgot Password?
            </div>
            <div className="text-linkColor underline cursor-pointer">
              New user? Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
