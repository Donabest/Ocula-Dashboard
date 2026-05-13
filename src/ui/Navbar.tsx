import { AnimatePresence, motion } from "motion/react";
import { LuSunMoon } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { RiNotificationLine } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useCalendar } from "../Context/useCalender";
import { useState } from "react";
import SeeNotification from "./SeeNotification";
import useClickOutSide from "../hooks/useClickOutSide";
import { useDark } from "../Context/DarkModeContext";

type NavbarProps = {
  onMenuClick?: () => void;
};

function Navbar({ onMenuClick }: NavbarProps) {
  const { schedules } = useCalendar();
  const { ToogleDarkMode, isDarkMode } = useDark();
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isDropDown, setIsDropDown] = useState<boolean | null>(null);

  function close() {
    setIsDropDown(false);
  }
  const { ref } = useClickOutSide(close);

  const count = schedules.filter(
    (sch) => sch.reminder !== "none" && sch.notificationDismissed === false,
  ).length;

  return (
    <>
      <div className="fixed right-0 left-0 lg:left-60 top-0 flex justify-between lg:justify-end items-center bg-white/80 py-4.5 px-4 sm:px-8 z-20 backdrop-blur-md dark:bg-[#18212f]/90 dark:text-white ">
        <button
          type="button"
          className="rounded-lg p-2 hover:bg-gray-200 hover:text-blue-800 cursor-pointer dark:hover:bg-slate-800 lg:hidden"
          aria-label="Open navigation"
          onClick={onMenuClick}
        >
          <HiOutlineMenuAlt2 size={20} />
        </button>
        <ul className="relative flex justify-center items-center gap-2 ">
          <li
            className="relative"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => setIsDropDown(true)}
          >
            <div className=" px-2 py-1 hover:bg-gray-200 rounded-lg hover:text-blue-800 cursor-pointer dark:hover:bg-slate-800">
              <RiNotificationLine size={18} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 z-99 flex text-center justify-center items-center bg-red-500 text-white text-xs w-4 h-4  rounded-full">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </div>
            {isHover && (
              <AnimatePresence>
                <motion.span
                  className="absolute top-0 -left-43 w-40 text-xs bg-gray-200 text-center text-gray-600 p-1 rounded-lg dark:bg-slate-800 dark:text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                >
                  {!count ? ` Nothing to see here ` : "See All Notifications"}
                </motion.span>
              </AnimatePresence>
            )}
          </li>

          <li
            className="px-2 py-1 hover:bg-gray-200 rounded-lg hover:text-blue-800 cursor-pointer dark:hover:bg-slate-800"
            onClick={ToogleDarkMode}
          >
            {isDarkMode ? <LuSunMoon /> : <IoMoonOutline />}
          </li>
          <li className="px-2 py-1 hover:bg-gray-200 rounded-lg hover:text-blue-800 cursor-pointer dark:hover:bg-slate-800">
            <HiOutlineLogout />
          </li>
        </ul>
      </div>
      {isDropDown && (
        <div ref={ref}>
          <SeeNotification />
        </div>
      )}
    </>
  );
}

export default Navbar;
