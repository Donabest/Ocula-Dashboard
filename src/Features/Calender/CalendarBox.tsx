import { format } from "date-fns";
import { useCalendar } from "../../Context/useCalender";
import CalendarTaskBlock from "../../ui/CalendarTaskBlock";

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
  const First5DaysArray = [...days];

  const WEEKDAYS = First5DaysArray.slice(index, index + 5).map((day) =>
    format(day, "EEE dd"),
  );

  return (
    <section className="flex-1">
      <div className="flex items-start justify-center text-center mt-3 ">
        <div className="">
          <h1 className="w-25 p-3 font-normal text-gray-500 bg-gray-200 border border-slate-300 rounded-l-lg dark:border-slate-700 dark:bg-slate-800">
            Time
          </h1>
          <div className=" border border-gray-200 ">
            {TIME.map((time, index) => (
              <div className=" w-full h-30 pt-5" key={index}>
                {time}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="grid grid-cols-5 text-gray-500  bg-gray-200 dark:bg-slate-800">
            {WEEKDAYS.map((day, index) => (
              <div
                key={index}
                className=" items-center p-3 border border-slate-300  dark:border-slate-700 dark:bg-slate-800 w-full text-center"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Box */}
          {TIME.map((_, i) => (
            <div key={i}>
              <div className="grid grid-cols-5">
                {WEEKDAYS.map((_, i) => (
                  <div
                    className="relative border h-30 border-gray-200"
                    key={i}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="absolute inset-0">
            {schedules.map((task, i) => (
              <CalendarTaskBlock task={task} WeekDate={WEEKDAYS} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarBox;
