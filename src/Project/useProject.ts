import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/apiProject";

export function useProjects() {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["Projects"],
    queryFn: getProjects,
  });

  return { projects, isLoading };
}
