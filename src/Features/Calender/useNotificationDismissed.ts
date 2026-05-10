import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dismissedNotification } from "../../services/apiSchedules";
import { toast } from "react-hot-toast";

export function useNotificationDismissed() {
  const queryClient = useQueryClient();
  const { mutate: notificationDismissed, isPending: isDismissing } =
    useMutation({
      mutationFn: dismissedNotification,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["SchedulesTask"] });
        toast.success("Notification Dismissed");
      },
    });

  return { notificationDismissed, isDismissing };
}
