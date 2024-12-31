import {
  faAdd,
  faList,
  faSearch,
  faSignOut,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface MenuProps {
  title: string;
  icon: IconDefinition;
  path: string;
}

export const menusPath = {
  jobList: "jobs",
  jobDetails: "/job/:id",
  addNewJob: "add-new-job",
  search: "search",
  profile: "profile",
};

export const Menus: MenuProps[] = [
  {
    title: "Job List",
    icon: faList,
    path: menusPath.jobList,
  },

  {
    title: "Add a New Job",
    icon: faAdd,
    path: menusPath.addNewJob,
  },
  {
    title: "Search for Job",
    icon: faSearch,
    path: menusPath.search,
  },
  {
    title: "Profile",
    icon: faUser,
    path: menusPath.profile,
  },
  {
    title: "Logout",
    icon: faSignOut,
    path: "",
  },
];
