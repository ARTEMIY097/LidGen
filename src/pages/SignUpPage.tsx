import { SubmitHandler, useForm } from "react-hook-form";
import { ISignUpDto } from "../services/auth/auth.interface";
import { Link } from "react-router-dom";
import { useSignUp } from "../hooks/useSignUp";

const SignUpPage = () => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpDto>({
    mode: "onChange",
  });

  const signUp = useSignUp();

  const onSubmit: SubmitHandler<ISignUpDto> = (data) => {
    signUp({ userData: data, role: "brand" });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card bg-base-200 w-full min-w-80 max-w-lg"
      >
        <div className="card-body gap-4">
          <div className="flex justify-between items-end">
            <h2 className="card-title">Регистрация</h2>
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
            <input
              {...formRegister("password", {
                required: "password is required",
              })}
              id="passwords"
              type="password"
              placeholder="••••••••"
              className={`input input-bordered ${
                errors.password && "input-error"
              } w-full`}
            />
          </label>
          <p>
            {" "}
            Уже есть аккаунт?,{" "}
            <Link className="font-bold text-primary underline" to={"/sign_in"}>
              Войдите в него
            </Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
