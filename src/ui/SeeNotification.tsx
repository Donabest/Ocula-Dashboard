import { AnimatePresence, motion } from "motion/react";
import { useCalendar } from "../Context/useCalender";
import ReminderList from "./ReminderList";
import { useNotificationDismissed } from "../Features/Calender/useNotificationDismissed";

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
        className="fixed right-4 left-4 top-18 z-99 max-h-[70vh] overflow-y-auto hide-scrollbar rounded-lg border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-lg dark:bg-black/80 dark:border-white/9 sm:left-auto sm:right-8 sm:w-[min(40rem,calc(100vw-4rem))] sm:px-6 lg:top-16"
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
        <div className="max-h-[calc(70vh-1.5rem)] overflow-y-auto hide-scrollbar">
          {reminderSchedules.map((task, i) => (
            <ReminderList
              remind={task}
              key={i}
              onDismiss={handleDismiss}
              dismissing={isDismissing}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SeeNotification;
