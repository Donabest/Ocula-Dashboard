import { TodoTasks } from "../data/data-task";
import ListTaskCard from "./ListTaskCard";

function TodoTaskList() {
  return (
    <div className="space-y-4 bg-white p-6 mt-6 rounded-lg  cursor-pointer dark:bg-slate-800 dark:text-white">
      <ListTaskCard tasks={TodoTasks} Assignee={true} />
    </div>
  );
}

export default TodoTaskList;
