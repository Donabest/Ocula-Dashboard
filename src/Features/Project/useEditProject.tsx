import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProject as editProjectApi } from "../../services/apiProject";
import { toast } from "react-hot-toast";

export function useEditProject() {
  const queryClient = useQueryClient();
  const { mutate: editProject, isPending: isProjectEditing } = useMutation({
    mutationFn: ({
      newProjectName,
      id,
    }: {
      newProjectName: string;
      id: number;
    }) => editProjectApi(newProjectName, id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Projects"] });
      toast.success("Project Name Edited Successfully");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editProject, isProjectEditing };
}
