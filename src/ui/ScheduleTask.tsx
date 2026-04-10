import { BsThreeDots } from "react-icons/bs";
import { motion } from "motion/react";

import ScheduleTaskItem from "./ScheduleTaskItem";
import type { schedule } from "../utilities/type";

const schedule: schedule[] = [
  {
    title: "Sprinting Planning",
    priority: "Starting soon",
    meet: "Zoom meeting",
    time: "05:00 PM - 06:00 PM",
  },
  {
    title: "Design Review",
    priority: "Schedule",
    meet: "Google meeting",
    time: "01:00 PM - 02:00 PM",
  },
];

function ScheduleTask() {
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

      {schedule.map((schTask, index) => (
        <ScheduleTaskItem task={schTask} detail={true} key={index} />
      ))}
    </motion.section>
  );
}

export default ScheduleTask;
