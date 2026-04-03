import { motion } from "motion/react";
import { IoIosArrowUp } from "react-icons/io";
import type { ActiveProp, priorityBg } from "../../utilities/type";
import CompletedTaskBoard from "../../ui/CompletedTaskBoard";
import InprogressTaskBoard from "../../ui/InprogressTaskBoard";
import TodoTaskBoard from "../../ui/TodoTaskBoard";
import UpcommingTaskBoard from "../../ui/UpcommingTaskBoard";

const BoardHeader: string[] = ["Inprogress", "Todo", "UpComming", "Completed"];

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 text-red-600 dark:bg-red-300 ",
  Low: "bg-gray-200 text-gray-700 dark:bg-slate-200",
  Med: "bg-green-200 text-emerald-700 dark:bg-emerald-200",
};

function MyTasksBoardView({ active }: ActiveProp) {
  return (
    <>
      {active === "Board" && (
        <div className="mt-6">
          <ul className="grid grid-cols-4 gap-4">
            {BoardHeader.map((head, index) => (
              <li
                className="flex justify-between items-center bg-gray-200/60 px-4 py-3 rounded-lg"
                key={index}
              >
                <h2 className="flex items-center gap-2 font-medium text-gray-800">
                  {head}
                  <span className="text-gray-600 font-raleway">.2</span>
                </h2>
                <IoIosArrowUp className="text-gray-500 cursor-pointer" />
              </li>
            ))}
          </ul>

          <motion.div
            className="grid grid-cols-4 mt-8 gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <InprogressTaskBoard />
            <TodoTaskBoard />
            <UpcommingTaskBoard />
            <CompletedTaskBoard />
          </motion.div>
        </div>
      )}
    </>
  );
}

export default MyTasksBoardView;
