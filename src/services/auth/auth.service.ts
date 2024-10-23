import axios from "axios";
import { instance } from "../../instance/instance";
import UrlBuilder from "../../utils/buildUrl";
import { IAuthResponse, ISignInDto, ISignUpDto } from "./auth.interface";

const PATH = "/auth";
const { buildUrl } = new UrlBuilder(PATH);

export const AuthService = {
  async signUp(data: ISignUpDto, role: string){
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
      baseURL: "http://127.0.0.1:8000/api",
      withCredentials: true,
    }).then((response) => response.data);
  },

  async logout() {
    return await instance
      .post(buildUrl("/logout"))
      .then((response) => response.data);
  },
};
