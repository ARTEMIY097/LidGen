import { makeAutoObservable } from "mobx";
import {
  clearPersistedStore,
  makePersistable,
  startPersisting,
  stopPersisting,
} from "mobx-persist-store";
import { createContext } from "react";
import { userStore } from "../UserStore";

class AuthStore {
  token: string | null = null;
  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "AuthStore",
      properties: ["token"],
      storage: window.localStorage,
    });
  }

  isAuth(): boolean {
    return !!userStore.user && !!this.getToken();
  }

  isAdmin() {
    return userStore.user !== null && userStore.user.role === "admin";
  }

  setToken(newToken: string) {
    this.token = newToken;
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = null;
  }
  async clearStore() {
    await clearPersistedStore(this);
  }

  stopPersist() {
    stopPersisting(this);
  }

  startPersist() {
    startPersisting(this);
  }
}

export const authStore = new AuthStore();
export const AuthStoreContext = createContext(authStore);
