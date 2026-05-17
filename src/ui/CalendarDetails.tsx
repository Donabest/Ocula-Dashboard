import { CiClock2 } from "react-icons/ci";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { LiaAudioDescriptionSolid } from "react-icons/lia";
import { MdCancelPresentation } from "react-icons/md";
import { RxNotionLogo } from "react-icons/rx";
import { SiGooglemeet } from "react-icons/si";
import { AnimatePresence, motion } from "motion/react";
import type { schedule } from "../utilities/type";
import { format } from "date-fns";

import useClickOutSide from "../hooks/useClickOutSide";
import { ReminderCountDown } from "../utilities/TimeDiff";
import { useCalendar } from "../Context/useCalender";
import { parseTimeToLocal } from "../utilities/TimeParse";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteScheduleTask } from "../Features/Calender/useDeleteScheduleTask";
import AddEvent from "./AddEvent";

type props = {
  scheduleDetails: schedule | null;
};
function CalendarDetails({ scheduleDetails }: props) {
  const [isDelete, setIsDelete] = useState<boolean>();
  const [editSchedule, setEditSchedule] = useState<number | null>();
  const { isOpen, setIsOpen } = useCalendar();
  const handleClose = () => setIsOpen(false);
  const { ref } = useClickOutSide(handleClose);
  const { deleteScheduleTask, isDeleting } = useDeleteScheduleTask();

  function handleDeleteScheduleTask(id: number) {
    deleteScheduleTask(id, {
      onSuccess: () => {
        setIsDelete(false);
      },
    });
  }
  if (!scheduleDetails) return null;

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
    <>
      {isDelete && (
        <ConfirmDelete
          handleClick={() => setIsDelete(false)}
          handleDelete={() => handleDeleteScheduleTask(scheduleDetails.id)}
          pending={isDeleting}
        />
      )}
      {isOpen && (
        <AnimatePresence>
          <div className="fixed inset-0 z-100 bg-black/20 font-raleway">
            <motion.div
              className="w-xl mx-auto mt-50"
              ref={ref}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <div className=" bg-cyan-700 text-white/80 p-5 rounded-t-lg dark:bg-cyan-900">
                <div className="flex justify-between items-center border-b border-b-gray-400 pb-2">
                  <div className="flex items-center justify-center gap-1.5 ">
                    <span className={`${colorCond} px-4 py-0.5 rounded-lg`}>
                      {status}
                    </span>
                    <h3 className="text-sm">Task Details</h3>
                  </div>
                  <span className="cursor-pointer">
                    <MdCancelPresentation onClick={handleClose} />
                  </span>
                </div>

                <div className="flex flex-col justify-center items-start pt-6 gap-1">
                  <h2 className="text-xl tracking-wide text-white/90">
                    {scheduleDetails.meet} - {scheduleDetails.eventTitle}
                  </h2>
                  <time className="flex justify-center items-center gap-1.5 text-sm text-white/60 ">
                    <CiClock2 />
                    <span>
                      {format(scheduleDetails.date, "dd MMM")} &nbsp;
                      {parseTimeToLocal(scheduleDetails.startTime)} -{" "}
                      {parseTimeToLocal(scheduleDetails.endTime)}
                    </span>
                  </time>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="flex items-center gap-1.5 text-sm bg-white/10 px-3 py-1 border border-white/10 rounded-lg">
                    <SiGooglemeet color="red" />
                    Join on {scheduleDetails.meet}
                  </span>
                  <span className="flex justify-center items-center gap-1.5 text-sm bg-white/10 px-3 py-1 border border-white/10 rounded-lg">
                    <IoCheckmarkDoneCircle className="text-emerald-400" />
                    {ReminderCountDown(scheduleDetails)}
                  </span>
                </div>
              </div>

              <div className="bg-gray-100 p-5 rounded-b-lg dark:bg-slate-200">
                <h1 className="flex items-center gap-1 text-gray-800 text-[10px] tracking-wide bg-black/5 w-fit px-3 py-1 border border-gray-300 font-montserrat rounded-lg uppercase shadow-lg dark:bg-black/10">
                  <LiaAudioDescriptionSolid />
                  Descriptions
                </h1>

                <p className="text-start text-gray-600/90 py-2 border-b border-b-gray-300  text-sm leading-relaxed dark:text-slate-800">
                  {scheduleDetails.description}
                </p>

                <div className="flex justify-between items-center gap-1.5 pt-4 ">
                  <span className="flex justify-center items-center gap-1.5  bg-gray-200 px-3 rounded-lg shadow-lg dark:bg-gray-900 dark:text-sm dark:py-1 dark:text-white">
                    <RxNotionLogo /> Notion
                  </span>

                  <div className="flex gap-2 items-center ">
                    <button
                      type="button"
                      className="border border-gray-600 text-black  text-sm px-3 py-1 rounded-lg shadow-lg cursor-pointer  active:scale-101 "
                      onClick={() => {
                        setEditSchedule(scheduleDetails.id);
                        handleClose();
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="text-white text-sm bg-red-500 px-3 py-1 rounded-lg shadow-lg cursor-pointer dark:bg-red-600  active:scale-101"
                      onClick={() => {
                        setIsOpen(false);
                        setIsDelete(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}

      {editSchedule === scheduleDetails.id && (
        <AddEvent
          handler={() => setEditSchedule(null)}
          scheduleToEdit={scheduleDetails}
        />
      )}
    </>
  );
}

export default CalendarDetails;
