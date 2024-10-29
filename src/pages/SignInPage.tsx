import { Link } from "react-router-dom";
import { ISignInDto } from "../services/auth/auth.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useSignIn } from "../hooks/useSignIn";

const SignInPage = () => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInDto>({
    mode: "onChange",
  });

  const signIn = useSignIn();

  const onSubmit: SubmitHandler<ISignInDto> = (data) => {
    signIn(data);
  };

  const [passType, setPassType] = useState<string>("password");

  const togglePassType = () => {
    setPassType(passType === "password" ? "text" : "password");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card bg-base-200 w-full min-w-80 max-w-lg"
      >
        <div className="card-body gap-4">
          <div className="flex justify-between items-end">
            <h2 className="card-title">Вход в личный кабинет</h2>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              {...formRegister("email", {
                required: "Email is required",
              })}
              id="email"
              type="text"
              className={`input input-bordered ${
                errors.email && "input-error"
              } w-full`}
              placeholder="name@company.com"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Пароль</span>
            </div>
            <div className="join">
              <input
                {...formRegister("password", {
                  required: "password is required",
                })}
                id="passwords"
                type={passType}
                placeholder="••••••••"
                className={` join-item input input-bordered ${
                  errors.password && "input-error"
                } w-full`}
              />
              <div
                onClick={() => togglePassType()}
                className=" join-item btn btn-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
          </label>
          <Link className="text-primary" to="/forgot_pass">
            Забыли пароль?
          </Link>
          <p>
            {" "}
            Нет аккаунта?{" "}
            <Link to="/sign_up" className="font-bold text-primary underline">
              Зарегистрироваться
            </Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
