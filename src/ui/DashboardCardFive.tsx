import { CiClock1 } from "react-icons/ci";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useCalendar } from "../Context/useCalender";
import { format } from "date-fns";

function DashboardCardFive() {
  const { schedules } = useCalendar();
  const TodayReminders = schedules.filter(
    (sch) =>
      sch.Reminder !== "none" &&
      format(new Date(sch.Date), "MMM dd yyyy") ===
        format(new Date(), "MMM dd yyyy"),
  );

  return (
    <div className="bg-white my-6 px-8 py-6 rounded-2xl dark:bg-slate-800 dark:text-white/90">
      <h1 className="flex items-center gap-2  font-medium text-black dark:text-white/90">
        <CiClock1 className="text-red-800 dark:text-red-600" />
        Reminders
      </h1>

      <div>
        <h1 className="flex items-center gap-2 font-poppin font-medium pt-3">
          <MdKeyboardArrowUp className="cursor-pointer" />
          Today{" "}
          <span className="text-gray-400 text-sm">
            {" "}
            . {TodayReminders.length}
          </span>
        </h1>
        {TodayReminders.map((remind, index) => (
          <div
            className="flex justify-between items-center gap-3 py-3 border-b-2 border-b-gray-300 dark:border-b-slate-500 "
            key={index}
          >
            <h2 className="font-medium text-black/80 dark:text-slate-300 ">
              {remind.EventTitle}
            </h2>
            <div className="flex justify-center items-center gap-2 ">
              <span>12:02:01</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCardFive;
