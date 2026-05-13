import { useState } from "react";
import ListTaskCard from "./ListTaskCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useActiveTasks } from "../hooks/useActiveTasks";

function InprogressTaskList() {
  const [isProgress, setIsProgress] = useState<boolean>(true);
  const { inProgressTasks } = useActiveTasks();

  return (
    <div className="relative space-y-4 bg-white p-4 mt-6 rounded-lg dark:bg-slate-800 dark:text-white sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="cursor-pointer"
          onClick={() => setIsProgress((show) => !show)}
        >
          {isProgress ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <p className="bg-emerald-200 text-emerald-800 px-4 py-1 rounded-lg">
          Inprogress
        </p>
        <span> . {inProgressTasks.length} Tasks</span>
      </div>
      {isProgress && <ListTaskCard tasks={inProgressTasks} Assignee={true} />}
    </div>
  );
}

export default InprogressTaskList;
