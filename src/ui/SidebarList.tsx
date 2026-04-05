import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { WiStars } from "react-icons/wi";

import type { ListType } from "../utilities/type";
import { useState } from "react";

const SideList: ListType[] = [
  {
    icon: <MdOutlineDashboardCustomize />,
    list: "Dashboard",
    To: "Dashboard",
  },
  {
    icon: <WiStars />,
    list: "Ocula Ai",
    To: "OculaAi",
  },
  {
    icon: <BiTask />,
    list: "My Tasks",
    To: "MyTasks",
  },
  {
    icon: <SlCalender />,
    list: "Calendar",
    To: "Calender",
  },
  {
    icon: <LuChartNoAxesCombined />,
    list: "Analytics",
    To: "Analytics",
  },
];

function SidebarList() {
  return (
    <ul className="w-full space-y-3 mt-8">
      {SideList.map((item) => (
        <motion.li
          key={item.list}
          whileHover={{ y: -3 }}
          transition={{ stiffness: 850 }}
        >
          <NavLink
            to={`${item.To}`}
            className={({ isActive }) =>
              `flex items-center justify-start gap-3 px-3 py-2 cursor-pointer rounded-lg hover:bg-blue-100/30  hover:text-blue-800 dark:hover:text-white/80 dark:hover:bg-slate-800  text-black font-poppin w-full dark:text-white ${
                isActive && "bg-blue-100/40 text-blue-800 dark:bg-slate-800"
              } `
            }
          >
            <span>{item.icon}</span>
            {item.list}
          </NavLink>
        </motion.li>
      ))}
    </ul>
  );
}

export default SidebarList;
