import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteAllData as deleteAllDataAPi } from "../../services/apiTasks";

export function useDeleteAllData() {
  const queryClient = useQueryClient();
  const { mutate: deleteAllData, isPending: isDeletingAll } = useMutation({
    mutationFn: deleteAllDataAPi,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("All Data Delete Successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteAllData, isDeletingAll };
}
