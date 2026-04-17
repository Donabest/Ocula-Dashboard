import { IoIosArrowUp } from "react-icons/io";
import type { priorityBg, status, Task } from "../utilities/type";
import { FaChevronDown } from "react-icons/fa6";
import TimeDiff from "../utilities/TimeDiff";

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 dark:bg-red-700",
  Low: "bg-gray-200 dark:bg-slate-700",
  Med: "bg-green-200 dark:bg-emerald-400",
};

interface CardProps {
  tasks: Task[];
  Assignee: boolean;
}

const StatusBg: Record<status, string> = {
  Inprogress: "bg-green-300",
  Todo: "bg-gray-200",
  Upcomming: "bg-yellow-400",
  Completed: "bg-blue-300",
};
function ListTaskCard({ tasks, Assignee }: CardProps) {
  const Tasks = [...tasks].slice(0, 3);

  return (
    <>
      <div className="flex flex-col gap-5 pt-1.5 pl-3">
        <div className="grid grid-cols-3 text-gray-500 pb-2 border-b-2 border-b-gray-200  dark:text-gray-400 dark:border-b-slate-500">
          <h1 className="col-span-2">Name</h1>
          <div className="flex justify-between items-center">
            {Assignee && <span>Assignee</span>} <span>Priority</span>
            <span>Due Date</span>
          </div>
        </div>

        {Tasks.map((task, index) => (
          <div
            className="grid grid-cols-3  gap-3  text-gray-500 pb-2 border-b-2 border-b-gray-200 dark:text-gray-300 dark:border-b-gray-500"
            key={index}
          >
            <div className="flex items-center gap-2 col-span-2 ">
              <FaChevronDown className="cursor-pointer" />
              <span
                className={`${StatusBg[task.status]} p-1.5 rounded-sm`}
              ></span>
              <span>{task.title}</span>
            </div>
            <div className="flex justify-between text-center items-center">
              {Assignee && (
                <span>
                  <img
                    src={task.Assignee}
                    alt="Assignee"
                    className="w-8 h-8 rounded-full"
                  />
                </span>
              )}
              <span
                className={`${Assignee && "ml-8"} font-poppin text-sm ${priorityBg[task.priority]} px-3 py-1 rounded-lg uppercase`}
              >
                {task.priority}
              </span>
              <span
                className={`${TimeDiff(task.EndDate) === "Today" && "text-red-500 "}`}
              >
                {TimeDiff(task.EndDate)}
              </span>
            </div>
          </div>
        ))}
        <button className="flex justify-start pl-3 font-medium cursor-pointer ">
          + Add Task
        </button>
      </div>
    </>
  );
}

export default ListTaskCard;
