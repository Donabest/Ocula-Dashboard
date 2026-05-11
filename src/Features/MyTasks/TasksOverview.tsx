import { motion } from "motion/react";

import OverAllStats from "../../ui/OverAllStats";
import RecentTask from "../../ui/RecentTask";
import ScheduleTask from "../../ui/ScheduleTask";
import TaskLists from "./TaskLists";
import type { ActiveProp, tasktype } from "../../utilities/type";

type Props = ActiveProp & {
  tasks?: tasktype[];
  completedTasks?: tasktype[];
  inProgressTasks?: tasktype[];
};
function TasksOverview({
  active,
  tasks,
  completedTasks,
  inProgressTasks,
}: Props) {
  return (
    <>
      {active === "Overview" && (
        <section>
          <div className="grid grid-cols-2 gap-3 pt-8  ">
            <motion.div
              className="flex flex-col gap-4"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <OverAllStats
                tasks={tasks}
                completedTasks={completedTasks}
                inProgressTasks={inProgressTasks}
              />
              <RecentTask tasks={tasks} />
            </motion.div>
            <ScheduleTask />
          </div>
          <TaskLists tasks={tasks} />
        </section>
      )}
    </>
  );
}

export default TasksOverview;
