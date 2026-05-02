import { BsThreeDots } from "react-icons/bs";
import type { priorityBg } from "../utilities/type";
import { CiFlag1 } from "react-icons/ci";
import { Tasks } from "../data/data-task";
import { useState } from "react";
import Menu from "./Menu";

const RecentTasks = [...Tasks].slice(-2);

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 text-red-600 dark:bg-red-300 ",
  Low: "bg-gray-200 text-gray-700 dark:bg-slate-200",
  Med: "bg-green-200 text-emerald-700 dark:text-emerald-200 dark:bg-emerald-900",
};

function RecentTask() {
  const [openId, setOpenId] = useState<number | null>();
  function handleOpenMenu(id: number, e: React.MouseEvent<SVGElement>) {
    e.stopPropagation();
    setOpenId((prevId) => (prevId === id ? null : id));
  }

  function handler() {
    setOpenId(null);
  }
  return (
    <div className=" bg-white p-4 rounded-lg  dark:bg-slate-800 dark:text-slate-100">
      <div className="flex items-center justify-between font-poppin font-medium ">
        Recents Tasks
      </div>

      <div className="flex flex-col items-center gap-4 mt-3 mx-2">
        {RecentTasks.map((rcard, index) => (
          <div
            className="relative bg-gray-100 py-3 px-4 rounded-lg space-y-3 w-full dark:bg-slate-700 dark:text-slate-100"
            key={index}
          >
            <div className=" flex justify-between items-center">
              <p
                className={`flex items-center gap-1 ${priorityBg[rcard.priority]} px-2 py-1 rounded-lg `}
              >
                <CiFlag1 />
                {rcard.priority}
              </p>
              <BsThreeDots
                className="cursor-pointer"
                onMouseDown={(e) => handleOpenMenu(rcard.id, e)}
              />
            </div>

            <div className="space-y-1">
              <h1 className="font-poppin font-[420]">{rcard.title} </h1>
              <p className="text-slate-600 text-sm text-wrap dark:text-slate-400">
                {rcard.description}
              </p>
            </div>

            {openId === rcard.id && <Menu handler={handler} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTask;
