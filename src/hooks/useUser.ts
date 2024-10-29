import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services/users/users.service";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useUser = () => {
  const authStore = useContext(AuthContext);
  const query = useQuery({
    queryKey: ["getUser"],
    queryFn: () => UserService.getUserMe(),
    enabled: authStore.isAuth,
  });

  return query;
};

export default useUser;
