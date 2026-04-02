import { motion } from "motion/react";

import type { ActiveProp } from "../../utilities/type";
import CompletedTaskList from "./CompletedTaskList";
import InprogressTaskList from "./InprogressTaskList";
import TodoTaskList from "./TodoTaskList";
import UpcommingTaskList from "./UpcommingTaskList";

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
