import { faList } from "@fortawesome/free-solid-svg-icons";
import { JobListComponent, PageHeader } from "../../components";
import { activeJobsData, popularJobsData } from "../../store/data";

const JobList = () => {
  return (
    <>
      <PageHeader title={"Dashboard - Jobs List"} icon={faList} />

      <div className="p-8">
        <JobListComponent
          title="Current Active Jobs"
          totalRecords={6}
          renderRecords={6}
          data={activeJobsData}
        />
      </div>

      <div className="p-8">
        <JobListComponent
          title="Popular Jobs"
          totalRecords={6}
          renderRecords={6}
          data={popularJobsData}
        />
      </div>
    </>
  );
};

export default JobList;
