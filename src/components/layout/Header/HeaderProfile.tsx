import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import { useLogout } from "../../../hooks/useLogout";

const HeaderProfile = () => {
  const query = useUser();
  const logout = useLogout();
  return (
    <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
      <div tabIndex={0} role="button" className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-6"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        {query.isLoading && <div className="skeleton h-4 w-32" />}
        {query.isSuccess && query.data.email}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
      >
        <li>
          {query.isLoading && <div className="skeleton h-4 w-32" />}
          {query.isSuccess && <Link to="/profile">Профиль</Link>}
        </li>
        <li>
          {query.isLoading && <div className="skeleton h-4 w-32" />}
          {query.isSuccess && <button onClick={() => logout()}>Выйти</button>}
        </li>
      </ul>
    </div>
  );
};

export default HeaderProfile;
