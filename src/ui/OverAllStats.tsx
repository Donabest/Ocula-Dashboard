import { BiTask } from "react-icons/bi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiSpinnerGapLight } from "react-icons/pi";

import type { cardTab } from "../utilities/type";
import { useActiveTasks } from "../hooks/useActiveTasks";
import OverAllStatItems from "./OverAllStatItems";

function OverAllStats() {
  const { isLoading, tasks, inProgressTasks, completedTasks } =
    useActiveTasks();

  const Tab: cardTab[] = [
    {
      icon: <BiTask className="text-purple-400 " />,
      status: "Total Tasks",
      total: tasks.length,
    },
    {
      icon: <PiSpinnerGapLight className="text-yellow-400 " />,
      status: "In progress",
      total: inProgressTasks.length,
    },
    {
      icon: <FaRegCircleCheck className="text-emerald-500 " />,
      status: "Completed",
      total: completedTasks.length,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {Tab.map((card, index) => (
        <OverAllStatItems card={card} key={index} loading={isLoading} />
      ))}
    </div>
  );
}

export default OverAllStats;
