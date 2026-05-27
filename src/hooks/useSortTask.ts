import { useSearchParams } from "react-router-dom";
import { useTasks } from "../services/useTasks";

export function useSortTask() {
  const { tasks } = useTasks();
  const [searchParamas] = useSearchParams();
  const sortBy = searchParamas.get("Sorted") || "";
  const currentSort = sortBy.slice(2);
  const sortedTask = [...tasks];

  sortedTask.sort((a, b) => {
    if (a.status === currentSort && b.status !== currentSort) return -1;
    if (b.status === currentSort && a.status !== currentSort) return 1;
    else return 0;
  });

  if (currentSort === "StartDate") {
    sortedTask.sort((a, b) => +new Date(a.StartDate) - +new Date(b.StartDate));
  }
  if (currentSort === "EndDate") {
    sortedTask.sort((a, b) => +new Date(a.EndDate) - +new Date(b.EndDate));
  }

  return { sortedTask };
}
