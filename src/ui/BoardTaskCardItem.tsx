import { BsThreeDots } from "react-icons/bs";
import Menu from "./Menu";
import { useState } from "react";
import type { priorityBg, tasktype } from "../utilities/type";

import Assignee from "../assets/person-1.jpg";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteTask } from "../Features/MyTasks/useDeleteTask";

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 text-red-600 dark:bg-red-300 ",
  Low: "bg-gray-200 text-gray-700 dark:bg-slate-500 dark:text-slate-100",
  Med: "bg-green-200 text-emerald-700 dark:bg-emerald-300 dark:text-emerald-800",
};

function BoardTaskCardItem({ task }: { task: tasktype }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [isDelete, setIsDelete] = useState<boolean>();
  const { deleteTask, isDeleting } = useDeleteTask();

  function handleShowMenu(id: number, e: React.MouseEvent<SVGElement>) {
    e.stopPropagation();
    setOpenId((prevId) => (prevId === id ? null : id));
  }

  function close() {
    setOpenId(null);
  }

  function handleDeleteTask(id: number) {
    deleteTask(id, {
      onSuccess: () => {
        setIsDelete(false);
      },
    });
  }

  return (
    <>
      <div className="relative space-y-3 bg-slate-100 px-5 py-4 rounded-lg border border-slate-300 cursor-pointer hover:scale-101 transition dark:bg-slate-700 dark:border-slate-800">
        <div className="flex justify-between">
          <span className={`${priorityBg[task.priority]} px-4 py-1 rounded-lg`}>
            {task.priority}
          </span>
          <span>
            <BsThreeDots
              className="cursor-pointer dark:text-slate-100"
              onMouseDown={(e) => handleShowMenu(task.id, e)}
            />
          </span>
        </div>
        <div className="border-b border-b-gray-300 pb-2 space-y-1 dark:border-b-slate-500">
          <h1 className="font-medium text-[17px] dark:text-slate-100">
            {task.title}
          </h1>
          <p className="font-raleway text-gray-500 truncate text-sm dark:text-slate-300">
            {task.description}
          </p>
        </div>
        <img src={Assignee} alt="Assignee" className="w-8 -8 rounded-full" />
        {openId === task.id && <Menu handler={close} onDelete={setIsDelete} />}
      </div>
      {isDelete && (
        <ConfirmDelete
          handleDelete={() => handleDeleteTask(task.id)}
          handleClick={() => setIsDelete(false)}
          pending={isDeleting}
        />
      )}
    </>
  );
}

export default BoardTaskCardItem;
