import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { IAuthResponse, ISignUpDto } from "../services/auth/auth.interface";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { AuthService } from "../services/auth/auth.service";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { storage } from "../instance/instance.utils";

type IUseSignUp = UseMutateFunction<
  IAuthResponse,
  {
    response: {
      data: {
        error: string;
      };
    };
  },
  { userData: ISignUpDto; role: string },
  unknown
>;

export function useSignUp(): IUseSignUp {
  const queryClient = useQueryClient();
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const { mutate: signUpMutation } = useMutation<
    IAuthResponse,
    {
      response: {
        data: {
          error: string;
        };
      };
    },
    { userData: ISignUpDto; role: string },
    unknown
  >({
    mutationFn: (data: { userData: ISignUpDto; role: string }) =>
      AuthService.signUp(data.userData, data.role),
    onSuccess: (data) => {
      storage.setToken(data.token);
      setIsAuth(true);
      toast.success("Successful SignUp!", {
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

  return signUpMutation;
}
