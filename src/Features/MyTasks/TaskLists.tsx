import { useTasks } from "../../services/useTasks";
import Spinner from "../../ui/Spinner";
import TableHeader from "../../ui/TableHeader";
import TableRows from "../../ui/TableRows";
import { motion } from "motion/react";
import type { tasktype } from "../../utilities/type";

function TaskLists({ tasks }: { tasks?: tasktype[] }) {
  const { isLoading } = useTasks();
  return (
    <motion.section
      className="bg-white mt-8  p-6 rounded-lg dark:bg-slate-800 dark:text-slate-100"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {isLoading && <Spinner />}
      {!isLoading && <TableHeader tasks={tasks} />}
      {!isLoading && <TableRows tasks={tasks} />}
    </motion.section>
  );
}

export default TaskLists;
