import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import logo from "../../assets/img/logo.svg";
import { HOME_CONTENT } from "../../store/homeContent";

const Home = () => {
  const CONTAINER_CLASS =
    "flex justify-between m-auto max-w-[1248px] pt-9 pb-9 px-4";
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
    const MENU_CLASS =
      "text-white text-md font-medium py-2 px-4 border-1 border-transparent hover:border-1 rounded-lg hover:border-pinkBackground";
    return (
      <div>
        <ul className="flex gap-3">
          <li>
            <Link className={MENU_CLASS} to={ROUTES.HOME}>
              Home
            </Link>
          </li>
          <li>
            <Link className={MENU_CLASS} to={ROUTES.ABOUT}>
              About Us
            </Link>
          </li>
          <li>
            <Link className={MENU_CLASS} to={ROUTES.JOB_LIST}>
              Browse Jobs
            </Link>
          </li>
          <li>
            <Link className={MENU_CLASS} to={ROUTES.CONTACT}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-md font-medium py-2 px-6 bg-orangeColor border-2 border-orangeColorLight hover:border-2 rounded-lg hover:border-orangeColor uppercase"
              to={ROUTES.LOGIN}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const renderMenus = () => {
    return (
      <div className="border-b border-pink-600">
        <div className={`${CONTAINER_CLASS} items-center`}>
          {renderLogo()} {renderTopMenus()}
        </div>
      </div>
    );
  };

  const renderSearch = () => {
    return (
      <div className={CONTAINER_CLASS}>
        <div>
          <h1 className="text-[44px] text-white font-extrabold text-center">
            {HOME_CONTENT.SEARCH.TITLE}
          </h1>
          <p className="text-lg text-white text-center font-extralight max-w-[80%] m-auto pt-2">
            {HOME_CONTENT.SEARCH.DESC}
          </p>

          <div className="bg-white/75 p-7 rounded-lg mt-12 shadow-lg flex gap-4">
            <div className="bg-white h-12 border border-[#D3D3D3] flex items-center p-3">
              <input
                type="text"
                name=""
                id=""
                className="w-full h-full focus:outline-none"
              />
            </div>

            <div>
              <input type="text" name="" id="" />
            </div>

            <div>
              <select name="" id="">
                <option>Please Select</option>
              </select>
            </div>
          </div>

          <div className="text-xs text-white text-center pt-4 font-extralight">
            {HOME_CONTENT.SEARCH.SEARCH_HELP}
          </div>
        </div>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <>
        <div className="relative bg-pinkBackground bg-gradient-custom">
          <div className="header-bg">
            {renderMenus()}
            {renderSearch()}
          </div>
        </div>
      </>
    );
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
