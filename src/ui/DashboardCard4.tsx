import { SlCalender } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { SiGooglemeet } from "react-icons/si";

const days: string[] = ["fri", "sat", "sun", "mon", "tue", "wed", "thur"];
function DashboardCard4() {
  return (
    <div className="bg-white mt-8 px-8 py-6 space-y-4 rounded-2xl dark:bg-slate-800 dark:text-white">
      <div className="flex items-center gap-5 font-poppin font-medium text-gray-600 dark:text-slate-300">
        <h1 className="flex items-center gap-2 ">
          <SlCalender className="text-blue-800 dark:text-blue-400" />
          Calendar
        </h1>
        <p className="flex items-center gap-2 ">
          Mar
          <FaChevronDown className="text-gray-500 text-sm cursor-pointer" />
        </p>
      </div>

      <div className="flex justify-center items-center gap-10">
        <MdOutlineKeyboardArrowLeft className="cursor-pointer" />
        <div className="flex items-center gap-8">
          {days.map((day, index) => (
            <div
              className={`flex flex-col justify-center items-center text-gray-500 ${day === "mon" ? "bg-blue-700 text-white px-2 py-1 rounded-lg " : ""} cursor-pointer dark:text-white/60`}
              key={index}
            >
              <span className="text-sm">{day}</span>
              <p
                className={`font-raleway font-medium text-lg ${day === "mon" && "text-white"} text-black dark:text-white`}
              >
                30
              </p>
            </div>
          ))}
        </div>
        <MdOutlineKeyboardArrowRight className="cursor-pointer" />
      </div>

      <div className="bg-blue-100/80 p-6 rounded-xl dark:bg-slate-700">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="font-poppin font-medium">Meeting with VP</h1>
            <p className="font-raleway text-gray-400 text-sm">
              Today . 10:30-11:30pm
            </p>
          </div>
          <BsThreeDots className="cursor-pointer" />
        </div>

        <div className="inline-block font-raleway font-medium bg-white px-4 py-1.5 mt-6 rounded-3xl dark:bg-slate-800">
          <p className="flex items-center gap-2">
            <SiGooglemeet className="text-red-500" />
            Google Meet
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard4;
