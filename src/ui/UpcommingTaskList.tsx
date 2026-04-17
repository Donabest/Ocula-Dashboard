import { useState } from "react";
import { UpCommingTasks } from "../data/data-task";
import ListTaskCard from "./ListTaskCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function UpcommingTaskList() {
  const [isUpCommig, setIsUpComming] = useState<boolean>(true);
  return (
    <div className="space-y-4 bg-white p-6 mt-6 rounded-lg  cursor-pointer dark:bg-slate-800 dark:text-white">
      <div className="flex items-center gap-2">
        <span
          className="cursor-pointer"
          onClick={() => setIsUpComming((show) => !show)}
        >
          {isUpCommig ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <p className="bg-yellow-200 text-yellow-700 px-4 py-1 rounded-lg">
          Completed
        </p>
        <span> . {UpCommingTasks.length} Tasks</span>
      </div>
      {isUpCommig && <ListTaskCard tasks={UpCommingTasks} Assignee={true} />}
    </div>
  );
}

export default UpcommingTaskList;
