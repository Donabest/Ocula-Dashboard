import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteAccount as deleteAccountApi } from "../../services/apiauth";
import { toast } from "react-hot-toast";

export function useDeleteAccount() {
  const navigate = useNavigate();

  const { mutate: deleteAccount, isPending } = useMutation({
    mutationFn: deleteAccountApi,
    onSuccess: () => {
      toast.success("Account Deleted Succefully");
      navigate("/Login");
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteAccount, isPending };
}
