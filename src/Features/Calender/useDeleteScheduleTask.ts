import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteScheduleTask as deleteScheduleTaskApi } from "../../services/apiSchedules";
import { toast } from "react-hot-toast";

export function useDeleteScheduleTask() {
  const queryClient = useQueryClient();
  const { mutate: deleteScheduleTask, isPending: isDeleting } = useMutation({
    mutationFn: deleteScheduleTaskApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["SchedulesTask"] });
      toast.success(`ScheduleTask deleted successfully`);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteScheduleTask, isDeleting };
}
