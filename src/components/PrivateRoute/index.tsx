import React from "react";
// import { useAppSelector } from "../../hooks/redux-hook";
import { Navigate, useLocation } from "react-router-dom";
import { menusPath } from "../../routes/Menus";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = window.localStorage.getItem("authToken");
  // const loading = useAppSelector((state) => state.auth.loading);
  // const status = useAppSelector((state) => state.auth.status);
  const location = useLocation();

  console.log(isAuthenticated, "isAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to={menusPath.login} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
