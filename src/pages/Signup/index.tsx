import { SyntheticEvent } from "react";
import logo from "../../assets/img/logo.svg";
import { ButtonPrimary } from "../../components";
import { Link } from "react-router-dom";
import { menusPath } from "../../routes/Menus";

const Signup = () => {
  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("Submit");
  };

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

          <form onSubmit={(event) => submitHandler(event)}>
            <div className="pt-10">
              <div className="flex gap-6">
                <div className="w-[50%]">
                  <label
                    htmlFor="firstName"
                    className="block w-full pb-2 text-[16px]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id="firstName"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <label
                    htmlFor="lastName"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id="lastName"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
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
                  <input
                    type="text"
                    name=""
                    id="email"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <label
                    htmlFor="phone"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name=""
                    id="phone"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
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
                  <input
                    type="password"
                    name=""
                    id="password"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <label
                    htmlFor="confirmPassword"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name=""
                    id="confirmPassword"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  />
                </div>
              </div>

              <div className="flex gap-6 mt-9 justify-between">
                <ButtonPrimary label={"Sign up"} />

                <div className="text-linkColor cursor-pointer underline">
                  <Link to={menusPath.login}>Already sign up? Login</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
