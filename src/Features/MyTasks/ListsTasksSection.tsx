import { motion } from "motion/react";

import type { ActiveProp } from "../../utilities/type";
import InprogressTaskList from "../../ui/InprogressTaskList";
import TodoTaskList from "../../ui/TodoTaskList";
import UpcommingTaskList from "../../ui/UpcommingTaskList";
import CompletedTaskList from "../../ui/CompletedTaskList";

function ListsTasksSection({ active }: ActiveProp) {
  return (
    <>
      {active === "List" && (
        <motion.section
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <InprogressTaskList />
          <TodoTaskList />
          <UpcommingTaskList />
          <CompletedTaskList />
        </motion.section>
      )}
    </>
  );
}

export default ListsTasksSection;
