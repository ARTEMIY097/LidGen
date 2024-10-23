import { authStore } from "../store/AuthStore";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorCatch = (error: any): string => {
  const msg = error?.response?.data?.message;
  return msg
    ? typeof error.response.data.message === "object"
      ? msg[0]
      : msg
    : error.message;
};

// export const getContentType = () => ({
//   "Content-Type": "application/json",
// });

export const storage = {
  getToken: () => authStore.getToken(),
  setToken: (token: string) => authStore.setToken(token),
  clearToken: () => authStore.clearToken(),
};