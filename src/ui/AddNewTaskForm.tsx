import { AnimatePresence, motion } from "motion/react";
import { LuAsterisk } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { tasktype } from "../utilities/type";
import useClickOutSide from "../hooks/useClickOutSide";
import { useCreateTask } from "../Features/MyTasks/useCreateTask";
import FormError from "./FormError";
import { useProjects } from "../Project/useProject";

type NewTasksProps = {
  handleCancel: () => void;
};

function AddNewTaskForm({ handleCancel }: NewTasksProps) {
  const { register, handleSubmit, clearErrors, formState } =
    useForm<tasktype>();

  const { createTask, isPending } = useCreateTask();
  const { projects } = useProjects();
  const { ref } = useClickOutSide(handleCancel);

  function onSubmit(data: tasktype) {
    const newTask = { ...data };
    createTask(
      { ...newTask },
      {
        onSuccess: () => {
          handleCancel();
        },
      },
    );
  }

  function onError() {
    toast.error("Please fill the required field");
  }

  const { errors } = formState;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-99 bg-black/10 backdrop-blur-xs ">
        <motion.div
          className="max-w-2xl mx-auto mt-20 bg-white px-6 py-4 rounded-2xl dark:bg-slate-900 dark:text-slate-400 dark:border dark:border-slate-800"
          ref={ref}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="flex justify-between items-center border-b border-gray-200 p-2 dark:border-slate-400">
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
                htmlFor="title"
                className="text-sm font-medium text-gray-500 dark:text-slate-500"
              >
                Task Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="px-4 py-2 border border-gray-300 outline-0 rounded-sm dark:border-slate-600"
                {...register("title", {
                  required: "This field is required",
                })}
              />
              <FormError error={errors.title?.message} clear={clearErrors} />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="Project"
                className="flex items-start text-sm font-medium text-gray-500 dark:text-slate-500"
              >
                Project Name <LuAsterisk color="red" size={10} />
              </label>
              <select
                id="project_id"
                className="px-4 py-2 border border-gray-300 outline-0 rounded-sm w-full dark:border-slate-600 dark:bg-slate-900"
                {...register("project_id")}
              >
                <option> No Project</option>
                {projects.map((project) => (
                  <option value={project.id} key={project.id}>
                    {project.projectName}
                  </option>
                ))}
              </select>
            </div>

            <div className=" space-y-1.5">
              <label
                htmlFor="Assign"
                className="flex items-start text-sm font-medium text-gray-500 dark:text-slate-500"
              >
                Assign To <LuAsterisk color="red" size={10} />
              </label>
              <input
                type="text"
                placeholder="Me"
                disabled={true}
                className="px-4 py-2 border border-gray-300 outline-0 rounded-sm w-full dark:border-slate-600 "
              />
            </div>

            <div className="grid grid-cols-2  items-center gap-1.5">
              <div className="space-y-1.5">
                <label
                  htmlFor="StartDate"
                  className="flex items-start text-sm font-medium text-gray-500 dark:text-slate-500"
                >
                  Start Date <LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="date"
                  placeholder="04/01/2026"
                  className="px-4 py-2 border border-gray-300 outline-0 rounded-sm w-full dark:border-slate-600"
                  {...register("StartDate", {
                    required: "This Field is required",
                  })}
                />

                <FormError
                  error={errors?.StartDate?.message}
                  clear={clearErrors}
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="EndDate"
                  className="flex items-start text-sm font-medium text-gray-500 dark:text-slate-500"
                >
                  End Date <LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="date"
                  placeholder="04/01/2026"
                  className="px-4 py-2 border border-gray-300 outline-0 rounded-sm w-full dark:border-slate-600"
                  {...register("EndDate", {
                    required: "This field is reuired",
                  })}
                />

                <FormError
                  error={errors?.EndDate?.message}
                  clear={clearErrors}
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
                    <label
                      key={level}
                      className="flex items-center gap-2 dark:text-slate-500"
                    >
                      <input
                        type="radio"
                        value={level}
                        {...register("priority", {
                          required: "This field is required",
                        })}
                      />
                      {level}
                    </label>
                  ))}
                </div>

                <FormError
                  error={errors?.priority?.message}
                  clear={clearErrors}
                />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 ">Status</p>
                <div className="flex items-center gap-2 text-gray-500 font-medium pt-1.5">
                  {["Todo", "InProgress", "Completed"].map((s) => (
                    <label
                      key={s}
                      className="flex items-center gap-2 dark:text-slate-500"
                    >
                      <input
                        type="radio"
                        value={s}
                        {...register("status", {
                          required: "This field is required",
                        })}
                      />
                      {s}
                    </label>
                  ))}
                </div>

                <FormError
                  error={errors?.status?.message}
                  clear={clearErrors}
                />
              </div>
            </div>

            <div className="flex flex-col  space-y-1.5">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-500 dark:text-slate-500"
              >
                Description
              </label>
              <textarea
                placeholder="Task Description"
                className="px-4 py-2 h-20 border border-gray-300 outline-0 rounded-sm w-full dark:border-slate-600"
                {...register("description")}
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
                disabled={isPending}
              >
                {isPending ? "Creating..." : "Create Task"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default AddNewTaskForm;
