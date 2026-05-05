import { useState } from "react";
import ListTaskCard from "./ListTaskCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTasks } from "../services/useTasks";

function UpcommingTaskList() {
  const [isUpCommig, setIsUpComming] = useState<boolean>(true);
  const { upCommingTasks } = useTasks();

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
          Upcomming
        </p>
        <span> . {upCommingTasks.length} Tasks</span>
      </div>
      {isUpCommig && <ListTaskCard tasks={upCommingTasks} Assignee={true} />}
    </div>
  );
}

export default UpcommingTaskList;
