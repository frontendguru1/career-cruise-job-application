import { iUser, loginApiProps } from "../@types/type";
import { urlMapping } from "../config/urlMapping";
import { api } from "../utils/axiosConfig";

export interface loginApiResponse {
  token: string | null;
  user: iUser | null;
}
// export const loginService = async ({ username, password }: loginApiProps) => {
//   try {
//     const response = api.post<loginApiResponse>(urlMapping.LOGIN, {
//       username,
//       password,
//     });
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const authLoginService = (data: loginApiProps) =>
  api.post<loginApiResponse, loginApiResponse>(urlMapping.LOGIN, data);
