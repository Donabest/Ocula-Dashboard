import { AnimatePresence, motion } from "motion/react";
import { useCalendar } from "../Context/useCalender";
import ReminderList from "./ReminderList";

function SeeNotification() {
  const { schedules } = useCalendar();
  return (
    <AnimatePresence>
      <motion.div
        className="absolute right-8 w-160 top-15 h-60 z-99 px-8 py-2 bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{
          ease: "easeInOut",
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {schedules.map((task, i) => (
          <ReminderList remind={task} key={i} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default SeeNotification;
