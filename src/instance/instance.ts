import axios from "axios";
import { errorCatch } from "./instance.utils";
import { AuthService } from "../services/auth/auth.service";
import { authStore } from "../store/AuthStore";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
  withCredentials: true,
  // headers: getContentType(),
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const token = authStore.getToken();
        if (token) {
          const data = await AuthService.getNewTokens(token);
          authStore.setToken(data.token);
        }
        return instance.request(originalRequest);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        errorCatch(error) === "jwt expired" ? null : null;
        authStore.clearToken();
      }
    }
    throw error;
  }
);