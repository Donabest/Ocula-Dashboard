import { useMutation } from "@tanstack/react-query";
import { useActiveTasks } from "./useActiveTasks";
import { askOculaAi } from "../services/apiAi";

export function useAiSuggestion() {
  const { tasks } = useActiveTasks();
  const {
    mutate: getsuggestionTask,
    data: suggestion,
    isPending: isPrompting,
  } = useMutation({
    mutationFn: () =>
      askOculaAi({
        messages: [],
        prompt: "Suggest 3 useful tasks based on my current task list.",
        tasks,
      }),
  });

  return { getsuggestionTask, suggestion, isPrompting };
}
