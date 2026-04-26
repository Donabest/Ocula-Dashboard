import { LiveCountDown, ReminderCountDown } from "../utilities/TimeDiff";
import type { schedule } from "../utilities/type";

type prop = {
  remind: schedule;
};
function TodayReminderList({ remind }: prop) {
  return (
    <div className="flex justify-between items-center gap-3 py-3 border-b-2 border-b-gray-300 dark:border-b-slate-500 ">
      <h2 className="font-medium text-black/80 dark:text-slate-300 ">
        {remind.EventTitle}
      </h2>
      <div className="flex justify-center items-center gap-2 ">
        <span
          className={`${ReminderCountDown(remind) === "Time reached" ? "text-red-400" : ReminderCountDown(remind) === "Upcomming" ? "text-emerald-300" : "text-gray-400"} `}
        >
          {LiveCountDown(remind)}
        </span>
      </div>
    </div>
  );
}

export default TodayReminderList;
