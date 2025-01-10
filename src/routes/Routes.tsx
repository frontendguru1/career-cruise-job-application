import { createBrowserRouter, RouteObject } from "react-router-dom";
import {
  AddNewJob,
  Dashboard,
  Home,
  JobDetails,
  JobList,
  Layout,
  Login,
  SearchJob,
  Signup,
  UserProfile,
} from "../pages";
import { ROUTES } from "./constants";
import { PrivateRoute } from "../components";

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.SIGN_UP,
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
        index: true,
        path: ROUTES.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTES.JOB_LIST,
        element: (
          <PrivateRoute>
            <JobList />
          </PrivateRoute>
        ),
      },

      {
        path: ROUTES.JOB_DETAILS,
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.ADD_NEW_JOB,
        element: (
          <PrivateRoute>
            <AddNewJob />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.SEARCH,
        element: (
          <PrivateRoute>
            <SearchJob />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTES.PROFILE,
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
];

export const APP_ROUTES = createBrowserRouter(routes);
