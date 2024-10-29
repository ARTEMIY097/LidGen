import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBarComponent from "../components/layout/SideBar/SideBarComponent";
import HeaderComponent from "../components/layout/Header/HeaderComponent";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const RootPage = () => {
  const [parent] = useAutoAnimate();
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  
  // if (!isAuth) {
  //   navigate("/sign_in");
  // }

  return (
    <div className="flex min-h-screen max-h-screen">
      <SideBarComponent />
      <div
        ref={parent}
        className="flex flex-col w-full overflow-scroll bg-white"
      >
        <HeaderComponent />
        <Outlet />
      </div>
    </div>
  );
};

export default RootPage;
