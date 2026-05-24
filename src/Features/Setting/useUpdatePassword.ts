import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updatePassword as updatePasswordApi } from "../../services/apiauth";

export function useUpdatePassword() {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: updatePasswordApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Password Changed Successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updatePassword, isPending };
}
