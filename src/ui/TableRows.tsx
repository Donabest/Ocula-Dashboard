import { CiFlag1 } from "react-icons/ci";
import { motion } from "motion/react";
import User from "../assets/person-1.jpg";
import type { priorityBg, status } from "../utilities/type";
import { useTasks } from "../services/useTasks";
import { useState } from "react";
import StatusToggleMenu from "./StatusToggleMenu";

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
  const { tasks } = useTasks();
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
      {tasks.map((task, index) => (
        <motion.div
          className="relative grid grid-cols-[4fr_2fr_2fr] gap-5 font-medium text-gray-600 pt-4 mt-5 w-full  border-t-2 border-gray-200 dark:text-slate-200 dark:border-slate-700"
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          key={index}
        >
          <div className=" flex items-center gap-3 ">
            <span
              className={`${StatusBg[task.status]} p-1.5 rounded-sm cursor-pointer`}
              onMouseDown={(e) => handleOpenMenu(task.id, e)}
            ></span>
            <span className="truncate">{task.title}</span>
          </div>
          <div className="flex items-center text-center text-sm gap-8 w-fit mx-auto ">
            <span>{task.StartDate}</span>
            <span>{task.EndDate}</span>
          </div>
          <div className="flex text-right items-center  gap-12 col-end-6">
            <img src={User} alt={User} className="w-8 h-8 rounded-full " />
            <span
              className={`flex items-center gap-1 px-1.5 py-1 rounded-lg text-sm ${priorityBg[task.priority]} `}
            >
              <CiFlag1 />
              <p>{task.priority}</p>
            </span>
          </div>

          {openId === task.id && (
            <StatusToggleMenu handler={close} value={task.status} />
          )}
        </motion.div>
      ))}
    </>
  );
}

export default TableRows;
