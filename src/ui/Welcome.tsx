import { motion } from "motion/react";
import { SiRobotframework } from "react-icons/si";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiEmptyHourglass } from "react-icons/gi";
import { format } from "date-fns";

function Welcome() {
  const Today = format(new Date(), "eeee, do MMMM");
  return (
    <div className="flex flex-col px-7 py-6 gap-3 pt-25">
      <div>
        <span className="font-poppin text-gray-400">{Today}</span>
        <motion.h1
          className="font-inter font-medium  tracking-wide text-[30px] pt-1.5 capitalize dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Good Evening! Don,
        </motion.h1>
        <motion.div
          className="flex items-center gap-8 pt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-white px-4 py-1.5 rounded-full cursor-pointer dark:bg-slate-800 dark:text-white">
              <SiRobotframework className="text-red-400" />
              Ask Ocula
            </div>

            <div className="flex items-center gap-1.5 font-medium bg-white px-4 py-1.5 rounded-full cursor-pointer dark:bg-slate-800 dark:text-white">
              <IoMdCheckmarkCircleOutline className="text-emerald-400" />
              24
              <span className="font-normal text-gray-700 dark:text-gray-200">
                Project completed
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-medium bg-white px-4 py-1.5 rounded-full cursor-pointer dark:bg-slate-800 dark:text-white">
              <GiEmptyHourglass className="text-blue-500" />7
              <span className="font-normal text-gray-700 dark:text-gray-200">
                Projects in progress
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Welcome;
