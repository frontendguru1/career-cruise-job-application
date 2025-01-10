import { api } from "./axiosConfig";
import { urlMapping } from "../config/urlMapping";

// const AUTH_TOKEN = window.localStorage.getItem("authToken");
export const createJobService = (data: any) => {
  // api.defaults.headers.common["Authorization"] = AUTH_TOKEN;
  return api.post(urlMapping.ADD_JOB, data);
};
