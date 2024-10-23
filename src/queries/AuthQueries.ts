import {
  UseMutateFunction,
  useMutation,
  // useQueryClient,
} from "@tanstack/react-query";
import {
  IAuthResponse,
  ISignInDto,
  ISignUpDto,
} from "../services/auth/auth.interface";
import { AuthService } from "../services/auth/auth.service";
import { Bounce, toast } from "react-toastify";
import { userStore } from "../store/UserStore";
import { useNavigate } from "react-router-dom";
import { authStore } from "../store/AuthStore";

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

export function useSignUp(): IUseSignUp {
  // const queryClient = useQueryClient();
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
      authStore.setToken(data.token);
      userStore.setUser(data.userData);
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
      // queryClient.invalidateQueries({
      //   queryKey: ["user"],
      // });
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
      // queryClient.invalidateQueries({
      //   queryKey: ["user"],
      // });
    },
  });

  return signUpMutation;
}

export const useSignIn = (): IUseSignIn => {
  // const queryClient = useQueryClient();
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
      authStore.setToken(data.token);
      userStore.setUser(data.userData);
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
      // queryClient.invalidateQueries({
      //   queryKey: ["user"],
      // });
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
      // queryClient.invalidateQueries({
      //   queryKey: ["user"],
      // });
    },
  });

  return signInMutation;
};
