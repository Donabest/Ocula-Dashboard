import { AnimatePresence, motion } from "motion/react";
import { useDeleteTask } from "../Features/MyTasks/useDeleteTask";
import useClickOutSide from "../hooks/useClickOutSide";

function ConfirmDelete({
  handleClick,
  id,
}: {
  handleClick: () => void;
  id: number;
}) {
  const { deleteTask, isPending } = useDeleteTask();
  const { ref } = useClickOutSide(handleClick);

  return (
    <AnimatePresence>
      <div
        className={`flex fixed inset-0  items-center justify-center h-screen z-100 bg-black/30 text-black dark:text-gray-300`}
      >
        <motion.div
          className="bg-zinc-100 m-6 p-6 w-[80%] shadow-5xl rounded-lg md:w-[40%] dark:bg-slate-800"
          ref={ref}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <h1 className=" font-normal text-2xl">Are You Sure ?</h1>
          <p className="  text-gray-700 my-6 dark:text-gray-300">
            This task will be deleted permanently.
          </p>

          <div className="flex justify-end text-center items-center space-x-6">
            <button
              className="border border-gray-500 px-5 py-2 rounded-lg cursor-pointer active:scale-101"
              onClick={handleClick}
            >
              Cancel
            </button>
            <button
              className="px-5 py-2 rounded-lg text-white bg-blue-600 cursor-pointer hover:bg-blue-500 active:scale-101"
              onClick={() =>
                deleteTask(id, {
                  onSuccess: () => {
                    handleClick();
                  },
                })
              }
              disabled={isPending && true}
            >
              {isPending ? "deleting..." : "Confirm"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ConfirmDelete;
