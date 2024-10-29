import { createContext, useEffect, useState } from "react";

export interface IAuthContext {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

const authStorage = {
  get: () => {
    const isAuth = localStorage.getItem("isAuth");
    return isAuth ? JSON.parse(isAuth) : false;
  },
  set: (value: boolean) =>
    localStorage.setItem("isAuth", JSON.stringify(value)),
  remove: () => localStorage.removeItem("isAuth"),
};

const initialState: IAuthContext = {
  isAuth: authStorage.get(),
  setIsAuth: () => {},
};

const AuthContext = createContext<IAuthContext>(initialState);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(initialState.isAuth);

  useEffect(() => {
    authStorage.set(isAuth);
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
