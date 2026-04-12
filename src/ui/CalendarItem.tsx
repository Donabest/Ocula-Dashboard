import { addMonths, format, subMonths } from "date-fns";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useCalendar } from "../Context/useCalender";

interface MyCalenderProp {
  set: React.Dispatch<React.SetStateAction<string>>;
  hasTask: string[];
}

function CalenderItem({ set, hasTask }: MyCalenderProp) {
  const { currentDate, setCurrentDate, WEEKDAYS, days, emptyDays } =
    useCalendar();

  return (
    <div className=" text-center ">
      <div className="flex justify-between items-center text-center  mb-6">
        <h3 className="font-raleway font-medium text-gray-700 dark:text-slate-300">
          {format(currentDate, "MMM yyyy")}
        </h3>
        <div className="flex items-center gap-4">
          <span
            className="cursor-pointer text-gray-400 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-100"
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          >
            <MdKeyboardArrowLeft />
          </span>
          <span
            className="cursor-pointer text-gray-400 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-100"
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          >
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-7 items-center dark:text-slate-400">
        {WEEKDAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-4 items-center mt-4 ">
        {emptyDays.map((_, i) => (
          <div key={i} />
        ))}
        {days.map((day) => (
          <div
            key={day.toISOString()}
            className={`cursor-pointer   rounded-full`}
            onClick={() => set(format(day, "MMM d, yyyy"))}
          >
            <span
              className={`${hasTask?.includes(format(day, "MMM d, yyyy")) && "px-3 py-2 bg-blue-700 text-white rounded-full text-center hover:bg-blue-600"} dark:hover:text-white`}
            >
              {format(day, "d")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalenderItem;
