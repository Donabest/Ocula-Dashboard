import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TiGroupOutline } from "react-icons/ti";

import User from "../assets/person-1.jpg";
import type { schedule } from "../utilities/type";

interface scheduleTaskItemProps {
  task: schedule;
  detail: boolean;
}

function ScheduleTaskItem({ task, detail }: scheduleTaskItemProps) {
  return (
    <div className="bg-blue-100 p-5 space-y-3 rounded-xl dark:bg-slate-700 dark:text-slate-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className=" text-sm font-medium">{task.title}</h1>
          <span
            className={`text-sm ${task.priority === "Starting soon" ? "text-yellow-600 bg-yellow-100 " : "text-green-600 bg-green-100 dark:text-green-700"} px-2 py-1 rounded-lg`}
          >
            {task.priority}
          </span>
        </div>
        <p className="text-gray-500 dark:text-slate-400">Start at</p>
      </div>
      <div className="flex justify-between items-center py-1.5">
        <h4 className="flex items-center gap-3 text-sm font-medium bg-white/80 px-4 py-1 rounded-full dark:bg-slate-700 dark:border dark:border-slate-400 ">
          <TiGroupOutline className="text-red-600" /> {task.meet}
        </h4>
        <p className="text-sm "> {task.time}</p>
      </div>

      {detail && (
        <div className="flex justify-between items-center pt-3 border-t-2 border-gray-300 dark:border-slate-600">
          <img src={User} alt={User} className="w-7 h-7 rounded-full" />
          <p className="flex  items-center gap-2 cursor-pointer">
            View Detail
            <MdOutlineKeyboardArrowRight />
          </p>
        </div>
      )}
    </div>
  );
}

export default ScheduleTaskItem;
