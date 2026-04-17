import { useState } from "react";
import { InprogressTasks } from "../data/data-task";
import ListTaskCard from "./ListTaskCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function InprogressTaskList() {
  const [isProgress, setIsProgress] = useState<boolean>(true);

  return (
    <div className="space-y-4 bg-white p-6 mt-6 rounded-lg   dark:bg-slate-800 dark:text-white">
      <div className="flex items-center gap-2">
        <span
          className="cursor-pointer"
          onClick={() => setIsProgress((show) => !show)}
        >
          {isProgress ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <p className="bg-emerald-200 text-emerald-800 px-4 py-1 rounded-lg">
          Inprogress
        </p>
        <span> . {InprogressTasks.length} Tasks</span>
      </div>
      {isProgress && <ListTaskCard tasks={InprogressTasks} Assignee={true} />}
    </div>
  );
}

export default InprogressTaskList;
