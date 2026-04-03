import { GoPlus } from "react-icons/go";
import { motion } from "motion/react";
import { useState } from "react";

import MyTasksHeader from "../../ui/MyTasksHeader";
import TaskTabs from "./TaskTabs";
import TasksOverview from "./TasksOverview";
import ListsTasksSection from "./ListsTasksSection";
import MyTasksBoardView from "./MyTasksBoardView";

function MyTasksLayout() {
  const [activeTab, setactiveTab] = useState<string>("Overview");

  return (
    <div className="pt-20 pb-10 px-8 max-w-7xl ">
      <div className="flex justify-between items-center">
        <MyTasksHeader
          title={`${activeTab}`}
          description="Monitor all your projects and tasks here"
        />

        <motion.button
          className="flex items-center gap-0.5 px-4 py-2 bg-blue-700 text-white rounded-lg cursor-pointer"
          whileHover={{ y: -1.6, background: "blue" }}
        >
          <GoPlus />
          New Task
        </motion.button>
      </div>

      <TaskTabs active={activeTab} handleActive={setactiveTab} />
      <TasksOverview active={activeTab} />
      <ListsTasksSection active={activeTab} />
      <MyTasksBoardView active={activeTab} />
    </div>
  );
}

export default MyTasksLayout;
