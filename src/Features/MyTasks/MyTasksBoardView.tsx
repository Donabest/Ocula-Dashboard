import { motion } from "motion/react";
import type { ActiveProp } from "../../utilities/type";
import CompletedTaskBoard from "../../ui/CompletedTaskBoard";
import InprogressTaskBoard from "../../ui/InprogressTaskBoard";
import TodoTaskBoard from "../../ui/TodoTaskBoard";
import UpcommingTaskBoard from "../../ui/UpcommingTaskBoard";

function MyTasksBoardView({ active }: ActiveProp) {
  return (
    <>
      {active === "Board" && (
        <motion.div
          className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 xl:grid-cols-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <InprogressTaskBoard />
          <TodoTaskBoard />
          <UpcommingTaskBoard />
          <CompletedTaskBoard />
        </motion.div>
      )}
    </>
  );
}

export default MyTasksBoardView;
