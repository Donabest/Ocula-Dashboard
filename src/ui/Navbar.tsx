import { LuSunMoon } from "react-icons/lu";
// import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { RiNotificationLine } from "react-icons/ri";
import { useCalendar } from "../Context/useCalender";

function Navbar() {
  const { schedules } = useCalendar();
  const count = schedules.filter((sch) => sch.Reminder !== "none").length;
  return (
    <div className="fixed right-0 left-60 top-0 flex justify-end items-center bg-white/80 py-4.5 px-8 z-20 backdrop-blur-md dark:bg-[#18212f]/90 dark:text-white ">
      <ul className="flex justify-center items-center gap-2 ">
        <li className=" relative px-2 py-1 hover:bg-gray-200 rounded-lg hover:text-blue-800 cursor-pointer">
          <RiNotificationLine size={18} />
          {count > 0 && (
            <span className="absolute -top-0.5 -right-0.5 z-99 flex text-center justify-center items-center bg-red-500 text-white text-xs w-4 h-4  rounded-full">
              {count > 99 ? "99+" : count}
            </span>
          )}
        </li>
        <li className="px-2 py-1 hover:bg-gray-200 rounded-lg hover:text-blue-800 cursor-pointer">
          <LuSunMoon />
          {/* <IoMoonOutline /> */}
        </li>
        <li className="px-2 py-1 hover:bg-gray-200 rounded-lg hover:text-blue-800 cursor-pointer">
          <HiOutlineLogout />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
