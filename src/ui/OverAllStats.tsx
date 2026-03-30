import { BiTask } from "react-icons/bi";
import { FaRegCircleCheck } from "react-icons/fa6";
import {
  MdOutlineAccessTime,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import type { cardTab } from "../utilities/type";

const Tab: cardTab[] = [
  {
    icon: <BiTask className="text-purple-400 " />,
    status: "Total Tasks",
    total: 128,
  },
  {
    icon: <MdOutlineAccessTime className="text-yellow-400 " />,
    status: "In progress",
    total: 18,
  },
  {
    icon: <FaRegCircleCheck className="text-emerald-500 " />,
    status: "Completed",
    total: 76,
  },
];

function OverAllStats() {
  return (
    <div className="flex items-center gap-2">
      {Tab.map((card, index) => (
        <div className="bg-white p-4 space-y-6 rounded-lg flex-1" key={index}>
          <div className="flex justify-between items-center ">
            {card.icon}
            <p className="flex items-center font-medium text-gray-500 text-sm cursor-pointer">
              View details
              <MdOutlineKeyboardArrowRight className="text-xl" />
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">{card.status}</p>
            <span className="text-2xl font-raleway font-medium">
              {card.total}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OverAllStats;
