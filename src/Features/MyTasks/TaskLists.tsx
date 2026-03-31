import TableHeader from "../../ui/TableHeader";
import TableRows from "../../ui/TableRows";
import { motion } from "motion/react";

function TaskLists() {
  return (
    <motion.div
      className="bg-white mt-8  p-6 rounded-lg dark:bg-slate-800 dark:text-slate-100"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <TableHeader />
      <TableRows />
    </motion.div>
  );
}

export default TaskLists;
