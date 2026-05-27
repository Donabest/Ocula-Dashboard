import { useCalendar } from "../Context/useCalender";
import { format, isFuture } from "date-fns";
import ScheduleNow from "./ScheduleNow";

function NoScheduleTask() {
  const Today = format(new Date(), "MMM dd yyyy");
  const { selectDay } = useCalendar();
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4 ">
      <h1 className="font-[530] text-gray-400 dark:text-slate-400">
        {selectDay === Today
          ? "No task schedule for Today"
          : `No task is schedule for ${selectDay}`}
      </h1>

      {isFuture(selectDay) && <ScheduleNow />}
    </div>
  );
}

export default NoScheduleTask;
