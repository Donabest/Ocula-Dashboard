import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { WiStars } from "react-icons/wi";

import type { SidebarListType } from "../utilities/type";

const SideList: SidebarListType[] = [
  {
    icon: <MdOutlineDashboardCustomize />,
    list: "Dashboard",
    to: "Dashboard",
  },
  {
    icon: <WiStars />,
    list: "Ocula Ai",
    to: "OculaAi",
  },
  {
    icon: <BiTask />,
    list: "My Tasks",
    to: "MyTasks",
  },
  {
    icon: <SlCalender />,
    list: "Calendar",
    to: "Calender",
  },
  {
    icon: <LuChartNoAxesCombined />,
    list: "Analytics",
    to: "Analytics",
  },
];

function SidebarList() {
  return (
    <ul className="w-full space-y-2 mt-10">
      {SideList.map((item) => (
        <motion.li
          className="flex items-center justify-start gap-3 px-3 py-2 cursor-pointer rounded-lg hover:bg-blue-100/30  hover:text-blue-800 dark:hover:text-blue-900 dark:hover:bg-black/30"
          key={item.list}
          whileHover={{ y: -5 }}
          transition={{ stiffness: 850 }}
        >
          <span>{item.icon}</span>
          <Link
            to={item.to}
            className="text-black font-poppin dark:text-white "
          >
            {item.list}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default SidebarList;
