import { motion } from "motion/react";

import OverAllStats from "../../ui/OverAllStats";
import RecentTask from "../../ui/RecentTask";
import ScheduleTask from "../../ui/ScheduleTask";
import TaskLists from "./TaskLists";
import type { ActiveProp } from "../../utilities/type";

function TasksOverview({ active }: ActiveProp) {
  return (
    <>
      {active === "Overview" && (
        <section>
          <div className="grid grid-cols-1 gap-4 pt-8 xl:grid-cols-2">
            <motion.div
              className="flex min-w-0 flex-col gap-4"
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
    </>
  );
}

export default TasksOverview;
