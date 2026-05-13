import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ListTaskCard from "./ListTaskCard";
import { useState } from "react";
import { useActiveTasks } from "../hooks/useActiveTasks";

function CompletedTaskList() {
  const [isCompleted, setIscompleted] = useState<boolean>(true);
  const { completedTasks } = useActiveTasks();
  return (
    <div className="space-y-4 bg-white p-4 mt-6 rounded-lg cursor-pointer dark:bg-slate-800 dark:text-white sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="cursor-pointer"
          onClick={() => setIscompleted((show) => !show)}
        >
          {isCompleted ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <p className="bg-blue-300 text-blue-900 px-4 py-1 rounded-lg">
          Completed
        </p>
        <span> . {completedTasks.length} Tasks</span>
      </div>
      {isCompleted && <ListTaskCard tasks={completedTasks} Assignee={true} />}
    </div>
  );
}

export default CompletedTaskList;
