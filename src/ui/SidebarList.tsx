import { motion } from "motion/react";

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
  },
  {
    icon: <WiStars />,
    list: "Ocula Ai",
  },
  {
    icon: <BiTask />,
    list: "My Task",
  },
  {
    icon: <SlCalender />,
    list: "Calendar",
  },
  {
    icon: <LuChartNoAxesCombined />,
    list: "Analytics",
  },
];

function SidebarList() {
  return (
    <ul className="w-full space-y-2 mt-10">
      {SideList.map((item) => (
        <motion.li
          className="flex items-center justify-start gap-3 px-3 py-2 cursor-pointer rounded-lg hover:bg-blue-100/30  hover:text-blue-800 dark:hover:text-white/70"
          key={item.list}
          whileHover={{ y: -5 }}
          transition={{ stiffness: 850 }}
        >
          <span>{item.icon}</span>
          <span className="text-black font-poppin dark:text-white ">
            {item.list}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export default SidebarList;
