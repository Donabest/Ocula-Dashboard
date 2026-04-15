import { BsThreeDots } from "react-icons/bs";
import { motion } from "motion/react";

import ScheduleTaskItem from "./ScheduleTaskItem";
import { useCalendar } from "../Context/useCalender";

function ScheduleTask() {
  const { schedules } = useCalendar();
  const FirstTwoSchedules = schedules.slice(0, 2);
  return (
    <motion.section
      className="flex flex-col bg-white p-6 space-y-4 rounded-lg dark:bg-slate-800 dark:text-slate-100 "
      initial={{ x: 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between font-poppin font-medium ">
        Schedule
        <BsThreeDots className="cursor-pointer" />
      </div>

      {FirstTwoSchedules.map((schTask, index) => (
        <ScheduleTaskItem task={schTask} detail={true} key={index} />
      ))}
    </motion.section>
  );
}

export default ScheduleTask;
