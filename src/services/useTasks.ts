import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./apiTasks";
import type { status } from "../utilities/type";

interface Tasktype {
  Assignee: string;
  EndDate: string;
  StartDate: string;
  created_at: string;
  date: string;
  description: string;
  id: number;
  priority: string;
  project_id: number;
  status: status;
  title: string;
}

type task = {
  tasks: Tasktype[];
  isLoading: boolean;
};
export function useTasks(): task {
  const {
    data: tasks,
    error,
    isLoading,
  } = useQuery({
    queryFn: getTasks,
    queryKey: ["Tasks"],
  });

  if (error) throw new Error("Tasks could not be loaded");

  return { tasks, isLoading };
}
