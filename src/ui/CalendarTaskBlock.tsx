import { format } from "date-fns";
import { parseTime, parseTimeToLocal } from "../utilities/TimeParse";
import { TiGroupOutline } from "react-icons/ti";
import type { schedule } from "../utilities/type";
import { useCalendar } from "../Context/useCalender";

interface taskProp {
  task: schedule;
  WeekDate: string[];
  onClick?: React.Dispatch<React.SetStateAction<schedule | null>>;
}

function CalendarTaskBlock({ task, WeekDate, onClick }: taskProp) {
  const { setIsOpen } = useCalendar();
  const handleClick = (task: schedule) => {
    setIsOpen(true);
    onClick?.(task);
  };

  const hourHeight = 120 / 4;
  const formatStartInMinutes = parseTimeToLocal(task.startTime);
  const formatEndInMinutes = parseTimeToLocal(task.endTime);
  const startInMinutes = parseTime(formatStartInMinutes);
  const endInMinutes = parseTime(formatEndInMinutes);

  const top = (startInMinutes / 60) * hourHeight;
  const height = ((endInMinutes - startInMinutes) / 60) * hourHeight;

  const index = WeekDate.findIndex(
    (day) => day === format(new Date(task.date), "eee dd"),
  );

  if (index === -1) return;

  const left = `${index * 20}%`;

  const isMedium = height > 70;
  const isSmall = height >= 50;

  return (
    <div
      className="absolute bg-gray-200 rounded-lg text-xs cursor-pointer p-2 text-start dark:bg-slate-800 dark:text-slate-300"
      style={{ top: `${top}px`, height: `${height}px`, left, width: "20%" }}
      onClick={() => handleClick(task)}
    >
      <h1 className="font-medium pb-1.5 ">{task.eventTitle}</h1>
      {isSmall && (
        <div className=" flex flex-col space-y-1.5 items-start justify-center ">
          {isMedium && (
            <h4 className="flex justify-center items-start text-ceter gap-1.5 p-1 bg-white/80 rounded-xl dark:bg-slate-700 dark:border dark:border-slate-400 ">
              <TiGroupOutline className="text-red-600" /> {task.meet}
            </h4>
          )}
          <p className="text-gray-600 dark:text-slate-400 text-center ">
            {parseTimeToLocal(task.startTime)}-{parseTimeToLocal(task.endTime)}
          </p>
        </div>
      )}
    </div>
  );
}

export default CalendarTaskBlock;
