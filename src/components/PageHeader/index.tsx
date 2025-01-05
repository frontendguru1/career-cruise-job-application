import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageHeaderProps } from "../../@types/type";
import { useAppSelector } from "../../hooks/redux-hook";
const PageHeader = ({ title, icon }: PageHeaderProps) => {
  const userName = useAppSelector((state) => state.auth.user);
  return (
    <>
      <div className="bg-white p-8 flex justify-between">
        <div className="flex-1 flex items-center gap-4">
          <FontAwesomeIcon
            icon={icon}
            className="text-pinkBackground text-lg"
          />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        {/* User dropdown */}
        <div className="pl-7 flex items-center gap-3 cursor-pointer">
          <div className="rounded-full w-10 h-10 bg-gray-600 border-pinkBackground border"></div>
          <div className="text-sm">{userName?.email}</div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
