import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTask as editTaskApi } from "../../services/apiTasks";
import type { tasktype } from "../../utilities/type";
import { toast } from "react-hot-toast";

export function useEditTask() {
  const queryClient = useQueryClient();
  const { mutate: editTask, isPending: isEditing } = useMutation({
    mutationFn: ({ newTaskData, id }: { newTaskData: tasktype; id: number }) =>
      editTaskApi(newTaskData, id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Tasks"] });
      toast.success("Edited Successfully");
    },
  });

  return { editTask, isEditing };
}
