import { CiClock1 } from "react-icons/ci";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Reminder: string[] = [
  "Access any new risks identified in the morning meeting",
  "outline key points for tomorrow's stand up meeting",
];

function DashboardCard5() {
  return (
    <div className="bg-white my-6 px-8 py-6 rounded-2xl dark:bg-slate-800 dark:text-white/90">
      <h1 className="flex items-center gap-2  font-medium text-black dark:text-white/90">
        <CiClock1 className="text-red-800 dark:text-red-600" />
        Reminders
      </h1>

      <div>
        <h1 className="flex items-center gap-2 font-poppin font-medium pt-3">
          <MdKeyboardArrowUp className="cursor-pointer" />
          Today <span className="text-gray-400 text-sm"> . 2</span>
        </h1>
        {Reminder.map((remind, index) => (
          <div
            className="flex justify-between items-center gap-3 py-3 border-b-2 border-b-gray-300 dark:border-b-slate-500 "
            key={index}
          >
            <h2 className="font-medium text-black/80 dark:text-slate-300 ">
              {remind}
            </h2>
            <div className="flex justify-center items-center gap-2 ">
              <HiOutlineBellAlert className="cursor-pointer" />
              <IoTrashBinOutline className="cursor-pointer" />
              <BsFillPatchCheckFill className="cursor-pointer text-indigo-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCard5;
