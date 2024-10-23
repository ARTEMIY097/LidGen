import { createContext, Dispatch, SetStateAction } from "react";

const SideBarContext = createContext<{
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
} | null>(null);
export default SideBarContext;
