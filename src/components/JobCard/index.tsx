import { JobProps } from "../../@types/type";
import ButtonPrimary from "../ButtonPrimary";

const JobCard: React.FC<{ job: JobProps }> = ({
  job: { title, exp, description, skills },
}) => {
  return (
    <div className="border-pinkBackground border-2 rounded-lg p-6 min-w-80">
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
        <ButtonPrimary label="Apply Now" />
      </div>
    </div>
  );
};

export default JobCard;
