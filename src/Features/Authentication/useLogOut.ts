import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOutUser } from "../../services/apiauth";
import { useNavigate } from "react-router-dom";

export function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logOut, isPending: isLogingOut } = useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/Login", { replace: true });
    },
  });

  return { logOut, isLogingOut };
}
