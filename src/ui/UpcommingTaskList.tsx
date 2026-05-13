import { useState } from "react";
import ListTaskCard from "./ListTaskCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useActiveTasks } from "../hooks/useActiveTasks";

function UpcommingTaskList() {
  const [isUpCommig, setIsUpComming] = useState<boolean>(true);
  const { upCommingTasks } = useActiveTasks();

  return (
    <div className="space-y-4 bg-white p-4 mt-6 rounded-lg cursor-pointer dark:bg-slate-800 dark:text-white sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="cursor-pointer"
          onClick={() => setIsUpComming((show) => !show)}
        >
          {isUpCommig ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <p className="bg-yellow-200 text-yellow-700 px-4 py-1 rounded-lg">
          Upcomming
        </p>
        <span> . {upCommingTasks.length} Tasks</span>
      </div>
      {isUpCommig && <ListTaskCard tasks={upCommingTasks} Assignee={true} />}
    </div>
  );
}

export default UpcommingTaskList;
