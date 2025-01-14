import {
  faAdd,
  faDashboard,
  faList,
  faSearch,
  // faSignOut,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface MenuProps {
  title: string;
  icon: IconDefinition;
  path: string;
}

export const ROUTES = {
  HOME: "/",
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
  JOB_LIST: "/jobs",
  JOB_DETAILS: "/job/:id",
  ADD_NEW_JOB: "/add-new-job",
  SEARCH: "/search",
  PROFILE: "/profile",
  LOGIN: "/login",
  SIGN_UP: "/signup",
  ABOUT: "/about",
  CONTACT: "/contact",
};

export const Menus: MenuProps[] = [
  {
    title: "Dashboard",
    icon: faDashboard,
    path: ROUTES.DASHBOARD,
  },
  {
    title: "Job List",
    icon: faList,
    path: ROUTES.JOB_LIST,
  },

  {
    title: "Add a New Job",
    icon: faAdd,
    path: ROUTES.ADD_NEW_JOB,
  },
  {
    title: "Search for Job",
    icon: faSearch,
    path: ROUTES.SEARCH,
  },
  {
    title: "Profile",
    icon: faUser,
    path: ROUTES.PROFILE,
  },
  // {
  //   title: "Logout",
  //   icon: faSignOut,
  //   path: "",
  // },
];
