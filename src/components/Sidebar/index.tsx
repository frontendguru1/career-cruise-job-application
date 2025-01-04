import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/logo.svg";
import { Menus, MenuProps, menusPath } from "../../routes/Menus.ts";
import { NavLink, useNavigate } from "react-router-dom";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook.ts";
import { logout } from "../../slice/authSlice.ts";
import { useEffect } from "react";
const SideBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authToken = useAppSelector((state) => state.auth.token);
  const status = useAppSelector((state) => state.auth.status);

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("authToken");
  };

  useEffect(() => {
    console.log("logged out");
    if (!authToken && status != "succeeded") {
      navigate(menusPath.login);
    }
  }, [authToken, status, navigate]);

  return (
    <>
      <div className="relative bg-pinkBackground bg-gradient-custom min-w-[320px] max-w-[25%]">
        <div className="text-center border-b border-pink-500 py-5">
          <img src={logo} alt="Career Cruise" className="m-auto" />
        </div>
        <div className="p-0">
          <ul className="list-none text-[16px] text-white">
            {Menus &&
              Menus.map((menu: MenuProps) => {
                return (
                  <li className="cursor-pointer" key={menu?.title}>
                    <NavLink
                      to={menu.path}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-pinkBackground flex items-center gap-2 py-6 px-9"
                          : "flex items-center gap-2 py-6 px-9"
                      }
                    >
                      <FontAwesomeIcon icon={menu.icon} /> {menu?.title}
                    </NavLink>
                  </li>
                );
              })}

            <li
              className="cursor-pointer flex items-center gap-2 py-6 px-9"
              onClick={logoutHandler}
            >
              <FontAwesomeIcon icon={faSignOut} /> Logout
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
