import { format } from "date-fns";
import { parseTime } from "../utilities/TimeParse";
import { TiGroupOutline } from "react-icons/ti";
import type { schedule } from "../utilities/type";
import CalendarDetails from "./CalendarDetails";
import { useState } from "react";

interface taskProp {
  task: schedule;
  WeekDate: string[];
}

function CalendarTaskBlock({ task, WeekDate }: taskProp) {
  const [details, setDetails] = useState<schedule | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => setIsOpen(false);
  const handleClick = () => setIsOpen(true);

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

  const isMedium = height > 70;
  const isSmall = height >= 45;
  return (
    <>
      <div
        className="absolute bg-blue-200 rounded-lg text-xs p-2 cursor-pointer text-start"
        style={{ top: `${top}px`, height: `${height}px`, left, width: "20%" }}
        onClick={handleClick}
      >
        <h1 className="font-medium pb-1.5">{task.EventTitle}</h1>
        {isSmall && (
          <div className=" flex flex-col space-y-1.5 items-start justify-center ">
            {isMedium && (
              <h4 className="flex justify-center items-start text-ceter gap-1.5 p-1 bg-white/80 rounded-xl dark:bg-slate-700 dark:border dark:border-slate-400 ">
                <TiGroupOutline className="text-red-600" /> {task.Meet}
              </h4>
            )}
            <p className="text-gray-600">
              {task.StartTime}-{task.EndTime}
            </p>
          </div>
        )}
      </div>
      {isOpen && (
        <CalendarDetails scheduleDetails={task} Closehandler={handleClose} />
      )}
    </>
  );
}

export default CalendarTaskBlock;
