import { createBrowserRouter, RouteObject } from "react-router-dom";
import {
  AddNewJob,
  JobDetails,
  JobList,
  Layout,
  SearchJob,
  UserProfile,
} from "../pages";
import { menusPath } from "./Menus";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: menusPath.jobList,
        element: <JobList />,
      },

      {
        path: menusPath.jobDetails,
        element: <JobDetails />,
      },
      {
        path: menusPath.addNewJob,
        element: <AddNewJob />,
      },
      {
        path: menusPath.search,
        element: <SearchJob />,
      },
      {
        path: menusPath.profile,
        element: <UserProfile />,
      },
    ],
  },
];

export const appRoutes = createBrowserRouter(routes);
