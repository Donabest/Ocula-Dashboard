import { motion } from "motion/react";
import type { ActiveProp, status } from "../../utilities/type";
import CompletedTaskBoard from "../../ui/CompletedTaskBoard";
import InprogressTaskBoard from "../../ui/InprogressTaskBoard";
import TodoTaskBoard from "../../ui/TodoTaskBoard";
import UpcommingTaskBoard from "../../ui/UpcommingTaskBoard";
import { DragDropProvider } from "@dnd-kit/react";
import { Droppable } from "../../hooks/Droppable";
import { useUpdateStatus } from "./useUpdateStatus";

const boardStatuses: status[] = ["Inprogress", "Todo", "Completed"];

function MyTasksBoardView({ active }: ActiveProp) {
  const { updateStatus } = useUpdateStatus();

  return (
    <>
      {active === "Board" && (
        <motion.div
          className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 xl:grid-cols-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <DragDropProvider
            onDragEnd={(event) => {
              if (event.canceled) return;

              const { source, target } = event.operation;
              const taskId = Number(source?.id);
              const newStatus = target?.id as status | undefined;

              if (
                !source ||
                !target ||
                !Number.isFinite(taskId) ||
                !newStatus ||
                !boardStatuses.includes(newStatus) ||
                source.data?.status === newStatus
              ) {
                return;
              }

              updateStatus({ id: taskId, newStatus });
            }}
          >
            <Droppable id="Inprogress">
              <InprogressTaskBoard />
            </Droppable>
            <Droppable id="Todo">
              <TodoTaskBoard />
            </Droppable>
            <Droppable id="Completed">
              <CompletedTaskBoard />
            </Droppable>
          </DragDropProvider>
          <UpcommingTaskBoard />
        </motion.div>
      )}
    </>
  );
}

export default MyTasksBoardView;
