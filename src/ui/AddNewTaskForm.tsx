import { AnimatePresence, motion } from "motion/react";
import { LuAsterisk } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { status } from "../utilities/type";

type NewTasksProps = {
  handleCancel: () => void;
};

type dataType = {
  TaskName: string;
  Priority: string;
  ProjectName: string;
  StartDate: Date;
  EndDate: Date;
  Description: string;
  Status: status;
};

function AddNewTaskForm({ handleCancel }: NewTasksProps) {
  const { register, handleSubmit, formState } = useForm<dataType>();

  function onSubmit(data: dataType) {
    console.log(data);
    toast.success("Task Created Successfully");
    // handleCancel();
  }

  function onError() {
    toast.error("Please fill the required field");
  }

  const { errors } = formState;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-99 bg-black/10 backdrop-blur-xs "
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <div className="max-w-xl mx-auto mt-20 bg-white px-6 py-4 rounded-2xl">
          <div className="flex justify-between items-center border-b border-gray-200 p-2">
            <h1 className="font-medium">Create New Task</h1>
            <p
              className="cursor-pointer active:scale-105"
              onClick={handleCancel}
            >
              <MdOutlineCancel size={20} />
            </p>
          </div>
          <form
            className="space-y-3"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div className="flex flex-col pt-3 gap-1.5">
              <label
                htmlFor="TaskName"
                className="text-sm font-medium text-gray-500"
              >
                Task Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="px-4 py-2 border border-gray-300 outline-0 rounded-sm"
                {...register("TaskName", {
                  required: "This field is required",
                })}
              />
              <p className=" text-red-300 text-sm">
                {errors?.TaskName?.message}
              </p>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="Project"
                className="flex items-start text-sm font-medium text-gray-500"
              >
                Project Name <LuAsterisk color="red" size={10} />
              </label>
              <input
                type="text"
                placeholder="Project Name"
                className="px-4 py-2 border border-gray-300 outline-0 rounded-sm w-full"
                {...register("ProjectName", {
                  required: "This field is required",
                })}
              />
            </div>

            <div className=" space-y-1.5">
              <label
                htmlFor="Assign"
                className="flex items-start text-sm font-medium text-gray-500"
              >
                Assign To <LuAsterisk color="red" size={10} />
              </label>
              <input
                type="text"
                placeholder="Me"
                disabled={true}
                className="px-4 py-2 border border-gray-300 outline-0 rounded-sm w-full "
              />
            </div>

            <div className="grid grid-cols-2  items-center gap-1.5">
              <div className="space-y-1.5">
                <label
                  htmlFor="StartDate"
                  className="flex items-start text-sm font-medium text-gray-500"
                >
                  Start Date <LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="date"
                  placeholder="04/01/2026"
                  className="px-4 py-2 border border-gray-300 outline-0 rounded-sm w-full "
                  {...register("StartDate", {
                    required: "This Field is required",
                  })}
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="EndDate"
                  className="flex items-start text-sm font-medium text-gray-500"
                >
                  End Date <LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="date"
                  placeholder="04/01/2026"
                  className="px-4 py-2 border border-gray-300 outline-0 rounded-sm w-full"
                  {...register("EndDate", {
                    required: "This field is reuired",
                  })}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="flex items-start text-sm font-medium text-gray-500">
                  Priority <LuAsterisk color="red" size={10} />
                </p>
                <div className="flex items-center gap-2 text-gray-500 font-medium pt-1.5">
                  {["High", "Med", "Low"].map((level) => (
                    <label key={level} className="flex items-center gap-2">
                      <input
                        type="radio"
                        value={level}
                        {...register("Priority", {
                          required: "This field is required",
                        })}
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <div className="flex items-center gap-2 text-gray-500 font-medium pt-1.5">
                  {["Todo", "InProgress", "Completed"].map((s) => (
                    <label key={s} className="flex items-center gap-2">
                      <input
                        type="radio"
                        value={s}
                        {...register("Status", {
                          required: "This field is required",
                        })}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col  space-y-1.5">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-500"
              >
                Description
              </label>
              <textarea
                placeholder="Task Description"
                className="px-4 py-2 h-20 border border-gray-300 outline-0 rounded-sm w-full"
                {...register("Description")}
              ></textarea>
            </div>
            <div className="flex justify-between items-center pt-5 ">
              <button
                type="reset"
                className="bg-transparent border border-gray-200 px-4 py-1.5 rounded-lg cursor-pointer active:scale-105"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-1.5 rounded-lg cursor-pointer active:scale-105"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AddNewTaskForm;
