import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./apiTasks";
import toast from "react-hot-toast";
import type { tasktype } from "../utilities/type";

type task = {
  tasks: tasktype[] | undefined;
  isLoading: boolean;
  completedTasks: tasktype[] | undefined;
  todoTasks: tasktype[] | undefined;
  inProgressTasks: tasktype[] | undefined;
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

  if (error) {
    toast.error(error.message);
  }

  const completedTasks = tasks?.filter((task) => task.status === "Completed");
  const inProgressTasks = tasks?.filter((task) => task.status === "Inprogress");
  const todoTasks = tasks?.filter((task) => task.status === "Todo");

  return { tasks, isLoading, completedTasks, inProgressTasks, todoTasks };
}
