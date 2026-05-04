import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import type { priorityBg, tasktype } from "../utilities/type";
import { CiFlag1 } from "react-icons/ci";
import Menu from "./Menu";

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 text-red-600 dark:bg-red-300 ",
  Low: "bg-gray-200 text-gray-700 dark:bg-slate-200",
  Med: "bg-green-200 text-emerald-700 dark:text-emerald-200 dark:bg-emerald-900",
};
function RecentTasksList({ task }: { task: tasktype }) {
  const [openId, setOpenId] = useState<number | null>();

  function handleOpenMenu(id: number, e: React.MouseEvent<SVGElement>) {
    e.stopPropagation();
    setOpenId((prevId) => (prevId === id ? null : id));
  }

  function handler() {
    setOpenId(null);
  }
  return (
    <div className="relative bg-gray-100 py-3 px-4 rounded-lg space-y-3 w-full dark:bg-slate-700 dark:text-slate-100">
      <div className=" flex justify-between items-center">
        <p
          className={`flex items-center gap-1 ${priorityBg[task.priority]} px-2 py-1 rounded-lg `}
        >
          <CiFlag1 />
          {task.priority}
        </p>
        <BsThreeDots
          className="cursor-pointer"
          onMouseDown={(e) => handleOpenMenu(task.id, e)}
        />
      </div>

      <div className="space-y-1">
        <h1 className="font-poppin font-[420]">{task.title} </h1>
        <p className="text-slate-600 text-sm text-wrap dark:text-slate-400">
          {task.description}
        </p>
      </div>

      {openId === task.id && <Menu handler={handler} />}
    </div>
  );
}

export default RecentTasksList;
