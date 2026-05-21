import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser as loginUserApi } from "../../services/apiauth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLoginUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: loginUser, isPending: isLoading } = useMutation({
    mutationFn: loginUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
      navigate("/Dashboard");
      toast.success("Login Successfully");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { loginUser, isLoading };
}
