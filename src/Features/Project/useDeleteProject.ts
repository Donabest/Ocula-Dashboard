import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject as deleteProjectApi } from "../../services/apiProject";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteProject, isPending: isDeleting } = useMutation({
    mutationFn: deleteProjectApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Projects"] });
      toast.success("project deleted successfully");
      navigate("Dashboard");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteProject, isDeleting };
}
