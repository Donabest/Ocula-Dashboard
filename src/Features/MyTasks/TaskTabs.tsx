import { FaRegEye } from "react-icons/fa6";
import type { ListType } from "../../utilities/type";
import { HiNumberedList } from "react-icons/hi2";
import { PiKanbanThin } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

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

interface tabsProps {
  active: string;
  handleActive: React.Dispatch<React.SetStateAction<string>>;
}

function TaskTabs({ active, handleActive }: tabsProps) {
  return (
    <div className="flex items-center gap-6 pt-8 ">
      {TasksTabs.map((tab) => (
        <div
          className={`flex items-center gap-1 pb-2 text-gray-700 ${active === tab.list && "border-b-2 border-b-purple-700"} cursor-pointer dark:text-slate-300`}
          onClick={() => handleActive(tab.list)}
        >
          {tab.icon}
          <span className="text-medium ">{tab.list}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskTabs;
