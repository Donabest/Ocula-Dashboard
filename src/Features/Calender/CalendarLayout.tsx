import { useEffect } from "react";
import CalenderItem from "../../ui/CalendarItem";
import PageHeader from "../../ui/PageHeader";
import { format } from "date-fns";
import { useCalendar } from "../../Context/useCalender";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CalendarBox from "./CalendarBox";

function CalendarLayout() {
  const {
    setCurrentDate,
    currentDate,
    handleNextDay,
    handlePrevDay,
    selectDay,
    setSelectDay,
  } = useCalendar();

  useEffect(() => {
    if (selectDay) {
      setCurrentDate(new Date(selectDay));
    }
  }, [selectDay, setCurrentDate]);

  return (
    <section className="pt-25 pb-10 px-10 max-w-8xl dark:text-slate-400">
      <PageHeader
        title="Tasks Calender"
        description="Plan,veiw,track,and organize your schedule."
      />

      <div className="flex justify-end items-center gap-5">
        <div className="flex items-center gap-4 bg-gray-200 px-4 py-2 rounded-lg">
          <span className="cursor-pointer " onClick={() => handlePrevDay(1)}>
            <MdKeyboardArrowLeft />
          </span>
          <h1 className="font-medium">{format(currentDate, "MMM dd yyy")}</h1>
          <span className="cursor-pointer" onClick={() => handleNextDay(1)}>
            <MdKeyboardArrowRight />
          </span>
        </div>
        <button className="flex gap-2 items-center justify-center bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 active:scale-101">
          <span>+</span> Add Schedule
        </button>
      </div>

      <div className="flex gap-5 mt-7 p-5 border border-gray-200 rounded-3xl dark:border-slate-700">
        <CalendarBox />
        <section className="w-80 p-3 border border-gray-200 rounded-lg dark:border-slate-700">
          <CalenderItem set={setSelectDay} />
        </section>
      </div>
    </section>
  );
}

export default CalendarLayout;
