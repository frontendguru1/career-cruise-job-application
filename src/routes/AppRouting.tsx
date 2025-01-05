import { createBrowserRouter, RouteObject } from "react-router-dom";
import {
  AddNewJob,
  JobDetails,
  JobList,
  Layout,
  Login,
  SearchJob,
  Signup,
  UserProfile,
} from "../pages";
import { menusPath } from "./Menus";
import { PrivateRoute } from "../components";

const routes: RouteObject[] = [
  {
    path: menusPath.login,
    element: <Login />,
  },
  {
    path: menusPath.signup,
    element: <Signup />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: menusPath.jobList,
        element: (
          <PrivateRoute>
            <JobList />
          </PrivateRoute>
        ),
      },

      {
        path: menusPath.jobDetails,
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: menusPath.addNewJob,
        element: (
          <PrivateRoute>
            <AddNewJob />
          </PrivateRoute>
        ),
      },
      {
        path: menusPath.search,
        element: (
          <PrivateRoute>
            <SearchJob />
          </PrivateRoute>
        ),
      },
      {
        path: menusPath.profile,
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
];

export const appRoutes = createBrowserRouter(routes);
