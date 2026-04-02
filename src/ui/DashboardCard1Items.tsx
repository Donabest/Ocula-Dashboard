import { FaChevronDown } from "react-icons/fa6";
import ListTaskCard from "./ListTaskCard";

const dashboardTask = [
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
  {
    title: "Send a summary email to stakeholders",
    priority: "Med",
    day: "3 days left",
  },
];

function DashboardCard1Items() {
  return (
    <>
      <ListTaskCard
        Tasks={dashboardTask}
        status="Inprogress"
        Assignee={false}
      />

      <div className="flex items-center gap-3 pl-3">
        <FaChevronDown className="cursor-pointer" />
        <p className="bg-gray-200 text-sm font-poppin px-3 py-1 rounded-lg uppercase dark:bg-slate-700">
          To Do
        </p>
        <span className="font-medium text-gray-500 dark:text-slate-400">
          . 1 task
        </span>
      </div>

      <div className="flex items-center gap-3 pl-3">
        <FaChevronDown className="cursor-pointer" />
        <p className="bg-yellow-200 text-sm text-center font-poppin px-3 py-1 rounded-lg uppercase dark:bg-yellow-900 dark:text-white">
          Up Comming
        </p>
        <span className="font-medium text-gray-500 dark:text-slate-400">
          {" "}
          . 1 task
        </span>
      </div>
    </>
  );
}

export default DashboardCard1Items;
