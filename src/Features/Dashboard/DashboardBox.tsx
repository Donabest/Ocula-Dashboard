import { motion } from "motion/react";

import AddNewTaskForm from "../../ui/AddNewTaskForm";
import { useState } from "react";
import DashboardTaskListCard from "../../ui/DashboardTaskListCard";
import DashboardGoalsCard from "../../ui/DashboardGoalsCard";
import DashboardProjectCard from "../../ui/DashboardProjectCard";
import DashboardCalendarCard from "../../ui/DashboardCalendarCard";
import DashboardReminderCard from "../../ui/DashboardReminderCard";

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
        <DashboardTaskListCard handleAddTask={handleAddTask} />
        <DashboardGoalsCard />
      </motion.main>

      <motion.main
        className="flex flex-col"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
      >
        <DashboardProjectCard />
        <DashboardCalendarCard />
        <DashboardReminderCard />
      </motion.main>

      {isAddNewTask && <AddNewTaskForm handleCancel={handleCancel} />}
    </section>
  );
}

export default DashboardBox;
