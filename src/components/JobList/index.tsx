import { JobCard, ListHeader } from "../../components";
import { JobListComponentProps, JobProps } from "../../@types/type";
// import { jobList } from "../../store/data";

const JobListComponent = ({
  title,
  totalRecords,
  renderRecords,
  data,
}: JobListComponentProps) => {
  return (
    <>
      <ListHeader
        title={title}
        totalRecords={totalRecords}
        renderRecords={renderRecords}
      />
      <div className="flex flex-wrap gap-6 mt-5">
        {data &&
          data.map((job: JobProps) => <JobCard key={job.id} job={job} />)}
      </div>
    </>
  );
};

export default JobListComponent;
