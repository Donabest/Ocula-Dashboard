import { useParams } from "react-router-dom";
import { useProjects } from "../Features/Project/useProject";
import { useTasks } from "../services/useTasks";

export function useActiveTasks() {
  const { projectId } = useParams();
  const {
    tasks,
    completedTasks,
    inProgressTasks,
    isLoading: isTasking,
  } = useTasks();
  const { projects, isLoading: isProjecting } = useProjects();
  const isLoading = isProjecting || isTasking;

  const filteredTasks = projectId
    ? tasks.filter((t) => t.project_id === Number(projectId))
    : tasks;

  const filteredCompleted = projectId
    ? completedTasks.filter((t) => t.project_id === Number(projectId))
    : completedTasks;

  const filteredInProgress = projectId
    ? inProgressTasks.filter((t) => t.project_id === Number(projectId))
    : inProgressTasks;

  const currentPage = projects.find(
    (project) => project.id === Number(projectId),
  );

  return {
    tasks: filteredTasks,
    completedTasks: filteredCompleted,
    inProgressTasks: filteredInProgress,
    isLoading,
    currentPage,
  };
}
