import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
const ListHeader = () => {
  return (
    <>
      <div className="flex justify-between gap-5">
        <div className="flex-1">
          <h2 className="text-xl font-bold">Current Active Jobs</h2>
          <div className="text-gray-500 text-sm pt-1">
            Showing 12 of 124 Jobs Results
          </div>
        </div>
        <div className="pl-20 flex justify-between gap-4">
          <div className="w-11 h-11 rounded-full border-pinkBackground border-2 flex justify-center items-center cursor-pointer bg-pinkBackground">
            <FontAwesomeIcon icon={faGrip} className="text-xl text-white" />
          </div>

          <div className="w-11 h-11 rounded-full border-pinkBackground border-2 flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon
              icon={faList}
              className="text-xl text-pinkBackground"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListHeader;
