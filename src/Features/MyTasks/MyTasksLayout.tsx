import { GoPlus } from "react-icons/go";
import { motion } from "motion/react";
import { useState } from "react";

import TaskTabs from "./TaskTabs";
import TasksOverview from "./TasksOverview";
import ListsTasksSection from "./ListsTasksSection";
import MyTasksBoardView from "./MyTasksBoardView";
import MyTasksCalendar from "./MyTasksCalendar";
import PageHeader from "../../ui/PageHeader";
import AddNewTaskForm from "../../ui/AddNewTaskForm";

function MyTasksLayout() {
  const [activeTab, setactiveTab] = useState<string>("Overview");
  const [isAddNewTask, setIsAddNewTask] = useState<boolean>();

  function handleCancel() {
    setIsAddNewTask(false);
  }

  return (
    <div className="pt-20 pb-10 px-8 max-w-7xl">
      <div className="flex justify-between items-center">
        <PageHeader
          title={`${activeTab}`}
          description="Monitor all your projects and tasks here"
        />

        <motion.button
          className="flex items-center gap-0.5 px-4 py-2 bg-blue-700 text-white rounded-lg cursor-pointer"
          whileHover={{ y: -1.6, background: "blue" }}
          onClick={() => setIsAddNewTask(true)}
        >
          <GoPlus />
          New Task
        </motion.button>
      </div>

      <TaskTabs active={activeTab} handleActive={setactiveTab} />
      <TasksOverview active={activeTab} />
      <ListsTasksSection active={activeTab} />
      <MyTasksBoardView active={activeTab} />
      <MyTasksCalendar active={activeTab} />

      {isAddNewTask && <AddNewTaskForm handleCancel={handleCancel} />}
    </div>
  );
}

export default MyTasksLayout;
