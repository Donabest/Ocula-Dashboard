import { LuSunMoon } from "react-icons/lu";
// import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { RiNotificationLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="flex justify-end items-center bg-white/80 py-4.5 px-8 dark:bg-[#0f172b] dark:text-white">
      <ul className="flex justify-center items-center gap-2 ">
        <li className=" px-2 py-1 hover:bg-blue-100/30  hover:text-blue-800 cursor-pointer">
          <RiNotificationLine />
        </li>
        <li className="px-2 py-1 hover:bg-blue-100/30  hover:text-blue-800 cursor-pointer">
          <LuSunMoon />
          {/* <IoMoonOutline /> */}
        </li>
        <li className="px-2 py-1 hover:bg-blue-100/30  hover:text-blue-800 cursor-pointer">
          <HiOutlineLogout />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
