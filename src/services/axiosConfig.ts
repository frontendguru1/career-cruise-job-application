import axios, { AxiosError, AxiosResponse } from "axios";
import { urlMapping } from "../config/urlMapping";

export const api = axios.create({
  baseURL: import.meta.env.VITE_DEV_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("authToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status == 401) {
      localStorage.removeItem("authToken");
      window.location.href = urlMapping.LOGIN;
    }
    return Promise.reject(error);
  }
);
