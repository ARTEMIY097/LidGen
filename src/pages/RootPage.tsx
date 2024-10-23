import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Outlet } from "react-router-dom";
import SideBarComponent from "../components/layout/SideBar/SideBarComponent";
import HeaderComponent from "../components/layout/Header/HeaderComponent";
import { observer } from "mobx-react-lite";
// import { useUser } from "../queries/UserQueries";
// import { useContext } from "react";
// import { AuthStoreContext } from "../store/AuthStore";

const RootPage = observer(() => {
  const [parent] = useAutoAnimate();
  // const authStore = useContext(AuthStoreContext);
  // const navigate = useNavigate();
  // useUser();

  // if (query.isError) {
  //   navigate("/sign_up");
  //   return null;
  // }

  return (
    <div className="flex min-h-screen max-h-screen">
      <SideBarComponent />
      <div ref={parent} className="flex flex-col w-full overflow-scroll bg-white">
        <HeaderComponent />
        <Outlet />
      </div>
    </div>
  );
});

export default RootPage;
