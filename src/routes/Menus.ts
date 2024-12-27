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
}

export const Menus: MenuProps[] = [
  {
    title: "Job List",
    icon: faList,
  },

  {
    title: "Add a New Job",
    icon: faAdd,
  },
  {
    title: "Search for Job",
    icon: faSearch,
  },
  {
    title: "Profile",
    icon: faUser,
  },
  {
    title: "Logout",
    icon: faSignOut,
  },
];
