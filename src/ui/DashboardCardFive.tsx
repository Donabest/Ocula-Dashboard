import { CiClock1 } from "react-icons/ci";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useCalendar } from "../Context/useCalender";
import { format } from "date-fns";
import ReminderList from "./ReminderList";
import { useState } from "react";

function DashboardCardFive() {
  const { schedules } = useCalendar();
  const TodayReminders = schedules.filter(
    (sch) =>
      sch.Reminder !== "none" &&
      format(new Date(sch.Date), "MMM dd yyyy") ===
        format(new Date(), "MMM dd yyyy"),
  );
  const [showRemind, setShowRemind] = useState<boolean>(true);

  return (
    <div className="bg-white my-6 px-8 py-6 rounded-2xl dark:bg-slate-800 dark:text-white/90">
      <h1 className="flex items-center gap-2  font-medium text-black dark:text-white/90">
        <CiClock1 className="text-red-800 dark:text-red-600" />
        Reminders
      </h1>

      <div>
        <h1 className="flex items-center gap-2 font-poppin font-medium pt-3">
          <span
            onClick={() => setShowRemind((show) => !show)}
            className="cursor-pointer"
          >
            {showRemind ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
          Today
          <span className="text-gray-400 text-sm">
            . {TodayReminders.length}
          </span>
        </h1>

        {showRemind &&
          (TodayReminders.length ? (
            TodayReminders.map((remind, index) => (
              <ReminderList remind={remind} key={index} />
            ))
          ) : (
            <span className="text-gray-400 ml-7 pt-3 flex text-start">
              You don't have any reminder Today,check notification for all
              Remind Schedule
            </span>
          ))}
      </div>
    </div>
  );
}

export default DashboardCardFive;
