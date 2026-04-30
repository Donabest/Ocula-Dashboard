import { FaChevronDown } from "react-icons/fa6";
import TimeDiff from "../utilities/TimeDiff";
import type { priorityBg, status, Task } from "../utilities/type";
import StatusToggleMenu from "./StatusToggleMenu";

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 dark:bg-red-700",
  Low: "bg-gray-200 dark:bg-slate-700",
  Med: "bg-green-200 dark:bg-emerald-400",
};

const StatusBg: Record<status, string> = {
  Inprogress: "bg-green-300",
  Todo: "bg-gray-200",
  Completed: "bg-blue-300",
};

interface props {
  task: Task;
  AssignTo: boolean;
  OpenMenu: (id: number) => void;
  Open: number | null;
}

function ListTaskCardItem({ task, AssignTo, OpenMenu, Open }: props) {
  return (
    <>
      <div className="relative grid grid-cols-3  gap-3  text-gray-500 pb-2 border-b-2 border-b-gray-200 dark:text-gray-300 dark:border-b-gray-500">
        <div className="flex items-center gap-2 col-span-2 ">
          <FaChevronDown className="cursor-pointer" />
          <span
            className={`${StatusBg[task.status]}  p-1.5 rounded-sm cursor-pointer`}
            onClick={() => OpenMenu(task.id)}
          ></span>
          <span>{task.title}</span>
        </div>
        <div className="flex justify-between text-center items-center">
          {AssignTo && (
            <span>
              <img
                src={task.Assignee}
                alt="Assignee"
                className="w-8 h-8 rounded-full"
              />
            </span>
          )}
          <span
            className={`${AssignTo && "ml-8"} font-poppin text-sm ${priorityBg[task.priority]} px-3 py-1 rounded-lg uppercase`}
          >
            {task.priority}
          </span>
          <span
            className={`${TimeDiff(task.EndDate) === "Today" && "text-red-500 "}`}
          >
            {TimeDiff(task.EndDate)}
          </span>
        </div>
        {Open === task.id && <StatusToggleMenu value={task.status} />}
      </div>
    </>
  );
}

export default ListTaskCardItem;
