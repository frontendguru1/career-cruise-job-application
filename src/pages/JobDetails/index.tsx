import { useParams } from "react-router-dom";
import { activeJobsData } from "../../store/data";
import { JobProps } from "../../@types/type";
import { PageHeader } from "../../components";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const { id } = useParams();
  const jobData = activeJobsData.find((job: JobProps) => job.id == id);
  return (
    <>
      <PageHeader title={jobData?.title} icon={faNewspaper} />
      <div>Param is: {jobData?.title}</div>
    </>
  );
};

export default JobDetails;
