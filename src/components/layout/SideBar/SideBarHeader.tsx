import { useContext } from "react";
import SideBarContext from "./SideBarContext";

const SideBarHeader = () => {
  const props = useContext(SideBarContext);
  return (
    <div className="flex justify-center items-center gap-2 bg-neutral h-14 text-white">
      <img src="" alt="Лого бренда" />
      {!props?.toggle && (
        <>
          {"|"} <h1>Название бренда</h1>
        </>
      )}
    </div>
  );
};

export default SideBarHeader;
