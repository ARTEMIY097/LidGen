import { useContext } from "react";
import SideBarContext from "./SideBarContext";

const SideBarToggleBtn = () => {
  const props = useContext(SideBarContext);
  return (
    <button className="btn" onClick={() => props?.setToggle(!props.toggle)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`size-8 ${props?.toggle && "rotate-180"} duration-300`}
      >
        <path
          fillRule="evenodd"
          d="M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default SideBarToggleBtn;
