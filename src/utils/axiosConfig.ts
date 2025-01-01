import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DEV_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});