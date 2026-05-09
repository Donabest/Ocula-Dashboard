import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TiGroupOutline } from "react-icons/ti";

import User from "../assets/person-1.jpg";
import type { schedule } from "../utilities/type";
import TimeDiff from "../utilities/TimeDiff";
import { useCalendar } from "../Context/useCalender";
import { parseTimeToLocal } from "../utilities/TimeParse";

interface scheduleTaskItemProps {
  task: schedule;
  detail: boolean;
  setSelect?: React.Dispatch<React.SetStateAction<schedule | null>>;
}

function ScheduleTaskItem({ task, detail, setSelect }: scheduleTaskItemProps) {
  const { setIsOpen } = useCalendar();
  const handleClick = (task: schedule) => {
    setSelect?.(task);
    setIsOpen(true);
  };

  return (
    <>
      <div className="bg-blue-100 p-5 space-y-3 rounded-xl dark:bg-slate-700 dark:text-slate-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className=" text-sm font-medium">{task.eventTitle}</h1>
            <span
              className={`text-sm ${TimeDiff(task.date) === "Today" ? "text-yellow-600 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-50 " : TimeDiff(task.date)?.includes("days ago") ? "bg-red-100 text-red-500 dark:bg-red-700 dark:text-red-100" : "text-green-600 bg-green-100 dark:bg-emerald-800 dark:text-emerald-300"} px-2 py-1 rounded-lg`}
            >
              {TimeDiff(task.date) === "Today"
                ? "Starting Soon"
                : TimeDiff(task.date)?.includes("days ago")
                  ? "overdue"
                  : "Schedule"}
            </span>
          </div>
          <p className="text-gray-500 dark:text-slate-400">Start at</p>
        </div>
        <div className="flex justify-between items-center py-1.5">
          <h4 className="flex items-center gap-3 text-sm font-medium bg-white/80 px-4 py-1 rounded-full dark:bg-slate-700 dark:border dark:border-slate-400 ">
            <TiGroupOutline className="text-red-600" /> {task.meet}
          </h4>
          <p className="text-sm ">
            {parseTimeToLocal(task.startTime)} -{" "}
            {parseTimeToLocal(task.endTime)}
          </p>
        </div>

        {detail && (
          <div className="flex justify-between items-center pt-3 border-t-2 border-gray-300 dark:border-slate-600">
            <img src={User} alt={User} className="w-7 h-7 rounded-full" />
            <button
              className="flex  items-center gap-2 cursor-pointer"
              onClick={() => handleClick(task)}
            >
              View Detail
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ScheduleTaskItem;
