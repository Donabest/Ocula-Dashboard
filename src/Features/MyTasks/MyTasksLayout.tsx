import { GoPlus } from "react-icons/go";
import { motion } from "motion/react";
import { useState } from "react";

import MyTasksHeader from "../../ui/MyTasksHeader";
import TaskTabs from "./TaskTabs";
import OverAllStats from "../../ui/OverAllStats";
import RecentTask from "../../ui/RecentTask";
import ScheduleTask from "../../ui/ScheduleTask";
import TaskLists from "./TaskLists";

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

      {activeTab === "Overview" && (
        <section>
          <div className="grid grid-cols-2 gap-3 pt-8  ">
            <motion.div
              className="flex flex-col gap-4"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <OverAllStats />
              <RecentTask />
            </motion.div>
            <ScheduleTask />
          </div>
          <TaskLists />
        </section>
      )}
    </div>
  );
}

export default MyTasksLayout;
