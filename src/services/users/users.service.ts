import { instance } from "../../instance/instance";
import UrlBuilder from "../../utils/buildUrl";
import { IUser } from "./users.interface";

const PATH = "/users";

const { buildUrl } = new UrlBuilder(PATH);

export const UserService = {
  async getUserMe() {
    return await instance
      .get<IUser>(buildUrl("/me"))
      .then((response) => response.data);
  },
  async getUserById(id: string) {
    return await instance
      .get<IUser>(buildUrl(`/${id}`))
      .then((response) => response.data);
  },
  async getUsers(queryParams?: { filter?: string; limit?: string }) {
    return await instance
      .get<IUser>(buildUrl("", queryParams))
      .then((response) => response.data);
  },
};
