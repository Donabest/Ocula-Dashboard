import { Link } from "react-router-dom";
import { useCalendar } from "../Context/useCalender";
import { format, isFuture } from "date-fns";

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

      {isFuture(selectDay) && (
        <Link
          to="/Calender"
          className="text-sm bg-blue-700 text-white px-6 py-1.5 rounded-lg cursor-pointer transition-all  hover:bg-blue-800"
        >
          Schedule Task Now
        </Link>
      )}
    </div>
  );
}

export default NoScheduleTask;
