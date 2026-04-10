import { useState } from "react";
import CalenderItem from "../../ui/CalendarItem";
import PageHeader from "../../ui/PageHeader";
import { addMonths, format, subMonths } from "date-fns";
import { useCalendar } from "../../Context/useCalender";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
  {
    date: "Apr 20, 2026",
    title: "Design Review",
    priority: "Starting Sonn",
    meet: "Google meeting",
    time: "01:00 PM - 02:00 PM",
  },
  {
    date: "Apr 30, 2026",
    title: "Design Review",
    priority: "Schedule",
    meet: "Google meeting",
    time: "01:00 PM - 02:00 PM",
  },
];
function CalendarLayout() {
  const Today = format(new Date(), "MMM, yyyy");
  const [selectDate, setSelectDate] = useState<string>(Today);

  const { currentDate, setCurrentDate, WEEKDAYS, days, emptyDays } =
    useCalendar();
  const hasTask = schedules.map((taskDate) =>
    format(new Date(taskDate.date), "MMM d, yyyy"),
  );

  return (
    <section className="pt-25 pb-10 px-10 max-w-8xl">
      <PageHeader
        title="Tasks Calender"
        description="Plan,veiw,track,and organize your schedule."
      />

      <div className="flex gap-5 mt-7">
        <section className="flex-1">
          <div className="flex items-center gap-3 border border-gray-300 p-2 rounded-lg">
            <div className="flex items-center gap-4">
              <span
                className="cursor-pointer border px-3 py-2 rounded-lg border-gray-200"
                onClick={() => setCurrentDate(subMonths(currentDate, 1))}
              >
                <MdKeyboardArrowLeft />
              </span>
              <span
                className="cursor-pointer text-white bg-blue-700 px-3 py-2 rounded-lg hover:bg-blue-600 dark:text-slate-400 dark:hover:text-slate-100"
                onClick={() => setCurrentDate(addMonths(currentDate, 1))}
              >
                <MdKeyboardArrowRight />
              </span>
            </div>
            <h1 className="font-medium">{format(currentDate, "MMM yyyy")}</h1>
          </div>

          <div className="mx-6 mt-5">
            <div className="grid grid-cols-7 place-items-center py-3 font-normal text-gray-500 bg-gray-200 border border-slate-300 rounded-lg">
              {WEEKDAYS.map((day, index) => (
                <span key={index}>{day.toUpperCase()}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 place-items-center">
              {emptyDays.map((_, i) => (
                <div key={i} />
              ))}
              {days.map((day) => (
                <div
                  key={day.toISOString()}
                  className={`cursor-pointer border border-gray-200 p-3 w-30 h-30 rounded-lg`}
                >
                  <span>{format(day, "d")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-75">
          <CalenderItem set={setSelectDate} hasTask={hasTask} />
        </section>
      </div>
    </section>
  );
}

export default CalendarLayout;
