import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeUserAvatar } from "../../services/apiauth";
import { toast } from "react-hot-toast";

export function useRemoveAvatar() {
  const queryClient = useQueryClient();
  const { mutate: removeAvatar, isPending } = useMutation({
    mutationFn: removeUserAvatar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Avatar Removed");
    },
  });

  return { removeAvatar, isPending };
}
