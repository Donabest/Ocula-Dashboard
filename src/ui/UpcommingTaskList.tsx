import { UpCommingTasks } from "../data/data-task";
import ListTaskCard from "./ListTaskCard";

function UpcommingTaskList() {
  return (
    <div className="space-y-4 bg-white p-6 mt-6 rounded-lg  cursor-pointer dark:bg-slate-800 dark:text-white">
      <ListTaskCard tasks={UpCommingTasks} Assignee={true} />
    </div>
  );
}

export default UpcommingTaskList;
