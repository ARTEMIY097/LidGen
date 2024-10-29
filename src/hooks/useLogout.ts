import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast, Bounce } from "react-toastify";
import { AuthService } from "../services/auth/auth.service";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { storage } from "../instance/instance.utils";

type IUseLogout = UseMutateFunction<
  void,
  {
    response: {
      data: {
        error: string;
      };
    };
  },
  void,
  unknown
>;

export const useLogout = (): IUseLogout => {
  const queryClient = useQueryClient();
  const { setIsAuth } = useContext(AuthContext);

  const { mutate: logoutMutation } = useMutation<
    void,
    {
      response: {
        data: {
          error: string;
        };
      };
    },
    void,
    unknown
  >({
    mutationFn: () => AuthService.logout(storage.getToken()),
    onSuccess: () => {
      storage.clearToken();
      setIsAuth(false);
      toast.success("Successful logout!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      queryClient.clear();
    },
    onError: (error) => {
      toast.error(`${error.response.data.error}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    },
  });

  return logoutMutation;
};
