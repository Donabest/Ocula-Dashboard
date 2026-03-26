import { FaChevronDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

type dashboardTask = {
  title: string;
  priority: string;
  day: string;
};

type priorityBg = {
  High: string;
  Low: string;
  Medium: string;
};
const dashboardTask: dashboardTask[] = [
  {
    title: "One-on-One-Meeting",
    priority: "High",
    day: "today",
  },
  {
    title: "Send a summary email to stakeholders",
    priority: "Low",
    day: "3 days left",
  },
];

const priorityBg = {
  High: "bg-red-200",
  Low: "bg-gray-200",
  Medium: "bg-green-200",
};
console.log(priorityBg.High);

function DashboardCard1Items() {
  return (
    <>
      <div className="flex items-center gap-3 pl-3">
        <IoIosArrowUp />
        <p className="bg-green-300 text-black text-sm px-3 py-1 rounded-lg  uppercase">
          In Progress
        </p>
        <span className="font-poppin">. 2 tasks</span>
      </div>

      <div className="flex flex-col gap-5 pt-1.5 pl-3">
        <div className="grid grid-cols-3 text-gray-500 pb-2 border-b-2 border-b-gray-200  ">
          <h1 className="col-span-2">Name</h1>
          <div className="flex justify-between">
            <span>Priority</span>
            <span>Due Date</span>
          </div>
        </div>
        {dashboardTask.map((task) => (
          <div
            className="grid grid-cols-3 text-gray-500 pb-2 border-b-2 border-b-gray-200"
            key={task.title}
          >
            <div className="flex items-center gap-2 col-span-2 ">
              <FaChevronDown className="cursor-pointer" />
              <span className="bg-green-200 p-1.5 rounded-sm"></span>
              <span>{task.title}</span>
            </div>
            <div className="flex justify-between text-center items-center">
              <span
                className={`font-poppin text-sm ${priorityBg[task?.priority]} px-3 py-1 rounded-lg uppercase`}
              >
                {task.priority}
              </span>
              <span className={`${task.priority === "High" && "text-red-500"}`}>
                {task.day}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="flex justify-start pl-3 font-medium cursor-pointer ">
        + Add Task
      </button>

      <div className="flex items-center gap-3 pl-3">
        <FaChevronDown className="cursor-pointer" />
        <p className="bg-gray-200 text-sm font-poppin px-3 py-1 rounded-lg uppercase">
          To Do
        </p>
        <span className="font-medium text-gray-500">. 1 task</span>
      </div>

      <div className="flex items-center gap-3 pl-3">
        <FaChevronDown className="cursor-pointer" />
        <p className="bg-yellow-200 text-sm font-poppin px-3 py-1 rounded-lg uppercase">
          Up Comming
        </p>
        <span className="font-medium text-gray-500"> . 1 task</span>
      </div>
    </>
  );
}

export default DashboardCard1Items;
