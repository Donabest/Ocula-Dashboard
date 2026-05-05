import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask as createTaskApi } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useCreateTask() {
  const queryClient = useQueryClient();
  const { mutate: createTask, isPending } = useMutation({
    mutationFn: createTaskApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Tasks"] });
      toast.success("Task Created successfully");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createTask, isPending };
}
