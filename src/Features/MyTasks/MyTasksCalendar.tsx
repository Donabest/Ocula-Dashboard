import type { ActiveProp } from "../../utilities/type";
import ScheduleTaskItem from "../../ui/ScheduleTaskItem";
import CalenderItem from "../../ui/CalendarItem";
import { useCalendar } from "../../Context/useCalender";
import NoScheduleTask from "../../ui/NoScheduleTask";

function MyTasksCalendar({ active }: ActiveProp) {
  const { selectDayScheduleTask, setSelectDay, selectDay } = useCalendar();

  return (
    <>
      {active === "Calendar" && (
        <section className="grid grid-cols-2 gap-4 mt-8 font-raleway font-medium text-gray-500 bg-white p-6 rounded-lg  dark:bg-slate-800 ">
          <CalenderItem set={setSelectDay} />

          <div className=" border-l border-l-gray-300 pl-6 dark:border-l-slate-700">
            {selectDayScheduleTask.length ? (
              <h1 className="font-medium pb-3 dark:text-slate-400">
                Task for {selectDay}
              </h1>
            ) : (
              <NoScheduleTask />
            )}
            <div className="space-y-4">
              {selectDayScheduleTask.map((schTask, index) => (
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
