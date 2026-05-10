import { AnimatePresence, motion } from "motion/react";
import { useCalendar } from "../Context/useCalender";
import ReminderList from "./ReminderList";
import { useNotificationDismissed } from "../Features/Calender/useNotificationDismissed";
import { FaRegFaceSmile } from "react-icons/fa6";

function SeeNotification() {
  const { schedules } = useCalendar();
  const { notificationDismissed, isDismissing } = useNotificationDismissed();
  const reminderSchedules = schedules.filter(
    (remind) =>
      remind.reminder !== "none" && remind.notificationDismissed === false,
  );

  function handleDismiss(id: number) {
    notificationDismissed(id);
  }
  if (!reminderSchedules.length) return;
  return (
    <AnimatePresence>
      <motion.div
        className="absolute right-8 w-160 top-15 h-60 z-99 px-8 py-3 bg-white/20 overflow-scroll backdrop-blur-lg border border-white/20 shadow-lg rounded-lg dark:bg-black/35 dark:border-white/9 hide-scrollbar"
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
        {reminderSchedules.map((task, i) => (
          <ReminderList
            remind={task}
            key={i}
            onDismiss={handleDismiss}
            dismissing={isDismissing}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default SeeNotification;
