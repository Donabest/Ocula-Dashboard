import { motion } from "motion/react";
import { CiBoxList } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import DashboardTaskListCardItems from "./DashboardTaskListCardItems";
import { useNavigate } from "react-router-dom";
type Prop = {
  handleAddTask: () => void;
};
function DashboardTaskListCard({ handleAddTask }: Prop) {
  const navigate = useNavigate();
  return (
    <div className="border border-dashed border-gray-200/45 bg-gray-200/80 rounded-lg dark:border-slate-700/30 dark:bg-slate-700">
      <motion.div
        className="flex space-y-4 flex-col bg-white p-4 sm:p-6 rounded-lg shadow-xl cursor-pointer dark:bg-slate-800 dark:text-white"
        whileHover={{
          translateX: 8,
          rotate: -1.7,
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
      >
        <div className="flex justify-between ">
          <div className="flex items-center gap-2 font-poppin font-medium">
            <CiBoxList />
            <BiTask className="text-blue-800/80 dark:text-blue-400 " />
            <p>My Task</p>
          </div>

          <div className="flex items-center font-medium gap-3 ">
            <span className="cursor-pointer" onClick={handleAddTask}>
              +
            </span>
            <AiOutlineExpandAlt
              className="cursor-pointer"
              onClick={() => navigate("/MyTasks")}
            />
            <BsThreeDots className="cursor-pointer" />
          </div>
        </div>
        <DashboardTaskListCardItems />
      </motion.div>
    </div>
  );
}

export default DashboardTaskListCard;
