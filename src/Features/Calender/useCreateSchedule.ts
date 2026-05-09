import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createScheduleTask as createScheduleTaskApi } from "../../services/apiSchedules";
import { toast } from "react-hot-toast";

export function useCreateSchedule() {
  const queryClient = useQueryClient();

  const { mutate: createScheduleTask, isPending: isScheduling } = useMutation({
    mutationFn: createScheduleTaskApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["SchedulesTask"] });
      toast.success("Task Schedule Successfully");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createScheduleTask, isScheduling };
}
