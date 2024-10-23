import { useState } from "react";
import SideBarBottomLinks from "./SideBarBottomLinks";
import SideBarHeader from "./SideBarHeader";
import SideBarNav from "./SideBarNav";
import SideBarToggleBtn from "./SideBarToggleBtn";
import SideBarContext from "./SideBarContext";

const SideBarComponent = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <SideBarContext.Provider value={{ toggle, setToggle }}>
      <div
        className={`flex flex-col justify-between min-h-screen max-h-screen w-full bg-base-200 ${
          toggle ? "max-w-24" : "max-w-96"
        } duration-300`}
      >
        <div className="flex flex-col gap-8">
          <SideBarHeader />
          <SideBarNav />
        </div>
        <div className="flex flex-col gap-8 p-4">
          <SideBarBottomLinks />
          <div
            className={`flex duration-300 ${
              !toggle ? "justify-end" : "justify-center "
            }`}
          >
            <SideBarToggleBtn />
          </div>
        </div>
      </div>
    </SideBarContext.Provider>
  );
};

export default SideBarComponent;
