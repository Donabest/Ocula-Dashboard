import { useEffect, useState } from "react";
import CalenderItem from "../../ui/CalendarItem";
import PageHeader from "../../ui/PageHeader";
import { addDays, format, subDays } from "date-fns";
import { useCalendar } from "../../Context/useCalender";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CalendarTaskBlock from "../../ui/CalendarTaskBlock";

interface schedule {
  date: number;
  title: string;
  priority: string;
  meet: string;
  start: string;
  end: string;
}

const schedules: schedule[] = [
  {
    date: 1,
    title: "Sprinting Planning",
    priority: "Starting soon",
    meet: "Zoom meeting",
    start: "05:00 PM",
    end: "06:00 PM",
  },
  {
    date: 2,
    title: "Design Review",
    priority: "Schedule",
    meet: "Google meeting",
    start: "01:00 PM ",
    end: "02:00 PM",
  },
  {
    date: 3,
    title: "Design Review",
    priority: "Starting Sonn",
    meet: "Google meeting",
    start: "01:00 PM",
    end: " 02:00 PM",
  },
  {
    date: 4,
    title: "Design Review",
    priority: "Schedule",
    meet: "Google meeting",
    start: "01:00 PM ",
    end: " 02:00 PM",
  },
];

const TIME: string[] = [
  "12:00 AM",
  "4:00 AM",
  "8:00 AM",
  "12:00 PM",
  "4:00 PM",
  "8:00 PM",
  "12:00 PM",
];

function CalendarLayout() {
  const Today = format(new Date(), "MMM, yyyy");
  const [selectDate, setSelectDate] = useState<string>(Today);

  const { days, setCurrentDate, currentDate } = useCalendar();
  const hasTask = schedules.map((taskDate) =>
    format(new Date(taskDate.date), "MMM d, yyyy"),
  );

  const First5DaysArray = [...days];

  const index = days.findIndex(
    (day) => format(day, "MMM dd yyyy") === format(currentDate, "MMM dd yyyy"),
  );

  const WEEKDAYS = First5DaysArray.slice(index, index + 5).map((day) =>
    format(day, "EEE dd"),
  );

  useEffect(() => {
    if (selectDate) {
      setCurrentDate(new Date(selectDate));
    }
  }, [selectDate, setCurrentDate]);

  function handleNextMonth() {
    setCurrentDate(addDays(currentDate, 1));
  }

  function handlePrevMonth() {
    setCurrentDate(subDays(currentDate, 1));
  }

  return (
    <section className="pt-25 pb-10 px-10 max-w-8xl dark:text-slate-400">
      <PageHeader
        title="Tasks Calender"
        description="Plan,veiw,track,and organize your schedule."
      />

      <div className="flex justify-end items-center gap-5">
        <div className="flex items-center gap-4 bg-gray-200 px-4 py-2 rounded-lg">
          <span className="cursor-pointer " onClick={handlePrevMonth}>
            <MdKeyboardArrowLeft />
          </span>
          <h1 className="font-medium">{format(currentDate, "MMM dd yyy")}</h1>
          <span className="cursor-pointer" onClick={handleNextMonth}>
            <MdKeyboardArrowRight />
          </span>
        </div>
        <button className="flex gap-2 items-center justify-center bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 active:scale-101">
          <span>+</span> Add Schedule
        </button>
      </div>

      <div className="flex gap-5 mt-7 p-5 border border-gray-200 rounded-3xl dark:border-slate-700">
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
                {schedules.map((task) => (
                  <CalendarTaskBlock task={task} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-80 p-3 border border-gray-200 rounded-lg dark:border-slate-700">
          <CalenderItem set={setSelectDate} hasTask={hasTask} />
        </section>
      </div>
    </section>
  );
}

export default CalendarLayout;
