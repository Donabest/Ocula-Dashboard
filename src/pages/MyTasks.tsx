import { GoPlus } from "react-icons/go";
import { motion } from "motion/react";
import type { ListType, priorityBg } from "../utilities/type";
import { SlCalender } from "react-icons/sl";
import { FaRegEye } from "react-icons/fa6";
import { HiNumberedList } from "react-icons/hi2";
import { PiKanbanThin } from "react-icons/pi";
import { useState } from "react";
import { CiFlag1 } from "react-icons/ci";

import User from "../assets/person-1.jpg";
import MyTasksHeader from "../ui/MyTasksHeader";
import OverAllStats from "../ui/OverAllStats";
import RecentTask from "../ui/RecentTask";
import ScheduleTask from "../ui/ScheduleTask";

const TasksTabs: ListType[] = [
  {
    icon: <FaRegEye />,
    list: "Overview",
  },
  {
    icon: <HiNumberedList />,
    list: "List",
  },
  {
    icon: <PiKanbanThin />,
    list: "Board",
  },
  {
    icon: <SlCalender />,
    list: "Calendar",
  },
];

const priorityBg: priorityBg = {
  High: "bg-red-200 text-red-600",
  Low: "bg-gray-200 ",
  Medium: "bg-green-200 text-emerald-700",
};

const priorityDarkMode: priorityBg = {
  High: "dark:bg-red-700",
  Low: "dark:bg-slate-700",
  Medium: "dark:bg-emerald-400",
};
function MyTasks() {
  const [activeTab, setactiveTab] = useState<string>("Overview");

  return (
    <div className="pt-20 px-8 max-w-7xl ">
      <div className="flex justify-between items-center">
        <MyTasksHeader
          title={`${activeTab}`}
          description="Monitor all your projects and tasks here"
        />

        <motion.button
          className="flex items-center gap-0.5 px-4 py-2 bg-blue-700 text-white rounded-lg cursor-pointer"
          whileHover={{ y: -1.6, background: "blue" }}
        >
          <GoPlus />
          New Task
        </motion.button>
      </div>

      <div className="flex items-center gap-6 pt-8">
        {TasksTabs.map((tab) => (
          <div
            className={`flex items-center gap-1 pb-2 text-gray-700 ${activeTab === tab.list && "border-b-2 border-b-purple-700"} cursor-pointer`}
            onClick={() => setactiveTab(tab.list)}
          >
            {tab.icon}
            <span className="text-medium ">{tab.list}</span>
          </div>
        ))}
      </div>

      {activeTab === "Overview" && (
        <section>
          <div className="grid grid-cols-2 gap-3 pt-8  ">
            <div className="flex flex-col gap-4">
              <OverAllStats />
              <RecentTask />
            </div>
            <ScheduleTask />
          </div>
          <div className="bg-white mt-5 px-6 py-4">
            <div className="flex justify-between">
              <h1 className="font-medium text-xl">Task list.</h1>

              <div className="flex items-center gap-3">
                <label htmlFor="filter">Filter :</label>
                <select
                  name="filter"
                  id="filter"
                  className="bg-gray-100 px-4 py-1 border-0 outline-0 rounded-lg"
                >
                  <option value="By start Date">Start Date</option>
                  <option value="By End Date">End Date</option>
                  <option value="By Priority">Priority</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-[4fr_2fr_2fr] text-gray-400 font-medium mt-8 w-full">
              <p>Name</p>
              <div className="flex items-center text-center gap-8 ">
                <span>Start Date</span>
                <span>Due Date</span>
              </div>
              <div className="flex text-right items-center gap-8 col-end-6">
                <span>Assignee</span>
                <span>Priority</span>
              </div>
            </div>
            <div className="grid grid-cols-[4fr_2fr_2fr] gap-5 font-medium text-gray-600 pt-2 mt-5 w-full border-t-2 border-gray-200">
              <div className="flex items-center gap-3 ">
                <span className="bg-green-200 p-1.5 rounded-sm cursor-pointer"></span>
                <span className="truncate">Homepage redesign</span>
              </div>
              <div className="flex items-center text-center gap-8 w-full">
                <span>jan 26,2027</span>
                <span>jan 28,2027</span>
              </div>
              <div className="flex text-right items-center gap-12 col-end-6">
                <img src={User} alt={User} className="w-8 h-8 rounded-full " />
                <span className="flex items-center gap-1">
                  <CiFlag1 />
                  <p>High</p>
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default MyTasks;
