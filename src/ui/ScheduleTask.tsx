import { BsThreeDots } from "react-icons/bs";
import { motion } from "motion/react";

import ScheduleTaskItem from "./ScheduleTaskItem";
import { useCalendar } from "../Context/useCalender";
import { useState } from "react";
import type { schedule } from "../utilities/type";
import CalendarDetails from "./CalendarDetails";
import Spinner from "./Spinner";
import ScheduleNow from "./ScheduleNow";

function ScheduleTask() {
  const { schedules, isLoading } = useCalendar();
  const [selectedSchedule, setSelectedSchedule] = useState<schedule | null>(
    null,
  );
  const LastTwoSchdule = schedules.slice(-2);
  return (
    <motion.section
      className="flex min-w-0 flex-col bg-white p-4 space-y-4 rounded-lg dark:bg-slate-800 dark:text-slate-100 sm:p-6"
      initial={{ x: 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between font-poppin font-medium ">
        Schedule
        <BsThreeDots className="cursor-pointer" />
      </div>

      {!LastTwoSchdule.length && (
        <div className="flex flex-col justify-center items-center h-full space-y-4">
          <p> No Schedule Task Yet, Schedule Now to get Started : )</p>
          <ScheduleNow />
        </div>
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        LastTwoSchdule.map((schTask, index) => (
          <ScheduleTaskItem
            task={schTask}
            detail={true}
            key={index}
            setSelect={setSelectedSchedule}
          />
        ))
      )}
      {selectedSchedule && (
        <CalendarDetails scheduleDetails={selectedSchedule} />
      )}
    </motion.section>
  );
}

export default ScheduleTask;
