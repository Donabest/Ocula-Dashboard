import { SlCalender } from "react-icons/sl";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { SiGooglemeet } from "react-icons/si";
import { useCalendar } from "../Context/useCalender";
import { format, isPast } from "date-fns";
import TimeDiff from "../utilities/TimeDiff";
import NoScheduleTask from "./NoScheduleTask";

function DashboardCard4() {
  const {
    currentDate,
    days,
    handleNextDay,
    handlePrevDay,
    setSelectDay,
    hasTask,
    selectDayScheduleTask,
    index,
  } = useCalendar();

  const First7DaysArray = [...days];
  const daysArray = First7DaysArray.slice(index, index + 7).map((day) =>
    format(day, "MMM dd yyyy"),
  );

  return (
    <div className="bg-white mt-8 px-8 py-6 space-y-4 rounded-2xl dark:bg-slate-800 dark:text-white">
      <div className="flex justify-between items-center gap-5 font-poppin font-medium text-gray-600 dark:text-slate-300">
        <h1 className="flex items-center gap-2 ">
          <SlCalender className="text-blue-800 dark:text-blue-400" />
          Calendar
        </h1>
        <p className="flex items-center gap-2 ">{format(currentDate, "MMM")}</p>
      </div>

      <div className="flex justify-center items-center gap-10">
        <MdOutlineKeyboardArrowLeft
          className="cursor-pointer"
          onClick={() => handlePrevDay(4)}
        />
        <div className="flex items-center gap-8">
          {daysArray.map((day, index) => (
            <div
              className={`flex flex-col justify-center items-center text-gray-500 ${hasTask?.includes(format(day, "MMM dd yyyy")) ? "bg-blue-700 text-white px-2 py-1 rounded-lg " : ""} cursor-pointer dark:text-white/60`}
              key={index}
              onClick={() => setSelectDay(format(day, "MMM dd yyyy"))}
            >
              <span className="text-sm">{format(new Date(day), "eee")}</span>
              <p
                className={`font-raleway font-medium text-lg ${hasTask?.includes(format(day, "MMM dd yyyy")) && "text-white"} text-black dark:text-white`}
              >
                <span className={`${isPast(day) && "text-gray-400"}`}>
                  {format(new Date(day), "dd")}
                </span>
              </p>
            </div>
          ))}
        </div>
        <MdOutlineKeyboardArrowRight
          className="cursor-pointer"
          onClick={() => handleNextDay(4)}
        />
      </div>

      {selectDayScheduleTask.map((task, index) => (
        <div
          className="bg-blue-100/80 p-6 rounded-xl dark:bg-slate-700"
          key={index}
        >
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h1 className="font-poppin font-medium">{task.title}</h1>
              <div className="flex  items-center justify-start gap-2 font-raleway text-gray-400 text-[15px]  ">
                <span
                  className={`${TimeDiff(task.date)?.includes("days ago") && "bg-red-100 text-red-400"} px-2 py-0.5 bg-emerald-200 text-emerald-600 rounded-xl`}
                >
                  {TimeDiff(task.date)}
                </span>
                <p> {task.time}</p>
              </div>
            </div>
            <BsThreeDots className="cursor-pointer" />
          </div>

          <div className="inline-block font-raleway font-medium bg-white px-4 py-1.5 mt-6 rounded-3xl dark:bg-slate-800">
            <p className="flex items-center gap-2">
              <SiGooglemeet className="text-red-500" />
              {task.meet}
            </p>
          </div>
        </div>
      ))}

      {!selectDayScheduleTask.length && (
        <div className="bg-blue-100/80 p-4 rounded-lg">
          <NoScheduleTask />
        </div>
      )}
    </div>
  );
}

export default DashboardCard4;
