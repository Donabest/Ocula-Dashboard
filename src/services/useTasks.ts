import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./apiTasks";
import toast from "react-hot-toast";

export function useTasks() {
  const {
    data: tasks = [],
    error,
    isLoading,
  } = useQuery({
    queryFn: getTasks,
    queryKey: ["Tasks"],
  });

  if (error) {
    toast.error(error.message);
  }

  const completedTasks = tasks.filter((task) => task.status === "Completed");
  const inProgressTasks = tasks.filter((task) => task.status === "Inprogress");
  const todoTasks = tasks.filter((task) => task.status === "Todo");
  const upCommingTasks = tasks.filter(
    (upcomming) => new Date(upcomming.StartDate) > new Date(),
  );

  return {
    tasks,
    isLoading,
    completedTasks,
    inProgressTasks,
    todoTasks,
    upCommingTasks,
  };
}
