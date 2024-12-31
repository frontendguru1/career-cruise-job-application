import { Outlet } from "react-router-dom";
import { SideBar } from "../../components";

const Layout = () => {
  return (
    <div className="flex bg-bodyBg h-screen">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
