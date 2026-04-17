import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CompletedTasks } from "../data/data-task";
import ListTaskCard from "./ListTaskCard";
import { useState } from "react";

function CompletedTaskList() {
  const [isCompleted, setIscompleted] = useState<boolean>(true);
  return (
    <div className="space-y-4 bg-white p-6 mt-6 rounded-lg  cursor-pointer dark:bg-slate-800 dark:text-white">
      <div className="flex items-center gap-2">
        <span
          className="cursor-pointer"
          onClick={() => setIscompleted((show) => !show)}
        >
          {isCompleted ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <p className="bg-blue-300 text-blue-900 px-4 py-1 rounded-lg">
          Completed
        </p>
        <span> . {CompletedTasks.length} Tasks</span>
      </div>
      {isCompleted && <ListTaskCard tasks={CompletedTasks} Assignee={true} />}
    </div>
  );
}

export default CompletedTaskList;
