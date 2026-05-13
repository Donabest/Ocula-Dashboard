import { useEffect, useState } from "react";
import CalenderItem from "../../ui/CalendarItem";
import PageHeader from "../../ui/PageHeader";
import { format } from "date-fns";
import { useCalendar } from "../../Context/useCalender";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CalendarBox from "./CalendarBox";
import AddEvent from "../../ui/AddEvent";

function CalendarLayout() {
  const {
    setCurrentDate,
    currentDate,
    handleNextDay,
    handlePrevDay,
    selectDay,
    setSelectDay,
  } = useCalendar();

  const [openSchedule, setOpenSchedule] = useState<boolean>();

  useEffect(() => {
    if (selectDay) {
      setCurrentDate(new Date(selectDay));
    }
  }, [selectDay, setCurrentDate]);

  function handleCloseSchedule() {
    setOpenSchedule(false);
  }
  return (
    <section className="w-full max-w-8xl px-4 pb-10 pt-24 dark:text-slate-400 sm:px-6 lg:px-10 lg:pt-25">
      <PageHeader
        title="Tasks Calender"
        description="Plan,veiw,track,and organize your schedule."
      />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-5">
        <div className="flex items-center gap-4 bg-gray-200 px-4 py-2 rounded-lg dark:bg-slate-800">
          <span className="cursor-pointer " onClick={() => handlePrevDay(1)}>
            <MdKeyboardArrowLeft />
          </span>
          <h1 className="font-medium">{format(currentDate, "MMM dd yyy")}</h1>
          <span className="cursor-pointer" onClick={() => handleNextDay(1)}>
            <MdKeyboardArrowRight />
          </span>
        </div>
        <button
          className="flex gap-2 items-center justify-center bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 active:scale-101"
          onClick={() => setOpenSchedule(true)}
        >
          <span>+</span> Add Schedule
        </button>
      </div>

      <div className="flex flex-col gap-5 mt-7 p-3 border border-gray-200 rounded-3xl dark:border-slate-700 sm:p-5 xl:flex-row">
        <CalendarBox />
        <section className="w-full p-3 border border-gray-200 rounded-lg dark:border-slate-700 xl:w-80 xl:shrink-0">
          <CalenderItem set={setSelectDay} />
        </section>
      </div>

      {openSchedule && <AddEvent handler={handleCloseSchedule} />}
    </section>
  );
}

export default CalendarLayout;
