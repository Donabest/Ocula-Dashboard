import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editScheduleTask as editScheduleTaskApi } from "../../services/apiSchedules";
import type { schedule } from "../../utilities/type";
import { toast } from "react-hot-toast";

export function useEditScheduleTask() {
  const queryClient = useQueryClient();
  const { mutate: editScheduleTask, isPending: isScheduling } = useMutation({
    mutationFn: ({
      scheduleToEdit,
      id,
    }: {
      scheduleToEdit: schedule;
      id: number;
    }) => editScheduleTaskApi(scheduleToEdit, id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["SchedulesTask"] });
      toast.success("Schedule Task edited successfully ");
    },
  });

  return { editScheduleTask, isScheduling };
}
