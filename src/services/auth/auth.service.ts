import axios from "axios";
import { instance } from "../../instance/instance";
import UrlBuilder from "../../utils/buildUrl";
import { IAuthResponse, ISignInDto, ISignUpDto } from "./auth.interface";

const PATH = "/auth";
const { buildUrl } = new UrlBuilder(PATH);

export const AuthService = {
  async signUp(data: ISignUpDto, role: string) {
    return await instance
      .post<IAuthResponse>(buildUrl(`/signup/${role}`), data)
      .then((response) => response.data);
  },

  async signIn(data: ISignInDto) {
    return await instance
      .post<IAuthResponse>(buildUrl("/signin"), data)
      .then((response) => response.data);
  },

  async getNewTokens(token: string) {
    return await axios({
      method: "POST",
      url: buildUrl("/refresh"),
      headers: { Authorization: `Bearer ${token}` },
      baseURL: import.meta.env.VITE_BACK_URL,
      withCredentials: true,
    }).then((response) => response.data);
  },

  async logout(token: string | null) {
    return await axios({
      method: "POST",
      url: buildUrl("/logout"),
      headers: { Authorization: `Bearer ${token}` },
      baseURL: import.meta.env.VITE_BACK_URL,
      withCredentials: true,
    }).then((response) => response.data);
  },
};
