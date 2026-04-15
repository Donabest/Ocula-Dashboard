import { CiFlag1 } from "react-icons/ci";
import { motion } from "motion/react";
import User from "../assets/person-1.jpg";
import type { priorityBg, status } from "../utilities/type";
import { Tasks } from "../data/data-task";

const StatusBg: Record<status, string> = {
  Inprogress: "bg-green-300",
  Todo: "bg-gray-200",
  Upcomming: "bg-yellow-400",
  Completed: "bg-blue-300",
};

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 text-red-600 dark:bg-red-700 dark:text-red-100",
  Low: "bg-gray-200 text-gray-600 dark:bg-slate-700 dark:text-gray-100",
  Med: "bg-green-200 text-emerald-700 dark:bg-emerald-400 dark:text-emerald-50",
};

function TableRows() {
  return (
    <>
      {Tasks.map((row, index) => (
        <motion.div
          className="grid grid-cols-[4fr_2fr_2fr] gap-5 font-medium text-gray-600 pt-4 mt-5 w-full border-t-2 border-gray-200 dark:text-slate-200 dark:border-slate-700"
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          key={index}
        >
          <div className="flex items-center gap-3 ">
            <span
              className={`${StatusBg[row.status]} p-1.5 rounded-sm cursor-pointer`}
            ></span>
            <span className="truncate">{row.title}</span>
          </div>
          <div className="flex items-center text-center gap-8 w-full">
            <span>{row.StartDate}</span>
            <span>{row.EndDate}</span>
          </div>
          <div className="flex text-right items-center  gap-12 col-end-6">
            <img src={User} alt={User} className="w-8 h-8 rounded-full " />
            <span
              className={`flex items-center gap-1 px-1.5 py-1 rounded-lg text-sm ${priorityBg[row.priority]} `}
            >
              <CiFlag1 />
              <p>{row.priority}</p>
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default TableRows;
