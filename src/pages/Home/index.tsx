import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import logo from "../../assets/img/logo.svg";

const Home = () => {
  const renderLogo = () => {
    return (
      <div>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Career Cruise" className="m-auto" />
        </Link>
      </div>
    );
  };

  const renderTopMenus = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About Us</Link>
          </li>
          <li>
            <Link to={ROUTES.JOB_LIST}>Browse Jobs</Link>
          </li>
          <li>
            <Link to={ROUTES.LOGIN}>Sign In</Link>
          </li>
        </ul>
      </div>
    );
  };

  const renderMenus = () => {
    return (
      <div className="relative bg-pinkBackground bg-gradient-custom">
        <div className="flex justify-between m-auto max-w-[1248px] pt-9 pb-9">
          {renderLogo()} {renderTopMenus()}
        </div>
      </div>
    );
  };

  const renderHeader = () => {
    return <div className="">{renderMenus()}</div>;
  };

  const renderPopularCategories = () => {
    return <div className="">Render Popular Categories</div>;
  };

  const renderContactUs = () => {
    return <div className="">Render Contact Us</div>;
  };

  const renderPopularJobs = () => {
    return <div className="">Render Jobs</div>;
  };

  const renderExploreJobs = () => {
    return <div className="">Explore Jobs or Contact Us </div>;
  };

  const renderFooter = () => {
    return <div className="">Footer</div>;
  };

  return (
    <>
      {renderHeader()}
      {renderPopularCategories()}
      {renderContactUs()}
      {renderPopularJobs()}
      {renderExploreJobs()}
      {renderFooter()}
    </>
  );
};

export default Home;
