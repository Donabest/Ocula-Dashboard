import { useQuery } from "@tanstack/react-query";
import { getScheduleTasks } from "../../services/apiSchedules";
import { toast } from "react-hot-toast";

export function useScheduleTask() {
  const {
    data: schedules = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["SchedulesTask"],
    queryFn: getScheduleTasks,
  });
  if (error) {
    toast.error(error.message);
  }

  return { schedules, isLoading };
}
