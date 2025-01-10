import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/logo.svg";
import { Menus, MenuProps, ROUTES } from "../../routes/constants.ts";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../hooks/redux-hook.ts";
import { logout } from "../../slice/authSlice.ts";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("authToken");
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      <div className="relative bg-pinkBackground bg-gradient-custom min-w-[320px] max-w-[25%]">
        <div className="text-center border-b border-pink-500 py-5">
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="Career Cruise" className="m-auto" />
          </Link>
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
