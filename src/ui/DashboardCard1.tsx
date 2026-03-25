import { motion } from "motion/react";
import DashboardTaskHeader from "./DashboardTaskHeader";
import DashboardTask from "./DashboardTask";
function DashboardCard1() {
  return (
    <div className="border border-dashed border-gray-200/45 bg-gray-200/80 rounded-lg">
      <motion.div
        className="flex space-y-4 flex-col bg-white p-6 rounded-lg shadow-xl cursor-pointer "
        whileHover={{
          translateX: 20,
          rotate: -1.7,
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
      >
        <DashboardTaskHeader />
        <DashboardTask />
        {/* <div className="flex justify-between"> */}
      </motion.div>
    </div>
  );
}

export default DashboardCard1;
