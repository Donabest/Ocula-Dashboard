import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { RiArrowRightLongLine } from "react-icons/ri";
import type { schedule } from "../utilities/type";
import useClickOutSide from "../hooks/useClickOutSide";
import { useCreateSchedule } from "../Features/Calender/useCreateSchedule";

type handlerType = {
  handler: () => void;
};

function AddEvent({ handler }: handlerType) {
  const { register, handleSubmit } = useForm<schedule>();
  const { ref } = useClickOutSide(handler);
  const { createScheduleTask, isScheduling } = useCreateSchedule();

  function onSubmit(data: schedule) {
    createScheduleTask(
      { ...data },
      {
        onSuccess: () => {
          handler();
        },
      },
    );

    console.log(data);
  }
  return (
    <AnimatePresence>
      <motion.div
        className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto hide-scrollbar bg-white/90 backdrop-blur-lg px-4 py-5 rounded-lg border border-gray-300 dark:bg-black/80 dark:border-slate-800"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        ref={ref}
      >
        <div className="flex justify-between items-center ">
          <h3 className="text-[17px] font-raleway font-medium">New event</h3>
          <span className="cursor-pointer" onClick={handler}>
            x
          </span>
        </div>

        <form className="space-y-4.5 pt-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Event title"
            className="w-full px-2 py-1 rounded-xl border border-gray-400 outline-0 dark:border-slate-500"
            {...register("eventTitle", { required: "This field is required" })}
          />
          <div>
            <input
              type="date"
              className="w-full px-2 py-1  rounded-xl border border-gray-400 outline-0 dark:border-slate-500"
              {...register("date", { required: "This field is required" })}
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <input
              type="time"
              className="w-full px-2 py-1 rounded-xl border border-gray-400 outline-0 dark:border-slate-500"
              {...register("startTime", { required: "This field is required" })}
            />
            <span className="hidden text-xl sm:block">
              <RiArrowRightLongLine />
            </span>
            <input
              type="time"
              className="w-full px-2 py-1 rounded-xl border border-gray-400 outline-0 dark:border-slate-500"
              {...register("endTime", { required: "This field is required" })}
            />
          </div>
          <div className="flex flex-col">
            <select
              className="border border-gray-400 px-2 py-1 outline-0 rounded-lg text-gray-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-400"
              {...register("reminder")}
            >
              <option value="none">Reminder None</option>
              <option value="5 min before">5 mins before</option>
              <option value="10 min before">10 mins before</option>
              <option value="30 min before">30 mins before</option>
              <option value="1 hours before">1 hours before</option>
              <option value="1 day before">1 day before</option>
              <option value="2 days before">2 days before</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              placeholder="meeting"
              className="px-2 py-1 rounded-xl border border-gray-400 outline-0 w-full dark:border-slate-500"
              {...register("meet", { required: "This field is required" })}
            />
          </div>
          <div>
            <textarea
              id="description"
              className="w-full px-2 py-1 rounded-xl border border-gray-400 outline-0 dark:border-slate-500"
              placeholder="Description"
              {...register("description", {
                required: "This field is required",
              })}
            ></textarea>
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 cursor-pointer active:scale-101 dark:border-slate-500"
              onClick={handler}
              disabled={isScheduling}
            >
              Cancel
            </button>
            <button
              className="bg-blue-700 text-white rounded-lg px-6 py-2 cursor-pointer active:scale-101"
              disabled={isScheduling}
            >
              {isScheduling ? "scheduling.." : "Save"}
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

export default AddEvent;
