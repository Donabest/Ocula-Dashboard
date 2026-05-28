import { motion } from "motion/react";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Setting({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <motion.div
      className=" px-3 py-2 cursor-pointer rounded-lg dark:hover:bg-slate-800  hover:text-blue-800 dark:hover:text-white/70"
      whileHover={{ y: -3 }}
    >
      <NavLink
        to="Settings"
        className="flex justify-start items-center gap-3"
        onClick={onNavigate}
      >
        <CiSettings />
        <span className="text-black dark:text-white">Settings</span>
      </NavLink>
    </motion.div>
  );
}

export default Setting;
