import { useAutoAnimate } from "@formkit/auto-animate/react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthStoreContext } from "../store/AuthStore";

const AuthPage = observer(() => {
  const [parent] = useAutoAnimate();
  const { isAuth } = useContext(AuthStoreContext);
  const navigate = useNavigate();
  if (!isAuth())
    return (
      <div ref={parent}>
        <Outlet />
      </div>
    );
  else navigate("/");
  return null;
});

export default AuthPage;
