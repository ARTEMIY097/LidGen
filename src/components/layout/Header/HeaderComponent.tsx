import HeaderAddPartner from "./HeaderAddPartner";
import HeaderNotification from "./HeaderNotification";
import HeaderProfile from "./HeaderProfile";

const HeaderComponent = () => {
  return (
    <header className="flex justify-end items-center gap-8 bg-base-200 h-14 p-4 sticky top-0 right-0 z-20">
      <HeaderNotification />
      <HeaderProfile />
      <HeaderAddPartner />
    </header>
  );
};

export default HeaderComponent;
