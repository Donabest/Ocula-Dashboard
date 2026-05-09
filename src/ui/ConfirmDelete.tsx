import { AnimatePresence, motion } from "motion/react";
import useClickOutSide from "../hooks/useClickOutSide";

function ConfirmDelete({
  handleClick,
  handleDelete,
  pending,
}: {
  handleClick: () => void;
  handleDelete: () => void;
  pending: boolean;
}) {
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
          <h1 className="text-start font-normal text-2xl">Are You Sure ?</h1>
          <p className=" text-start text-gray-700 my-6 dark:text-gray-300">
            This task will be deleted permanently.
          </p>

          <div className="flex justify-end text-center items-center space-x-6">
            <button
              type="button"
              className="border border-gray-500 px-5 py-2 rounded-lg cursor-pointer active:scale-101"
              onClick={handleClick}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-5 py-2 rounded-lg text-white bg-blue-600 cursor-pointer hover:bg-blue-500 active:scale-101"
              onClick={handleDelete}
              disabled={pending}
            >
              {pending ? "deleting..." : "Confirm"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ConfirmDelete;
