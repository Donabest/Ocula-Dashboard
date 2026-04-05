import { motion } from "motion/react";
import { CiSettings } from "react-icons/ci";
import User from "./User";
import SidebarList from "./SidebarList";
import ProjectList from "./ProjectList";
import Invite from "./Invite";

function Sidebar() {
  return (
    <div className=" pb-4 px-7 pt-10">
      <div className="flex flex-col items-center justify-center">
        <User />
        <SidebarList />

        {/* divide line */}
        <div className="w-full mt-5 border-b border-gray-200 dark:border-slate-500"></div>

        <div className="w-full mt-5">
          <div className="flex justify-between items-center">
            <h1>My Projects</h1>
            <motion.button
              className="px-3 py-1 bg-violet-200 rounded-4xl cursor-pointer hover:bg-violet-300 dark:bg-blue-800 dark:hover:bg-blue-700"
              whileHover={{ y: -2 }}
            >
              +Add
            </motion.button>
          </div>

          <ProjectList />
        </div>

        <div className="mt-10">
          <motion.h1
            className="flex justify-start items-center gap-3 px-3 py-2 cursor-pointer rounded-lg hover:bg-blue-100/30  hover:text-blue-800 dark:hover:text-white/70"
            whileHover={{ y: -3 }}
          >
            <CiSettings />
            <span className="text-black dark:text-white ">Settings</span>
          </motion.h1>

          <Invite />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
