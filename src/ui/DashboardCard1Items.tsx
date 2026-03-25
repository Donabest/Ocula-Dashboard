import { FaChevronDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

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
        <div className="grid grid-cols-3 text-gray-500 pb-2 border-b-2 border-b-gray-200">
          <div className="flex items-center gap-2 col-span-2 ">
            <FaChevronDown className="cursor-pointer" />
            <span className="bg-green-200 p-1.5 rounded-sm"></span>
            <span>One-on-One-Meeting</span>
          </div>
          <div className="flex justify-between">
            <span className="font-poppin text-sm bg-red-200 px-3 py-1 rounded-lg uppercase">
              High
            </span>
            <span className="text-red-500">Today</span>
          </div>
        </div>
        <div className="grid grid-cols-3 text-gray-500 pb-2 border-b-2 border-b-gray-200">
          <div className="flex items-center gap-2 col-span-2">
            <FaChevronDown className="cursor-pointer" />
            <span className="bg-green-200 p-1.5 rounded-sm"></span>
            <span className="text-sm">
              Send a summary email to stakeholders
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-poppin text-sm  bg-gray-200 px-3 py-1 rounded-lg uppercase">
              Low
            </span>
            <span>3 days left</span>
          </div>
        </div>
      </div>

      <button className="flex justify-start pl-3 font-medium cursor-pointer ">
        + Add Task
      </button>

      <div className="flex items-center gap-3 pl-3">
        <FaChevronDown className="cursor-pointer" />
        <p className="bg-gray-200 text-sm font-poppin px-3 py-1 rounded-lg uppercase">
          To Do
        </p>
        <span className="font-medium">. 1 task</span>
      </div>

      <div className="flex items-center gap-3 pl-3">
        <FaChevronDown className="cursor-pointer" />
        <p className="bg-yellow-200 text-sm font-poppin px-3 py-1 rounded-lg uppercase">
          Up Comming
        </p>
        <span className="font-medium"> . 1 task</span>
      </div>
    </>
  );
}

export default DashboardCard1Items;
