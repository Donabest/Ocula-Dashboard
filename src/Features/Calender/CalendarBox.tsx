import { format } from "date-fns";
import { useCalendar } from "../../Context/useCalender";
import CalendarTaskBlock from "../../ui/CalendarTaskBlock";
import CalendarDetails from "../../ui/CalendarDetails";
import type { schedule } from "../../utilities/type";
import { useEffect, useState } from "react";

const TIME: string[] = [
  "12:00 AM",
  "4:00 AM",
  "8:00 AM",
  "12:00 PM",
  "4:00 PM",
  "8:00 PM",
];

function CalendarBox() {
  const { days, schedules, index } = useCalendar();
  const [visibleDays, setVisibleDays] = useState(5);
  const First5DaysArray = [...days];

  useEffect(() => {
    function updateVisibleDays() {
      if (window.innerWidth < 640) {
        setVisibleDays(2);
      } else if (window.innerWidth < 1024) {
        setVisibleDays(3);
      } else {
        setVisibleDays(5);
      }
    }

    updateVisibleDays();
    window.addEventListener("resize", updateVisibleDays);

    return () => window.removeEventListener("resize", updateVisibleDays);
  }, []);

  const WEEKDAYS = First5DaysArray.slice(index, index + visibleDays).map((day) =>
    format(day, "EEE dd"),
  );
  const [selectedSchedule, setSelectedSchedule] = useState<schedule | null>(
    null,
  );
  return (
    <section className="min-w-0 flex-1">
      <div className="flex items-start justify-center text-center mt-3">
        <div className="shrink-0">
          <h1 className="w-16 p-3 text-sm font-normal text-gray-500 bg-gray-200 border border-slate-300 rounded-l-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 sm:w-25 sm:text-base">
            Time
          </h1>
          <div className=" border border-gray-200 dark:border-slate-800">
            {TIME.map((time, index) => (
              <div className="w-full h-30 pt-5 text-xs sm:text-base" key={index}>
                {time}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative min-w-0">
          <div
            className="grid text-gray-500 bg-gray-200 dark:bg-slate-800 dark:text-slate-400"
            style={{
              gridTemplateColumns: `repeat(${WEEKDAYS.length}, minmax(0, 1fr))`,
            }}
          >
            {WEEKDAYS.map((day, index) => (
              <div
                key={index}
                className="items-center p-2 text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 w-full text-center sm:p-3 sm:text-base"
              >
                {day}
              </div>
            ))}
          </div>
          {/* Box */}
          {TIME.map((_, i) => (
            <div key={i}>
              <div
                className="grid"
                style={{
                  gridTemplateColumns: `repeat(${WEEKDAYS.length}, minmax(0, 1fr))`,
                }}
              >
                {WEEKDAYS.map((_, i) => (
                  <div
                    className="relative border h-30 border-gray-200 dark:border-slate-800"
                    key={i}
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="absolute inset-0">
            {schedules.map((task, i) => (
              <CalendarTaskBlock
                task={task}
                WeekDate={WEEKDAYS}
                key={i}
                onClick={setSelectedSchedule}
              />
            ))}
          </div>
          {selectedSchedule && (
            <CalendarDetails scheduleDetails={selectedSchedule} />
          )}
        </div>
      </div>
    </section>
  );
}

export default CalendarBox;
