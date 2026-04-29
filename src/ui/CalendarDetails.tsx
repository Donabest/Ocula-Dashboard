import { CiClock2 } from "react-icons/ci";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { LiaAudioDescriptionSolid } from "react-icons/lia";
import { MdCancelPresentation } from "react-icons/md";
import { RxNotionLogo } from "react-icons/rx";
import { SiGooglemeet } from "react-icons/si";
import useClickOutSide from "../hooks/useClickOutSide";
import { AnimatePresence, motion } from "motion/react";
import type { schedule } from "../utilities/type";
import { format } from "date-fns";
import { ReminderCountDown } from "../utilities/TimeDiff";

type props = {
  scheduleDetails: schedule;
  Closehandler: () => void;
};
function CalendarDetails({ scheduleDetails, Closehandler }: props) {
  const { ref } = useClickOutSide(Closehandler);
  const colorCond =
    ReminderCountDown(scheduleDetails) === "overdue"
      ? "text-red-700 bg-red-200"
      : ReminderCountDown(scheduleDetails) === "Upcomming"
        ? "text-blue-900 bg-blue-200"
        : ReminderCountDown(scheduleDetails)?.includes("Ongoing")
          ? "text-emerald-600 bg-emerald-100"
          : "bg-yellow-100 text-yellow-900";

  const status = ReminderCountDown(scheduleDetails)?.includes("Start")
    ? "start"
    : ReminderCountDown(scheduleDetails)?.includes("Ongoing")
      ? "onGoing"
      : ReminderCountDown(scheduleDetails);
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 bg-black/20 font-raleway">
        <motion.div
          className="w-xl mx-auto mt-50"
          ref={ref}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <div className=" bg-cyan-700 text-white/80 p-5 rounded-t-lg">
            <div className="flex justify-between items-center border-b border-b-gray-400 pb-2">
              <div className="flex items-center justify-center gap-1.5 ">
                <span className={`${colorCond} px-4 py-0.5 rounded-lg`}>
                  {status}
                </span>
                <h3 className="text-sm">Task Details</h3>
              </div>
              <span className="cursor-pointer">
                <MdCancelPresentation onClick={Closehandler} />
              </span>
            </div>

            <div className="flex flex-col justify-center items-start pt-6 gap-1">
              <h2 className="text-xl tracking-wide text-white/90">
                {scheduleDetails.Meet} - {scheduleDetails.EventTitle}
              </h2>
              <time className="flex justify-center items-center gap-1.5 text-sm text-white/60 ">
                <CiClock2 />
                <span>
                  {format(scheduleDetails.Date, "dd MMM")} ,{" "}
                  {scheduleDetails.StartTime} - {scheduleDetails.EndTime}
                </span>
              </time>
            </div>
            <div className="flex justify-between items-center pt-3">
              <span className="flex items-center gap-1.5 text-sm bg-white/10 px-3 py-1 border border-white/10 rounded-lg">
                <SiGooglemeet color="red" />
                Join on {scheduleDetails.Meet}
              </span>
              <span className="flex justify-center items-center gap-1.5 text-sm bg-white/10 px-3 py-1 border border-white/10 rounded-lg">
                <IoCheckmarkDoneCircle className="text-emerald-400" />
                {ReminderCountDown(scheduleDetails)}
              </span>
            </div>
          </div>

          <div className="bg-gray-100 p-5 rounded-b-lg ">
            <h1 className="flex items-center gap-1 text-gray-800 text-[10px] tracking-wide bg-black/5 w-fit px-3 py-1 border border-gray-300 font-montserrat rounded-lg uppercase shadow-lg">
              <LiaAudioDescriptionSolid />
              Descriptions
            </h1>

            <p className="text-start text-gray-600/90 py-2 border-b border-b-gray-300  text-sm leading-relaxed">
              {scheduleDetails.Description}
            </p>

            <div className="flex flex-col justify-center items-start gap-1.5 pt-3 ">
              <span className="flex justify-center items-center gap-1.5 bg-gray-200 px-3 rounded-lg shadow-lg">
                <RxNotionLogo /> Notion
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default CalendarDetails;
