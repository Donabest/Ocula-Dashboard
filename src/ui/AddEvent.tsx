import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { RiArrowRightLongLine } from "react-icons/ri";
import type { schedule } from "../utilities/type";
import useClickOutSide from "../hooks/useClickOutSide";

type handlerType = {
  handler: () => void;
};

function AddEvent({ handler }: handlerType) {
  const { register, handleSubmit } = useForm<schedule>();
  const { ref } = useClickOutSide(handler);
  function onSubmit(data: schedule) {
    console.log(data);
  }
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 mx-auto mt-60 mr-70 bg-white/15 backdrop-blur-lg px-4 py-5 w-90 h-fit rounded-lg border border-gray-300"
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
            className="w-full px-2 py-1 rounded-xl border border-gray-400 outline-0"
            {...register("EventTitle", { required: "This field is required" })}
          />
          <div>
            <input
              type="date"
              className="w-full px-2 py-1  rounded-xl border border-gray-400 outline-0"
              {...register("Date", { required: "This field is required" })}
            />
          </div>
          <div className="flex justify-between items-center">
            <input
              type="time"
              value="12:00"
              className=" px-2 py-1 rounded-xl border border-gray-400 outline-0"
              {...register("StartTime", { required: "This field is required" })}
            />
            <span className="text-xl">
              <RiArrowRightLongLine />
            </span>
            <input
              type="time"
              value="01:00"
              className="px-2 py-1 rounded-xl border border-gray-400 outline-0"
              {...register("EndTime", { required: "This field is required" })}
            />
          </div>
          <div className="flex flex-col">
            <select
              className="border border-gray-400 px-2 py-1 outline-0 rounded-lg text-gray-800"
              {...register("Reminder")}
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
            <textarea
              id="description"
              className="w-full px-2 py-1 rounded-xl border border-gray-400 outline-0"
              placeholder="Description"
              {...register("Description", {
                required: "This field is required",
              })}
            ></textarea>
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 cursor-pointer active:scale-101"
              onClick={handler}
            >
              Cancel
            </button>
            <button className="bg-blue-700 text-white rounded-lg px-6 py-2 cursor-pointer active:scale-101">
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

export default AddEvent;
