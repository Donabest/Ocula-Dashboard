import { motion } from "motion/react";

import AddNewTaskForm from "../../ui/AddNewTaskForm";
import { useState } from "react";
import DashboardCardOne from "../../ui/DashboardCardOne";
import DashboardCardTwo from "../../ui/DashboardCardTwo";
import DashboardCardThree from "../../ui/DashboardCardThree";
import DashboardCardFour from "../../ui/DashboardCardFour";
import DashboardCardFive from "../../ui/DashboardCardFive";

function DashboardBox() {
  const [isAddNewTask, setIsAddNewTask] = useState<boolean>();
  function handleAddTask() {
    setIsAddNewTask(true);
  }
  function handleCancel() {
    setIsAddNewTask(false);
  }

  return (
    <section className="grid grid-cols-2 gap-8 px-8">
      <motion.main
        className="flex flex-col "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
      >
        <DashboardCardOne handleAddTask={handleAddTask} />
        <DashboardCardTwo />
      </motion.main>

      <motion.main
        className="flex flex-col"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
      >
        <DashboardCardThree />
        <DashboardCardFour />
        <DashboardCardFive />
      </motion.main>

      {isAddNewTask && <AddNewTaskForm handleCancel={handleCancel} />}
    </section>
  );
}

export default DashboardBox;
