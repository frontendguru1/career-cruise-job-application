import { faList } from "@fortawesome/free-solid-svg-icons";
import { JobCard, ListHeader, PageHeader, SideBar } from "../../components";
import { JobProps } from "../../@types/type";

const JobList = () => {
  const jobData: JobProps = {
    title: "Java Developer",
    exp: "2",
    description: "Must have good experience in core Java and advanced Java.",
    skills: ["Core Java", "J2EE", "Spring Boot", "Hibernate"],
  };
  return (
    <div className="flex bg-bodyBg">
      <SideBar />

      <div className="flex-1">
        <PageHeader title={"Dashboard - Jobs List"} icon={faList} />

        <div className="p-8">
          {/* List header */}
          <ListHeader />
          <div className="flex flex-wrap gap-3 mt-6">
            <JobCard job={jobData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
