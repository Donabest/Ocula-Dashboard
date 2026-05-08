import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import type { status } from "../utilities/type";
import useClickOutSide from "../hooks/useClickOutSide";
import { useUpdateStatus } from "../Features/MyTasks/useUpdateStatus";

const StatusBg: Record<status, string> = {
  Inprogress: "bg-green-300",
  Todo: "bg-gray-200",
  Completed: "bg-blue-300",
};

const TaskStatus: status[] = ["Inprogress", "Todo", "Completed"];
function StatusToggleMenu({
  value,
  handler,
  id,
}: {
  value: string;
  handler: () => void;
  id: number;
}) {
  const [isChecked, setIsChecked] = useState<string>(value);
  const { ref } = useClickOutSide(handler);
  const { updateStatus, isPending } = useUpdateStatus();

  function handleStatusChange(id: number, newStatus: status) {
    updateStatus({ id, newStatus });
  }
  return (
    <AnimatePresence>
      <motion.div
        className="absolute top-7 mt-2 left-8 z-1 bg-white/2 backdrop-blur-lg w-70 space-y-6 p-4 border border-black/8 shadow-2xl rounded-xl dark:-top-38"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 1 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ ease: "easeInOut" }}
        ref={ref}
      >
        {TaskStatus.map((status, i) => (
          <div
            key={i}
            className="flex justify-between items-center gap-2  cursor-pointer"
            onClick={() => setIsChecked(status)}
          >
            <div className="flex items-center gap-2 col-span-2 ">
              <span className={`${StatusBg[status]}  p-1.5 rounded-sm`}></span>
              <p
                className="uppercase font-medium"
                onClick={() => handleStatusChange(id, status)}
              >
                {status}
              </p>
            </div>
            <span>{isChecked === status && <IoMdCheckmark />}</span>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default StatusToggleMenu;
