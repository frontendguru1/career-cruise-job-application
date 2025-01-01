import { useParams } from "react-router-dom";
import { activeJobsData, similarJobsData } from "../../store/data";
import { JobProps } from "../../@types/type";
import { ButtonPrimary, JobListComponent, PageHeader } from "../../components";
import { faNewspaper, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jobDetailImg from "../../assets/img/job-details-img.png";

const JobDetails = () => {
  const { id } = useParams();
  const jobData = activeJobsData.find((job: JobProps) => job.id == id);
  return (
    <>
      <PageHeader title={jobData?.title} icon={faNewspaper} />
      <div className="py-7 px-8">
        <div className="flex justify-between">
          <div className="flex gap-3 font-bold rounded-md px-4 py-2 border border-pinkBackground text-sm text-pinkBackground">
            <FontAwesomeIcon icon={faSackDollar} className="text-lg" />{" "}
            {jobData?.salary}
          </div>

          <div className="text-sm font-bold text-pinkBackground">
            {`Exp. ${jobData?.exp} Years`}
          </div>
        </div>

        <div className="flex gap-8 pt-5">
          <div className="max-w-xs">
            <img src={jobDetailImg} alt={jobData?.title} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Company Overview</h3>
            <p className="text-[16px] pt-1">{jobData?.description}</p>

            <h3 className="text-lg font-bold pt-5">TechStack</h3>
            <p className="text-[16px] pt-1">{jobData?.skills.join(", ")}</p>

            <div className="pt-8">
              <ButtonPrimary label={"Apply Now"} />
            </div>
          </div>
        </div>

        <div className="pt-8">
          <JobListComponent
            title="Similar Jobs"
            totalRecords={3}
            renderRecords={3}
            data={similarJobsData}
          />
        </div>
      </div>
    </>
  );
};

export default JobDetails;
