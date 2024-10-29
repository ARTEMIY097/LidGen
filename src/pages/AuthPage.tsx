import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const AuthPage = () => {
  const [parent] = useAutoAnimate();
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  
  if (isAuth) navigate("/");

  return (
    <div ref={parent}>
      <Outlet />
    </div>
  );
};

export default AuthPage;
