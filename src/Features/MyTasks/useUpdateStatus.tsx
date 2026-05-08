import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatus as updateStatusApi } from "../../services/apiTasks";
import { toast } from "react-hot-toast";
import type { status } from "../../utilities/type";

export function useUpdateStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateStatus, isPending } = useMutation({
    mutationFn: ({ id, newStatus }: { id: number; newStatus: status }) =>
      updateStatusApi({ id, newStatus }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Tasks"] });
      toast.success("Status Update Succesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateStatus, isPending };
}
