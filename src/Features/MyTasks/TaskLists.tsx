import { useActiveTasks } from "../../hooks/useActiveTasks";
import Spinner from "../../ui/Spinner";
import TableHeader from "../../ui/TableHeader";
import TableRows from "../../ui/TableRows";
import { motion } from "motion/react";

function TaskLists() {
  const { isLoading } = useActiveTasks();
  return (
    <motion.section
      className="bg-white mt-8 overflow-x-auto hide-scrollbar p-4 rounded-lg dark:bg-slate-800 dark:text-slate-100 sm:p-6"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {isLoading && <Spinner />}
      {!isLoading && <TableHeader />}
      {!isLoading && <TableRows />}
    </motion.section>
  );
}

export default TaskLists;
