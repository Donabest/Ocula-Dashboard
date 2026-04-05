import { BsThreeDots } from "react-icons/bs";
import type { priorityBg, Tasks } from "../utilities/type";

interface BoardTaskProp {
  Tasks: Tasks[];
}

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 text-red-600 dark:bg-red-300 ",
  Low: "bg-gray-200 text-gray-700 dark:bg-slate-500 dark:text-slate-100",
  Med: "bg-green-200 text-emerald-700 dark:bg-emerald-300 dark:text-emerald-800",
};

function BoardTaskCard({ Tasks }: BoardTaskProp) {
  return (
    <div className="space-y-4 bg-white/90 p-3 h-fit rounded-lg dark:bg-slate-800">
      {Tasks.map((task, index) => (
        <div
          className="space-y-3 bg-gray-100 px-5 py-4 rounded-lg border border-slate-300 cursor-pointer hover:scale-101 transition dark:bg-slate-700 dark:border-slate-800"
          key={index}
        >
          <div className="flex justify-between">
            <span
              className={`${priorityBg[task.priority]} px-4 py-1 rounded-lg`}
            >
              {task.priority}
            </span>
            <BsThreeDots className="cursor-pointer dark:text-slate-100" />
          </div>
          <div className="border-b border-b-gray-300 pb-2 space-y-1 dark:border-b-slate-500">
            <h1 className="font-medium text-[17px] dark:text-slate-100">
              {task.title}
            </h1>
            <p className="font-raleway text-gray-500 truncate text-sm dark:text-slate-300">
              {task.desc}
            </p>
          </div>
          <img
            src={task.Assignee}
            alt="Assignee"
            className="w-8 -8 rounded-full"
          />
        </div>
      ))}
    </div>
  );
}

export default BoardTaskCard;
