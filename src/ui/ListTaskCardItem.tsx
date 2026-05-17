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
import AddNewTaskForm from "./AddNewTaskForm";

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
  const [isEditing, setIsEditing] = useState<number | null>();

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
    <div className="list-card">
      <div className="flex min-w-0 items-start gap-2 lg:col-span-2 lg:items-center">
        <FaChevronDown className="mt-1 shrink-0 cursor-pointer lg:mt-0" />
        <span
          className={`${StatusBg[task.status]} mt-1 p-1.5 rounded-sm cursor-pointer lg:mt-0`}
          onMouseDown={(e) => handleOpenMenu(task.id, e)}
        ></span>
        <span className="min-w-0 flex-1 wrap-break-word font-medium lg:truncate lg:font-normal">
          {task.title}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 text-center lg:mt-0">
        <div className="flex items-center gap-3 lg:gap-6">
          <span
            className={`font-poppin text-sm ${priorityBg[task.priority]} px-3 py-1 rounded-lg uppercase`}
          >
            {task.priority}
          </span>
          <span
            className={`text-sm ${TimeDiff(task.EndDate) === "Today" && "text-red-500"}`}
          >
            {TimeDiff(task.EndDate)}
          </span>
        </div>
        {AssignTo && (
          <div className="relative flex shrink-0 items-center gap-3">
            <img
              src={Assignee}
              alt="Assignee"
              className="w-8 h-8 rounded-full"
            />
            <span
              className="cursor-pointer text-gray-500 dark:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setOpenId((prevId) => (prevId === task.id ? null : task.id));
              }}
            >
              <BsThreeDotsVertical />
            </span>
            {openId === task.id && (
              <Menu
                handler={() => setOpenId(null)}
                onDelete={setIsDelete}
                setEdit={() => setIsEditing(task.id)}
              />
            )}
            {isEditing === task.id && (
              <AddNewTaskForm
                handleCancel={() => setIsEditing(null)}
                taskToEdit={task}
              />
            )}
          </div>
        )}
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
