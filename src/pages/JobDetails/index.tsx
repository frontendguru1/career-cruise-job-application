import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  return <div>Param is: {id}</div>;
};

export default JobDetails;
