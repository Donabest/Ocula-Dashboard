import { format } from "date-fns";
import { parseTime } from "../utilities/TimeParse";
import { TiGroupOutline } from "react-icons/ti";
import type { schedule } from "../utilities/type";

interface taskProp {
  task: schedule;
  WeekDate: string[];
}

function CalendarTaskBlock({ task, WeekDate }: taskProp) {
  const [remind, remindTime] = task.Reminder.split(" ");

  const hourHeight = 120 / 4;
  const startInMinutes = parseTime(task.StartTime);
  const endInMinutes = parseTime(task.EndTime);

  const top = (startInMinutes / 60) * hourHeight;
  const height = ((endInMinutes - startInMinutes) / 60) * hourHeight;

  const index = WeekDate.findIndex(
    (day) => day === format(new Date(task.Date), "eee dd"),
  );

  if (index === -1) return;

  const left = `${index * 20}%`;

  const isMedium = height > 50;
  const isSmall = height >= 40;
  return (
    <div
      className="absolute bg-blue-200 rounded-lg text-xs p-2 cursor-pointer text-start"
      style={{ top: `${top}px`, height: `${height}px`, left, width: "20%" }}
    >
      <h1 className="font-medium pb-1.5">{task.EventTitle}</h1>
      {isSmall && (
        <div className=" flex flex-col space-y-1.5 items-start justify-center ">
          {isMedium && (
            <h4 className="flex justify-center items-start gap-1.5 p-1 bg-white/80 rounded-xl dark:bg-slate-700 dark:border dark:border-slate-400 ">
              <TiGroupOutline className="text-red-600" /> {task.Meet}
            </h4>
          )}
          <p className="text-gray-600">
            {task.StartTime}-{task.EndTime}
          </p>
        </div>
      )}
    </div>
  );
}

export default CalendarTaskBlock;
