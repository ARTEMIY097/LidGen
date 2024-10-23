import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services/users/users.service";
import { userStore } from "../store/UserStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useUser = () => {
  const navigate = useNavigate();
  const query = useQuery({
    queryKey: ["user"],
    queryFn: () => UserService.getUserMe(),
  });
  useEffect(() => {
    if (query.isSuccess) {
      userStore.setUser(query.data);
    }
    if (query.isError) {
      navigate("/sign_up");
    }
  }, [navigate, query]);

  return query;
};
