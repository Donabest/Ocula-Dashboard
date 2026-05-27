import PreviewImage from "../assets/dashboardPreview.png";
import AiPreview from "../assets/AiPreview.png";
import SchedulePreview from "../assets/Schedule_Preview.png";
import TaskListPreview from "../assets/TaskListPreview.png";
import { useRef } from "react";
import { motion } from "motion/react";
function LoginDashBoardPreview() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative hidden  flex-col justify-center items-start h-screen space-y-10 pl-20 xl:flex ">
      <div className="space-y-4">
        <h1 className=" font-poppin font-medium text-3xl w-[70%]">
          The Simplest Way to Manage Your WorkSpace.
        </h1>
        <p className="text-gray-400">
          Enter your credentials to access your account
        </p>
      </div>

      <div className="relative mt-8" ref={constraintsRef}>
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-cyan-400 opacity-20 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-purple-500 opacity-20 blur-[120px]" />
        <img
          src={PreviewImage}
          alt="dashboardPreviewImage"
          className=" max-w-lg w-xl rounded-4xl -rotate-3 shadow-xl"
        />

        <motion.div
          className="absolute -top-10 -right-20 preview rotate-[-5deg]"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.3}
          dragSnapToOrigin
          whileDrag={{
            scale: 1.05,
            zIndex: 50,
          }}
        >
          <span className="preview-text">Generate Task with Ai</span>
          <img src={AiPreview} alt="SchedulePreview" className="h-30  w-60" />
        </motion.div>
        <motion.div
          className="absolute -bottom-10 -left-10 preview rotate-6"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.3}
          dragSnapToOrigin
          whileDrag={{
            scale: 1.05,
            zIndex: 50,
          }}
        >
          <p className="preview-text">View All Task</p>
          <img src={TaskListPreview} alt="TaskListPreview" className="h-20" />
        </motion.div>
        <motion.div
          className="absolute -top-10 right-70 preview rotate-7  "
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.3}
          dragSnapToOrigin
          whileDrag={{
            scale: 1.05,
            zIndex: 50,
          }}
        >
          <p className="preview-text">Schedule Task</p>
          <img src={SchedulePreview} alt="TaskListPreview" className="h-20" />
        </motion.div>
      </div>
    </div>
  );
}

export default LoginDashBoardPreview;
