import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/logo.svg";
import { Menus, MenuProps } from "../../routes/Menus.ts";
import { NavLink } from "react-router-dom";
const SideBar = () => {
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
