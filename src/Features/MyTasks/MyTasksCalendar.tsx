import type { ActiveProp } from "../../utilities/type";
import { useState } from "react";
import { format, isFuture } from "date-fns";
import { Link } from "react-router-dom";
import ScheduleTaskItem from "../../ui/ScheduleTaskItem";
import CalenderItem from "../../ui/CalendarItem";

interface schedule {
  date: string;
  title: string;
  priority: string;
  meet: string;
  time: string;
}
const schedules: schedule[] = [
  {
    date: "Apr 8, 2026",
    title: "Sprinting Planning",
    priority: "Starting soon",
    meet: "Zoom meeting",
    time: "05:00 PM - 06:00 PM",
  },
  {
    date: "Apr 10, 2026",
    title: "Design Review",
    priority: "Schedule",
    meet: "Google meeting",
    time: "01:00 PM - 02:00 PM",
  },
];

function MyTasksCalendar({ active }: ActiveProp) {
  const Today = format(new Date(), "MMM d, yyyy");
  const [selectDate, setSelectDate] = useState<string>(Today);

  const scheduleTask = schedules.filter((task) => task.date === selectDate);
  const hasTask = schedules.map((taskDate) =>
    format(new Date(taskDate.date), "MMM d, yyyy"),
  );

  return (
    <>
      {active === "Calendar" && (
        <section className="grid grid-cols-2 gap-4 mt-8 font-raleway font-medium text-gray-500 bg-white p-6 rounded-lg  dark:bg-slate-800 ">
          <CalenderItem set={setSelectDate} hasTask={hasTask} />

          <div className=" border-l border-l-gray-300 pl-6 dark:border-l-slate-700">
            {scheduleTask.length ? (
              <h1 className="font-medium pb-3 dark:text-slate-400">
                Task for {selectDate}
              </h1>
            ) : (
              <div className="flex flex-col justify-center items-center h-full space-y-4 ">
                <h1 className="font-[530] text-gray-400 dark:text-slate-400">
                  {selectDate === Today
                    ? "No task schedule for Today"
                    : `No task is schedule for ${selectDate}`}
                </h1>

                {isFuture(selectDate) && (
                  <Link
                    to="/Calender"
                    className="text-sm bg-blue-700 text-white px-6 py-1.5 rounded-lg cursor-pointer transition-all  hover:bg-blue-800"
                  >
                    Schedule Task Now
                  </Link>
                )}
              </div>
            )}
            <div className="space-y-2">
              {scheduleTask.map((schTask, index) => (
                <ScheduleTaskItem task={schTask} detail={false} key={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default MyTasksCalendar;
