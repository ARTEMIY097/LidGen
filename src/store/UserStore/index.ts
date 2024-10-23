import { createContext } from "react";
import { IUser } from "../../services/users/users.interface";
import { makeAutoObservable } from "mobx";
import { clearPersistedStore, makePersistable, startPersisting, stopPersisting } from "mobx-persist-store";

class UserStore {
  user: IUser | null = null;
  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "UserStore",
      properties: ["user"],
      storage: window.localStorage,
    });
  }
  
  setUser(userData: IUser | undefined) {
    this.user = userData || null;
  }

  getUser() {
    return this.user;
  }

  clearUser() {
    this.user = null;
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

export const userStore = new UserStore();
export const UserStoreContext = createContext(userStore);
