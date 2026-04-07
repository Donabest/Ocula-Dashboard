import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
  subMonths,
} from "date-fns";

import { useState } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

interface MyCalenderProp {
  set: React.Dispatch<React.SetStateAction<string | undefined>>;
  hasTask: string[];
}
function MyTasksCalenderItem({ set, hasTask }: MyCalenderProp) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const start = startOfMonth(currentDate);

  const end = endOfMonth(currentDate);
  const startDay = getDay(start);
  const emptyDays = Array.from({ length: startDay });

  const days = eachDayOfInterval({
    start,
    end,
  });

  return (
    <div>
      <div className=" text-center border-r border-r-gray-300 pr-6 ">
        <div className="flex justify-between items-center text-center  mb-6">
          <h3 className="font-raleway font-medium text-gray-700">
            {format(currentDate, "MMM yyyy")}
          </h3>
          <div className="flex items-center gap-4">
            <span
              className="cursor-pointer text-gray-400 hover:text-gray-800"
              onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            >
              <MdKeyboardArrowLeft />
            </span>
            <span
              className="cursor-pointer text-gray-400 hover:text-gray-800"
              onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            >
              <MdKeyboardArrowRight />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-7 items-center">
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
              className={`cursor-pointer  ${hasTask.includes(format(day, "MMM d, yyyy")) && "bg-blue-700 text-white hover:bg-blue-600"} rounded-full`}
              onClick={() => set(format(day, "MMM d, yyyy"))}
            >
              <span>{format(day, "d")}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTasksCalenderItem;
