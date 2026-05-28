import { useSearchParams } from "react-router-dom";
import { cn } from "#lib/utils";
import { FaRegEye } from "react-icons/fa6";
import { HiNumberedList } from "react-icons/hi2";
import { PiKanbanThin } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

import type { ListType } from "../../utilities/type";

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
  const [searchParams, setSearchParams] = useSearchParams();
  function handleUrlChange(list: string) {
    searchParams.set("", list);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center gap-5 overflow-x-auto hide-scrollbar pt-8 sm:gap-6">
      {TasksTabs.map((tab, index) => (
        <div
          className={cn(
            "flex shrink-0 items-center gap-1 pb-2 text-gray-700 cursor-pointer",
            active === tab.list &&
              "border-b-2 border-b-purple-700 cursor-pointer dark:text-slate-300",
          )}
          onClick={() => {
            handleActive(tab.list);
            handleUrlChange(tab.list);
          }}
          key={index}
        >
          {tab.icon}
          <span className="text-medium ">{tab.list}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskTabs;
