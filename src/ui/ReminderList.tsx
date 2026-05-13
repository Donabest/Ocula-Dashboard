import { animate, useMotionValue, useTransform, motion } from "motion/react";
import { LiveCountDown, ReminderCountDown } from "../utilities/TimeDiff";
import type { schedule } from "../utilities/type";
import { PiTrashLight } from "react-icons/pi";
import { FcCancel } from "react-icons/fc";

type prop = {
  remind: schedule;
  onDismiss?: (id: number) => void;
  dismissing?: boolean;
};
function ReminderList({ remind, onDismiss, dismissing }: prop) {
  const x = useMotionValue(0);
  const trashOpacity = useTransform(x, [-80, -30], [1, 0]);
  const trashScale = useTransform(x, [-80, -30], [1, 0.5]);

  const colorCond =
    ReminderCountDown(remind) === "overdue"
      ? "text-red-400"
      : ReminderCountDown(remind) === "Upcomming"
        ? "text-blue-500"
        : ReminderCountDown(remind)?.includes("Ongoing")
          ? "text-emerald-500"
          : "text-yellow-500 dark:text-yellow-600";

  function handleDragEnd() {
    if (x.get() < -60) {
      animate(x, -80, { type: "spring", stiffness: 500, damping: 30 });
    } else {
      animate(x, 0, { type: "spring", stiffness: 500, damping: 30 });
    }
  }
  return (
    <div className="relative overflow-hidden">
      {/* Trash icon behind */}
      {onDismiss && (
        <motion.div
          className="absolute right-0 top-0 h-full flex items-center justify-center w-16"
          style={{ opacity: trashOpacity, scale: trashScale }}
        >
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full text-red-600 cursor-pointer"
            onClick={() => onDismiss(remind.id)}
            disabled={dismissing}
          >
            {dismissing ? <FcCancel size={20} /> : <PiTrashLight size={20} />}
          </button>
        </motion.div>
      )}

      {/* Draggable row */}
      <motion.div
        className="flex tems-center justify-between gap-2 py-3 border-b-2 border-b-gray-300 bg-white/80 dark:border-b-slate-500 dark:bg-transparent relative z-10  "
        drag={onDismiss ? "x" : false}
        dragConstraints={{ left: onDismiss ? -80 : 0, right: 0 }}
        dragElastic={{ left: 0.5, right: 0 }}
        onDragEnd={handleDragEnd}
        style={{ x }}
      >
        <h2 className="min-w-0 wrap-break-word font-medium text-black/80 dark:text-slate-300">
          {remind.eventTitle}
        </h2>
        <div className="flex shrink-0 items-center gap-2 sm:justify-center">
          <span className={colorCond}>{LiveCountDown(remind)}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default ReminderList;
