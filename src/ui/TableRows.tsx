import { CiFlag1 } from "react-icons/ci";
import { motion } from "motion/react";
import User from "../assets/person-1.jpg";
import type { priorityBg, status } from "../utilities/type";
import { useState } from "react";
import StatusToggleMenu from "./StatusToggleMenu";
import TimeDiff from "../utilities/TimeDiff";
import { useSortTask } from "#hooks/useSortTask";

const StatusBg: Record<status, string> = {
  Inprogress: "bg-green-300",
  Todo: "bg-gray-200",
  Completed: "bg-blue-300",
};

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 text-red-600 dark:bg-red-700 dark:text-red-100",
  Low: "bg-gray-200 text-gray-600 dark:bg-slate-700 dark:text-gray-100",
  Med: "bg-green-200 text-emerald-700 dark:bg-emerald-400 dark:text-emerald-50",
};

function TableRows() {
  const { sortedTask } = useSortTask();
  const [openId, setOpenId] = useState<number | null>();

  function handleOpenMenu(id: number, e: React.MouseEvent<HTMLSpanElement>) {
    e.stopPropagation();
    setOpenId((prevId) => (prevId === id ? null : id));
  }

  function close() {
    setOpenId(null);
  }

  return (
    <>
      {sortedTask.map((task, index) => (
        <motion.div
          className="relative mt-4 rounded-lg border border-gray-200 bg-gray-50 p-3 font-medium text-gray-600 dark:border-slate-700 dark:bg-slate-700/40 dark:text-slate-200 lg:grid lg:min-w-170 lg:grid-cols-[4fr_2fr_2fr] lg:gap-5 lg:border-0 lg:border-t-2 lg:bg-transparent lg:p-0 lg:pt-4 lg:mt-5 lg:w-full lg:dark:bg-transparent"
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          key={index}
        >
          <div className="flex min-w-0 items-center gap-3">
            <span
              className={`${StatusBg[task.status]} p-1.5 rounded-sm cursor-pointer`}
              onMouseDown={(e) => handleOpenMenu(task.id, e)}
            ></span>
            <span className="wrap-break-words lg:truncate">{task.title}</span>
          </div>
          <div className="mt-3 flex flex-wrap items-center text-sm gap-3 lg:mt-0 lg:w-fit lg:mx-auto lg:gap-8">
            <span className="text-gray-400 lg:hidden">Start:</span>
            <span>{task.StartDate}</span>
            <span className="text-gray-400 lg:hidden">Due:</span>
            <span
              className={
                TimeDiff(task.EndDate) === "Today" ? "text-red-500" : ""
              }
            >
              {task.EndDate}
            </span>
          </div>
          <div className="mt-3 flex items-center gap-4 lg:col-end-6 lg:mt-0 lg:gap-12 lg:text-right">
            <img src={User} alt={User} className="w-8 h-8 rounded-full " />
            <span
              className={`flex items-center gap-1 px-1.5 py-1 rounded-lg text-sm ${priorityBg[task.priority]} `}
            >
              <CiFlag1 />
              <p>{task.priority}</p>
            </span>
          </div>

          {openId === task.id && (
            <StatusToggleMenu
              handler={close}
              value={task.status}
              id={task.id}
            />
          )}
        </motion.div>
      ))}
    </>
  );
}

export default TableRows;
