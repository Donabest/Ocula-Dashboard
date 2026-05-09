import { FaChevronDown } from "react-icons/fa6";
import TimeDiff from "../utilities/TimeDiff";
import type { priorityBg, status, tasktype } from "../utilities/type";
import StatusToggleMenu from "./StatusToggleMenu";

import Assignee from "../assets/person-1.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "./Menu";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteTask } from "../Features/MyTasks/useDeleteTask";

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 dark:bg-red-700",
  Low: "bg-gray-200 dark:bg-slate-700",
  Med: "bg-green-200 dark:bg-emerald-600",
};

const StatusBg: Record<status, string> = {
  Inprogress: "bg-green-300",
  Todo: "bg-gray-200",
  Completed: "bg-blue-300",
};

interface props {
  task: tasktype;
  AssignTo: boolean;
  openMenu: React.Dispatch<React.SetStateAction<number | null>>;
  Open: number | null;
}

function ListTaskCardItem({ task, AssignTo, openMenu, Open }: props) {
  const { deleteTask, isDeleting } = useDeleteTask();

  const [openId, setOpenId] = useState<number | null>();
  const [isDelete, setIsDelete] = useState<boolean>();
  function handleOpenMenu(id: number, e: React.MouseEvent<HTMLSpanElement>) {
    e.stopPropagation();
    openMenu((prevId) => (prevId === id ? null : id));
  }

  function close() {
    openMenu(null);
  }

  function handleDeleteTask(id: number) {
    deleteTask(id, {
      onSuccess: () => {
        setOpenId(null);
      },
    });
  }
  return (
    <div className="relative grid grid-cols-3  gap-3  text-gray-500 pb-2 border-b-2 border-b-gray-200 dark:text-gray-300 dark:border-b-gray-500">
      <div className="flex items-center gap-2 col-span-2 ">
        <FaChevronDown className="cursor-pointer" />
        <span
          className={`${StatusBg[task.status]} p-1.5 rounded-sm cursor-pointer`}
          onMouseDown={(e) => handleOpenMenu(task.id, e)}
        ></span>
        <span>{task.title}</span>
      </div>
      <div className="flex justify-between text-center items-center">
        {AssignTo && (
          <span>
            <img
              src={Assignee}
              alt="Assignee"
              className="w-8 h-8 rounded-full"
            />
          </span>
        )}
        <span
          className={`${AssignTo && "ml-8"} font-poppin text-sm ${priorityBg[task.priority]} px-3 py-1 rounded-lg uppercase`}
        >
          {task.priority}
        </span>
        <div
          className={`relative text-sm gap-2 ${TimeDiff(task.EndDate) === "Today" && "text-red-500 "}`}
        >
          {TimeDiff(task.EndDate)}{" "}
          {AssignTo && (
            <span
              className="absolute -right-4 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setOpenId((prevId) => (prevId === task.id ? null : task.id));
              }}
            >
              <BsThreeDotsVertical color="white" />
            </span>
          )}
          {openId === task.id && (
            <Menu handler={() => setOpenId(null)} onDelete={setIsDelete} />
          )}
        </div>
      </div>

      {Open === task.id && (
        <StatusToggleMenu value={task.status} handler={close} id={task.id} />
      )}
      {isDelete && (
        <ConfirmDelete
          handleDelete={() => handleDeleteTask(task.id)}
          handleClick={() => setIsDelete(false)}
          pending={isDeleting}
        />
      )}
    </div>
  );
}

export default ListTaskCardItem;
