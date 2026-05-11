import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createProject as createProjectApi } from "../../services/apiProject";

export function useCreateProject() {
  const queryClient = useQueryClient();
  const { mutate: createProject, isPending: isCreating } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Projects"] });
      toast.success("Project Name Created Successfully");
    },
  });
  return { createProject, isCreating };
}
