import { IUser } from "../users/users.interface";

export interface ISignUpDto {
  email: string;
  password: string;
}

export interface ISignInDto {
  email: string;
  password: string;
}

export interface IAuthResponse {
  userData: IUser;
  token: string;
}