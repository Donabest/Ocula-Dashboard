import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask as deleteTaskApi } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isPending } = useMutation({
    mutationFn: deleteTaskApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Tasks"] });
      toast.success("Task Deleted Suceesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteTask, isPending };
}
