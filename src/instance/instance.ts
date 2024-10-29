import axios from "axios";
import { errorCatch, getContentType, storage } from "./instance.utils";
import { AuthService } from "../services/auth/auth.service";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
  withCredentials: true,
  headers: getContentType(),
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
        const token = storage.getToken();
        if (token) {
          const data = await AuthService.getNewTokens(token);
          storage.setToken(data.token);
        }
        return instance.request(originalRequest);
      } catch (error) {
        const authStore = useContext(AuthContext);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        errorCatch(error) === "jwt expired" ? null : null;
        storage.clearToken();
        authStore.setIsAuth(false);
        toast.info('Время жизни токена истекло. Пожалуйста, авторизуйтесь заново.');
      }
    }
    throw error;
  }
);
