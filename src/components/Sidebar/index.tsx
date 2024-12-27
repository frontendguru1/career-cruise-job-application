import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/logo.svg";
import { Menus, MenuProps } from "../../routes/Menus.ts";
const SideBar = () => {
  return (
    <>
      <div className="relative bg-pinkBackground bg-gradient-custom h-screen min-w-[320px] max-w-[25%]">
        <div className="text-center border-b border-pink-500 py-5">
          <img src={logo} alt="Career Cruise" className="m-auto" />
        </div>
        <div className="p-9">
          <ul className="list-none text-[16px] text-white flex flex-col gap-10">
            {Menus &&
              Menus.map((menu: MenuProps) => {
                return (
                  <li
                    className="flex items-center gap-2 cursor-pointer"
                    key={menu?.title}
                  >
                    <FontAwesomeIcon icon={menu.icon} /> {menu?.title}
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
