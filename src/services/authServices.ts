import { loginApiProps } from "../@types/type";
import { urlMapping } from "../config/urlMapping";
import { axiosInstance } from "../utils/axiosConfig";

export const loginService = ({ username, password }: loginApiProps) => {
  try {
    const response = axiosInstance.post(urlMapping.LOGIN, {
      username,
      password,
    });
    console.log(response, "response");
  } catch (error) {
    console.log(error);
  }
};
