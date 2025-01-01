import { Link } from "react-router-dom";
import { JobProps } from "../../@types/type";
import ButtonPrimary from "../ButtonPrimary";
// import { menusPath } from "../../routes/Menus";

const JobCard: React.FC<{ job: JobProps }> = ({
  job: { title, exp, description, skills, id },
}) => {
  return (
    <div className="border-pinkBackground border rounded-lg p-6 xs:min-w[100%] sm:min-w-[300px] sm:w-[300px] flex-1 bg-white shadow-lg">
      <div className="flex justify-between gap-3">
        <h3 className="font-bold text-[16px]">{title}</h3>
        <div className="text-pinkBackground text-sm">{`Exp. ${exp} Years`}</div>
      </div>
      <div className="text-sm text-gray-700 pt-3">{description}</div>
      <div className="pt-2">
        <span className="text-sm font-bold">TechStack</span>
        <br />
        <div className="text-sm text-gray-700">{skills.join(", ")}</div>
      </div>
      <div className="pt-4">
        <Link to={"/job/" + id}>
          <ButtonPrimary label="View Details" />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
