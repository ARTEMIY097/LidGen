import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { IAuthResponse, ISignInDto } from "../services/auth/auth.interface";
import { AuthService } from "../services/auth/auth.service";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { storage } from "../instance/instance.utils";

type IUseSignIn = UseMutateFunction<
  IAuthResponse,
  {
    response: {
      data: {
        error: string;
      };
    };
  },
  ISignInDto,
  unknown
>;

export const useSignIn = (): IUseSignIn => {
  const queryClient = useQueryClient();
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const { mutate: signInMutation } = useMutation<
    IAuthResponse,
    {
      response: {
        data: {
          error: string;
        };
      };
    },
    ISignInDto,
    unknown
  >({
    mutationFn: (userData: ISignInDto) => AuthService.signIn(userData),
    onSuccess: (data) => {
      storage.setToken(data.token);
      setIsAuth(true);
      toast.success("Successful SignIn!", {
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
      queryClient.setQueryData(["getUser"], data.userData);
      navigate("/");
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

  return signInMutation;
};
