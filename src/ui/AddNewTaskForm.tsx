import { AnimatePresence, motion } from "motion/react";
import { LuAsterisk } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { tasktype } from "../utilities/type";
import useClickOutSide from "../hooks/useClickOutSide";
import { useCreateTask } from "../Features/MyTasks/useCreateTask";
import FormError from "./FormError";
import { useProjects } from "../Features/Project/useProject";
import { useParams } from "react-router-dom";
import { useActiveTasks } from "../hooks/useActiveTasks";
import { useEditTask } from "../Features/MyTasks/useEditTask";
import { RadioGroup, RadioGroupItem } from "#components/ui/radio-group";
import { Label } from "#components/shacnUi/label";
import { useEffect } from "react";

type NewTasksProps = {
  handleCancel: () => void;
  taskToEdit?: Partial<tasktype>;
};

function AddNewTaskForm({ handleCancel, taskToEdit }: NewTasksProps) {
  const { id: isEditId } = taskToEdit || {};
  const isEditSession = isEditId;

  const { register, handleSubmit, clearErrors, formState, reset, control } =
    useForm<tasktype>();

  const { createTask, isPending } = useCreateTask();
  const { editTask, isEditing } = useEditTask();
  const { projects } = useProjects();
  const { currentPage } = useActiveTasks();
  const { projectId } = useParams();
  const { ref } = useClickOutSide(handleCancel);

  useEffect(() => {
    if (taskToEdit) {
      reset(taskToEdit);
    }
  }, [reset, taskToEdit]);

  function onSubmit(data: tasktype) {
    const newTask = { ...data };
    if (isEditSession) {
      editTask(
        { newTaskData: newTask, id: isEditId },
        {
          onSuccess: () => {
            handleCancel();
          },
        },
      );
    } else {
      createTask(
        { ...newTask },
        {
          onSuccess: () => {
            handleCancel();
          },
        },
      );
    }
  }

  function onError() {
    toast.error("Please fill the required field");
  }

  const { errors } = formState;

  const isLoading = isEditing || isPending;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-99 flex items-center justify-center bg-black/20 px-4 py-6 backdrop-blur-xs">
        <motion.div
          className="max-h-[90vh] w-full max-w-2xl overflow-y-auto hide-scrollbar bg-white px-4 py-4 rounded-2xl dark:bg-slate-900 dark:text-slate-400 dark:border dark:border-slate-800 sm:px-6"
          ref={ref}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="flex justify-between items-center border-b border-gray-200 p-2 dark:border-slate-400">
            <h1 className="font-medium">
              {isEditSession ? "Edit Task" : "Create New Task"}
            </h1>
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
            <div className="flex flex-col justify-start items-start pt-3 gap-1.5">
              <label htmlFor="title" className="label">
                Task Name
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input w-full dark:border-slate-600"
                {...register("title", {
                  required: "This field is required",
                })}
              />
              <FormError error={errors.title?.message} clear={clearErrors} />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="Project" className="flex items-start label">
                Project Name <LuAsterisk color="red" size={10} />
              </label>
              <select
                id="project_id"
                className="input w-full dark:border-slate-600 dark:bg-slate-900"
                {...register("project_id")}
              >
                <option value={projectId ?? ""}>
                  {currentPage?.projectName ?? "No Project"}
                </option>
                {projects.map((project) => (
                  <option value={project.id} key={project.id}>
                    {project.projectName}
                  </option>
                ))}
              </select>
            </div>

            <div className=" space-y-1.5">
              <label htmlFor="Assign" className="flex items-start label">
                Assign To <LuAsterisk color="red" size={10} />
              </label>
              <input
                type="text"
                placeholder="Me"
                disabled={true}
                className="input w-full dark:border-slate-600 "
              />
            </div>

            <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="StartDate" className="flex items-start label">
                  Start Date <LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="date"
                  placeholder="04/01/2026"
                  className="input w-full dark:border-slate-600"
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
                <label htmlFor="EndDate" className="flex items-start label">
                  End Date <LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="date"
                  placeholder="04/01/2026"
                  className="input w-full dark:border-slate-600"
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-start">
              <div className="min-w-0">
                <p className="flex items-start text-sm font-medium text-gray-500">
                  Priority <LuAsterisk color="red" size={10} />
                </p>
                <Controller
                  control={control}
                  name="priority"
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <RadioGroup
                      className="flex flex-wrap items-center gap-3 text-gray-500 font-medium pt-1.5"
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      {["High", "Med", "Low"].map((level) => (
                        <Label
                          key={level}
                          className="flex items-center gap-2 dark:text-slate-500"
                        >
                          <RadioGroupItem value={level} id={level} />
                          {level}
                        </Label>
                      ))}
                    </RadioGroup>
                  )}
                />

                <FormError
                  error={errors?.priority?.message}
                  clear={clearErrors}
                />
              </div>

              <div className="min-w-0">
                <p className="text-sm flex justify-start items-start font-medium text-gray-500 ">
                  Status
                </p>
                <Controller
                  control={control}
                  name="status"
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <RadioGroup
                      className="flex  items-center gap-3 text-gray-500 font-medium pt-1.5"
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      {["Todo", "InProgress", "Completed"].map((s) => (
                        <Label
                          key={s}
                          className="flex items-center gap-2 dark:text-slate-500"
                        >
                          <RadioGroupItem value={s} id={s} />
                          {s}
                        </Label>
                      ))}
                    </RadioGroup>
                  )}
                />

                <FormError
                  error={errors?.status?.message}
                  clear={clearErrors}
                />
              </div>
            </div>

            <div className="flex flex-col justify-start items-start space-y-1.5">
              <label htmlFor="description" className="label">
                Description
              </label>
              <textarea
                placeholder="Task Description"
                className="px-4 py-2 h-20 border border-gray-300 outline-0 rounded-sm w-full dark:border-slate-600"
                {...register("description")}
              ></textarea>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-5">
              <button
                type="reset"
                className="bg-transparent border border-gray-200 px-4 py-2 rounded-lg cursor-pointer active:scale-105 dark:border-slate-600 sm:py-1.5"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer sm:py-1.5 ${isLoading && "bg-blue-900"}`}
                disabled={isLoading}
              >
                {isPending ? "Creating..." : !taskToEdit && "Create Task"}
                {isEditing ? "Editing..." : taskToEdit && "Edit Task"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default AddNewTaskForm;
